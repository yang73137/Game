
App = {
    loaded: 0,
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
    process: function (src, loaded, total, loader) {
        if (loader == ImageLoader) {
            document.getElementById("imageLoader").innerHTML = "Loading Image: " + loaded + "/" + total;
        }
        else if (loader == SoundLoader) {
            document.getElementById("soundLoader").innerHTML = "Loading Sound: " + loaded + "/" + total;
        }
    },
    complete: function (loader) {
        if (loader == ImageLoader || loader == SoundLoader) {
            this.loaded++;
        }
        if (this.loaded == 2) {
            document.getElementById("app").innerHTML = "";
            App.init();
            App.onTimer();
        }
    },
    error: function (src, loaded, total, loader) {
        alert("Load " + src + " error");
    },
    run: function () {
        ImageLoader.load(this, [Const.IMAGE_ITEMS, Const.IMAGE_ENEMIES, Const.IMAGE_MARIOBROS, Const.IMAGE_TILESET, Const.IMAGE_WORLD_1_1]);
        SoundLoader.load(this, [
            Const.Sound.Backgrounds.OverworldTheme, Const.Sound.Backgrounds.UnderGroundTheme, Const.Sound.Backgrounds.UnderWaterTheme, Const.Sound.Backgrounds.CastleTheme,
            Const.Sound.Effects.BrickBreak, Const.Sound.Effects.Squish, Const.Sound.Effects.Coin, Const.Sound.Effects.Sprout, Const.Sound.Effects.Death, Const.Sound.Effects.Bump, Const.Sound.Effects.Fireball, Const.Sound.Effects.LifeUp, Const.Sound.Effects.JumpBig, Const.Sound.Effects.JumpSmall, Const.Sound.Effects.ChangeType, Const.Sound.Effects.BowserFire, Const.Sound.Effects.Hurt, Const.Sound.Effects.Flagpole, Const.Sound.Effects.LevelClear, Const.Sound.Effects.WorldClear, Const.Sound.Effects.Kick
        ]);
    },
    onTimer: function () {
        setInterval(function () {
            App.gameUI.update();
        }, 16);
    }
};