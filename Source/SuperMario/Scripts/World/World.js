
World = ClassFactory.createClass(Layer, {
    init: function () {
        Layer.init.call(this);

        this.staticObjects = [];
        this.animateObjects = [];

        this.mario = null;
        this.gameUI = null;
        this.scrollable = false;
    },
    scroll: function () {
    },
    build: function () {
    },
    update: function () {
        for (var i = 0; i < this.animateObjects.length; i++) {
            this.animateObjects[i].update();
        }
    },
    addStaticObject: function (gameObject) {
        this.staticObjects.push(gameObject);
    },
    addAnimateObject: function (gameObject) {
        this.animateObjects.push(gameObject);
    },
    restart: function () { },
    addToGameUI: function (gameUI) {
        this.gameUI = gameUI;
        this.mario = gameUI.mario;
        gameUI.world = this;
        gameUI.append(this);
        
        this.build();
    }
});