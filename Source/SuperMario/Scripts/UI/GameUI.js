
GameUIState = {
    None: 0,
    Normal: 1,
    MoveToUp: 2,
    MoveToDown: 3
};

GameUI = ClassFactory.createClass(UIBase, {
    init: function () {
        UIBase.init.call(this);

        this.mario = null;
        this.staticObjects = [];
        this.animateObjects = [];

        this.state = GameUIState.Normal;

    },
    addStaticObject: function (gameObject) {
        this.staticObjects.push(gameObject);
    },
    addAnimateObject: function (gameObject) {
        this.animateObjects.push(gameObject);
    },
    onUpdate: function () {
        for (var i = 0; i < this.animateObjects.length; i++) {
            this.animateObjects.update();
        }
    },
    moveToDown: function () {
        this.mario.collidable = false;
        this.state = GameUIState.MoveToDown;
    },
    moveToUp: function () {
        this.mario.collidable = false;
        this.state = GameUIState.MoveToUp;
    },
    update: function() {
        switch (this.state) {
        case GameUIState.Normal:
            this.mario.update();
            for (var i = 0; i < gameUI.animateObjects.length; i++) {
                gameUI.animateObjects[i].update();
            }
            break;
        case GameUIState.MoveToUp:
            this.setPosition(-5120, 0);
            this.mario.setPosition(5232, 304);
            this.mario.collidable = true;
            this.state = GameUIState.Normal;

            break;
        case GameUIState.MoveToDown:
            this.setPosition(-6784, 0);
            this.mario.setPosition(6834, 0);
            this.mario.collidable = true;
            this.state = GameUIState.Normal;

            break;
        }
    }
});