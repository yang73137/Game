
World_3_1_State = {
    None: 0,
    Normal: 1,
    Scene1: 2,
    Scene2: 3,
    Scene3: 4,
    Scene4: 5,
    Scene5: 6
};

World_3_1 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setSize(10275, 448);
        this.setBackgroundImage(Const.IMAGE_WORLD_3_1);
        this.setBackgroundPosition(6, 4);
        this.setPosition(0, 0);
        this.show();

        this.scrollable = true;
        this.state = World_3_1_State.Scene1;
    },
    scroll: function () {
        if (!this.scrollable) {
            return;
        }

        if ((Math.abs(this.x) >= 6318 && Math.abs(this.x) <= 6832)) {
            return;
        }

        if ((Math.abs(this.x) >= 6850 && Math.abs(this.x) <= 8292)) {
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

        var floor_0_400 = new Block(0, 400, 1440, 48);
        floor_0_400.addToGameUI(gameUI);

        var question_512_272 = new Question(512, 272, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Ground);
        question_512_272.addToGameUI(gameUI);
        
        var question_608_240 = new Question(608, 240, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Ground);
        question_608_240.addToGameUI(gameUI);
        
        var question_704_240 = new Question(704, 240, QuestionItemType.BigMushroom, QuestionDisplayType.Question, GameObjectIconType.Ground);
        question_704_240.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var brick = new Brick(832 + 32 * i, 272, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }
        
        var tube_1024_272 = new Block(1024, 304, 64, 96);
        tube_1024_272.addToGameUI(gameUI);
        
        var tube_1216_272 = new Block(1216, 272, 64, 128);
        tube_1216_272.addToGameUI(gameUI);
        
        
        var floor_1536_400 = new Block(1536, 400, 928, 48);
        floor_1536_400.addToGameUI(gameUI);
        
        var tube_1824_272 = new Block(1824, 304, 64, 96);
        tube_1824_272.addToGameUI(gameUI);

        var brick_1952_272 = new Brick(1952, 272, GameObjectIconType.Ground);
        brick_1952_272.addToGameUI(gameUI);
        
        var tube_2144_336 = new Block(2144, 336, 64, 64);
        tube_2144_336.addToGameUI(gameUI);
        
        for (var i = 0; i < 4; i++) {
            var iron = new Block(2336 + 32 * i, 400 - 32 * (i + 1), 32, 32 * (i + 1));
            iron.addToGameUI(gameUI);
        }

        var bridge_2664_272 = new Block(2464, 272, 256, 16);
        bridge_2664_272.addToGameUI(gameUI);
        
        var iron_2720_272 = new Block(2720, 272, 32, 176);
        iron_2720_272.addToGameUI(gameUI);
        
        var floor_1536_400 = new Block(2816, 400, 1280, 48);
        floor_1536_400.addToGameUI(gameUI);

        var iron_2816_272 = new Block(2816, 272, 32, 128);
        iron_2816_272.addToGameUI(gameUI);
        
        var iron_2848_336 = new Block(2848, 336, 32, 64);
        iron_2848_336.addToGameUI(gameUI);
        
        for (var i = 0; i < 3; i++) {
            if (i == 0) {
                var question = new Question(2880 + 32 * i, 144, QuestionItemType.Star, QuestionDisplayType.Brick, GameObjectIconType.Ground);
                question.addToGameUI(gameUI);
            } else {
                var brick = new Brick(2880 + 32 * i, 144, GameObjectIconType.Ground);
                brick.addToGameUI(gameUI);
            }
        }
        
        var tube_3296_272 = new Block(3296, 272, 64, 128);
        tube_3296_272.addToGameUI(gameUI);
        
        for (var i = 0; i < 10; i++) {
            if (i == 2) {
                var question = new Question(3552 + 32 * i, 144, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Ground);
                question.addToGameUI(gameUI);
            } else if (i == 6){
                var question = new Question(3552 + 32 * i, 144, QuestionItemType.BigMushroom, QuestionDisplayType.Question, GameObjectIconType.Ground);
                question.addToGameUI(gameUI);
            } else {
                var brick = new Brick(3552 + 32 * i, 144, GameObjectIconType.Ground);
                brick.addToGameUI(gameUI);
            }
        }

        for (var i = 0; i < 11; i++) {
            var brick = new Brick(3552 + 32 * i, 272, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 3; i++) {
            var brick = new Brick(4128 + 32 * i, 144, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 3; i++) {
            var brick = new Brick(4128 + 32 * i, 240, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var floor_4224_400 = new Block(4224, 400, 320, 48);
        floor_4224_400.addToGameUI(gameUI);
        
        for (var i = 0; i < 6; i++) {
            var iron = new Block(4352 + 32 * i, 400 - 32 * (i + 1), 32, 32 * (i + 1));
            iron.addToGameUI(gameUI);
        }

        var floor_4608_400 = new Block(4608, 400, 1056, 48);
        floor_4608_400.addToGameUI(gameUI);
        
        for (var i = 0; i < 3; i++) {
            if (i == 1) {
                var question = new Question(4800 + 32 * i, 144, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Ground);
                question.addToGameUI(gameUI);
            } else {
                var brick = new Brick(4800 + 32 * i, 144, GameObjectIconType.Ground);
                brick.addToGameUI(gameUI);
            }
        }
        
        for (var i = 0; i < 3; i++) {
            if (i == 1) {
                var question = new Question(4800 + 32 * i, 272, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Ground);
                question.addToGameUI(gameUI);
            } else {
                var brick = new Brick(4800 + 32 * i, 272, GameObjectIconType.Ground);
                brick.addToGameUI(gameUI);
            }
        }
        
        for (var i = 0; i < 3; i++) {
            if (i == 1) {
                var question = new Question(4960 + 32 * i, 144, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Ground);
                question.addToGameUI(gameUI);
            } else {
                var brick = new Brick(4960 + 32 * i, 144, GameObjectIconType.Ground);
                brick.addToGameUI(gameUI);
            }
        }

        for (var i = 0; i < 3; i++) {
            if (i == 1) {
                var question = new Question(4960 + 32 * i, 272, QuestionItemType.BigMushroom, QuestionDisplayType.Question, GameObjectIconType.Ground);
                question.addToGameUI(gameUI);
            } else {
                var brick = new Brick(4960 + 32 * i, 272, GameObjectIconType.Ground);
                brick.addToGameUI(gameUI);
            }
        }
        
        for (var i = 0; i < 5; i++) {
            if (i == 1) {
                var question = new Question(5312 + 32 * i, 272, QuestionItemType.MultiGold, QuestionDisplayType.Brick, GameObjectIconType.Ground);
                question.setCollideCount(5);
                question.addToGameUI(gameUI);
            } else {
                var brick = new Brick(5312 + 32 * i, 272, GameObjectIconType.Ground);
                brick.addToGameUI(gameUI);
            }
        }

        var iron_5568_304 = new Block(5568, 304, 32, 96);
        iron_5568_304.addToGameUI(gameUI);
        
        var iron_5600_240 = new Block(5600, 208, 32, 192);
        iron_5600_240.addToGameUI(gameUI);
        
        var floor_5760_400 = new Block(5760, 400, 1078, 48);
        floor_5760_400.addToGameUI(gameUI);
        
        for (var i = 0; i < 9; i++) {
            var block = new Block(5856 + 32 * i, 368 - 32 * Math.min(i, 7), 32, 32 + 32 * Math.min(i, 7));
            block.addToGameUI(gameUI);
        }

        var block_6400_368 = new Block(6400, 368, 32, 32);
        block_6400_368.addToGameUI(gameUI);

        var flag = new Block(6400 + 12, 62, 8, 308);
        flag.addToGameUI(gameUI);
        flag.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors) {
                //this.gameUI.changeToScene6();
            }
        });

        this.state = World_3_1_State.Scene1;
    },
    restart: function () {

        this.div.innerHTML = "";
        this.staticObjects = [];
        this.animateObjects = [];
        this.build();
        
        this.mario.setPosition(84, 208 - this.mario.height);
        this.mario.reborn();

        this.setPosition(0, 0);

        this.scrollable = true;
    },
    update: function () {
        for (var i = 0; i < this.animateObjects.length; i++) {
            this.animateObjects[i].update();
        }
    },
    changeToScene1: function () {
        this.scrollable = true;
        this.state = World_3_1_State.Scene1;
    },
    changeToScene2: function () {
        this.scrollable = false;
        this.state = World_3_1_State.Scene2;
    },
    changeToScene3: function () {
        this.scrollable = true;
        this.state = World_3_1_State.Scene3;
    },
    changeToScene4: function () {
        this.mario.setCollidable(false, true, false, false);
        this.scrollable = true;
        this.state = World_3_1_State.Scene4;
    },
    changeToScene5: function() {
        this.scrollable = false;
        this.state = World_3_1_State.Scene5;
    },
    changeToScene6: function () {
        this.scrollable = true;
        this.state = World_3_1_State.Scene6;
    }
});