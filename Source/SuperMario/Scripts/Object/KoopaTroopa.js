
KoopaTroopaState = {
    None: 0,
    Live: 1,
    Shell: 2,
    Dead: 3
};

KoopaTroopaType = {
    Normal: 1,
    Fly: 2
};

KoopaTroopaSpriteType = {
    MoveLeft: 1,
    MoveRight: 2,
    DownSide: 3,
    Dead: 4
};

KoopaTroopa = ClassFactory.createClass(Enemy, {
    init: function (x, y, type, movable, clever, iconType) {
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
        this.setSize(32, 48);

        this.faceToRight = false;
        this.moving = true;
        this.state = KoopaTroopaState.Live;
        this.unHurtCounter = new Counter(15);
        this.unHurtCounter.setEnabled(false);

        this.type = type;
        this.movable = movable;
        this.clever = clever;
        this.iconType = iconType;
        this.setSpriteFrames(KoopaTroopaSpriteType.MoveLeft);

        this.movingUp = true;
        this.movingUpMaxLength = this.movable ? 80 : 160;
        this.movingUpLength = 0;
    },
    update: function () {
        switch (this.state) {
        case KoopaTroopaState.Live:
            this.onLive();
            break;
        case KoopaTroopaState.Shell:
            this.onShell();
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

        if (this.type == KoopaTroopaType.Normal) {
            if (!this.moveCounter.countdown()) {
                return;
            }

            this.freefall();

            if (this.movable) {
                this.faceToRight ? this.moveRight(this.speed) : this.moveLeft(this.speed);
            }
        }
        else if (this.type == KoopaTroopaType.Fly) {
            var speed = this.movable ? 3 : 1;
            if (this.movingUp) {
                this.moveUp(speed);
                this.movingUpLength += speed;
                
            } else {
                this.moveDown(speed);
                this.movingUpLength += speed;
            }

            if (this.movingUpLength >= this.movingUpMaxLength) {
                this.movingUp = !this.movingUp;
                this.movingUpLength = 0;
            }
            

                this.faceToRight ? this.moveRight(this.speed) : this.moveLeft(this.speed);

        }

        this.sprite.moveToNextFrame();
        if (!this.onScreen()) {
            this.onOffScreen();
        }
    },
    onShell: function () {
        if (this.x + this.width < Math.abs(this.gameUI.x) || this.x >= (Math.abs(this.gameUI.x) + 512)) {
                this.state = KoopaTroopaState.None;
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
        this.state = KoopaTroopaState.Shell;
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
                if (this.type == KoopaTroopaType.Normal) {
                    this.changeToLive2();
                }
                else if (this.type == KoopaTroopaType.Fly) {
                    gameObject.setY(this.y - gameObject.height - 5);                  
                    this.type = KoopaTroopaType.Normal;
                    this.movable = true;
                    this.setSpriteFrames(this.faceToRight ? KoopaTroopaSpriteType.MoveLeft : KoopaTroopaSpriteType.MoveLeft);
                }
                
                gameObject.reJump();
            }
            else if (gameObject.jumping && this.state == KoopaTroopaState.Shell) {
                this.moving = !this.moving;
                this.faceToRight = gameObject.x <= this.x + this.width / 2;
                if (this.moving) {
                    this.setX(this.faceToRight ? gameObject.x + gameObject.width + 2 : gameObject.x - this.width - 2);
                }
                gameObject.setY(this.y - gameObject.height - 5);
                gameObject.reJump();
            }
        }
        else if (gameObject.stoppable) {
            this.movingUp = !this.movingUp;
            this.movingUpLength = 0;
        }
    },
    onCollidesDown: function (gameObject) {
        if (this.state == KoopaTroopaState.Live) {
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
        if (this.state == KoopaTroopaState.Live) {
            if (gameObject instanceof MarioBors) {
                gameObject.invincible ? this.dead(gameObject.x < this.x + this.width) : gameObject.hurt();
            }
        }
        else if (this.state == KoopaTroopaState.Shell) {
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
            
        }
        if (this.moving && gameObject.stoppable) {
            this.setFaceDirection(true);
        }
    },
    onCollidesRight: function (gameObject) {
        if (this.state == KoopaTroopaState.Live) {
            if (gameObject instanceof MarioBors) {
                gameObject.invincible ? this.dead(gameObject.x < this.x + this.width) : gameObject.hurt();
            }
        }
        else if (this.state == KoopaTroopaState.Shell) {
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
        }
        if (this.moving && gameObject.stoppable) {
            this.setFaceDirection(false);
        }
    },
    dead: function (faceToRight) {
        this.faceToRight = faceToRight;
        this.state = KoopaTroopaState.Dead;
        this.setCollidable(false, false, false, false);
        this.setSpriteFrames(KoopaTroopaSpriteType.Dead);
    },
    setSpriteFrames: function (spriteType) {
        
        if (this.type == KoopaTroopaType.Normal) {
            if (this.iconType == GameObjectIconType.Ground) {
                switch (spriteType) {
                case KoopaTroopaSpriteType.MoveLeft:
                    this.sprite.setFrameSequence([{ x: 32 * 6, y: 16 }, { x: 32 * 7, y: 16 }]);
                    break;
                case KoopaTroopaSpriteType.MoveRight:
                    this.sprite.setFrameSequence([{ x: 32 * 94, y: 16 }, { x: 32 * 93, y: 16 }]);
                    break;
                case KoopaTroopaSpriteType.DownSide:
                    this.sprite.setFrameSequence([{ x: 32 * 10, y: 32 }]);
                    break;
                case KoopaTroopaSpriteType.Dead:
                    this.sprite.setFrameSequence([{ x: 32 * 10, y: 448 }]);
                    break;
                }
            }
            else if (this.iconType == GameObjectIconType.Underground) {
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
            else if (this.iconType == GameObjectIconType.Sky) {
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
        }
        else if (this.type == KoopaTroopaType.Fly) {
            if (this.iconType == GameObjectIconType.Ground) {
                switch (spriteType) {
                    case KoopaTroopaSpriteType.MoveLeft:
                        this.sprite.setFrameSequence([{ x: 32 * 8, y: 16 }, { x: 32 * 9, y: 16 }]);
                        break;
                    case KoopaTroopaSpriteType.MoveRight:
                        this.sprite.setFrameSequence([{ x: 32 * 92, y: 16 }, { x: 32 * 91, y: 16 }]);
                        break;
                    case KoopaTroopaSpriteType.DownSide:
                        this.sprite.setFrameSequence([{ x: 32 * 10, y: 32 }]);
                        break;
                    case KoopaTroopaSpriteType.Dead:
                        this.sprite.setFrameSequence([{ x: 32 * 10, y: 448 }]);
                        break;
                }
            }
            else if (this.iconType == GameObjectIconType.Underground) {
                switch (spriteType) {
                    case KoopaTroopaSpriteType.MoveLeft:
                        this.sprite.setFrameSequence([{ x: 32 * 8, y: 80 }, { x: 32 * 9, y: 80 }]);
                        break;
                    case KoopaTroopaSpriteType.MoveRight:
                        this.sprite.setFrameSequence([{ x: 32 * 92, y: 80 }, { x: 32 * 91, y: 80 }]);
                        break;
                    case KoopaTroopaSpriteType.DownSide:
                        this.sprite.setFrameSequence([{ x: 32 * 10, y: 96 }]);
                        break;
                    case KoopaTroopaSpriteType.Dead:
                        this.sprite.setFrameSequence([{ x: 32 * 10, y: 384 }]);
                        break;
                }
            }
            else if (this.iconType == GameObjectIconType.Sky) {
                switch (spriteType) {
                    case KoopaTroopaSpriteType.MoveLeft:
                        this.sprite.setFrameSequence([{ x: 32 * 8, y: 144 }, { x: 32 * 9, y: 144 }]);
                        break;
                    case KoopaTroopaSpriteType.MoveRight:
                        this.sprite.setFrameSequence([{ x: 32 * 92, y: 144 }, { x: 32 * 91, y: 144 }]);
                        break;
                    case KoopaTroopaSpriteType.DownSide:
                        this.sprite.setFrameSequence([{ x: 32 * 10, y: 160 }]);
                        break;
                    case KoopaTroopaSpriteType.Dead:
                        this.sprite.setFrameSequence([{ x: 32 * 10, y: 320 }]);
                        break;
                }
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