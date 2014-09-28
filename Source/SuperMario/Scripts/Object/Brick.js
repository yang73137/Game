Brick = ClassFactory.createClass(GameObject, {
    init: function (x, y) {
        GameObject.init.call(this);

        this.setPosition(x, y);
        this.setSize(32, 32);

        this.sprite = new Sprite();
        this.sprite.setSize(32, 32);
        this.sprite.setPosition(x, y);
        this.sprite.setBackgroundImage("../Images/TileSet.png");
        this.sprite.setBackgroundPosition(32, 0);
        this.sprite.show();
        
    },
    onCollidesDown: function(gameObject) {
        this.sprite.hide();
    },
    addToGameUI: function (gameUI) {
        gameUI.append(this.sprite);
        gameUI.gameObjects.push(this);
    }
});