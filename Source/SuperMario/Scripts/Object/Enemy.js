EnemyState = {
    None: 0,
    Live: 1,
    Dead: 2,
    Dead2: 3
};

Enemy = ClassFactory.createClass(GameObject, {
    init: function (x, y) {
        GameObject.init.call(this);

        this.speed = 1;
        this.state = EnemyState.Live;
        this.movingToRight = false;
        this.deadCounter = new Counter(40, false, true);
        
        this.sprite = new Sprite();
        this.sprite.setBackgroundImage("../Images/Enemies.png");
        this.sprite.setRepeat(0);
        this.sprite.setFrameCounter(5);
        this.sprite.setFrameSequence([{ x: 0, y: 32 }, { x: 32, y: 32 }]);
        this.sprite.show();
        this.sprite.start();
        
        this.setPosition(x, y);
        this.setSize(32, 32);
    },
    update: function () {
        switch (this.state) {
            case EnemyState.Live:
                this.onLive();
                break;
            case EnemyState.Dead:
                this.onDead();
                break;
        }
    },
    addToGameUI: function (gameUI) {
        GameObject.prototype.addToGameUI.call(this, gameUI);
        gameUI.addAnimateObject(this);
    },
    onLive: function () {

        if (this.x + this.width < Math.abs(gameUI.x) || this.x >= (Math.abs(gameUI.x) + 512)) {
            return;
        }

        this.movingToRight ? this.moveRight() : this.moveLeft();
        
        this.freefall();
        this.sprite.moveToNextFrame();
    },
    onDead: function() {
        if (!this.deadCounter.countdown()) {
            this.sprite.hide();
            this.state = EnemyState.None;
        }
    },
    onDead2: function () {
        
    },
    dead: function () {
        this.y += 16;
        this.setSize(32, 16);
        this.setSize(this.width, 16);
        this.setPosition(this.x, this.y);
        this.sprite.setFrameSequence([{ x: 32 * 2, y: 48 }]);
        this.sprite.moveToFrame(0);
        this.setCollidable(false, false, false, false);
        this.state = EnemyState.Dead;
    },
    onCollidesUp: function(gameObject) {
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
        if (gameObject.stoppable || gameObject instanceof Enemy) {
            this.movingToRight = true;
        }
        if (gameObject instanceof MarioBors) {
            gameObject.invincible ? this.dead() : gameObject.hurt();
        }
    },
    onCollidesRight: function (gameObject) {
        if (gameObject.stoppable || gameObject instanceof Enemy) {
            this.movingToRight = false;
        }
        if (gameObject instanceof MarioBors) {
            gameObject.invincible ? this.dead() : gameObject.hurt();
        }
    }
});