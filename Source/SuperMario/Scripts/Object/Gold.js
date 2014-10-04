Gold = ClassFactory.createClass(GameObject, {
    init: function(x, y) {
        GameObject.init.call(this);

        this.setPosition(x, y);
        this.setSize(32, 32);

        this.sprite = new Sprite();
        this.sprite.setSize(32, 32);
        this.sprite.setPosition(x, y);
        this.sprite.setBackgroundImage("../Images/Items.png");
        this.sprite.setFrameSequence([{ x: 0, y: 32 * 7 }, { x: 32, y: 32 * 7 }, { x: 32 * 2, y: 32 * 7 }, { x: 32 * 3, y: 32 * 7 }]);
        this.sprite.setRepeat(0);
        this.sprite.show();

        this.upCounter = new Counter(36, false, true);
        this.enabled = false;

        this.originalX = x;
        this.originalY = y;
    },
    addToGameUI: function(gameUI) {
        gameUI.append(this.sprite);
        gameUI.animateObjects.push(this);
    },
    update: function () {
        if (!this.enabled) {
            return;
        }
        
        if (this.upCounter.countdown()) {
            if (this.upCounter.currentCount >= 16) {
                this.sprite.moveBy(0, -2);
            } else {
                this.sprite.moveBy(0, 2);
            }
            this.sprite.moveToNextFrame();
        } else {
            this.enabled = false;
            this.sprite.hide();
        }
    },
    animate: function () {
        this.setPosition(this.originalX, this.originalY);
        this.sprite.setPosition(this.originalX, this.originalY);
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
    init: function (x, y) {
        GameObject.init.call(this);

        this.setPosition(x, y);
        this.setSize(32, 32);

        this.sprite = new Sprite();
        this.sprite.setSize(32, 32);
        this.sprite.setPosition(x, y);
        this.sprite.setBackgroundImage("../Images/Items.png");
        this.sprite.setFrameSequence([{ x: 0, y: 32 * 6 }, { x: 0, y: 32 * 6 }, { x: 32, y: 32 * 6 }, { x: 32 * 2, y: 32 * 6 }, { x: 32 * 3, y: 32 * 6 }]);
        this.sprite.setRepeat(0);
        this.sprite.setFrameCounter(10);
        this.sprite.show();
        this.sprite.start();

        this.state = GoldState.Live;
    },
    addToGameUI: function (gameUI) {
        gameUI.append(this.sprite);
        gameUI.animateObjects.push(this);
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
        if (gameObject instanceof MarioBors) {
            this.sprite.hide();
            this.state = GoldState.None;
        }
    }
});