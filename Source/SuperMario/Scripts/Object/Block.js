Block = ClassFactory.createClass(GameObject, {
    init: function (x, y, width, height) {
        GameObject.init.call(this);
        
        this.setPosition(x, y);
        this.setSize(width, height);

        this.sprite = new Sprite();
        this.sprite.setSize(width, height);
        this.sprite.setPosition(x, y);
        //this.sprite.setBackgroundImage("../Images/TileSet_01_01.png");
        this.sprite.show();
    },
    addToGameUI: function (gameUI) {
        gameUI.append(this.sprite);
        gameUI.staticObjects.push(this);
    }
});