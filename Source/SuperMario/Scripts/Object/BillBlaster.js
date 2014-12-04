

BillBlaster = ClassFactory.createClass(GameObject, {
    init: function(x, y, gameObjectIconType) {

        GameObject.init.call(this);

        this.sprite = new Sprite();
        this.sprite.setBackgroundImage(Const.IMAGE_TILESET);
        this.sprite.setBackgroundPosition(32 * 9, 0);
        this.sprite.show();

        this.setPosition(x, y);
        this.setSize(32, 64);

        this.shootCounter = new Counter(75, false, true);

        this.setCollidable(true, true, true, true);
        this.setStoppable(true, true, true, true);

        this.bulletBill = new BulletBill();
    },
    update: function() {
        if (this.onScreen() && this.bulletBill.state == BulletBillState.None) {
            if (!this.shootCounter.countdown()) {
                this.bulletBill.shoot(this.x - this.bulletBill.width, this.y);
            }
        }
    },
    addToGameUI: function (gameUI) {
        GameObject.prototype.addToGameUI.call(this, gameUI);
        gameUI.addAnimateObject(this);

        this.bulletBill.addToGameUI(gameUI);
    }
});

BulletBillState = {
    None: 0,
    Live: 1,
    Dead: 2
};

BulletBill = ClassFactory.createClass(Enemy, {
    init: function() {
        Enemy.init.call(this);

        this.sprite = new Sprite();
        this.sprite.setBackgroundImage(Const.IMAGE_ENEMIES);
        this.sprite.setBackgroundPosition(32 * 35, 32);
        this.setSize(32, 32);

        this.stoppedable = false;
        this.movingLeft = true;
        this.state = BulletBillState.None;
    },
    addToGameUI: function(gameUI) {
        GameObject.prototype.addToGameUI.call(this, gameUI);
        gameUI.addAnimateObject(this);
    },
    shoot: function (x, y) {
        this.setPosition(x, y);
        this.sprite.show();
        this.state = BulletBillState.Live;
    },
    update: function () {
        switch (this.state) {
            case BulletBillState.None:
                break;
            case BulletBillState.Live:
                this.onLive();
                break;
            case BulletBillState.Dead:
                this.onDead();
                break;
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
            gameObject.invincible ? this.dead() : gameObject.hurt();
        }
    },
    onCollidesRight: function (gameObject) {
        if (gameObject instanceof MarioBors) {
            gameObject.invincible ? this.dead() : gameObject.hurt();
        }
    },
    dead: function() {
        this.state = BulletBillState.Dead;
    },
    onLive: function () {
        this.movingLeft ? this.moveLeft(2) : this.movingRight(2);
    },
    onDead: function () {
        this.freefall(2);
        if (this.y > Const.SCREEN_HEIGHT) {
            this.sprite.hide();
            this.state = BulletBillState.None;
        }
    },
    onOffScreen: function() {
        this.state = BulletBillState.None;
    }
});