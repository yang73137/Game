
FlowerState = {
    None: 0,
    Birth: 1,
    Live: 2
};

Flower = ClassFactory.createClass(GameObject, {
    init: function (x, y) {
        GameObject.init.call(this);

        this.setSize(32, 32);
        this.setPosition(x, y);
        
        this.sprite = new Sprite();
        this.sprite.setSize(32, 32);
        this.sprite.setPosition(x, y);
        this.sprite.setBackgroundImage("../Images/Items.png");
        this.sprite.setFrameSequence([{ x: 0, y: 32 * 2 }, { x: 32, y: 32 * 2 }, { x: 32 * 2, y: 32 * 2 }, { x: 32 * 3, y: 32 * 2 }]);
        this.sprite.setFrameCounter(1);
        this.sprite.setRepeat(0);
        
        this.sprite.hide();
        
        this.upCounter = new Counter(1, true, true);

        this.originalX = x;
        this.originalY = y;

        this.state = FlowerState.None;
    },
    addToGameUI: function (gameUI) {
        this.gameUI = gameUI;
        gameUI.append(this.sprite);
        gameUI.animateObjects.push(this);
    },
    update: function () {
        switch (this.state) {
            case FlowerState.None:
                this.sprite.hide();
                break;
            case FlowerState.Birth:
                this.onBirth();
                break;
            case FlowerState.Live:
                this.sprite.moveToNextFrame();
                break;
        }
        
    },
    animate: function () {
        this.state = FlowerState.Birth;
        this.sprite.start();
    },
    onCollides: function (gameObject) {
        if (gameObject instanceof MarioBors) {
            this.state = FlowerState.None;
            if (gameObject.type == MarioType.Small) {
                gameObject.state = MarioState.ChangingBig;
            } else if (gameObject.type == MarioType.Big) {
                gameObject.changeType(MarioType.Flower);
            }
        }
    },
    onBirth: function () {
        if (this.y > this.originalY - this.height) {
            if (!this.upCounter.countdown()) {
                this.y--;
                this.sprite.setY(this.y);
                this.sprite.moveToNextFrame();
            }
        } else {
            this.state = FlowerState.Live;
        }
    }
});