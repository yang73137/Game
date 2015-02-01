
BubbleState = {
    None: 0,
    Act: 1
};

Bubble = ClassFactory.createClass(GameObject, {
    init: function() {
        GameObject.init.call(this);

        this.sprite = new Sprite();
        this.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        this.sprite.setBackgroundPosition(204, 362);
        
        this.sprite.setRepeat(0);
        
        this.sprite.hide();

        this.setCollidable(false, false, false, false);
        this.setStoppable(false);

        this.setSize(9, 9);
        this.moveCounter = new Counter(120, false, true);
        this.state = BubbleState.None;
    },
    update: function () {
        if (this.state == BubbleState.None) {
            return;
        }
        if (this.moveCounter.countdown()) {
            this.setY(this.y - 1);
            if (this.y <= 48) {
                this.sprite.hide();
                this.state = BubbleState.None;
            }
        } else {
            this.sprite.hide();
            this.state = BubbleState.None;
        }
    },
    animate: function(x, y) {
        this.setPosition(x, y);
        this.sprite.show();
        this.state = BubbleState.Act;
    },
    addToGameUI: function(gameUI) {
        GameObject.prototype.addToGameUI.call(this, gameUI);
        gameUI.addAnimateObject(this);
    }
});