
World_1_4_State = {
    None: 0,
    Normal: 1,
    Scene1: 2
};

World_1_4 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setSize(7296, 448);
        this.setBackgroundImage(Const.IMAGE_WORLD_1_4);
        this.setBackgroundPosition(0, 0);
        this.setPosition(-3, -3);
        this.show();

        this.scrollable = true;
        this.state = World_1_4_State.Normal;
    },
    scroll: function () {
        if (!this.scrollable) {
            return;
        }

        /*
        if (this.mario.x - Math.abs(this.x) > 220 && Math.abs(this.x) <= 4748) {
            this.setX(this.x - (this.mario.jumping ? this.mario.speed + 1 : this.mario.speed));
        }*/
    },
    build: function () {
        var gameUI = this;

        this.mario.addToGameUI(gameUI);
        this.mario.setPosition(84, 400 - this.mario.height);

        var floor_3_305 = new Block(3, 305, 416, 143);
        floor_3_305.addToGameUI(gameUI);

        var floor_467_304 = new Block(466, 305, 352, 143);
        floor_467_304.addToGameUI(gameUI);

        var floor_915_304 = new Block(914, 305, 96, 143);
        floor_915_304.addToGameUI(gameUI);

        var floor_1007_304 = new Block(1106, 274, 1185, 174);
        floor_1007_304.addToGameUI(gameUI);

        var floor_1007_304 = new Block(3698, 305, 3827 - 3698, 143);
        floor_1007_304.addToGameUI(gameUI);

        var floor_1007_304 = new Block(3922, 305, 4083 - 3922, 143);
        floor_1007_304.addToGameUI(gameUI);

    },
    restart: function () {
        /*
        var oldX = this.x;
        this.div.innerHTML = "";
        this.staticObjects = [];
        this.animateObjects = [];
        this.build();

        this.mario.reborn();
        this.state = World_1_3_State.Normal;

        if (Math.abs(oldX) >= 2062) {
            this.setX(-2062);
            this.mario.setPosition(2130, 400 - this.mario.height);
        } else {
            this.setX(-4);
            this.mario.setPosition(84, 400 - this.mario.height);
        }

        this.scrollable = true;*/
    },
    update: function () {
        switch (this.state) {
            case World_1_3_State.Normal:
                for (var i = 0; i < this.animateObjects.length; i++) {
                    this.animateObjects[i].update();
                }
                break;
            case World_1_3_State.Scene1:  
                break;
        }
    },
    changeToScene1: function () {
        this.mario.setCollidable(false, true, false, false);
        this.state = World_1_4_State.Scene1;
    },
});