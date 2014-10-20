
World_1_4_State = {
    None: 0,
    Normal: 1,
    Scene1: 2
};

World_1_4 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setSize(5126, 448);
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

        if (this.mario.x - Math.abs(this.x) > 220 && Math.abs(this.x) <= 4748) {
            this.setX(this.x - (this.mario.jumping ? this.mario.speed + 1 : this.mario.speed));
        }
    },
    build: function () {
        var gameUI = this;

        this.mario.addToGameUI(gameUI);
        this.mario.setPosition(84, 208 - this.mario.height);

        this.bowser = new Bowser(4300, 240);
        this.bowser.addToGameUI(gameUI);

        var roof_3_96 = new Block(3, 48, 718, 96);
        roof_3_96.addToGameUI(gameUI);

        var roof_721_96 = new Block(722, 48, 32, 128);
        roof_721_96.addToGameUI(gameUI);

        var roof_755_48 = new Block(755, 48, 414, 32);
        roof_755_48.addToGameUI(gameUI);

        var roof_1170_48 = new Block(1170, 48, 1120, 128);
        roof_1170_48.addToGameUI(gameUI);

        var roof_2291_48 = new Block(2291, 48, 2818, 32);
        roof_2291_48.addToGameUI(gameUI);

        var roof_3090_80 = new Block(3090, 80, 224, 64);
        roof_3090_80.addToGameUI(gameUI);

        var roof_3922_80 = new Block(3922, 80, 160, 64);
        roof_3922_80.addToGameUI(gameUI);

        var roof_4530_80 = new Block(4530, 80, 64, 96);
        roof_4530_80.addToGameUI(gameUI);


        var block_722_178 = new Block(722, 178, 32, 32);
        block_722_178.addToGameUI(gameUI);

        var block_1170_178 = new Block(1170, 178, 32, 24);
        block_1170_178.addToGameUI(gameUI);

        var block_1554_178 = new Block(1554, 178, 32, 24);
        block_1554_178.addToGameUI(gameUI);

        var block_1906_178 = new Block(1906, 178, 32, 24);
        block_1906_178.addToGameUI(gameUI);

        var block_1906_178 = new Block(1906, 178, 32, 24);
        block_1906_178.addToGameUI(gameUI);

        var block_2130_178 = new Block(2130, 178, 32, 24);
        block_2130_178.addToGameUI(gameUI);

        var block_2418_274 = new Block(2418, 274, 32, 32);
        block_2418_274.addToGameUI(gameUI);

        var block_2674_274 = new Block(2674, 274, 32, 32);
        block_2674_274.addToGameUI(gameUI);

        var block_2546_96 = new Block(2546, 80, 32, 66);
        block_2546_96.addToGameUI(gameUI);

        var block_2802_96 = new Block(2802, 80, 32, 66);
        block_2802_96.addToGameUI(gameUI);


        var question_946_178 = new Question(946, 178, QuestionItemType.BigMushroom, QuestionDisplayType.Question, GameObjectIconType.Ground);
        question_946_178.addToGameUI(gameUI);




        var floor_3_280 = new Block(3, 208, 96, 32);
        floor_3_280.addToGameUI(gameUI);

        var floor_3_240 = new Block(3, 240, 128, 32);
        floor_3_240.addToGameUI(gameUI);

        var floor_3_272 = new Block(3, 272, 160, 32);
        floor_3_272.addToGameUI(gameUI);

        var floor_3_305 = new Block(3, 304, 416, 143);
        floor_3_305.addToGameUI(gameUI);

        var floor_466_305 = new Block(466, 304, 352, 144);
        floor_466_305.addToGameUI(gameUI);

        var floor_914_305 = new Block(914, 304, 96, 144);
        floor_914_305.addToGameUI(gameUI);

        var floor_1006_274 = new Block(1106, 272, 1185, 176);
        floor_1006_274.addToGameUI(gameUI);

        var floor_2291_305 = new Block(2291, 304, 1024, 144);
        floor_2291_305.addToGameUI(gameUI);

        var floor_3315_400 = new Block(3315, 400, 382, 48);
        floor_3315_400.addToGameUI(gameUI);

        var floor_3698_305 = new Block(3698, 304, 128, 144);
        floor_3698_305.addToGameUI(gameUI);

        var floor_3827_400 = new Block(3827, 400, 94, 48);
        floor_3827_400.addToGameUI(gameUI);

        var floor_3922_305 = new Block(3922, 304, 160, 144);
        floor_3922_305.addToGameUI(gameUI);

        this.bridge_3922_305 = new Block(4082, 304, 416, 32);
        this.bridge_3922_305.broken = false;
        this.bridge_3922_305.addToGameUI(gameUI);

        var lian_4466_274 = new Block(4466, 272, 32, 32);
        lian_4466_274.addToGameUI(gameUI);
        lian_4466_274.setCollidable(false, false, false, false);

        var floor_4498_305 = new Block(4498, 272, 96, 173);
        floor_4498_305.addToGameUI(gameUI);

        var afx_4498_242 = new Block(4498, 242, 32, 32);
        afx_4498_242.addToGameUI(gameUI);
        afx_4498_242.attachCollides(function (gameObject) {
            if (gameObject instanceof MarioBors) {
                this.broken = true;
                this.setCollidable(false, false, false);
                this.sprite.hide();
                this.gameUI.bridge_3922_305.broken = true;
                this.gameUI.bowser.dead();
            }
        });

        var floor_4671_400 = new Block(4594, 400, 515, 48);
        floor_4671_400.addToGameUI(gameUI);

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
    update: function () {
        for (var i = 0; i < this.animateObjects.length; i++) {
            this.animateObjects[i].update();
        }
        if (this.bridge_3922_305.broken) {
            this.bridge_3922_305.setWidth(this.bridge_3922_305 - 3);
        }
    },
    changeToScene1: function () {
        this.mario.setCollidable(false, true, false, false);
        this.state = World_1_4_State.Scene1;
    },
});