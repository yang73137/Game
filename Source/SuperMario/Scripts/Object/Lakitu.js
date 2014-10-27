
LakituState = {
    None: 0,
    Move: 1,
    ThrowSpiny: 2,
    Dead: 3
};

Lakitu = ClassFactory.createClass(Enemy, {
    init: function (x, y) {
        Enemy.init.call(this);

        this.speed = 3;

        this.movingRight = false;
        this.faceToRight = false;
        this.deadCounter = new Counter(40, false, false);
        this.throwCounter = new Counter(5, false, true);

        this.sprite = new Sprite();
        this.sprite.setBackgroundImage(Const.IMAGE_ENEMIES);
        this.sprite.setFrameSequence([{ x: 32 * 26, y: 15}]);
        this.sprite.setRepeat(0);
        this.sprite.setFrameCounter(6);
        this.sprite.setZ(3);
        this.sprite.show();
        this.sprite.start();

        this.setSize(32, 64);
        this.setPosition(x, y);
        
        this.stoppedable = false;

        this.spinys = [new Spiny(), new Spiny(), new Spiny()];

        this.state = LakituState.Move;
        this.active = true;
    },
    addToGameUI: function (gameUI) {
        Enemy.prototype.addToGameUI.call(this, gameUI);
        for (var i = 0; i < this.spinys.length; i++) {
            var spiny = this.spinys[i];
            spiny.addToGameUI(gameUI);
        }
    },
    update: function () {
        switch (this.state) {
            case LakituState.None:
                break;
            case LakituState.Move:
                this.onMove();
                break;
            case LakituState.ThrowSpiny:
                this.onThrowSpiny();
                break;
            case LakituState.Dead:
                this.onDead();
                break;
        }
    },
    changeToMove: function () {
        this.sprite.setFrameSequence([{ x: 32 * 26, y: 15 }]);
        this.setY(this.y - 16);
        this.sprite.moveToFrame(0);
        this.state = LakituState.Move;
    },
    onMove: function () {
        
        if (!this.active) {
            return;
        }

        if (this.x + this.height < Math.abs(this.gameUI.x)) {
            this.speed = 8;
            this.movingRight = true;
        } else if (this.x > Math.abs(this.gameUI.x) + this.gameUI.width) {
            this.speed = 8;
            this.movingRight = false;
        }

        if (this.gameUI.mario.moving) {
            this.speed = this.gameUI.mario.speed + 3;
        }

        this.movingRight ? this.moveRight(this.speed) : this.moveLeft(this.speed);

        if (this.movingRight && this.x >= this.gameUI.mario.x + 130) {
            
            this.movingRight = false;
            this.speed = 3;
            this.throwSpiny();
        } else if (!this.movingRight && this.x <= this.gameUI.mario.x - 130) {
            this.movingRight = true;
            this.speed = 3;
            this.throwSpiny();
        }
    },
    throwSpiny: function () {
        this.sprite.setFrameSequence([{ x: 32 * 27, y: 31 }]);
        this.setY(this.y + 16);
        this.sprite.moveToFrame(0);
        this.state = LakituState.ThrowSpiny;
    },
    onThrowSpiny: function () {
        if (this.throwCounter.countdown()) {
            return;
        }
        if (Math.round(Math.random() * 3) <= 1) {
            for (var i = 0; i < this.spinys.length; i++) {
                var spiny = this.spinys[i];
                if (spiny.state == SpinyState.None) {
                    spiny.birth(this.x, this.y);
                    break;
                }
            }
        }
        this.changeToMove();
    },
    dead: function (faceToRight) {
        this.faceToRight = faceToRight;
        this.sprite.setFrameSequence([{ x: 32 * 26, y: 448 }]);
        this.setCollidable(false, false, false, false);
        this.state = SpinyState.Dead;
        this.sprite.moveToFrame(0);
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
                this.state = LakituState.None;
            } else {
                this.faceToRight ? this.moveRight(2) : this.moveLeft(2);
                this.moveDown(5);
            }
        }
    },
    onCollides: function (gameObject) {
        if (gameObject instanceof FireBall) {
            this.dead(gameObject.x <= this.x + this.width / 2);
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
            gameObject.invincible ? this.dead() : gameObject.hurt();
        }
    },
    onCollidesLeft: function (gameObject) {
        if (gameObject instanceof MarioBors) {
            gameObject.invincible ? this.dead(true) : gameObject.hurt();
        }
    },
    onCollidesRight: function (gameObject) {
        if (gameObject instanceof MarioBors) {
            gameObject.invincible ? this.dead(false) : gameObject.hurt();
        }
    }
});