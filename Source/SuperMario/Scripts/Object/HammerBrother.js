
HammerBrotherState = {
    None: 0,
    Live: 1,
    Dead: 2
};

HammerBrother = ClassFactory.createClass(Enemy, {
    init: function(x, y) {
        Enemy.init.call(this);

        this.sprite = new Sprite();
        this.sprite = new Sprite();
        this.sprite.setBackgroundImage(Const.IMAGE_ENEMIES);
        this.sprite.setFrameSequence([{ x: 32 * 20, y: 16 }, { x: 32 * 21, y: 16 }, { x: 32 * 22, y: 16 }, { x: 32 * 23, y: 16 }]);
        this.sprite.setFrameCounter(10);
        this.sprite.setRepeat(0);
        this.sprite.show();
        this.sprite.start();

        this.setPosition(x, y);
        this.setSize(32, 48);

        this.state = HammerBrotherState.Live;
        this.hammer = new Hammer();
    },
    addToGameUI: function(gameUI) {
        Enemy.prototype.addToGameUI.call(this, gameUI);
        this.hammer.addToGameUI(gameUI);
    },
    update: function () {
        switch (this.state) {
        case HammerBrotherState.Live:
            this.onLive();
            break;
        case HammerBrotherState.Dead:
            this.onDead();
            break;
        }
    },
    dead: function() {
        this.setCollidable(false, false, false, false);
        this.state = HammerBrotherState.Dead;
    },
    onLive: function() {
        this.sprite.moveToNextFrame();
        this.throwHammer();
    },
    onDead: function () {
        this.moveDown(4);
    },
    throwHammer: function() {
        if (this.hammer.state == HammerState.None) {
            this.hammer.shoot(this.x - 20, this.y - 20);
        }
    },
    onCollides: function (gameObject) {
        if (gameObject instanceof FireBall) {
            this.dead();
        }
    }
});

HammerState = {
    None: 0,
    Live: 1
};

Hammer = ClassFactory.createClass(Enemy, {
    init: function() {
        Enemy.init.call(this);

        this.sprite = new Sprite();
        this.sprite = new Sprite();
        this.sprite.setBackgroundImage(Const.IMAGE_ENEMIES);
        this.sprite.setFrameSequence([{ x: 32 * 24 + 6, y: 0 }, { x: 769, y: 42 }, { x: 808, y: 48 }, { x: 815, y: 8 }]);
        this.sprite.setFrameCounter(3);
        this.sprite.setRepeat(0);

        this.setSize(15, 15);

        this.state = HammerState.None;

        this.upCounter = new Counter(30, false, false);
    },
    update: function () {
        switch (this.state) {
        case HammerState.Live:
            this.onLive();
            break;
        }
    },
    onCollidesUp: function(gameObject) {
        this.onCollidesDown(gameObject);
    },
    dead: function () {
        this.setCollidable(false, false, false, false);
        this.state = HammerState.None;
        this.sprite.hide();
    },
    onLive: function () {
        if (this.y > Const.SCREEN_HEIGHT) {
            this.dead();
            return;
        }
        if (this.upCounter.countdown()) {
            this.setPosition(this.x - this.speed, this.y - 1);
        } else {
            this.setPosition(this.x - this.speed, this.y + 1);
        }
        this.sprite.moveToNextFrame();
    },
    shoot: function (x, y) {
        this.speed = this.speed == 1 ? 1.5 : 1;
        this.setPosition(x, y);
        this.state = HammerBrotherState.Live;
        this.setCollidable(true, true, true, true);
        this.sprite.frameIndex = 0;
        this.sprite.show();
        this.sprite.start();
        this.upCounter.reset();
    }
});