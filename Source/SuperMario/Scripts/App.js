
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
        document.getElementById("app").innerHTML = "已经加载: " + loaded + "/" + total;
    },
    complete: function () {
        document.getElementById("app").innerHTML = "";
        App.init();
        App.onTimer();
    },
    error: function (src, loaded, total) {
        alert("加载图片 " + src + " 出错");
    },
    run: function () {
        ImageLoader.load(this, ["../Images/Enemies.png", "../Images/Items.png", "../Images/MarioBros4.png", "../Images/TileSet.png", "../Images/World_1_1.png", "../Images/World_1_2.png"]);
    },
    onTimer: function () {
        setInterval(function () {
            App.gameUI.update();
        }, 16);
    }
};