

World_3_1_Scene = {
    None: 0,
    Scene1: 1,
    Scene2: 2,
    Scene3: 3,
    Scene4: 4,
    Scene5: 5
};

World_3_1 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setSize(10275, 448);
        this.setBackgroundImage(Const.IMAGE_WORLD_3_1);
        this.setBackgroundPosition(6, 4);
        this.setPosition(0, 0);
        this.show();
        
        this.setTitle("World  3-1");
        this.scene = World_3_1_Scene.Scene1;
        
        ImageLoader.load(this, [Const.IMAGE_WORLD_3_2]);
        ScriptLoader.load(this, [Const.SCRIPT_WORLD_3_2]);
    },
    scroll: function () {
        if (!this.scrollable) {
            return;
        }

        if (Math.abs(this.x) >= 6320 && Math.abs(this.x) <= 6836) {
            return;
        }

        if (Math.abs(this.x) >= 9763) {
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
        
        var spring = new Spring(4032, 352);
        spring.addToGameUI(gameUI);
        
        var tree = new Block(4192, 0, 21, 138);
        tree.addToGameUI(gameUI);
        tree.attachCollides(function (gameObject) {
            if (gameObject instanceof MarioBors) {
                this.gameUI.scene = World_3_1_Scene.Scene4;
                this.gameUI.changeScene();
            }
        });
        
        var koopaTroopa_800_352 = new KoopaTroopa(800, 352, KoopaTroopaType.Fly, true, false, GameObjectIconType.Ground);
        koopaTroopa_800_352.addToGameUI(gameUI);
        
        var koopaTroopa_928_352 = new KoopaTroopa(928, 352, KoopaTroopaType.Fly, true, false, GameObjectIconType.Ground);
        koopaTroopa_928_352.addToGameUI(gameUI);
        
        var goomba_1126_336 = new Goomba(1126, 336, GameObjectIconType.Ground);
        goomba_1126_336.addToGameUI(gameUI);
        
        for (var i = 0; i < 3; i++) {
            var goomba = new Goomba(1670 + 40 * i, 336, GameObjectIconType.Ground);
            goomba.addToGameUI(gameUI);
        }
        
        var goomba_1952_336 = new Goomba(1952, 336, GameObjectIconType.Ground);
        goomba_1952_336.addToGameUI(gameUI);
        
        for (var i = 0; i < 3; i++) {
            var goomba = new Goomba(2588 + 40 * i, 240, GameObjectIconType.Ground);
            goomba.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 2; i++) {
            var goomba = new Goomba(3000 + 40 * i, 336, GameObjectIconType.Ground);
            goomba.addToGameUI(gameUI);
        }
        
        var koopaTroopa_3200_352 = new KoopaTroopa(3200, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
        koopaTroopa_3200_352.addToGameUI(gameUI);

        var hammerBrother_3648_96 = new HammerBrother(3648, 96);
        hammerBrother_3648_96.addToGameUI(gameUI);

        var hammerBrother_3744_224 = new HammerBrother(3744, 224);
        hammerBrother_3744_224.addToGameUI(gameUI);
        
        for (var i = 0; i < 2; i++) {
            var goomba = new Goomba(4448 + 32 * i, 272 - 32 * i, GameObjectIconType.Ground);
            goomba.addToGameUI(gameUI);
        }

        var koopaTroopa_4728_352 = new KoopaTroopa(4728, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
        koopaTroopa_4728_352.addToGameUI(gameUI);
        
        var koopaTroopa_4864_96 = new KoopaTroopa(4864, 96, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
        koopaTroopa_4864_96.addToGameUI(gameUI);
        
        for (var i = 0; i < 3; i++) {
            var goomba = new Goomba(4864 + 40 * i, 336, GameObjectIconType.Ground);
            goomba.addToGameUI(gameUI);
        }

        var koopaTroopa_5312_352 = new KoopaTroopa(5312, 352, KoopaTroopaType.Fly, true, true, GameObjectIconType.Ground);
        koopaTroopa_5312_352.addToGameUI(gameUI);
        
        var koopaTroopa_5344_352 = new KoopaTroopa(5344, 352, KoopaTroopaType.Fly, true, true, GameObjectIconType.Ground);
        koopaTroopa_5344_352.addToGameUI(gameUI);
        
        var koopaTroopa_5408_224 = new KoopaTroopa(5408, 224, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
        koopaTroopa_5408_224.addToGameUI(gameUI);
        
        var koopaTroopa_5472_352 = new KoopaTroopa(5472, 352, KoopaTroopaType.Fly, true, true, GameObjectIconType.Ground);
        koopaTroopa_5472_352.addToGameUI(gameUI);
        
        var koopaTroopa_5948_192 = new KoopaTroopa(5984, 192, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
        koopaTroopa_5948_192.addToGameUI(gameUI);
        
        var koopaTroopa_6080_96 = new KoopaTroopa(6080, 96, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
        koopaTroopa_6080_96.addToGameUI(gameUI);

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
        tube_1216_272.attachCollidesUp(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.DOWN)) {
                this.gameUI.scene = World_3_1_Scene.Scene2;
                this.gameUI.changeScene();
            }
        });
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

        var flag = new Block(6400 + 12, 66, 8, 303);
        flag.addToGameUI(gameUI);
        flag.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors) {
                this.setCollidable(false, false, false, false);
                this.gameUI.end();
            }
        });
        
        // Scene2
        var floor_6854_400 = new Block(6854, 400, 512, 48);
        floor_6854_400.addToGameUI(gameUI);
        
        var block_6854_48 = new Block(6854, 48, 32, 32 * 11);
        block_6854_48.addToGameUI(gameUI);
        
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 4; j++) {
                if (i == 0 && (j == 0 || j == 3)) {
                    continue;
                }
                var gold = new Gold2(7050 + 32 * j, 80 + 32 * i, GameObjectIconType.Underground);
                gold.addToGameUI(gameUI);
            }
        }
        
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 10; j++) {
                if ((i == 0 && (j == 3 || j == 6)) || (i == 1 && (j == 2 || j == 7)) || (i == 2 && (j == 1 || j == 4 || j == 5 || j == 8)) || (i == 3 && (j >= 3 && j <= 6)) || (i == 4 && (j != 1 && j != 8))) {
                    continue;
                }
                if ((i == 1 && (j == 3 || j == 6)) || (i == 2 && (j == 2 || j == 7)) || (i == 3 && (j == 1 || j == 8))) {
                    var gold = new Gold2(6950 + 32 * j, 144 + 32 * i, GameObjectIconType.Underground);
                    gold.addToGameUI(gameUI);
                    continue;
                }
                var brick = new Brick(6950 + 32 * j, 144 + 32 * i, GameObjectIconType.Underground);
                brick.addToGameUI(gameUI);
            }
        }

        var tube_7270_336 = new Block(7278, 336, 90, 52);
        tube_7270_336.addToGameUI(gameUI);
        tube_7270_336.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.RIGHT)) {
                this.gameUI.scene = World_3_1_Scene.Scene3;
                this.gameUI.changeScene();
            }
        });
        tube_7270_336.addToGameUI(gameUI);

        var tube_7338_48 = new Block(7338, 48, 28, 288);
        tube_7338_48.addToGameUI(gameUI);
        
        // Scene3
        var floor_7372_400 = new Block(7372, 400, 2656, 48);
        floor_7372_400.addToGameUI(gameUI);

        var block_7100_240 = new Block(7700, 304, 128, 16, true);
        block_7100_240.enabled = false;
        block_7100_240.movingRight = true;
        block_7100_240.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_7100_240.sprite.setBackgroundPosition(0, 376);
        block_7100_240.attachUpdate(function () {

            if (!this.enabled) {
                return;
            }

            if (this.x > 10226) {
                this.sprite.hide();
                this.setCollidable(false, false, false, false);
                return;
            }
            this.moveRight(2);
        });
        block_7100_240.attachCollidesUp(function (gameObject) {
            if (gameObject instanceof MarioBors && !this.enabled) {
                this.enabled = true;
            }
        });
        block_7100_240.addToGameUI(gameUI);

        for (var i = 0; i < 16; i++) {
            var gold = new Gold2(7852 + i * 32, 176, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 16; i++) {
            var gold = new Gold2(8460 + i * 32, 176, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 7; i++) {
            var gold = new Gold2(9068 + i * 32, 144, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 10; i++) {
            var gold = new Gold2(9644 + i * 32, 144, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(10060 + i * 32, 336, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var block_8396_240 = new Block(8396, 240, 32, 32);
        block_8396_240.addToGameUI(gameUI);
        
        var block_9004_208 = new Block(9004, 208, 32, 64);
        block_9004_208.addToGameUI(gameUI);
        
        var block_9324_208 = new Block(9324, 208, 32, 64);
        block_9324_208.addToGameUI(gameUI);
        
        for (var i = 0; i < 13; i++) {
            if ((i > 2 && i % 2 != 0) || i == 2) {
               continue;
            }
            var block = new Block(9516 + 32 * i, 176, 32, 32);
            block.addToGameUI(gameUI);
        }

        var block_10028_448 = new Block(10028, 448, 400, 32);
        block_10028_448.attachCollidesUp(function (gameObject) {
            this.gameUI.scene = World_3_1_Scene.Scene5;
            this.gameUI.changeScene();
        });
        block_10028_448.addToGameUI(gameUI);
    },
    restart: function () {

        var oldX = this.x;
        this.div.innerHTML = "";
        this.staticObjects = [];
        this.animateObjects = [];
        this.build();
        
        this.mario.reborn();

        if (Math.abs(oldX) >= 3360) {
            this.setX(-3200);
            this.mario.setPosition(3400, 400 - this.mario.height);
        } else {
            this.setX(0);
            this.mario.setPosition(84, 400 - this.mario.height);
        }

        this.scrollable = true;
    },
    onChangedScene: function() {
        switch (this.scene) {
        case World_3_1_Scene.Scene1:
            this.scrollable = true;
            this.mario.setPosition(84, 400 - this.mario.height);
            this.setPosition(0, 0);
            break;
        case World_3_1_Scene.Scene2:
            this.scrollable = false;
            this.mario.setPosition(6904, 0);
            this.setPosition(-6854, 0);
            break;
        case World_3_1_Scene.Scene3:
            this.scrollable = true;
            this.mario.setPosition(2160, 336 - this.mario.height);
            this.setPosition(-2000, 0);
            break;
        case World_3_1_Scene.Scene4:
            this.scrollable = true;
            this.mario.setPosition(7532, 336 - this.mario.height);
            this.setPosition(-7372, 0);
            break;
        case World_3_1_Scene.Scene5:
            this.scrollable = true;
            this.mario.setPosition(5212, 0);
            this.setPosition(-5056, 0);
            break;
        }
    },
    onEnd: function () {
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
        if (this.mario.x < 6592) {
            this.mario.moveDown(7);
            this.falling = false;
            this.mario.moveRight(2);
            this.mario.sprite.moveToNextFrame();
        } else {
            var world = new World_3_2();
            this.gameUI.setWorld(world);
        }
    },
});