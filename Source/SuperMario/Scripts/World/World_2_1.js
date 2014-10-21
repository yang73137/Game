
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

        if (this.mario.x - Math.abs(this.x) > 220) {
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
        
        for (var i = 0; i < 3; i++) {
            var brick = new Brick(926 + 32 * i, 144, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 6; j++) {
                if ((i == 0 && j < 4) || (i == 1 && j < 3) || (i == 2 && j < 2) || (i == 1 && j < 1)) {
                    continue;
                }
                var iron = new Block(638 + j * 32, 240 + i * 32, 32, 32);
                iron.addToGameUI(gameUI);
            }
        }

        var iron_1086_240 = new Block(1086, 240, 32, 160);
        iron_1086_240.addToGameUI(gameUI);
        
        var iron_1118_352 = new Block(1119, 336, 32, 64);
        iron_1118_352.addToGameUI(gameUI);

        var tube_1471_272 = new Block(1471, 272, 64, 128);
        tube_1471_272.addToGameUI(gameUI);
        

        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 5; j++) {
                var question = new Question(1695 + j * 32, 144 + i * 128, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Ground);
                question.addToGameUI(gameUI);
            }
        }

        var brick_2175_272 = new Brick(2175, 272, GameObjectIconType.Ground);
        brick_2175_272.addToGameUI(gameUI);
        
        for (var i = 0; i < 4; i++) {
            var brick = new Brick(2207 + 32 * i, 144, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }
        
        var tube_2367_272 = new Block(2367, 272, 64, 128);
        tube_2367_272.addToGameUI(gameUI);
        
        for (var i = 0; i < 9; i++) {
            if (i == 4 || i == 5) {
                continue;
            }
            var question = new Question(2527 + i * 32, 272, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Ground);
            question.addToGameUI(gameUI);
        }

        for (var i = 0; i < 5; i++) {
            var brick = new Brick(2591 + 32 * i, 144, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 4; i++) {
            var brick = new Brick(2943 + 32 * i, 144, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }
        
        var tube_3295_272 = new Block(3295, 272, 64, 128);
        tube_3295_272.addToGameUI(gameUI);
        
        var tube_3679_272 = new Block(3679, 336, 64, 64);
        tube_3679_272.addToGameUI(gameUI);
        
        var tube_3903_272 = new Block(3903, 272, 64, 128);
        tube_3903_272.addToGameUI(gameUI);
        
        for (var i = 0; i < 4; i++) {
            var brick = new Brick(3999 + 32 * i, 144, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var tube_4031_306 = new Block(4031, 306, 64, 98);
        tube_4031_306.addToGameUI(gameUI);

        var tube_4159_240 = new Block(4159, 240, 64, 160);
        tube_4159_240.addToGameUI(gameUI);

        var block_4926_302 = new Block(4926, 302, 32, 96);
        block_4926_302.addToGameUI(gameUI);

        var brick_5151_272 = new Brick(5151, 272, GameObjectIconType.Ground);
        brick_5151_272.addToGameUI(gameUI);
        
        for (var i = 0; i < 9; i++) {
            if (i == 5 || i == 6 || i == 7) {
                continue;
            }
            var brick = new Brick(5247 + 32 * i, 144, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var question_5439_272 = new Question(5439, 272, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Ground);
        question_5439_272.addToGameUI(gameUI);

        var tube_5631_302 = new Block(5631, 302, 64, 96);
        tube_5631_302.addToGameUI(gameUI);

        for (var i = 0; i < 2; i++) {
            var brick = new Brick(5919 + 32 * i, 272, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 2; i++) {
            var block = new Block(6079 + 32 * i, 80, 32, 320);
            block.addToGameUI(gameUI);
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
                for (var i = 0; i < this.animateObjects.length; i++) {
                this.animateObjects[i].update();
            }
            break;
        case World_2_1_State.Scene2:
            break;
        }
    }
});