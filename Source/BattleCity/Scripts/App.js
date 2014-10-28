UIMode = {
    Opening: 0,
    Stage: 1,
    Game: 2,
    Score: 3,
    End: 4
};

App = {
    init: function () {
        this.container = document.getElementById("app");

        this.openingUI = new OpeningUI();
        this.openingUI.appendTo(this.container);

        this.stageUI = new StageUI();
        this.stageUI.appendTo(this.container);

        this.gameUI = new GameUI();
        this.gameUI.appendTo(this.container);

        this.scoreUI = new ScoreUI();
        this.scoreUI.appendTo(this.container);

        this.endingUI = new EndingUI();
        this.endingUI.appendTo(this.container);

        this.mode = UIMode.Opening;
    },
    process: function (src, loaded, total) {
        /*
        console.log(src + " has been loaded");
        */
    },
    complete: function () {

        App.init();

        this.openingUI.enter();
        App.onTimer();
    },
    error: function (src, loaded, total) {
        alert("加载图片 " + src + " 出错");
        /*
        console.log(src + " is error");
        */
    },
    run: function () {
        ImageLoader.load(this, [Const.IMAGE_BOOM.src, Const.IMAGE_MISC.src, Const.IMAGE_TANK.src, Const.IMAGE_TERR.src, Const.IMAGE_UI.src]);
    },
    onTimer: function () {
        setInterval(function () {
            var app = App;
            switch (app.mode) {
                case UIMode.Opening:
                    if (!app.openingUI.update()) {
                        app.openingUI.level();
                        app.stageUI.enter();
                        app.mode = UIMode.Stage;
                    }
                    break;
                case UIMode.Stage:
                    if (!app.stageUI.update()) {
                        app.stageUI.level();
                        app.gameUI.setStage(app.stageUI.stage);
                        app.gameUI.enter();
                        app.mode = UIMode.Game;
                    }
                    break;
                case UIMode.Game:
                    if (!app.gameUI.update()) {
                        app.gameUI.level();
                        var scoreData = app.gameUI.getScoreData();
                        app.scoreUI.setData(scoreData.stage, scoreData.player1Score, scoreData.enemy1Number, scoreData.enemy2Number, scoreData.enemy3Number, scoreData.enemy4Number);
                        app.scoreUI.enter();
                        app.mode = UIMode.Score;
                    }
                    break;
                case UIMode.Score:
                    if (!app.scoreUI.update()) {
                        app.scoreUI.level();
                        if (app.gameUI.isFailed()) {
                            app.stageUI.setStage(1);
                            app.stageUI.setStageChangedEnabled(true);
                            app.endingUI.enter();
                            app.mode = UIMode.End;
                        } else {
                            app.stageUI.setStage(++app.stageUI.stage);
                            app.stageUI.enter();
                            app.mode = UIMode.Stage;
                        }
                    }
                    break;
                case UIMode.End:
                    if (!app.endingUI.update()) {
                        app.endingUI.level();
                        app.openingUI.enter();
                        app.mode = UIMode.Opening;
                    }
                    break;
            }
        }, 16);
    }
};