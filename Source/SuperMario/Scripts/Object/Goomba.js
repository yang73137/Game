GoombaState = {
    None: 0,
    Live: 1,
    Dead: 2,
    Dead2: 3
};

GoombaIconType = {
    Red: 1,
    Blue: 2
};

GoombaSpriteType = {
    MoveLeft: 1,
    MoveRight: 2,
    Dead: 3,
    Dead2: 4
};

Goomba = ClassFactory.createClass(Enemy, {
    init: function (x, y, iconType) {
        Enemy.init.call(this);

        this.speed = 1;
        this.state = GoombaState.Live;
        this.faceToRight = false;
        this.deadCounter = new Counter(40, false, false);

        this.sprite = new Sprite();
        this.sprite.setBackgroundImage(Const.IMAGE_ENEMIES);
        this.sprite.setRepeat(0);
        this.sprite.setFrameCounter(5);

        this.moveLeftSpriteSequence = [];
        this.moveRightSpriteSequence = [];
        this.deadSpriteSequence = [];
        
        this.sprite.show();
        this.sprite.start();

        this.setPosition(x, y);
        this.setSize(32, 32);

        this.iconType = iconType;

        this.setSpriteFrames(GoombaSpriteType.MoveLeft);
    },
    update: function () {
        switch (this.state) {
        case GoombaState.None:
            break;
        case GoombaState.Live:
            this.onLive();
            break;
        case GoombaState.Dead:
            this.onDead();
            break;
        case GoombaState.Dead2:
            this.onDead2();
            break;
        }
    },
    onLive: function () {
        if (this.waitForScreen()) {
            return;
        }

        this.faceToRight ? this.moveRight(this.speed) : this.moveLeft(this.speed);

        this.freefall();
        this.sprite.moveToNextFrame();

        if (!this.onScreen()) {
            this.onOffScreen();
        }
    },
    onDead: function () {
        if (!this.deadCounter.countdown()) {
            this.sprite.hide();
            this.state = GoombaState.None;
        }
    },
    onDead2: function () {
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
                this.state = GoombaState.None;
            } else {
                this.faceToRight ? this.moveRight(2) : this.moveLeft(2);
                this.moveDown(5);
            }
        }
    },
    dead: function () {
        this.state = GoombaState.Dead;
        this.setSize(32, 16);
        this.setY(this.y += 16);
        this.setSpriteFrames(GoombaSpriteType.Dead);
        this.setCollidable(false, false, false, false);
    },
    dead2: function (faceToRight) {
        this.faceToRight = faceToRight;
        this.state = GoombaState.Dead2;
        this.setSpriteFrames(GoombaSpriteType.Dead2);
        this.setCollidable(false, false, false, false);
    },
    onCollides: function (gameObject) {
        if (gameObject instanceof FireBall) {
            this.dead2(gameObject.x <= this.x + this.width / 2);
        }
    },
    onCollidesUp: function (gameObject) {
        if (gameObject instanceof MarioBors) {
            this.dead();
            gameObject.reJump();
        }
    },
    onCollidesDown: function (gameObject) {
        if (gameObject instanceof MarioBors) {
            gameObject.invincible ? this.dead2() : gameObject.hurt();
        }
        else if (gameObject instanceof Brick) {
            if (gameObject.state == BrickState.Up || gameObject.state == BrickState.Break) {
                this.dead2(gameObject.x < this.x + this.width / 2);
            }
        }
        else if (gameObject instanceof Question) {
            if (gameObject.state == QuestionState.Up) {
                this.dead2();
            }
        }
    },
    onCollidesLeft: function (gameObject) {
        if (gameObject.stoppable || gameObject instanceof Enemy) {
            this.faceToRight = true;
        }
        if (gameObject instanceof MarioBors) {
            gameObject.invincible ? this.dead2(true) : gameObject.hurt();
        }
    },
    onCollidesRight: function (gameObject) {
        if (gameObject.stoppable || gameObject instanceof Enemy) {
            this.faceToRight = false;
        }
        if (gameObject instanceof MarioBors) {
            gameObject.invincible ? this.dead2(false) : gameObject.hurt();
        }
    },
    setSpriteFrames: function (spriteType) {
        if (this.iconType == GoombaIconType.Red) {
            switch (spriteType) {
            case GoombaSpriteType.MoveLeft:
                this.sprite.setFrameSequence([{ x: 0, y: 32 }, { x: 32, y: 32 }]);
                break;
            case GoombaSpriteType.MoveRight:
                this.sprite.setFrameSequence([{ x: 0, y: 32 }, { x: 32, y: 32 }]);
                break;
            case GoombaSpriteType.Dead:
                this.sprite.setFrameSequence([{ x: 32 * 2, y: 48 }]);
                break;
            case GoombaSpriteType.Dead2:
                this.sprite.setFrameSequence([{ x: 0, y: 448 }]);
                break;
            }
        }
        else if (this.iconType == GoombaIconType.Blue) {
            switch (spriteType) {
                case GoombaSpriteType.MoveLeft:
                    this.sprite.setFrameSequence([{ x: 0, y: 96 }, { x: 32, y: 96 }]);
                    break;
                case GoombaSpriteType.MoveRight:
                    this.sprite.setFrameSequence([{ x: 0, y: 96 }, { x: 32, y: 96 }]);
                    break;
                case GoombaSpriteType.Dead:
                    this.sprite.setFrameSequence([{ x: 32 * 2, y: 110 }]);
                    break;
                case GoombaSpriteType.Dead2:
                    this.sprite.setFrameSequence([{ x: 0, y: 386 }]);
                    break;
            }
        }
        
        this.sprite.moveToFrame(0);
    },
    onOffScreen: function () {
        this.sprite.hide();
        this.setCollidable(false, false, false, false);
        this.state = GoombaState.None;
    }
});