GameUI = ClassFactory.createClass(UIBase, {
    init: function () {
        UIBase.init.call(this);

        this.gameObjects = [];
        
    },
    addGameObject: function (gameObject) {
        this.gameObjects.push(gameObject);
    },
    onUpdate: function () {
        for (var i = 0; i < this.gameObjects.length; i++) {
            this.gameObjects.update();
        }
    }
});