Gold = ClassFactory.createClass(GameObject, {
    init: function(x, y) {
        GameObject.init.call(this);

        this.sprite = new Sprite();
        this.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        this.sprite.setFrameSequence([{ x: 0, y: 32 * 7 }, { x: 32, y: 32 * 7 }, { x: 32 * 2, y: 32 * 7 }, { x: 32 * 3, y: 32 * 7 }]);
        this.sprite.setRepeat(0);
        this.sprite.show();

        this.setPosition(x, y);
        this.setSize(32, 32);

        this.upCounter = new Counter(36, false, true);
        this.enabled = false;

        this.originalX = x;
        this.originalY = y;

        this.setCollidable(false, false, false, false);
    },
    addToGameUI: function (gameUI) {
        GameObject.prototype.addToGameUI.call(this, gameUI);
        gameUI.addAnimateObject(this);
    },
    update: function () {
        if (!this.enabled) {
            return;
        }
        
        if (this.upCounter.countdown()) {
            if (this.upCounter.currentCount >= 16) {
                this.moveUp(3);
            } else {
                this.moveDown(2);
            }
            this.sprite.moveToNextFrame();
        } else {
            this.enabled = false;
            this.sprite.hide();
        }
    },
    animate: function () {
        this.setPosition(this.originalX, this.originalY);
        this.enabled = true;
        this.sprite.show();
        this.sprite.start();
    }
});

GoldState = {
    None: 0,
    Live: 1
};


Gold2 = ClassFactory.createClass(GameObject, {
    init: function (x, y, goldType) {
        GameObject.init.call(this);

        this.sprite = new Sprite();
        this.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        this.sprite.setFrameSequence([{ x: 0, y: 32 * 6 }, { x: 0, y: 32 * 6 }, { x: 32, y: 32 * 6 }, { x: 32 * 2, y: 32 * 6 }, { x: 32 * 3, y: 32 * 6 }]);
        this.sprite.setRepeat(0);
        this.sprite.setFrameCounter(10);
        this.sprite.show();
        this.sprite.start();
        
        this.setPosition(x, y);
        this.setSize(32, 32);

        this.state = GoldState.Live;
        this.setCollidable(true, true, true, true);
    },
    addToGameUI: function (gameUI) {
        GameObject.prototype.addToGameUI.call(this, gameUI);
        gameUI.addAnimateObject(this);
    },
    update: function () {
        switch (this.state) {
            case GoldState.None:
                this.sprite.hide();
                break;
            case GoldState.Live:
                this.sprite.moveToNextFrame();
                break;
        }
    },
    onCollides: function (gameObject) {
        if (gameObject instanceof MarioBors ) {
            this.sprite.hide();
            this.state = GoldState.None;
            this.setCollidable(false, false, false, false);
        }
        else if (gameObject instanceof Brick || gameObject instanceof Question) {
            this.sprite.hide();
            this.state = GoldState.None;
            this.setCollidable(false, false, false, false);
            var innerGold = new Gold(this.x, this.y);
            innerGold.addToGameUI(this.gameUI);
            innerGold.animate();
        }
    }
});