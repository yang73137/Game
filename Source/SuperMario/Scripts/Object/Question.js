Question = ClassFactory.createClass(GameObject, {
    init: function (x, y, type) {
        GameObject.init.call(this);
        
        this.setPosition(x, y);
        this.setSize(32, 32);

        this.sprite = new Sprite();
        this.sprite.setSize(32, 32);
        this.sprite.setPosition(x, y);
        this.sprite.setBackgroundImage("../Images/TileSet.png");
        this.sprite.setBackgroundPosition(32 * 24, 0);
        this.sprite.setFrameSequence([{ x: 32 * 24, y: 0 }, { x: 32 * 25, y: 0 }, { x: 32 * 26, y: 0 }]);
        this.sprite.frameCounter.setCount(15);
        this.sprite.setRepeat(0);
        this.sprite.show();
        this.sprite.start();

        this.type = type;

        if (type == 1) {
            this.item = new Gold(x, y - 48);
            this.item.sprite.hide();
            this.item.sprite.frameCounter = new Counter(15, false, true);
        }
        else if (type == 2) {
            this.item = new Item(x, y - 32);
            this.item.sprite.hide();
        }

        this.collidesCount = 1; 
        this.delayCounter = new Counter(1, true, true);
    },
    addToGameUI: function (gameUI) {
        if (this.item) {
            this.item.addToGameUI(gameUI);
        }
        gameUI.append(this.sprite);
        gameUI.gameObjects.push(this);
    },
    update: function () {
        if (this.type == 1) {
            if (this.item && this.item.sprite.visible && !this.item.sprite.frameCounter.countdown()) {
                this.item.sprite.setVisible(false);
            }
        }

        this.sprite.moveToNextFrame();
    },
    onCollidesDown: function (gameObject) {
        this.collidesCount--;
        if (this.collidesCount == 0) {
            this.sprite.setFrameSequence([{ x: 32 * 27, y: 0 }]);
            this.sprite.moveToFrame(0);

            this.item.sprite.setVisible(true);
            this.item.sprite.start();
            this.item.enabled = true;
        }
    }
});