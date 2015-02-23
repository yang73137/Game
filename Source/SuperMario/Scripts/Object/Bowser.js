
BowserState = {
    None: 0,
    Live: 1,
    Dead: 2
};

Bowser = ClassFactory.createClass(Enemy, {
    init: function(x, y) {
        Enemy.init.call(this);

        this.sprite = new Sprite();
        this.sprite.setBackgroundImage(Const.IMAGE_ENEMIES);
        this.sprite.setFrameSequence([{ x: 1312, y: 0 }, { x: 1376, y: 0 }, { x: 1440, y: 0 }, { x: 1504, y: 0 }]);
        this.sprite.setFrameCounter(20);
        this.sprite.setRepeat(0);
        this.sprite.show();
        this.sprite.start();

        this.setSize(64, 64);
        this.setPosition(x, y);

        this.movingLeft = false;
        this.movingRight = false;
       
        this.jumpping = false;

        this.moveUpCounter = new Counter(50, false, true);
        this.moveUpCounter.setEnabled(false);

        this.stayCounter = new Counter(90, false, true);
        this.fireCounter = new Counter(150, false, true);
        this.fireCounter.setEnabled(false);

        this.fireball = new BowserFire();
        this.state = BowserState.Live;
        
        this.waitingForScreen = false;

        this.health = 5;
    },
    addToGameUI: function (gameUI) {
        Enemy.prototype.addToGameUI.call(this, gameUI);
        gameUI.addAnimateObject(this);
        gameUI.append(this.sprite);

        this.fireball.addToGameUI(gameUI);
    },
    update: function () {
        switch (this.state) {
        case BowserState.None:
            break;
            case BowserState.Live:
                this.onLive();
                break;
            case BowserState.Dead:
                this.onDead();
                break;
        }
        
    },
    onLive: function () {
            if (!this.moveUpCounter.enabled && !this.stayCounter.countdown()) {
                var flag = !!Math.round(Math.random());
                if (flag) {
                    this.moveUpCounter.setEnabled(true);
                    var flag = !!Math.round(Math.random());
                    if (flag) {
                        this.movingLeft = true;
                    } else {
                        var flag = !!Math.round(Math.random());
                        if (flag) {
                            this.movingRight = true;
                        }
                    }
                }
            }


            if (this.moveUpCounter.enabled) {
                if (this.moveUpCounter.countdown()) {
                    this.moveUp(2);
                    if (this.movingLeft && this.x >= 4170) {
                        this.moveLeft(1);
                    } else if (this.movingRight && this.x <= 4350) {
                        this.moveRight(1);
                    }
                } else {
                    this.movingLeft = false;
                    this.movingRight = false;
                    this.moveUpCounter.setEnabled(false);
                }
            } else {
                this.moveDown(2);
            }


        this.sprite.moveToNextFrame();
        if (this.fireball.state == BowserFireState.None && !this.fireCounter.countdown()) {
            var flag = !!Math.round(Math.random());
            if (flag) {
                this.fireball.fire(this.x - 50, this.y + 16);
            }
        }
    },
    onDead: function() {
        this.moveDown(2);
        if (this.y > Const.SCREEN_HEIGHT) {
            this.state = BowserState.None;
        }
    },
    onCollidesUp: function (gameObject) {
        this.onCollidesLeft(gameObject);
    },
    onStay: function() {
    },
    onMove: function () {
        
    },
    onOffScreen: function () {
    },
    dead: function () {
        this.state = BowserState.Dead;
        this.setSize(32, 32);
        this.sprite.setFrameSequence([{ x: 0, y: 320 }]);
        this.sprite.moveToFrame(0);
        this.setCollidable(false, false, false, false);
        SoundManager.play(Const.Sound.Effects.BowserFalls);
    },
    onCollides: function (gameObject) {
        if (gameObject instanceof FireBall) {
            this.health--;
            if (this.health == 0) {
                this.dead(gameObject.x <= this.x + this.width / 2);
            }
        }
    }
});

BowserFireState = {
    None: 0,
    Firing: 1
};


BowserFire = ClassFactory.createClass(Enemy, {
    init: function () {
        Enemy.init.call(this);
        
        this.sprite = new Sprite();
        this.sprite.setBackgroundImage(Const.IMAGE_ENEMIES);
        this.sprite.setFrameSequence([{ x: 1616, y: 0 }, { x: 1616, y: 16 }]);
        this.sprite.setFrameCounter(5);
        this.sprite.setRepeat(0);
        this.sprite.hide();
        
        this.setSize(48, 16);

        this.state = BowserFireState.None;
    },
    addToGameUI: function (gameUI) {
        Enemy.prototype.addToGameUI.call(this, gameUI);
        gameUI.addAnimateObject(this);
        gameUI.append(this.sprite);
    },
    update: function () {
        switch (this.state) {
            case BowserFireState.None:
                break;
            case BowserFireState.Firing:
                this.moveLeft(1);
                this.sprite.moveToNextFrame();
                break;
        }
        
    },
    fire: function (x, y) {
        this.setPosition(x, y);
        this.sprite.show();
        this.sprite.start();
        this.setCollidable(true, true, true, true);
        this.state = BowserFireState.Firing;
        SoundManager.play(Const.Sound.Effects.BowserFire);
    },
    onCollidesUp: function (gameObject) {
        this.onCollidesLeft(gameObject);
    },
    onCollides: function (gameObject) {
        if (gameObject.stoppable) {
            this.sprite.hide();
            this.setCollidable(false, false, false, false);
            this.state = BowserFireState.None;
        }
    },
    moveLeft: function (speed) {
        Enemy.prototype.moveLeft.call(this, speed);
        if (this.x + this.width < Math.abs(this.gameUI.x)) {
            this.sprite.hide();
            this.setCollidable(false, false, false, false);
            this.state = BowserFireState.None;
            
        }
    },
    onOffScreen: function () {
    }
});