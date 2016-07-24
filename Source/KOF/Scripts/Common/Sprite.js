
BoxType = {
    None: 0,
    Collide: 1,
    Head: 2,
    Body: 3
};

function Box(boxType, x, y, width, height) {
    this.type = boxType;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

Box.prototype.paint = function (baseX, baseY, context) {
    context.save();
    if (this.type == BoxType.Collide) {
        context.strokeStyle = "rgb(0,240,240)";
    }
    else if (this.type == BoxType.Body) {
        context.strokeStyle = "rgb(240,240,0)";
    }
    else if (this.type == BoxType.Head) {
        context.strokeStyle = "rgb(0,240,0)";
    }
    context.strokeRect(baseX + this.x, baseY + this.y, this.width, this.height);
    context.restore();
};

function SpriteFrame(x, y, width, height, duration, boxes) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.duration = duration;
    this.currentDuration = 0;
    this.boxes = boxes || [];
}

function Sprite(image, frames, cancelble) {
    this.image = image;
    this.frames = frames;
    this.frameIndex = 0;
    this.animating = false;
    this.cancelble == !!cancelble;
}

Sprite.prototype.paint = function (x, y, context) {

    if (this.frameIndex >= this.frames.length) {
        return;
    }

    var frame = this.frames[this.frameIndex];

    // 帧图片
    context.drawImage(this.image, frame.x, frame.y, frame.width, frame.height, x, 400 - frame.height * 2 + y, frame.width * 2, frame.height * 2);

    // 各种框
    for (var i = 0; i < frame.boxes.length; i++) {
        frame.boxes[i].paint(x, y, context);
    }

    if (++frame.currentDuration >= frame.duration) {
        frame.currentDuration = 0;
        this.frameIndex++;
    }
}