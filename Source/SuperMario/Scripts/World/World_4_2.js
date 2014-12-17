

World_4_2_Scene = {
    None: 0,
    Scene1: 1,
    Scene2: 2,
    Scene3: 3,
    Scene4: 4,
    Scene5: 5,
    Scene6: 6
};


World_4_2 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setSize(11554, 448);
        this.setBackgroundImage(Const.IMAGE_WORLD_4_2);
        this.setBackgroundPosition(7, 4);
        this.setPosition(0, 0);
        this.show();

        this.scene = World_4_2_Scene.Scene1;
        this.setTitle("World  4-2");

        ImageLoader.load(this, [Const.IMAGE_WORLD_4_3]);
        ScriptLoader.load(this, [Const.SCRIPT_WORLD_4_3]);

        ImageLoader.load(this, [Const.IMAGE_WORLD_5_1]);
        ScriptLoader.load(this, [Const.SCRIPT_WORLD_5_1]);

        ImageLoader.load(this, [Const.IMAGE_WORLD_6_1]);
        ScriptLoader.load(this, [Const.SCRIPT_WORLD_6_1]);

        ImageLoader.load(this, [Const.IMAGE_WORLD_7_1]);
        ScriptLoader.load(this, [Const.SCRIPT_WORLD_7_1]);

        ImageLoader.load(this, [Const.IMAGE_WORLD_8_1]);
        ScriptLoader.load(this, [Const.SCRIPT_WORLD_8_1]);
    },
    scroll: function () {
        if (!this.scrollable) {
            return;
        }

        if (Math.abs(this.x) >= 7203 && Math.abs(this.x) <= 7203 + 512) {
            return;
        }

        if (Math.abs(this.x) >= 8423 && Math.abs(this.x) <= 8423 + 512) {
            return;
        }

        if (Math.abs(this.x) >= 10479 && Math.abs(this.x) <= 10479 + 512) {
            return;
        }

        if (this.mario.x - Math.abs(this.x) > 220) {
            this.setX(this.x - (this.mario.jumping ? this.mario.speed + 1 : this.mario.speed));
        }
    },
    build: function () {
        var gameUI = this;

        this.mario.addToGameUI(gameUI);

        // scene1
        var floor_0_400 = new Block(0, 400, 512, 48);
        floor_0_400.addToGameUI(gameUI);

        // Scene2
        var floor_515_400 = new Block(515, 400, 352, 48);
        floor_515_400.addToGameUI(gameUI);

        var block_515_48 = new Block(515, 48, 32, 352);
        block_515_48.addToGameUI(gameUI);

        for (var i = 0; i < 51; i++) {
            var brick = new Brick(707 + 32 * i, 48, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var floor_931_400 = new Block(931, 400, 64, 48);
        floor_931_400.addToGameUI(gameUI);

        var floor_1059_400 = new Block(1059, 400, 32, 48);
        floor_1059_400.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 28; j++) {
                var brick = new Brick(1155 + 32 * j, 80 + 32 * i, GameObjectIconType.Underground);
                brick.addToGameUI(gameUI);
            }
        }

        var floor_1187_400 = new Block(1187, 400, 1152, 48);
        floor_1187_400.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 6; j++) {
                if (i != 0 && j == 5) {
                    continue;
                }
               var brick = new Brick(1219 + 32 * j, 272 + 32 * i, GameObjectIconType.Underground);
                brick.addToGameUI(gameUI); 
            }
        }

        var question_1411_272_ = new Question(1411, 272, QuestionItemType.BigMushroom, QuestionDisplayType.Brick, GameObjectIconType.Underground);
        question_1411_272_.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(1379 + 32 * i, 368, GameObjectIconType.Underground);
            gold.addToGameUI(gameUI);
        }

        for (var i = 0; i < 3; i++) {
            var goomba = new Goomba(1829 + 32 * i, 240, GameObjectIconType.Underground);
            goomba.addToGameUI(gameUI);
        }


        var block_1475_272 = new Block(1475, 272, 576, 128);
        block_1475_272.addToGameUI(gameUI);


        for (var i = 0; i < 2; i++) {
            var question = new Question(2115 + 32 * i, 144, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Underground);
            question.addToGameUI(gameUI);
        }

        for (var i = 0; i < 2; i++) {
            var question = new Question(2115 + 32 * i, 272, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Underground);
            question.addToGameUI(gameUI);
        }

        for (var i = 0; i < 3; i++) {
            var question = new Question(2243 + 32 * i, 272, i == 1 ? QuestionItemType.BigMushroom : QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Underground);
            question.addToGameUI(gameUI);
        }

        var block_2391_16 = new Block(2391, -16, 100, 16, true);
        block_2391_16.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_2391_16.sprite.setBackgroundPosition(0, 376);
        block_2391_16.attachUpdate(function () {
            if (this.y < this.gameUI.height) {
                this.moveDown(2);
            } else {
                this.setY(-16);
            }
        });
        block_2391_16.addToGameUI(gameUI);

        var floor_2531_400 = new Block(2531, 400, 1344, 48);
        floor_2531_400.addToGameUI(gameUI);

        var tree = new Block(2563, 0, 21, 144);
        tree.addToGameUI(gameUI);
        tree.attachCollides(function (gameObject) {
            if (gameObject instanceof MarioBors) {
                this.gameUI.scene = World_4_2_Scene.Scene6;
                this.gameUI.changeScene();
            }
        });

        for (var i = 0; i < 3; i++) {
            var brick = new Brick(2563 + 32 * i, 144, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 3; i++) {
            var question = new Question(2563 + 32 * i, 272, QuestionItemType.Gold, QuestionDisplayType.Hidden, GameObjectIconType.Underground);
            question.addToGameUI(gameUI);
        }

        for (var i = 0; i < 45; i++) {
            var brick = new Brick(2659 + 32 * i, 48, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var tube_2819_304 = new Block(2819, 304, 64, 96);
        tube_2819_304.attachCollidesUp(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.DOWN) && ((gameObject.x > this.x) && (gameObject.x + gameObject.width < this.x + this.width))) {
                this.gameUI.scene = World_4_2_Scene.Scene3;
                this.gameUI.changeScene();
            }
        });
        tube_2819_304.addToGameUI(gameUI);

        var buzzyBeetle_3000_352 = new BuzzyBeetle(3000, 352, GameObjectIconType.Underground);
        buzzyBeetle_3000_352.addToGameUI(gameUI);

        for (var i = 0; i < 2; i++) {
            var brick = new Brick(2947 + 32 * i, 272, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var tube_3012_176 = new Block(3011, 176, 64, 224);
        tube_3012_176.addToGameUI(gameUI);

        var buzzyBeetle_3125_352 = new BuzzyBeetle(3125, 352, GameObjectIconType.Underground);
        buzzyBeetle_3125_352.addToGameUI(gameUI);

        for (var i = 0; i < 2; i++) {
            var brick = new Brick(3075 + 32 * i, 272, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var tube_3203_304 = new Block(3203, 304, 64, 96);
        tube_3203_304.attachCollidesUp(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.DOWN)) {
                this.gameUI.scene = World_4_2_Scene.Scene3;
                this.gameUI.changeScene();
            }
        });
        tube_3203_304.addToGameUI(gameUI);

        var question_3299_240 = new Question(3299, 240, QuestionItemType.MultiGold, QuestionDisplayType.Brick, GameObjectIconType.Underground);
        question_3299_240.addToGameUI(gameUI);

        var tube_3364_304 = new Block(3363, 304, 64, 96);
        tube_3364_304.addToGameUI(gameUI);

        var buzzyBeetle_3690_352 = new BuzzyBeetle(3690, 352, GameObjectIconType.Underground);
        buzzyBeetle_3690_352.addToGameUI(gameUI);

        var buzzyBeetle_3738_352 = new BuzzyBeetle(3738, 352, GameObjectIconType.Underground);
        buzzyBeetle_3738_352.addToGameUI(gameUI);

        var block_3811_336 = new Block(3811, 336, 64, 64);
        block_3811_336.addToGameUI(gameUI);

        var block_3843_304 = new Block(3843, 304, 32, 32);
        block_3843_304.addToGameUI(gameUI);

        var block_3939_272 = new Block(3939, 272, 64, 176);
        block_3939_272.addToGameUI(gameUI);

        var block_4067_272 = new Block(4067, 304, 64, 144);
        block_4067_272.addToGameUI(gameUI);

        for (var i = 0; i < 4; i++) {
            var brick = new Brick(4323 + 32 * i, 48, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var block_4179_16 = new Block(4179, -16, 100, 16, true);
        block_4179_16.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_4179_16.sprite.setBackgroundPosition(0, 376);
        block_4179_16.attachUpdate(function () {
            if (this.y < this.gameUI.height) {
                this.moveDown(2);
            } else {
                this.setY(-16);
            }
        });
        block_4179_16.addToGameUI(gameUI);


        var block_4179_224 = new Block(4179, 224, 100, 16, true);
        block_4179_224.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_4179_224.sprite.setBackgroundPosition(0, 376);
        block_4179_224.attachUpdate(function () {
            if (this.y < this.gameUI.height) {
                this.moveDown(2);
            } else {
                this.setY(-16);
            }
        });
        block_4179_224.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            if (i == 1) {
                var question = new Question(4323 + 32 * i, 144, QuestionItemType.BigMushroom, QuestionDisplayType.Brick, GameObjectIconType.Underground);
                question.addToGameUI(gameUI);
                continue;
            }
            var brick = new Brick(4323 + 32 * i, 144, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 4; i++) {
            var brick = new Brick(4323 + 32 * i, 272, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var floor_4323_400 = new Block(4323, 400, 128, 48);
        floor_4323_400.addToGameUI(gameUI);

        for (var i = 0; i < 27; i++) {
            var brick = new Brick(4611 + 32 * i, 48, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var block_4467_20 = new Block(4467, -16, 100, 16, true);
        block_4467_20.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_4467_20.sprite.setBackgroundPosition(0, 376);
        block_4467_20.attachUpdate(function () {
            if (this.y > -16) {
                this.moveUp(2);
            } else {
                this.setY(this.gameUI.height);
            }
        });
        block_4467_20.addToGameUI(gameUI);


        var block_4467_240 = new Block(4467, 224, 100, 16, true);
        block_4467_240.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_4467_240.sprite.setBackgroundPosition(0, 376);
        block_4467_240.attachUpdate(function () {
            if (this.y > -16) {
                this.moveUp(2);
            } else {
                this.setY(this.gameUI.height);
            }
        });
        block_4467_240.addToGameUI(gameUI);

        var floor_4643_400 = new Block(4643, 400, 480, 48);
        floor_4643_400.addToGameUI(gameUI);

        var tube_4707_336 = new Block(4707, 336, 64, 64);
        tube_4707_336.addToGameUI(gameUI);

        var koopaTroopa_4832_352 = new KoopaTroopa(4832, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Underground);
        koopaTroopa_4832_352.addToGameUI(gameUI);

        var tube_4931_304 = new Block(4931, 304, 64, 96);
        tube_4931_304.addToGameUI(gameUI);

        var tube_5059_272 = new Block(5059, 272, 64, 128);
        tube_5059_272.addToGameUI(gameUI);

        var floor_5187_400 = new Block(5187, 400, 288, 48);
        floor_5187_400.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var block = new Block(5379 + 32 * i, 368 - 32 * i, 32, 32 * (i + 1));
            block.addToGameUI(gameUI);
        }

        var koopaTroopa_5411_288 = new KoopaTroopa(5411, 288, KoopaTroopaType.Normal, true, false, GameObjectIconType.Underground);
        koopaTroopa_5411_288.addToGameUI(gameUI);

        var block_5495_224 = new Block(5495, 224, 100, 16, true);
        block_5495_224.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_5495_224.sprite.setBackgroundPosition(0, 376);
        block_5495_224.attachUpdate(function () {
            if (this.y < this.gameUI.height) {
                this.moveDown(2);
            } else {
                this.setY(-16);
            }
        });
        block_5495_224.addToGameUI(gameUI);

        var floor_5635_400 = new Block(5635, 400, 736, 48);
        floor_5635_400.addToGameUI(gameUI);

        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 16; j++) {
                var brick = new Brick(5635 + 32 * j, 48 + 32 * i, GameObjectIconType.Underground);
                brick.addToGameUI(gameUI);
            }
        }

        for (var i = 0; i < 2; i++) {
            var brick = new Brick(5635, 176 + 32 * i, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 10; i++) {
            var gold = new Gold2(5699 + 32 * i, 240, GameObjectIconType.Underground);
            gold.addToGameUI(gameUI);
        }

        for (var i = 0; i < 11; i++) {
            var brick = new Brick(5667 + 32 * i, 272, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var koopaTroopa_5937_352 = new KoopaTroopa(5937, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Underground);
        koopaTroopa_5937_352.addToGameUI(gameUI);

        var koopaTroopa_5985_352 = new KoopaTroopa(5985, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Underground);
        koopaTroopa_5985_352.addToGameUI(gameUI);

        for (var i = 0; i < 4; i++) {
            var block = new Block(6051 + 32 * i, 400 - 32 * (i + 1), 32, 32 * (i + 1));
            block.addToGameUI(gameUI);
        }

        for (var i = 0; i < 13; i++) {
            var brick = new Brick(6147 + 32 * i, 48, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var koopaTroopa_6214_352 = new KoopaTroopa(6214, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Underground);
        koopaTroopa_6214_352.addToGameUI(gameUI);

        var tube_6275_176 = new Block(6275, 176, 64, 224);
        tube_6275_176.addToGameUI(gameUI);

        var floor_6435_400 = new Block(6435, 400, 1280, 48);
        floor_6435_400.addToGameUI(gameUI);

        var block_6435_304 = new Block(6435, 304, 800, 96);
        block_6435_304.addToGameUI(gameUI);

        var block_6505_240 = new Block(6505, 240, 64, 64);
        block_6505_240.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.RIGHT)) {
                this.gameUI.scene = World_4_2_Scene.Scene5;
                this.gameUI.changeScene();
            }
        });
        block_6505_240.addToGameUI(gameUI);

        var block_6569_48 = new Block(6569, 48, 666, 256);
        block_6569_48.addToGameUI(gameUI);

        for (var i = 0; i < 10; i++) {
            var brick = new Brick(7235 + 32 * i, 48, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var tube_7395_304 = new Block(7395, 304, 64, 96);
        tube_7395_304.attachCollidesUp(function(gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.DOWN)) {
                this.state = WorldState.None;
                var world = new World_5_1();
                this.gameUI.gameUI.setWorld(world);
            }
        });
        tube_7395_304.addToGameUI(gameUI);

        var block_7651_48 = new Block(7651, 48, 64, 352);
        block_7651_48.addToGameUI(gameUI);

        // scene4
        var floor_7719_400 = new Block(7719, 400, 1217, 48);
        floor_7719_400.addToGameUI(gameUI);

        var tube_7815_336 = new Block(7815, 336, 64, 64);
        tube_7815_336.addToGameUI(gameUI);

        for (var i = 0; i < 9; i++) {
            var block = new Block(7879 + 32 * i, 368 - 32 * Math.min(i, 7), 32, 32 + 32 * Math.min(i, 7));
            block.addToGameUI(gameUI);
        }

        var block_8423_368 = new Block(8423, 368, 32, 32);
        block_8423_368.addToGameUI(gameUI);

        var flag = new Block(8423 + 12, 66, 8, 303);
        flag.addToGameUI(gameUI);
        flag.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors) {
                this.setCollidable(false, false, false, false);
                this.gameUI.end();
            }
        });

        // scene
        var floor_8945_400 = new Block(8945, 400, 2044, 48);
        floor_8945_400.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(9329 + 32 * i, 240, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var block_9329_272 = new Block(9329, 272, 96, 32);
        block_9329_272.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(9457 + 32 * i, 112, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var block_9457_144 = new Block(9457, 144, 96, 32);
        block_9457_144.addToGameUI(gameUI);

        var block_9521_336 = new Block(9521, 336, 96, 32);
        block_9521_336.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(9649 + 32 * i, 112, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var block_9649_144 = new Block(9649, 144, 96, 32);
        block_9649_144.addToGameUI(gameUI);

        var block_9649_336 = new Block(9649, 336, 160, 32);
        block_9649_336.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(9777 + 32 * i, 176, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var block_9777_208 = new Block(9777, 208, 96, 32);
        block_9777_208.addToGameUI(gameUI);

        for (var i = 0; i < 5; i++) {
            var gold = new Gold2(9905 + 32 * i, 80, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var block_9905_112 = new Block(9905, 112, 160, 32);
        block_9905_112.addToGameUI(gameUI);

        var block_9937_304 = new Block(9937, 304, 224, 32);
        block_9937_304.addToGameUI(gameUI);

        for (var i = 0; i < 9; i++) {
            var block = new Block(10225 + 32 * i, 368 - 32 * Math.min(i, 7), 32, 32 + 32 * Math.min(i, 7));
            block.addToGameUI(gameUI);
        }

        var block_10481_112 = new Block(10481, 112, 384, 32);
        block_10481_112.addToGameUI(gameUI);

        var tube_10545_304 = new Block(10545, 304, 64, 96);
        tube_10545_304.attachCollidesUp(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.DOWN)) {
                this.state = WorldState.None;
                var world = new World_8_1();
                this.gameUI.gameUI.setWorld(world);
            }
        });
        tube_10545_304.addToGameUI(gameUI);

        var tube_10673_304 = new Block(10673, 304, 64, 96);
        tube_10673_304.attachCollidesUp(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.DOWN)) {
                this.state = WorldState.None;
                var world = new World_7_1();
                this.gameUI.gameUI.setWorld(world);
            }
        });
        tube_10673_304.addToGameUI(gameUI);

        var tube_10801_304 = new Block(10801, 304, 64, 96);
        tube_10801_304.attachCollidesUp(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.DOWN)) {
                this.state = WorldState.None;
                var world = new World_6_1();
                this.gameUI.gameUI.setWorld(world);
            }
        });
        tube_10801_304.addToGameUI(gameUI);

        var block_10929_48 = new Block(10929, 48, 64, 352);
        block_10929_48.addToGameUI(gameUI);

        // scene
        var floor_10997_400 = new Block(10997, 400, 512, 48);
        floor_10997_400.addToGameUI(gameUI);

        var block_10997_48 = new Block(10997, 48, 32, 352);
        block_10997_48.addToGameUI(gameUI);

        for (var i = 0; i < 7; i++)
        {
            var brick = new Brick(11125 + 32 * i, 48, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 5; j++) {
                var gold = new Gold2(11157 + 32 * j, 144 + 32 * i, GameObjectIconType.Underground);
                gold.addToGameUI(gameUI);
            }
        }

        for (var i = 0; i < 7; i++) {
            var brick = new Brick(11125 + 32 * i, 208, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var brick = new Brick(11125, 176, GameObjectIconType.Underground);
        brick.addToGameUI(gameUI);

        for (var i = 0; i < 4; i++) {
            var brick = new Brick(11317, 80 + 32 * i, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 2; i++) {
            var brick = new Brick(11349 + 32 * i, 176, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var question_11445_208 = new Question(11445, 208, QuestionItemType.MultiGold, QuestionDisplayType.Brick, GameObjectIconType.Underground);
        question_11445_208.setCollideCount(7);
        question_11445_208.addToGameUI(gameUI);

        var block_11481_48 = new Block(11481, 48, 32, 288);
        block_11481_48.addToGameUI(gameUI);

        var tube_11413_336 = new Block(11418, 336, 90, 64);
        tube_11413_336.addToGameUI(gameUI);
        tube_11413_336.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.RIGHT)) {
                this.gameUI.scene = World_4_2_Scene.Scene4;
                this.gameUI.changeScene();
            }
        });
    },
    restart: function () {

        var oldX = this.x;
        this.div.innerHTML = "";
        this.staticObjects = [];
        this.animateObjects = [];
        this.build();

        this.mario.reborn();

        if (Math.abs(oldX) >= 3560) {
            this.setX(-3727);
            this.mario.setPosition(3811, 336 - this.mario.height);
        } else {
            this.setPosition(-524, 0);
            this.mario.setPosition(572, 0);
        }

        this.scrollable = true;
    },
    onEnd: function() {
        if (this.mario.moveDown(3)) {
            if (this.mario.spriteType != MarioSprite.SlideDown) {
                this.mario.setX(this.mario.x + 5);
                this.mario.setSprite(MarioSprite.SlideDown);
                this.mario.sprite.moveToFrame(0);
            }
            return;
        } else {
            if (this.mario.spriteType != MarioSprite.Move) {
                this.mario.setSprite(MarioSprite.Move);
                this.mario.moving = true;
                this.mario.movingToLeft = true;
                this.mario.setX(this.mario.x + 32);
                this.mario.sprite.setFrameCounter(2);
            }
        }
        if (this.mario.x < 8615) {
            this.mario.moveDown(7);
            this.falling = false;
            this.mario.moveRight(2);
            this.mario.sprite.moveToNextFrame();
        } else {
            this.state = WorldState.None;
            var world = new World_4_3();
            this.gameUI.setWorld(world);
        }
    },
    onChangedScene: function() {
        switch (this.scene) {
            case World_4_2_Scene.Scene1:
                this.mario.setPosition(90, 400 - this.mario.height);
                this.mario.moving = true;
                this.mario.movingToLeft = true;
                this.mario.setSprite(MarioSprite.Move);
                this.mario.sprite.setFrameCounter(4);
                break;
            case World_4_2_Scene.Scene2:
                this.scrollable = true;
                this.mario.setPosition(572, 0);
                this.setPosition(-524, 0);
                break;
            case World_4_2_Scene.Scene3:
                this.scrollable = false;
                this.mario.setPosition(11047, 0);
                this.setPosition(-10997, 0);
                break;
            case World_4_2_Scene.Scene4:
                this.scrollable = true;
                this.mario.setPosition(4723, 336 - (this.mario.type == MarioType.Small ? 32 : 64));
                this.setPosition(-4680, 0);
                break;
            case World_4_2_Scene.Scene5:
                this.scrollable = true;
                this.mario.setPosition(7831, 336 - this.mario.height);
                this.setPosition(-7719, 0);
                break;
            case World_4_2_Scene.Scene6:
                this.scrollable = true;
                this.mario.setPosition(9148, 400 - this.mario.height);
                this.setPosition(-8945, 0);
                break;
        }
    },
    onGame: function () {
        if (this.mario.x < 292) {
            this.mario.moveRight(2);
            this.mario.sprite.moveToNextFrame();
            if (this.mario.x >= 292) {
                this.scene = World_4_2_Scene.Scene2;
                this.changeScene();
            }
            return;
        }
        World.prototype.onGame.call(this);
    },
});