
World_4_1_State = {
    None: 0,
    Normal: 1,
    Scene1: 2,
    Scene2: 3,
    Scene3: 4,
    Scene4: 5,
};

World_4_1 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setSize(10275, 448);
        this.setBackgroundImage(Const.IMAGE_WORLD_4_1);
        this.setBackgroundPosition(10, 4);
        this.setPosition(0, 0);
        this.show();

        this.scrollable = true;
        this.state = World_4_1_State.Scene1;
    },
    scroll: function () {
        if (!this.scrollable) {
            return;
        }
        
        if (Math.abs(this.x)  >= 7148) {
            return;
        }

        if (this.mario.x - Math.abs(this.x) > 220) {
            this.setX(this.x - (this.mario.jumping ? this.mario.speed + 1 : this.mario.speed));
        }
    },
    build: function () {
        var gameUI = this;

        this.mario.addToGameUI(gameUI);
        this.mario.setPosition(84, 400 - this.mario.height);

        var spiny = new Spiny();
        spiny.addToGameUI(gameUI);
        spiny.birth(300, 200);

        var floor_0_400 = new Block(0, 400, 1025, 48);
        floor_0_400.addToGameUI(gameUI);

        var tube_672_304 = new Block(672, 304, 64, 96);
        tube_672_304.addToGameUI(gameUI);

        var question_800_272 = new Question(800, 272, QuestionItemType.BigMushroom, QuestionDisplayType.Question, GameObjectIconType.Ground);
        question_800_272.addToGameUI(gameUI);
        
        var question_800_144 = new Question(800, 144, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Ground);
        question_800_144.addToGameUI(gameUI);
        
        var floor_1088_400 = new Block(1088, 400, 1408, 48);
        floor_1088_400.addToGameUI(gameUI);

        var gold_1312_272 = new Gold2(1312, 272, GameObjectIconType.Ground);
        gold_1312_272.addToGameUI(gameUI);
        
        var gold_1344_340 = new Gold2(1344, 240, GameObjectIconType.Ground);
        gold_1344_340.addToGameUI(gameUI);
        
        var gold_1376_340 = new Gold2(1376, 240, GameObjectIconType.Ground);
        gold_1376_340.addToGameUI(gameUI);
        
        var gold_1408_272 = new Gold2(1408, 272, GameObjectIconType.Ground);
        gold_1408_272.addToGameUI(gameUI);
        
        var question_2048_144 = new Question(2048, 144, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Ground);
        question_2048_144.addToGameUI(gameUI);
        
        var question_2048_272 = new Question(2048, 272, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Ground);
        question_2048_272.addToGameUI(gameUI);
        
        var question_2112_144 = new Question(2112, 144, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Ground);
        question_2112_144.addToGameUI(gameUI);

        var question_2112_272 = new Question(2112, 272, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Ground);
        question_2112_272.addToGameUI(gameUI);
        
        var floor_2624_400 = new Block(2624, 400, 2146, 48);
        floor_2624_400.addToGameUI(gameUI);
        
        for (var i = 0; i < 4; i++) {
            var question = new Question(2880 + 32 * i, 272, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Ground);
            question.addToGameUI(gameUI);
        }

        var block_3296_304 = new Block(3296, 304, 32, 96);
        block_3296_304.addToGameUI(gameUI);
        
        for (var i = 0; i < 4; i++) {
            var gold = new Gold2(3360 + 32 * i, 176, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }
        
        var tube_3712_272 = new Block(3712, 272, 64, 128);
        tube_3712_272.addToGameUI(gameUI);
        
        for (var i = 0; i < 4; i++) {
            var gold = new Gold2(3808 + 32 * i, 176, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }
        
        var tube_4224_272 = new Block(4224, 272, 64, 128);
        tube_4224_272.attachCollidesUp(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.DOWN)) {
                this.gameUI.changeToScene2();
            }
        });
        tube_4224_272.addToGameUI(gameUI);

        for (var i = 0; i < 4; i++) {
            var gold = new Gold2(4320 + 32 * i, 176, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 3; i++) {
            var question = new Question(4672 + 32 * i, 272, i == 2 ? QuestionItemType.BigMushroom : QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Ground);
            question.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 4; i++) {
            var question = new Question(4736 + 32 * i, 144, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Ground);
            question.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 2; i++) {
            var brick = new Brick(4768 + 32 * i, 272, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 3; i++) {
            var question = new Question(4832 + 32 * i, 272, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Ground);
            question.addToGameUI(gameUI);
        }

        var floor_4832_400 = new Block(4832, 400, 738, 48);
        floor_4832_400.addToGameUI(gameUI);
        
        var tube_5216_336 = new Block(5216, 336, 64, 64);
        tube_5216_336.addToGameUI(gameUI);
        
        var floor_5663_400 = new Block(5663, 400, 98, 48);
        floor_5663_400.addToGameUI(gameUI);
        
        var floor_5823_400 = new Block(5823, 400, 258, 48);
        floor_5823_400.addToGameUI(gameUI);

        var block_6048_304 = new Block(6048, 304, 32, 96);
        block_6048_304.addToGameUI(gameUI);
        
        var floor_6144_400 = new Block(6144, 400, 1520, 48);
        floor_6144_400.addToGameUI(gameUI);
        
        for (var i = 0; i < 9; i++) {
            var block = new Block(6656 + 32 * i, 368 - 32 * Math.min(i, 7), 32, 32 + 32 * Math.min(i, 7));
            block.addToGameUI(gameUI);
        }
        
        var question_7040_272 = new Question(7040, 272, QuestionItemType.MultiGold, QuestionDisplayType.Brick, GameObjectIconType.Ground);
        question_7040_272.setCollideCount(5);
        question_7040_272.addToGameUI(gameUI);
        
        var block_7200_368 = new Block(7200, 368, 32, 32);
        block_7200_368.addToGameUI(gameUI);

        var flag = new Block(7200 + 12, 62, 8, 308);
        flag.addToGameUI(gameUI);
        flag.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors) {
                this.gameUI.changeToScene4();
            }
        });
        

        // Scene2
        
        var floor_7678_400 = new Block(7678, 400, 512, 48);
        floor_7678_400.addToGameUI(gameUI);
        
        var block_7678_48 = new Block(7678, 48, 32, 32 * 11);
        block_7678_48.addToGameUI(gameUI);
        
        for (var i = 0; i < 12; i++) {
            var brick = new Brick(7774 + 32 * i, 48, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 3; i++) {
            var brick = new Brick(7774, 272 + 32 * i, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 6; i++) {
            var brick = new Brick(7806 + 32 * i, 272, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 3; i++) {
            var brick = new Brick(7998, 272 + 32 * i, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var tube_8096_336 = new Block(8096, 336, 90, 64);
        tube_8096_336.addToGameUI(gameUI);
        tube_8096_336.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.RIGHT)) {
                this.gameUI.changeToScene3();
            }
        });
        tube_8096_336.addToGameUI(gameUI);
        
        var tube_8164_48 = new Block(8164, 48, 28, 288);
        tube_8164_48.addToGameUI(gameUI);

        var question_8096_208 = new Question(8094, 272, QuestionItemType.BigMushroom, QuestionDisplayType.Brick, GameObjectIconType.Underground);
        question_8096_208.addToGameUI(gameUI);
        
        for (var i = 0; i < 8; i++) {
            var gold = new Gold2(7774 + 32 * i, 240, GameObjectIconType.Underground);
            gold.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 10; i++) {
            var gold = new Gold2(7774 + 32 * i, 368, GameObjectIconType.Underground);
            gold.addToGameUI(gameUI);
        }
        
        this.changeToScene1();
    },
    restart: function () {

        var oldX = this.x;
        this.div.innerHTML = "";
        this.staticObjects = [];
        this.animateObjects = [];
        this.build();

        this.mario.reborn();
        this.state = World_1_2_State.Normal;

        if (Math.abs(oldX) >= 3072) {
            this.setX(-3072);
            this.mario.setPosition(3172, 400 - this.mario.height);
        } else {
            this.setX(0);
            this.mario.setPosition(84, 400 - this.mario.height);
        }

        this.scrollable = true;
    },
    update: function () {

        switch (this.state) {
        case World_4_1_State.None:
            break;
        case World_4_1_State.Normal:
            for (var i = 0; i < this.animateObjects.length; i++) {
                this.animateObjects[i].update();
            }
            break;
        case World_4_1_State.Scene1:
            this.mario.setPosition(84, 400 - this.mario.height);
            this.setPosition(0, 0);
            this.state = World_4_1_State.Normal;
            break;
        case World_4_1_State.Scene2:
            this.mario.setPosition(7726, 0);
            this.setPosition(-7678, 0);
            this.state = World_4_1_State.Normal;
            break;
            case World_4_1_State.Scene3:
                this.mario.setPosition(5232, 336 - this.mario.height);
                this.setPosition(-5116, 0);
                this.state = World_4_1_State.Normal;
                break;
        case World_4_1_State.Scene4:
            if (this.mario.freefall()) {
                return;
            } else {
                if (this.mario.spriteType != MarioSprite.Move) {
                    this.mario.setSprite(MarioSprite.Move);
                    this.mario.moving = true;
                    this.mario.movingToRight = true;
                    this.mario.setX(this.mario.x + 32);
                    this.mario.sprite.setFrameCounter(2);
                }
            }
            if (this.mario.x < 7392) {
                this.mario.moveDown(7);
                this.falling = false;
                this.mario.moveRight(2);
                this.mario.sprite.moveToNextFrame();
            } else {
                this.mario.setCollidable(true, true, true, true);
                this.state = World_4_1_State.None;
                alert("后续关卡正在开发中......");
            }
            break;
        }
    },
    changeToScene1: function () {
        this.scrollable = true;
        this.state = World_4_1_State.Scene1;
    },
    changeToScene2: function () {
        this.scrollable = false;
        this.state = World_4_1_State.Scene2;
    },
    changeToScene3: function () {
        this.scrollable = true;
        this.state = World_4_1_State.Scene3;
    },
    changeToScene4: function () {
        this.mario.setCollidable(false, true, false, false);
        this.scrollable = true;
        this.state = World_4_1_State.Scene4;
    }
});