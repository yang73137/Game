
KoopaTroopaState = {
    None: 0,
    Live: 1,
    Live2: 2,
    Dead: 3
};

KoopaTroopa = ClassFactory.createClass(Enemy, {
    init: function (x, y) {
        Enemy.init.call(this);
        
        this.speed = 1;
        this.moveCounter = new Counter(3, false, true);

        this.sprite = new Sprite();
        this.sprite.setBackgroundImage("../Images/Enemies.png");
        this.sprite.setRepeat(0);
        this.sprite.setFrameCounter(5);
        this.sprite.setFrameSequence([{ x: 32 * 6, y: 16 }, { x: 32 * 7, y: 16 }]);
        this.sprite.show();
        this.sprite.start();

        this.setPosition(x, y);
        this.setSize(32, 48);

        this.movingToRight = false;
        this.moving = true;
        this.state = KoopaTroopaState.Live;
        this.unHurtCounter = new Counter(15);
        this.unHurtCounter.setEnabled(false);
    },
    update: function () {
        switch (this.state) {
            case KoopaTroopaState.Live:
                this.onLive();
                break;
            case KoopaTroopaState.Live2:
                this.onLive2();
                break;
        }
    },
    onLive: function () {

        if (this.x + this.width < Math.abs(this.gameUI.x) || this.x >= (Math.abs(this.gameUI.x) + 512)) {
            return;
        }
        
        if (!this.moveCounter.countdown()) {
            return;
        }
        
        this.freefall();

        this.movingToRight ? this.moveRight(this.speed) : this.moveLeft(this.speed);

        this.sprite.moveToNextFrame();
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
            this.movingToRight ? this.moveRight(this.speed) : this.moveLeft(this.speed);
        }
    },
    changeToLive2: function () {
        this.setY(this.y + 16);
        this.setSize(32, 32);
        this.sprite.setFrameSequence([{ x: 32 * 10, y: 32 }]);
        this.sprite.moveToFrame(0);
        this.state = KoopaTroopaState.Live2;
        this.speed = 5;
        this.moving = false;
    },
    onCollidesUp: function (gameObject) {
        if (gameObject instanceof MarioBors) {
            if (this.state == KoopaTroopaState.Live) {
                this.changeToLive2();
                gameObject.reJump();
            }
            else if (gameObject.jumping && this.state == KoopaTroopaState.Live2) {
                this.moving = !this.moving;
                gameObject.reJump();
                this.movingToRight = gameObject.x <= this.x + this.width / 2;
                if (this.moving) {
                    this.setX(this.movingToRight ? gameObject.x + gameObject.width + 2 : gameObject.x - this.width - 2);
                }
            }
        }
    },
    onCollidesDown: function (gameObject) {
        if (this.state == KoopaTroopaState.Live) {
            if (gameObject instanceof MarioBors) {
                gameObject.invincible ? this.dead() : gameObject.hurt();
            }
        }
    },
    onCollidesLeft: function (gameObject) {
        if (this.state == KoopaTroopaState.Live) {
            if (gameObject instanceof MarioBors) {
                gameObject.invincible ? this.dead() : gameObject.hurt();
            }
        }
        else if (this.state == KoopaTroopaState.Live2) {
            if (gameObject instanceof MarioBors) {
                if (!this.moving) {
                    this.moving = true;
                    this.movingToRight = true;
                    this.setX(gameObject.x + gameObject.width + 2);
                } else {
                    
                        gameObject.invincible ? this.dead() : gameObject.hurt();
                }
            }
            else if (gameObject instanceof Enemy) {
                gameObject.dead();
            }
            if (this.moving && gameObject.stoppable) {
                this.movingToRight = true;
            }
        }
    },
    onCollidesRight: function (gameObject) {
        if (this.state == KoopaTroopaState.Live) {
            if (gameObject instanceof MarioBors) {
                gameObject.invincible ? this.dead() : gameObject.hurt();
            }
        }
        else if (this.state == KoopaTroopaState.Live2) {
            if (gameObject instanceof MarioBors) {
                if (!this.moving) {
                    this.moving = true;
                    this.movingToRight = false;
                    this.setX(gameObject.x - this.width - 2);
                } else {
                    gameObject.invincible ? this.dead() : gameObject.hurt();
                }
            }
            else if (gameObject instanceof Enemy) {
                gameObject.dead();
            }
            if (this.moving && gameObject.stoppable) {
                this.movingToRight = false;
            }
        }
    },
    dead: function() {
        this.state = KoopaTroopaState.None;
        this.sprite.hide();
    }
});