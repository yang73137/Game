Sprite = ClassFactory.createClass(Layer, {
    init: function (image, frameWidth, frameHeight, frameSequence) {

        // Layer构造函数
        Layer.init.call(this);

        // 帧图片属性
        this.imageSrc = image.src;
        this.imageWidth = image.width;
        this.imageHeight = image.height;

        // 设置图片
        this.setBackground("url(" + this.imageSrc + ")");

        // 帧属性
        this.frameIndex = -1;
        this.frameCols = 0;
        this.frameRows = 0;
        this.frameSequence = [];

        // 重复计数器，默认值播放1次
        this.repeatCounter = new Counter(1, true, true);

        // 帧计数器，默认每2帧进入下一帧
        this.frameCounter = new Counter(2, true, true);

        // 检验尺寸是否合法
        if (this.imageWidth % frameWidth != 0 || this.imageHeight % frameHeight != 0) {
            throw Error("Image " + this.imageSrc + " (" + this.imageWidth + "*" + this.imageWidth + ") size must be an integral multiple of (" + frameWidth + "*" + frameHeight + ")");
        }

        // 设置帧的宽高
        this.setSize(frameWidth, frameHeight);

        // 计算帧的纵横个数
        this.frameCols = this.imageWidth / frameWidth;
        this.frameRows = this.imageHeight / frameHeight;

        // 帧序列
        if (!frameSequence || frameSequence.constructor != Array) {
            var frameLength = this.frameCols * this.frameRows;
            for (var i = 0; i < frameLength; i++) {
                this.frameSequence[i] = i;
            }
        }
        else {
            this.frameSequence = frameSequence;
        }
    },
    setRepeat: function (repeat) {
        if (repeat <= 0) {
            this.repeatCounter = null;
        }
        else {
            this.repeatCounter = new Counter(repeat - 1, true, true);
        }
    },
    setFrameCounter: function (count) {
        this.frameCounter.setCount(count);
    },
    setFrameSequence: function (sequence) {
        if (!sequence || sequence.constructor != Array) {
            throw Error("sequence must be an array");
        }
        this.frameSequence = sequence;
    },
    restoreFrameSequence: function () {
        this.frameSequence = [];
        var frameLength = this.frameCols * this.frameRows;
        for (var i = 0; i < frameLength; i++) {
            this.frameSequence[i] = i;
        }
    },
    moveToNextFrame: function () {

        if (this.frameCounter.countdown()) {
            return true;
        }

        if (this.frameIndex < 0) {
            return false;
        }

        if (this.frameIndex == this.frameSequence.length) {
            if (!this.repeatCounter) {
                this.frameIndex = 0;
            }
            else {
                if (!this.repeatCounter.countdown()) {
                    this.reset();
                    return false;
                }
                this.frameIndex = 0;
            }
        }

        if (!this.visible) {
            this.setVisible(true);
        }

        this.updateFrame();
        this.frameIndex++;
        return true;
    },
    moveToFrame: function (frameIndex) {
        this.frameIndex = frameIndex;
        this.updateFrame();
    },
    updateFrame: function () {
        var currentFrame = this.frameSequence[this.frameIndex];
        var col = (currentFrame % this.frameCols);
        var row = (currentFrame / this.frameRows) >> 0;

        var left = -col * this.width;
        var top = -row * this.height;

        this.style.backgroundPositionX = isNaN(left) ? 0 : left + "px";
        this.style.backgroundPositionY = isNaN(top) ? 0 : top + "px";
    },
    collidesWith: function (s) {
        if (!s.visible) {
            return false;
        }

        //自身精灵坐标
        var x1 = this.x;
        var y1 = this.y;
        var w1 = this.width;
        var h1 = this.height;

        //目标精灵
        var x2 = s.x;
        var y2 = s.y;
        var w2 = s.width;
        var h2 = s.height;

        return (x1 - x2 < w2 && x2 < x1 + w1) && (y1 - y2 < h2 && y2 < y1 + h1);
    },
    reset: function () {
        this.frameIndex = -1;
        this.setVisible(false);
    },
    start: function () {
        if (this.frameIndex < 0) {
            this.frameIndex = 0;
        }
        this.moveToFrame(0);
    },
});