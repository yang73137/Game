GameUI = ClassFactory.createClass(UIBase, {
    init: function () {
        UIBase.init.call(this);

        this.staticObjects = [];
        this.animateObjects = [];
        
    },
    addStaticObjects: function (gameObject) {
        this.animateObjects.push(gameObject);
    },
    addGameObject: function (gameObject) {
        this.animateObjects.push(gameObject);
    },
    onUpdate: function () {
        for (var i = 0; i < this.animateObjects.length; i++) {
            this.animateObjects.update();
        }
    }
});