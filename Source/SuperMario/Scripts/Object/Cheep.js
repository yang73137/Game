
CheepState = {
    None: 0,
    Live: 1,
    Dead: 2
};


Cheep = ClassFactory.createClass(Enemy, {
    init: function (x, y, faceToRight, iconType) {
        Enemy.init.call(this);

        this.faceToRight = faceToRight;

        this.sprite = new Sprite();
        this.sprite.setBackgroundImage(Const.IMAGE_ENEMIES);
        this.sprite.setRepeat(0);
        this.sprite.setFrameCounter(4);
        this.sprite.setFrameSequence(faceToRight ? [{ x: 32 * 61, y: 32 }, { x: 32 * 60, y: 32 }] : [{ x: 32 * 39, y: 32 }, { x: 32 * 40, y: 32 }]);

        this.sprite.show();
        this.sprite.start();

        this.setPosition(x, y);
        this.setSize(32, 32);

        this.iconType = iconType;

        this.originX = x;
        this.originY = y;

        this.movingUp = true;
        this.setStoppable(false, false, false, false);

        this.state = CheepState.Live;
    },
    update: function () {
        switch (this.state) {
            case CheepState.Live:
                this.onLive();
                break;
            case CheepState.Dead:
                this.onDead();
                break;
        }
    },
    onLive: function () {

        this.setPosition(this.x - (this.faceToRight ? -3 : 3), this.y - (this.movingUp ? 4 : -4));
        
        if (this.y <= 96) {
            this.movingUp = false;
        }
        
        if (!this.movingUp && (this.y >= this.gameUI.height * 3 - this.originY)) {
            this.setPosition(this.originX, this.originY);
            this.movingUp = true;
        }

        this.sprite.moveToNextFrame();
    },
    onDead: function () {
        this.setY(this.y + 4);
        if (this.y > this.gameUI.height) {
            this.state = CheepState.None;
        }
    },
    dead: function () {
        this.setCollidable(false, false, false, false);
        this.sprite.setFrameSequence(this.faceToRight ? [{ x: 32 * 61, y: 448 }] : [{ x: 32 * 39, y: 448 }]);
        this.sprite.moveToFrame(0);
        this.state = CheepState.Dead;
    },
    onCollides: function (gameObject) {
        if (gameObject instanceof FireBall) {
            this.dead(gameObject.x <= this.x + this.width / 2);
        }
    },
    onOffScreen: function () {
        this.sprite.hide();
        this.setCollidable(false, false, false, false);
        this.state = CheepState.None;
    }
});
