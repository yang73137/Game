
WorldState = {
    None: 0,
    Open: 1,
    ChangeScene: 2,
    Game: 3,
    End: 4
};

World = ClassFactory.createClass(Layer, {
    init: function () {
        Layer.init.call(this);

        this.staticObjects = [];
        this.animateObjects = [];

        this.mario = null;
        this.gameUI = null;
        this.scrollable = false;
        this.state = WorldState.Open;

        this.titleLayer = new Label();
        this.titleLayer.setSize(Const.SCREEN_WIDTH, Const.SCREEN_HEIGHT);
        this.titleLayer.setZ(9999);
        this.titleLayer.setCSS({ "line-height":  Const.SCREEN_HEIGHT + "px", "text-align": "center", "vertical-align": "middle", "color": "#ffffff", "background": "#000000" });
        this.titleLayer.show();

        this.append(this.titleLayer);

        this.openCounter = new Counter(60, false, true);
        this.changeSceneCounter = new Counter(0, false, true);
    },
    setTitle: function(title) {
        this.titleLayer.setText(title);
    },
    scroll: function () {
    },
    build: function () {
    },
    update: function () {
        switch (this.state) {
        case WorldState.Open:
            this.onOpen();
            break;
        case WorldState.ChangeScene:
            this.onChangeScene();
            break;
        case WorldState.Game:
            this.onGame();
            break;
        case WorldState.End:
            this.onEnd();
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
    changeState: function (state) {
        var stateChanged = this.state != state;
        if (stateChanged) {
            switch (this.state) {
            case WorldState.Open:
                this.onOpened();
                break;
                case WorldState.ChangeScene:
                this.onChangedScene();
                break;
            case WorldState.Game:
                this.onGamed();
                break;
            case WorldState.End:
                this.onEnded();
                break;
            }
        }
        switch (state) {
        case WorldState.Open:
            this.onOpening();
            break;
        case WorldState.ChangeScene:
            this.onChangingScene();
            break;
        case WorldState.Game:
            this.onGaming();
            break;
        case WorldState.End:
            this.onEnding();
            break;
        }
        this.state = state;
    },
    open: function () {
        this.changeState(WorldState.Open);
    },
    onOpen: function () {
        if (!this.openCounter.countdown()) {
            this.titleLayer.hide();
            this.changeState(WorldState.ChangeScene);
        }
    },
    onOpening: function() {
    },
    onOpened: function() {
    },
    changeScene: function () {
        this.changeState(WorldState.ChangeScene);
    },
    onChangingScene: function () {
    },
    onChangeScene: function () {
        this.changeState(WorldState.Game);
    },
    onChangedScene: function () {
    },
    game: function () {
        this.changeState(WorldState.Game);
    },
    onGaming: function() {
    },
    onGame: function() {
    },
    onGamed: function() {
    },
    end: function () {
        this.changeState(WorldState.End);
    },
    onEnding: function() {
    },
    onEnd: function() {
    },
    onEnded: function() {
    }
});