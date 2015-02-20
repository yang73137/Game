
SoundManager = {
    enabled: true
};
SoundManager.play = function (src, loop) {
    
    if (!window.addEventListener) {
        return;
    }
    
    if (!this.enabled) {
        return;
    }

    if (!document.getElementById("sound")) {
        return;
    }
    
    

    var index = 0;
    var audio = document.getElementById(src + (++index));

    while (audio) {
        if (!audio.playing) {
            audio.playing = true;
            audio.play();
            return;
        }
        audio = document.getElementById(src + (++index));
    }

    var element = document.createElement("audio");
    element["id"] = src + index;
    element["src"] = src;
    element["autoplay"] = true;
    if (loop) {
        element["loop"] = true;
    }
    element.playing = true;

    element.addEventListener("ended", function () {
        this.playing = false;
    });
    document.getElementById("sound").appendChild(element);
};

SoundManager.setBGM = function (src, loop, callback) {
    
    if (!window.addEventListener) {
        return;
    }

    if (!this.enabled) {
        return;
    }
    
    if (!document.getElementById("sound")) {
        return;
    }

    var audio = document.getElementById("BackgroundMusic");

    if (!audio) {
        var element = document.createElement("audio");
        element["id"] = "BackgroundMusic";
        element["src"] = src;
        element["autoplay"] = true;
        element["loop"] = !!loop;
        element["callback"] = callback;

        element.addEventListener("ended", function () {
            if (this.callback && this.callback.constructor == Function) {
                this.callback();
            }
        });
        document.getElementById("sound").appendChild(element);
    } else {
        audio["src"] = src;
        audio["loop"] = !!loop;
        audio["callback"] = callback;
    }
};
