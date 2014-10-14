
KoopaTroopaState = {
    None: 0,
    Live: 1,
    Live2: 2,
    Dead: 3
};

KoopaTroopaType = {
    Green: 1,
    Red: 2
};

KoopaTroopaSpriteType = {
    MoveLeft: 1,
    MoveRight: 2,
    DownSide: 3,
    Dead: 4
};

KoopaTroopaIconType = {
    Green: 1,
    Red: 2,
    Blue: 3
};

KoopaTroopa = ClassFactory.createClass(Enemy, {
    init: function (x, y, type, iconType) {
        Enemy.init.call(this);
        
        this.speed = 1;
        this.moveCounter = new Counter(3, false, true);
        this.deadCounter = new Counter(40, false, false);

        this.sprite = new Sprite();
        this.sprite.setBackgroundImage("../Images/Enemies.png");
        this.sprite.setRepeat(0);
        this.sprite.setFrameCounter(5);
        
        this.sprite.show();
        this.sprite.start();

        this.setPosition(x, y);
        this.setSize(32, 48);

        this.faceToRight = false;
        this.moving = true;
        this.state = KoopaTroopaState.Live;
        this.unHurtCounter = new Counter(15);
        this.unHurtCounter.setEnabled(false);

        this.type = type;
        this.iconType = iconType;
        this.setSpriteFrames(KoopaTroopaSpriteType.MoveLeft);
    },
    update: function () {
        switch (this.state) {
        case KoopaTroopaState.Live:
            this.onLive();
            break;
        case KoopaTroopaState.Live2:
            this.onLive2();
            break;
        case KoopaTroopaState.Dead:
            this.onDead();
            break;
        }
    },
    onLive: function () {

        if (this.waitForScreen()) {
            return;
        }

        if (!this.moveCounter.countdown()) {
            return;
        }
        
        this.freefall();

        this.faceToRight ? this.moveRight(this.speed) : this.moveLeft(this.speed);

        this.sprite.moveToNextFrame();

        if (!this.onScreen()) {
            this.onOffScreen();
        }
    },
    onLive2: function () {
        if (this.x + this.width < Math.abs(this.gameUI.x) || this.x >= (Math.abs(this.gameUI.x) + 512)) {
            if (this.state == KoopaTroopaState.Live) {
                return;
            }
            if (this.state == KoopaTroopaState.Live2) {
                this.state = KoopaTroopaState.None;
                this.sprite.hide();
                return;
            }
        }

        this.freefall();

        if (this.moving) {
            this.faceToRight ? this.moveRight(this.speed) : this.moveLeft(this.speed);
        }
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
                this.state = GoombaState.None;
            } else {
                this.faceToRight ? this.moveRight(2) : this.moveLeft(2);
                this.moveDown(5);
            }
        }
    },
    changeToLive2: function () {
        this.setY(this.y + 16);
        this.setSize(32, 32);
        this.setSpriteFrames(KoopaTroopaSpriteType.DownSide);
        this.state = KoopaTroopaState.Live2;
        this.speed = 5;
        this.moving = false;
    },
    onCollides: function (gameObject) {
        if (gameObject instanceof FireBall) {
            this.dead(gameObject.x <= this.x + this.width / 2);
        }
    },
    onCollidesUp: function (gameObject) {
        if (gameObject instanceof MarioBors) {
            if (gameObject.invincible) {
                this.dead(gameObject.x < this.x + this.width);
                return;
            }
            if (this.state == KoopaTroopaState.Live) {
                this.changeToLive2();
                gameObject.reJump();
            }
            else if (gameObject.jumping && this.state == KoopaTroopaState.Live2) {
                this.moving = !this.moving;
                gameObject.reJump();
                this.faceToRight = gameObject.x <= this.x + this.width / 2;
                if (this.moving) {
                    this.setX(this.faceToRight ? gameObject.x + gameObject.width + 2 : gameObject.x - this.width - 2);
                }
            }
        }
    },
    onCollidesDown: function (gameObject) {
        if (this.state == KoopaTroopaState.Live) {
            if (gameObject instanceof MarioBors) {
                gameObject.invincible ? this.dead(gameObject.x < this.x + this.width) : gameObject.hurt();
            }
            else if (gameObject.stoppable) {
                if (this.type == KoopaTroopaType.Red) {
                    if ((this.x < gameObject.x) || (this.x + this.width > gameObject.x + gameObject.width)) {
                        this.setFaceDirection(!this.faceToRight);
                    }
                }
            }
        }
    },
    onCollidesLeft: function (gameObject) {
        if (this.state == KoopaTroopaState.Live) {
            if (gameObject instanceof MarioBors) {
                gameObject.invincible ? this.dead(gameObject.x < this.x + this.width) : gameObject.hurt();
            }
        }
        else if (this.state == KoopaTroopaState.Live2) {
            if (gameObject instanceof MarioBors) {
                if (!this.moving) {
                    this.moving = true;
                    this.setFaceDirection(true);
                    this.setX(gameObject.x + gameObject.width + 2);
                } else {
                        gameObject.invincible ? this.dead() : gameObject.hurt();
                }
            }
            else if (gameObject instanceof Enemy) {
                gameObject.dead();
            }
            if (this.moving && gameObject.stoppable) {
                this.setFaceDirection(true);
            }
        }
    },
    onCollidesRight: function (gameObject) {
        if (this.state == KoopaTroopaState.Live) {
            if (gameObject instanceof MarioBors) {
                gameObject.invincible ? this.dead(gameObject.x < this.x + this.width) : gameObject.hurt();
            }
        }
        else if (this.state == KoopaTroopaState.Live2) {
            if (gameObject instanceof MarioBors) {
                if (!this.moving) {
                    this.moving = true;
                    this.setFaceDirection(false);
                    this.setX(gameObject.x - this.width - 2);
                } else {
                    gameObject.invincible ? this.dead() : gameObject.hurt();
                }
            }
            else if (gameObject instanceof Enemy) {
                gameObject.dead();
            }
            if (this.moving && gameObject.stoppable) {
                this.setFaceDirection(false);
            }
        }
    },
    dead: function (faceToRight) {
        this.faceToRight = faceToRight;
        this.state = KoopaTroopaState.Dead;
        this.setCollidable(false, false, false, false);
        this.setSpriteFrames(KoopaTroopaSpriteType.Dead);
    },
    setSpriteFrames: function (spriteType) {
        if (this.iconType == KoopaTroopaIconType.Green) {
            switch (spriteType) {
                case KoopaTroopaSpriteType.MoveLeft:
                    this.sprite.setFrameSequence([{ x: 32 * 6, y: 16 }, { x: 32 * 7, y: 16 }]);
                    break;
                case KoopaTroopaSpriteType.MoveRight:
                    this.sprite.setFrameSequence([{ x: 32 * 94, y: 144 }, { x: 32 * 93, y: 144 }] );
                    break;
                case KoopaTroopaSpriteType.DownSide:
                    this.sprite.setFrameSequence([{ x: 32 * 10, y: 32 }]);
                    break;
                case KoopaTroopaSpriteType.Dead:
                    this.sprite.setFrameSequence([{ x: 32 * 10, y: 448 }]);
                    break;
            }
        }
        else if (this.iconType == KoopaTroopaIconType.Red) {
            switch (spriteType) {
                case KoopaTroopaSpriteType.MoveLeft:
                    this.sprite.setFrameSequence([{ x: 32 * 6, y: 144 }, { x: 32 * 7, y: 144 }]);
                    break;
                case KoopaTroopaSpriteType.MoveRight:
                    this.sprite.setFrameSequence([{ x: 32 * 94, y: 144 }, { x: 32 * 93, y: 144 }]);
                    break;
                case KoopaTroopaSpriteType.DownSide:
                    this.sprite.setFrameSequence([{ x: 32 * 10, y: 160 }]);
                    break;
                case KoopaTroopaSpriteType.Dead:
                    this.sprite.setFrameSequence([{ x: 32 * 10, y: 320 }]);
                    break;
            }
        }
        else if (this.iconType == KoopaTroopaIconType.Blue) {
            switch (spriteType) {
                case KoopaTroopaSpriteType.MoveLeft:
                    this.sprite.setFrameSequence([{ x: 32 * 6, y: 80 }, { x: 32 * 7, y: 80 }]);
                    break;
                case KoopaTroopaSpriteType.MoveRight:
                    this.sprite.setFrameSequence([{ x: 32 * 94, y: 80 }, { x: 32 * 93, y: 80 }]);
                    break;
                case KoopaTroopaSpriteType.DownSide:
                    this.sprite.setFrameSequence([{ x: 32 * 10, y: 96 }]);
                    break;
                case KoopaTroopaSpriteType.Dead:
                    this.sprite.setFrameSequence([{ x: 32 * 10, y: 384 }]);
                    break;
            }
        }

        this.sprite.moveToFrame(0);
    },
    setFaceDirection: function (faceToRight) {
        this.faceToRight = faceToRight;
        if (this.state == KoopaTroopaState.Live) {
            this.setSpriteFrames(this.faceToRight ? KoopaTroopaSpriteType.MoveRight : KoopaTroopaSpriteType.MoveLeft);
        }
    },
    onOffScreen: function () {
        this.sprite.hide();
        this.setCollidable(false, false, false, false);
        this.state = KoopaTroopaState.None;
    }
});