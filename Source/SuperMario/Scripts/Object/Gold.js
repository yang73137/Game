Gold = ClassFactory.createClass(GameObject, {
    init: function(x, y) {
        GameObject.init.call(this);

        this.setPosition(x, y);
        this.setSize(32, 32);

        this.sprite = new Sprite();
        this.sprite.setSize(32, 32);
        this.sprite.setPosition(x, y);
        this.sprite.setBackgroundImage("../Images/Items.png");
        this.sprite.setBackgroundPosition(0, 32 * 6 + 1);
        this.sprite.show();
    },
    addToGameUI: function(gameUI) {
        gameUI.append(this.sprite);
    }
});