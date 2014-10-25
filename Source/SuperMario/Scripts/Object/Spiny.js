
SpinyState = {
    None: 0,
    Ball: 1,
    Move: 2,
    Dead: 3
};

Spiny = ClassFactory.createClass(Enemy, {
    init: function () {
        Enemy.init.call(this);
        
        this.speed = 1;
        this.faceToRight = false;

        this.deadCounter = new Counter(40, false, false);

        this.sprite = new Sprite();
        this.sprite.setBackgroundImage(Const.IMAGE_ENEMIES);
        this.sprite.setRepeat(0);
        this.sprite.setFrameCounter(6);
        this.sprite.setZ(2);
        this.sprite.start();
        this.sprite.hide();

        this.setSize(32, 32);
        this.state = SpinyState.Ball;
        this.setSpriteFrames(SpinyState.Ball);
    },
    birth: function (x, y) {
        this.setPosition(x, y);
        this.state = SpinyState.Ball;
        this.sprite.show();
    },
    addToGameUI: function (gameUI) {
        Enemy.prototype.addToGameUI.call(this, gameUI);
    },
    update: function () {
        switch (this.state) {
        case SpinyState.None:
            break;
        case SpinyState.Ball:
            this.onBall();
            break;
        case SpinyState.Move:
            this.onMove();
            break;
        case SpinyState.Dead:
            this.onDead();
            break;
        }
    },
    setSpriteFrames: function (spinyState) {
       
        if (spinyState == SpinyState.Ball) {
            this.sprite.setFrameSequence([{ x: 32 * 28, y: 160 }, { x: 32 * 29, y: 160 }]);
        } else if (spinyState == SpinyState.Move) {
            if (this.faceToRight) {
                this.sprite.setFrameSequence([{ x: 32 * 70, y: 160 }, { x: 32 * 69, y: 160 }]);
            } else {
                this.sprite.setFrameSequence([{ x: 32 * 30, y: 160 }, { x: 32 * 31, y: 160 }]);
            }
        }
        else if (spinyState == SpinyState.Dead) {
            if (this.faceToRight) {
                this.sprite.setFrameSequence([{ x: 32 * 70, y: 328 }]);
            } else {
                this.sprite.setFrameSequence([{ x: 32 * 30, y: 328 }]);
            }
            this.sprite.moveToFrame(0);
        }
    },
    onBall: function () {
        if (!this.moveDown(5)) {
            this.faceToRight = this.gameUI.mario.x > this.x;
            this.state = SpinyState.Move;
            this.setSpriteFrames(SpinyState.Move);
            this.sprite.moveToFrame(0);
            return;
        }
        this.sprite.moveToNextFrame();
    },
    onMove: function () {

        if (this.waitForScreen()) {
            return;
        }

        this.sprite.moveToNextFrame();
        this.freefall();

        this.faceToRight ? this.moveRight(this.speed) : this.moveLeft(this.speed);
        
        if (!this.onScreen()) {
            this.onOffScreen();
        }
    },
    onOffScreen: function () {
        this.sprite.hide();
        this.setCollidable(false, false, false, false);
        this.state = SpinyState.None;
    },
    onCollides: function (gameObject) {
        if (gameObject instanceof FireBall) {
            this.dead(gameObject.x <= this.x + this.width / 2);
        }
        else if (gameObject instanceof MarioBors) {
            gameObject.invincible ? this.dead(gameObject.x <= this.x + this.width / 2) : gameObject.hurt();
        }
    },
    onCollidesUp: function (gameObject) {
        
    },
    onCollidesLeft: function (gameObject) {
        if (gameObject.stoppable || gameObject instanceof Enemy) {
            this.faceToRight = true;
            this.setSpriteFrames(SpinyState.Move);
        }
    },
    onCollidesRight: function (gameObject) {
        if (gameObject.stoppable || gameObject instanceof Enemy) {
            this.faceToRight = false;
            this.setSpriteFrames(SpinyState.Move);
        }
    },
    dead: function (faceToRight) {
        this.faceToRight = faceToRight;
        this.setSpriteFrames(SpinyState.Dead);
        this.setCollidable(false, false, false, false);
        this.state = SpinyState.Dead;
    },
    onDead: function () {
        if (this.deadCounter.countdown()) {
            if (this.deadCounter.currentCount > 30) {
                this.moveUp(4);
                this.faceToRight ? this.moveRight(2) : this.moveLeft(2);
            }
            else {
                this.faceToRight ? this.moveRight(2) : this.moveLeft(2);
                this.moveDown(5);
            }
        } else {
            if (this.y > this.gameUI.height) {
                this.state = SpinyState.None;
            } else {
                this.faceToRight ? this.moveRight(2) : this.moveLeft(2);
                this.moveDown(5);
            }
        }
    },
});