
KoopaTroopaState = {
    None: 0,
    Live: 1,
    Live2: 2,
    Dead: 3
};

KoopaTroopa = ClassFactory.createClass(GameObject, {
    init: function (x, y) {
        GameObject.init.call(this);
        
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
    addToGameUI: function (gameUI) {
        GameObject.prototype.addToGameUI.call(this, gameUI);
        gameUI.addAnimateObject(this);
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

        if (this.x + this.width < Math.abs(gameUI.x) || this.x >= (Math.abs(gameUI.x) + 512)) {
            return;
        }
        
        if (!this.moveCounter.countdown()) {
            return;
        }

        this.movingToRight ? this.moveRight() : this.moveLeft();

        this.freefall();

        this.sprite.moveToNextFrame();

        var mario = this.gameUI.mario;
        if (mario.state == MarioState.Live && this.collidesWith(mario)) {
            if (mario.invincible || (mario.y + mario.height < this.y + this.height / 2)) {
                this.changeToLive2();
                if ((mario.y + mario.height < this.y + this.height / 2)) {
                    mario.reJump();
                }
            } else {
                mario.hurt();
            }
        }
    },
    onLive2: function () {
        if (this.x + this.width < Math.abs(gameUI.x) || this.x >= (Math.abs(gameUI.x) + 512)) {
            if (this.state == KoopaTroopaState.Live) {
                return;
            }
            if (this.state == KoopaTroopaState.Live2) {
                this.state = KoopaTroopaState.None;
                this.sprite.hide();
                return;
            }
        }
        if (this.moving) {
            this.movingToRight ? this.moveRight() : this.moveLeft();
        }
        this.freefall();

        var mario = this.gameUI.mario;
        if (mario.state == MarioState.Live && this.collidesWith(mario)) {
            if ((mario.y + mario.height < this.y + this.height / 2)) {
                if ((mario.y + mario.height < this.y + this.height / 2)) {
                    this.moving = !this.moving;
                    this.movingToRight = mario.x <= (this.x + this.width / 2);
                    mario.reJump();
                    if (this.moving) {
                        this.setX(this.movingToRight ? mario.x + mario.width : mario.x - this.width);
                    }
                }
            } else {
                mario.hurt();
            }
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
    onCollidesWith: function (gameObject) {
        if (gameObject instanceof MarioBors) {
            if (this.moving) {
                gameObject.hurt();
            }
        }
    },
    onCollidesLeft: function (gameObject) {
        if (this.state == KoopaTroopaState.Live2) {
            if (gameObject instanceof MarioBors) {
                this.moving = true;
                this.movingToRight = true;
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
        if (this.state == KoopaTroopaState.Live2) {
            if (gameObject instanceof MarioBors) {
                this.moving = true;
                this.movingToRight = false;
            }
            else if (gameObject instanceof Enemy) {
                gameObject.dead();
            }
            if (this.moving && gameObject.stoppable) {
                this.movingToRight = false;
            }
        }
    }
});