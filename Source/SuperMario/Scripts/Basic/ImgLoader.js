ImageLoader = {
    loaded: 0,
    imgs: {},
    getImg: function (image) {
        return this.imgs[image.substring(image.lastIndexOf("/"))];
    },
    load: function (listener, srcArr) {
        var total = srcArr.length;
        for (var i = 0; i < srcArr.length; i++) {
            var img = new Image();
            img.onload = onload;
            img.onerror = onerror;
            img.index = i;
            img.total = total;
            img.loader = this;
            img.listener = listener;
            img.alias = srcArr[i];
            img.src = srcArr[i];
        }

        function onload() {
            var img = this;
            var loader = img.loader;
            var listener = img.listener;

            // 缓存当前图像尺寸数据
            img.alias = img.alias.substring(img.alias.lastIndexOf("/"));
            loader.imgs[img.alias] = { width: img.width, height: img.height };
            ++loader.loaded;

            // 加载进度回调
            if (typeof listener.process == "function") {
                listener.process(img.alias, loader.loaded, img.total, ImageLoader);
            }

            // 加载完成回调
            if (loader.loaded == img.total && typeof listener.complete == "function") {
                listener.complete(ImageLoader);
            }
        }

        function onerror() {
            var img = this;
            var loader = img.loader;
            if (typeof img.listener.error == "function") {
                img.listener.error(img.alias, loader.imgs.length, img.total, ImageLoader);
            }
        }
    }
};

ScriptLoader = {
    loaded: 0,
    scripts: {},
    load: function(listener, srcArr) {
        for (var i = 0; i < srcArr.length; i++) {
            var script = document.createElement("script");
            script.setAttribute("type", "text/javascript");
            script.setAttribute("src", srcArr[i]);
            (document.body || document.documentElement.body).appendChild(script);
        }
    }
};

SoundLoader = {
    loaded: 0,
    imgs: {},
    load: function (listener, srcArr) {
        var total = srcArr.length;
        for (var i = 0; i < srcArr.length; i++) {
            var audio = document.createElement("audio");
            audio.addEventListener("loadeddata", onload);
            audio.addEventListener("error", onerror);
            audio.index = i;
            audio.total = total;
            audio.loader = this;
            audio.listener = listener;
            audio.alias = srcArr[i];
            audio.src = srcArr[i];
        }

        function onload() {
            var instance = this;
            var loader = instance.loader;
            var listener = instance.listener;

            ++loader.loaded;
            // 加载进度回调
            if (typeof listener.process == "function") {
                listener.process(instance.alias, loader.loaded, instance.total, SoundLoader);
            }

            // 加载完成回调
            if (loader.loaded == instance.total && typeof listener.complete == "function") {
                listener.complete(SoundLoader);
            }
        }

        function onerror() {
            var instance = this;
            var loader = instance.loader;
            if (typeof instance.listener.error == "function") {
                instance.listener.error(instance.alias, loader.imgs.length, instance.total, SoundLoader);
            }
        }
    }
};