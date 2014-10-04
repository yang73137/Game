
GameUIState = {
    None: 0,
    Normal: 1,
    MoveToUp: 2,
    MoveToDown: 3
};

GameUI = ClassFactory.createClass(UIBase, {
    init: function () {
        UIBase.init.call(this);

        this.staticObjects = [];
        this.animateObjects = [];

        this.state = GameUIState.Normal;
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
    },
    moveToDown: function () {
        mario.collideble = false;
        this.state = GameUIState.MoveToDown;
    },
    moveToUp: function () {
        mario.collideble = false;
        this.state = GameUIState.MoveToUp;
    },
    update: function() {
        switch (this.state) {
        case GameUIState.Normal:
            mario.update();
            for (var i = 0; i < gameUI.animateObjects.length; i++) {
                gameUI.animateObjects[i].update();
            }
            break;
        case GameUIState.MoveToUp:
            this.setPosition(-5120, 0);
            mario.setPosition(5232, 304);
            mario.collideble = true;
            this.state = GameUIState.Normal;

            break;
        case GameUIState.MoveToDown:
            this.setPosition(-6784, 0);
            mario.setPosition(6834, 0);
            mario.collideble = true;
            this.state = GameUIState.Normal;

            break;
        }
    }
});