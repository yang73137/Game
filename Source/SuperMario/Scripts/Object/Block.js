Block = ClassFactory.createClass(GameObject, {
    init: function (x, y, width, height) {
        GameObject.init.call(this);
        
        this.stoppable = true;

        this.sprite = new Sprite();
        this.sprite.show();
        
        this.setPosition(x, y);
        this.setSize(width, height);
    },
    addToGameUI: function (gameUI) {
        GameObject.prototype.addToGameUI.call(this, gameUI);
        gameUI.addStaticObject(this);
    },
    attachCollidesUp: function (fun) {
        this.onCollidesUp = fun;
    },
    attachCollidesDown: function (fun) {
        this.onCollidesDown = fun;
    },
    attachCollidesLeft: function (fun) {
        this.onCollidesLeft = fun;
    },
    attachCollidesRight: function (fun) {
        this.onCollidesRight = fun;
    }
});