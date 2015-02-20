
FireBallState = {
    None: 0,
    Firing: 1,
    Bomb: 2
};

FireBall = ClassFactory.createClass(GameObject, {
    init: function () {
        GameObject.init.call(this);
        
        this.sprite = new Sprite();
        this.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        this.sprite.setRepeat(0);
        this.sprite.show();
        this.sprite.start();
        this.sprite.setZ(5);
        this.setSize(16, 16);
        this.sprite.hide();

        this.movingToRight = true;
        this.movingToDown = true;
        this.state = FireBallState.None;
        this.movingUpTime = 0;
        this.bombCounter = new Counter(5, false, true);
    },
    addToGameUI: function (gameUI) {
        GameObject.prototype.addToGameUI.call(this, gameUI);
        gameUI.addAnimateObject(this);
    },
    update: function () {
        
        switch (this.state) {
        case FireBallState.None:
            this.sprite.hide();
            break;
        case FireBallState.Firing:
            this.onFiring();
            break;
        case FireBallState.Bomb:
            this.onBomb();
            break;
        }
    },
    fire: function(x, y, movingToRight) {
        this.setPosition(x, y);
        this.movingToRight = movingToRight;
        this.movingToDown = true;
        this.sprite.setFrameSequence([{ x: 32 * 6, y: 32 * 9 }, { x: 32 * 6 + 16, y: 32 * 9 }, { x: 32 * 6, y: 32 * 9 + 16 }, { x: 32 * 6 + 16, y: 32 * 9 + 16 }]);
        this.state = FireBallState.Firing;
        this.setCollidable(true, true, true, true);
    },
    onFiring: function () {
        for (var i = 0; i < 2; i++) {
            
            if (!this.movingToDown) {
                this.movingUpTime++;
            }
            
            if (this.movingUpTime == 16) {
                this.movingUpTime = 0;
                this.movingToDown = true;
            }
            
            if (this.movingToDown) {
                if (!this.moveDown(3)) {
                    this.movingToDown = false;
                }
            }
            else {
                if (!this.moveUp(3)) {
                    this.movingToDown = true;
                }
            }

            this.movingToRight ? this.moveRight(4) : this.moveLeft(4);
           
            if (!this.onScreen()) {
                this.onOffScreen();
                break;
            }
        }

        this.sprite.moveToNextFrame();
    },
    onBomb: function () {
        if (!this.bombCounter.countdown()) {
            this.setSize(16, 16);
            this.state = FireBallState.None;
        }
    },
    bomb: function () {
        this.setSize(32, 32);
        this.sprite.setFrameSequence([{ x: 32 * 7, y: 32 * 10 }]);
        this.sprite.moveToFrame(0);
        if (this.state != FireBallState.Bomb) {
            SoundManager.play(Const.Sound.Effects.Bump);
            this.state = FireBallState.Bomb;
            this.setCollidable(false, false, false, false);
        }
    },
    onCollides: function (gameObject) {
        if (gameObject instanceof Enemy) {
            this.bomb();
        }
    },
    onCollidesLeft: function (gameObject) {
        if (gameObject.stoppable || gameObject instanceof Enemy) {
            this.bomb();
        }
    },
    onCollidesRight: function (gameObject) {
        if (gameObject.stoppable || gameObject instanceof Enemy) {
            this.bomb();
        }
    },
    onOffScreen: function () {
        this.sprite.hide();
        this.setCollidable(false, false, false, false);
        this.state = FireBallState.None;
    }
});

EnemyFireball = ClassFactory.createClass(GameObject, {
    init: function(x, y, up) {
        this.sprite = new Sprite();
        this.sprite.setBackgroundImage(Const.IMAGE_ENEMIES);
        
        if (up) {
            this.sprite.setBackgroundPosition(32 * 36, 160);
        } else {
            this.sprite.setBackgroundPosition(32 * 36, 320);
        }

        this.sprite.show();

        this.setSize(32, 32);
        this.setPosition(x, y);
    },
    addToGameUI: function (gameUI) {
        gameUI.addAnimateObject(this);
        GameObject.prototype.addToGameUI.call(this, gameUI);
    },
    update: function () {
        if (this.y < 144) {
            this.up = false;
            this.sprite.setBackgroundPosition(32 * 36, 320);
        }
        else if (this.y > 700) {
            this.up = true;
            this.sprite.setBackgroundPosition(32 * 36, 160);
        }

        if (this.up) {
            this.moveUp(6);
        } else {
            this.moveDown(5);
        }
    },
    onCollides: function (gameObject) {
        if (gameObject instanceof MarioBors && !gameObject.invincible) {
            gameObject.hurt();
        }
    }
});