Question = ClassFactory.createClass(GameObject, {
    init: function (x, y) {
        GameObject.init.call(this);
        
        this.setPosition(x, y);
        this.setSize(32, 32);

        this.sprite = new Sprite();
        this.sprite.setSize(32, 32);
        this.sprite.setPosition(x, y);
        this.sprite.setBackgroundImage("../Images/TileSet.png");
        this.sprite.setBackgroundPosition(32 * 24, 0);
        this.sprite.setFrameSequence([{ x: 32 * 24, y: 0 }, { x: 32 * 25, y: 0 }, { x: 32 * 26, y: 0 }]);
        this.sprite.frameCounter.setCount(12);
        this.sprite.setRepeat(0);
        this.sprite.show();

        this.sprite.start();
    },
    addToGameUI: function(gameUI) {
        gameUI.append(this.sprite);
        gameUI.gameObjects.push(this);
    },
    update: function () {
        this.sprite.moveToNextFrame();
    },
    onCollidesDown: function (gameObject) {
        this.sprite.setFrameSequence([{ x: 32 * 27, y: 0 }]);
        this.sprite.moveToFrame(0);
    }
});