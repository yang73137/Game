Block = ClassFactory.createClass(GameObject, {
    init: function (x, y, width, height, animate) {
        GameObject.init.call(this);
        
        this.stoppable = true;

        this.sprite = new Sprite();
        this.sprite.show();
        
        this.setPosition(x, y);
        this.setSize(width, height);

        this.animate = !!animate;
    },
    addToGameUI: function (gameUI) {
        GameObject.prototype.addToGameUI.call(this, gameUI);
        this.animate ? gameUI.addAnimateObject(this) : gameUI.addStaticObject(this);
    },
    attachCollides: function (fun) {
        this.onCollides = fun;
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
    },
    attachUpdate: function (update) {
        this.update = update;
    }
});