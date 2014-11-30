
BuzzyBeetleState = {
    None: 0,
    Live: 1,
    Shell: 2,
    Dead: 3
};


BuzzyBeetleSpriteType = {
    MoveLeft: 1,
    MoveRight: 2,
    DownSide: 3,
    Dead: 4
};

BuzzyBeetle = ClassFactory.createClass(Enemy, {
    init: function (x, y, iconType) {
        Enemy.init.call(this);

        this.speed = 1;
        this.moveCounter = new Counter(3, false, true);
        this.deadCounter = new Counter(40, false, false);

        this.sprite = new Sprite();
        this.sprite.setBackgroundImage(Const.IMAGE_ENEMIES);
        this.sprite.setRepeat(0);
        this.sprite.setFrameCounter(5);
        this.sprite.setZ(2);
        this.sprite.show();
        this.sprite.start();

        this.setPosition(x, y);
        this.setSize(32, 32);

        this.faceToRight = false;
        this.moving = true;
        this.state = BuzzyBeetleState.Live;
        this.unHurtCounter = new Counter(15);
        this.unHurtCounter.setEnabled(false);

        this.iconType = iconType;
        this.setSpriteFrames(BuzzyBeetleSpriteType.MoveLeft);
    },
    update: function () {
        switch (this.state) {
            case BuzzyBeetleState.Live:
                this.onLive();
                break;
            case BuzzyBeetleState.Shell:
                this.onShell();
                break;
            case BuzzyBeetleState.Dead:
                this.onDead();
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
    onShell: function () {
        if (this.x + this.width < Math.abs(this.gameUI.x) || this.x >= (Math.abs(this.gameUI.x) + 512)) {
            this.state = BuzzyBeetleState.None;
            this.sprite.hide();
            return;
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
                this.state = BuzzyBeetleState.None;
            } else {
                this.faceToRight ? this.moveRight(2) : this.moveLeft(2);
                this.moveDown(5);
            }
        }
    },
    changeToLive2: function () {
        this.setSpriteFrames(BuzzyBeetleSpriteType.DownSide);
        this.state = BuzzyBeetleState.Shell;
        this.speed = 5;
        this.moving = false;
    },
    onCollides: function (gameObject) {
        
    },
    onCollidesUp: function (gameObject) {
        if (gameObject instanceof MarioBors) {
            if (gameObject.invincible) {
                this.dead(gameObject.x < this.x + this.width);
                return;
            }
            if (this.state == BuzzyBeetleState.Live) {
                this.changeToLive2();
                gameObject.reJump();
            }
            else if (gameObject.jumping && this.state == BuzzyBeetleState.Shell) {
                this.moving = !this.moving;
                this.faceToRight = gameObject.x <= this.x + this.width / 2;
                if (this.moving) {
                    this.setX(this.faceToRight ? gameObject.x + gameObject.width + 2 : gameObject.x - this.width - 2);
                }
                gameObject.setY(this.y - gameObject.height - 5);
                gameObject.reJump();
            }
        }
    },
    onCollidesDown: function (gameObject) {
        if (this.state == BuzzyBeetleState.Live) {
            if (gameObject instanceof MarioBors) {
                gameObject.invincible ? this.dead(gameObject.x < this.x + this.width) : gameObject.hurt();
            }
            else if (gameObject.stoppable) {
                if (gameObject instanceof Brick) {
                    if (gameObject.state == BrickState.Up || gameObject.state == BrickState.Break) {
                        this.dead();
                    }
                }
                else if (gameObject instanceof Question) {
                    if (gameObject.state == QuestionState.Up) {
                        this.dead();
                    }
                } else {
                    if (this.clever) {
                        if ((this.x < gameObject.x) || (this.x + this.width > gameObject.x + gameObject.width)) {
                            this.setFaceDirection(!this.faceToRight);
                        }
                    }
                    this.movingUp = !this.movingUp;
                    this.movingUpLength = 0;
                }
            }
        }
    },
    onCollidesLeft: function (gameObject) {
        if (this.state == BuzzyBeetleState.Live) {
            if (gameObject instanceof MarioBors) {
                gameObject.invincible ? this.dead(gameObject.x < this.x + this.width) : gameObject.hurt();
            }
        }
        else if (this.state == BuzzyBeetleState.Shell) {
            if (gameObject instanceof MarioBors) {
                if (!this.moving) {
                    this.moving = true;
                    this.setFaceDirection(true);
                    this.setX(gameObject.x + gameObject.width + 2);
                } else {
                    gameObject.invincible ? this.dead() : gameObject.hurt();
                }
            }
            else if (gameObject instanceof Enemy && this.moving) {
                gameObject.dead();
            }

        }
        if (this.moving && gameObject.stoppable) {
            this.setFaceDirection(true);
        }
    },
    onCollidesRight: function (gameObject) {
        if (this.state == BuzzyBeetleState.Live) {
            if (gameObject instanceof MarioBors) {
                gameObject.invincible ? this.dead(gameObject.x < this.x + this.width) : gameObject.hurt();
            }
        }
        else if (this.state == BuzzyBeetleState.Shell) {
            if (gameObject instanceof MarioBors) {
                if (!this.moving) {
                    this.moving = true;
                    this.setFaceDirection(false);
                    this.setX(gameObject.x - this.width - 2);
                } else {
                    gameObject.invincible ? this.dead() : gameObject.hurt();
                }
            }
            else if (gameObject instanceof Enemy && this.moving) {
                gameObject.dead();
            }
        }
        if (this.moving && gameObject.stoppable) {
            this.setFaceDirection(false);
        }
    },
    dead: function (faceToRight) {
        this.faceToRight = faceToRight;
        this.state = BuzzyBeetleState.Dead;
        this.setCollidable(false, false, false, false);
        this.setSpriteFrames(BuzzyBeetleSpriteType.Dead);
    },
    setSpriteFrames: function(spriteType) {
        if (this.iconType == GameObjectIconType.Ground) {
            switch (spriteType) {
            case BuzzyBeetleSpriteType.MoveLeft:
                this.sprite.setFrameSequence([{ x: 32 * 32, y: 32 }, { x: 32 * 33, y: 32 }]);
                break;
            case BuzzyBeetleSpriteType.MoveRight:
                this.sprite.setFrameSequence([{ x: 32 * 68, y: 32 }, { x: 32 * 67, y: 32 }]);
                break;
            case BuzzyBeetleSpriteType.DownSide:
                this.sprite.setFrameSequence([{ x: 32 * 34, y: 32 }]);
                break;
            case BuzzyBeetleSpriteType.Dead:
                this.sprite.setFrameSequence([{ x: 32 * 34, y: 448 }]);
                break;
            }
        } else if (this.iconType == GameObjectIconType.Underground) {
            switch (spriteType) {
                case BuzzyBeetleSpriteType.MoveLeft:
                    this.sprite.setFrameSequence([{ x: 32 * 32, y: 96 }, { x: 32 * 33, y: 96 }]);
                    break;
                case BuzzyBeetleSpriteType.MoveRight:
                    this.sprite.setFrameSequence([{ x: 32 * 68, y: 96 }, { x: 32 * 67, y: 96 }]);
                    break;
                case BuzzyBeetleSpriteType.DownSide:
                    this.sprite.setFrameSequence([{ x: 32 * 34, y: 96 }]);
                    break;
                case BuzzyBeetleSpriteType.Dead:
                    this.sprite.setFrameSequence([{ x: 32 * 34, y: 384 }]);
                    break;
            }
        } else if (this.iconType == GameObjectIconType.Sky) {

        }

        this.sprite.moveToFrame(0);
    },
    setFaceDirection: function (faceToRight) {
        this.faceToRight = faceToRight;
        if (this.state == KoopaTroopaState.Live) {
            this.setSpriteFrames(this.faceToRight ? BuzzyBeetleSpriteType.MoveRight : BuzzyBeetleSpriteType.MoveLeft);
        }
    },
    onOffScreen: function () {
        this.sprite.hide();
        this.setCollidable(false, false, false, false);
        this.state = BuzzyBeetleState.None;
    }
});