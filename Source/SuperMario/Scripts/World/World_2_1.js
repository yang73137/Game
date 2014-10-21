
World_2_1_State = {
    None: 0,
    Scene1: 1,
    Scene2: 2,
    Scene3: 3
};

World_2_1 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setSize(10275, 448);
        this.setBackgroundImage(Const.IMAGE_WORLD_2_1);
        this.setBackgroundPosition(7, 6);
        this.setPosition(0, 0);
        this.show();

        this.scrollable = true;
        this.state = World_2_1_State.Scene1;
    },
    scroll: function () {
        if (!this.scrollable) {
            return;
        }

        if (this.mario.x - Math.abs(this.x) > 220 && Math.abs(this.x) <= 4595) {
            this.setX(this.x - (this.mario.jumping ? this.mario.speed + 1 : this.mario.speed));
        }
    },
    build: function () {
        var gameUI = this;

        this.mario.addToGameUI(gameUI);
        this.mario.setPosition(84, 208 - this.mario.height);
        
        // scene1
        for (var i = 0; i < 3; i++) {
            var brick = new Brick(480 + 32 * i, 272, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var floor_0_400 = new Block(0, 400, 2944, 48);
        floor_0_400.addToGameUI(gameUI);
        
        var floor_3072_400 = new Block(3072, 400, 320, 48);
        floor_3072_400.addToGameUI(gameUI);
        
        var floor_3088_400 = new Block(3088, 400, 1360, 48);
        floor_3088_400.addToGameUI(gameUI);
        
        var floor_4542_400 = new Block(4542, 400, 322, 48);
        floor_4542_400.addToGameUI(gameUI);
        
        var floor_4926_400 = new Block(4926, 400, 1906, 48);
        floor_4926_400.addToGameUI(gameUI);
    },
    restart: function () {

        this.div.innerHTML = "";
        this.staticObjects = [];
        this.animateObjects = [];
        this.build();
        
        this.mario.setPosition(84, 208 - this.mario.height);
        this.mario.reborn();

        this.setPosition(-3, -3);

        this.scrollable = true;
    },
    update: function() {
        switch (this.state) {
        case World_2_1_State.None:
            break;
        case World_2_1_State.Scene1:
            break;
        case World_2_1_State.Scene2:
            for (var i = 0; i < this.animateObjects.length; i++) {
                this.animateObjects[i].update();
            }
            if (this.bridge_3922_305.broken) {
                this.bridge_3922_305.setWidth(this.bridge_3922_305 - 3);
            }
            break;
        }
    }
});