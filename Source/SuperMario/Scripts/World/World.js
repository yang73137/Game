
WorldState = {
    None: 0,
    ShowTitle: 1,
    ChangeScene: 2,
    Game: 3,
    Finish: 4
};

World = ClassFactory.createClass(Layer, {
    init: function () {
        Layer.init.call(this);

        this.staticObjects = [];
        this.animateObjects = [];

        this.mario = null;
        this.gameUI = null;
        this.scrollable = false;
        this.state = WorldState.Game;
    },
    scroll: function () {
    },
    build: function () {
    },
    update: function () {
        switch (this.state) {
        case WorldState.ShowTitle:
            break;
        case WorldState.ChangeScene:
            break;
        case WorldState.Game:
            this.onGame();
            break;
        case WorldState.Finish:
            this.onFinish();
            break;
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
    },
    onGame: function () { },
    onFinish: function() {
        
    }
});