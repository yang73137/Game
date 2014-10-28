
WorldState = {
    None: 0,
    ShowTitle: 1,
    Opening: 0,
    ChangeScene: 2,
    Gaming: 3,
    Ending: 4
};

World = ClassFactory.createClass(Layer, {
    init: function () {
        Layer.init.call(this);

        this.staticObjects = [];
        this.animateObjects = [];

        this.mario = null;
        this.gameUI = null;
        this.scrollable = false;
        this.state = WorldState.Gaming;

        this.titleLayer = new Label();
        titleLayer.setSize(512, 512);
        titleLayer.setZ(9999);
    },
    setTitle: function(title) {
        this.setTitle.setText(title);
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
        case WorldState.Gaming:
            this.onGame();
            break;
        case WorldState.Ending:
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