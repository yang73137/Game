
App = {
    init: function () {
        var app = document.getElementById("app");

        var gameUI = new GameUI();
        gameUI.setSize(Const.SCREEN_WIDTH, Const.SCREEN_HEIGHT);
        gameUI.show();
        gameUI.appendTo(app);

        gameUI.setMario(new MarioBors(0, 0));

        var world = new World_1_1();
        world.addToGameUI(gameUI);

        this.gameUI = gameUI;
    },
    process: function (src, loaded, total) {
        document.getElementById("app").innerHTML = "Loaded: " + loaded + "/" + total;
    },
    complete: function () {
        document.getElementById("app").innerHTML = "";
        App.init();
        App.onTimer();
    },
    error: function (src, loaded, total) {
        alert("Load " + src + " error");
    },
    run: function () {
        ImageLoader.load(this, [Const.IMAGE_ITEMS, Const.IMAGE_ENEMIES, Const.IMAGE_MARIOBROS, Const.IMAGE_TILESET, Const.IMAGE_WORLD_1_1]);
    },
    onTimer: function () {
        setInterval(function () {
            App.gameUI.update();
        }, 16);
    }
};