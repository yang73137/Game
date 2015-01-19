

World_2_2 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setPosition(0, 0);
        this.setSize(8414, 450);
        this.setBackgroundImage(Const.IMAGE_WORLD_2_2);
        this.setBackgroundPosition(1, 0);
        this.show();

        this.setTitle("World  2-2");

        ImageLoader.load(this, [Const.IMAGE_WORLD_2_3]);
        ScriptLoader.load(this, [Const.SCRIPT_WORLD_2_3]);
    },
    scroll: function () {

        if (this.mario.x >= 6639 && this.mario.x < 6661) {
            this.mario.setX(6639);
        }
        if (this.scrollable) {
            if (Math.abs(this.x) >= 6156 && Math.abs(this.x) < 6156 + 512) {
                return;
            }
            if (this.mario.x + this.x > 220) {
                this.setX(this.x - (this.mario.jumping ? this.mario.speed + 1 : this.mario.speed));
            }
        }
    },
    build: function () {
        var gameUI = this;

        this.mario.addToGameUI(this);
        this.mario.setInWater(true);
        this.mario.setType(MarioType.Small);

        var floor_0_400 = new Block(0, 400, 6000, 48);
        floor_0_400.addToGameUI(gameUI);


    },
    restart: function () {

        var oldX = this.x;
        this.div.innerHTML = "";
        this.staticObjects = [];
        this.animateObjects = [];
        this.build();

        this.mario.reborn();

        if (Math.abs(oldX) >= 3596) {
            this.setX(-3376);
            this.mario.setPosition(3396, 400 - this.mario.height);
        } else {
            this.setX(-524);
            this.mario.setPosition(574, 400 - this.mario.height);
        }

        this.scrollable = true;
    },
    onGame: function () {
        World.prototype.onGame.call(this);
    },
    onEnd: function () {

    },
    onChangedScene: function () {

    }
});