
World_2_1_Scene = {
    None: 0,
    Scene1: 1,
    Scene2: 2,
    Scene3: 3,
    Scene4: 4,
    Scene5: 5,
    Scene6: 6,
};

World_2_1 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setSize(10275, 448);
        this.setBackgroundImage(Const.IMAGE_WORLD_2_1);
        this.setBackgroundPosition(7, 6);
        this.setPosition(0, 0);
        this.show();

        this.setTitle("World  2-1");

        this.scene = World_2_1_Scene.Scene1;
        
        ImageLoader.load(this, [Const.IMAGE_WORLD_2_2]);
        ScriptLoader.load(this, [Const.SCRIPT_WORLD_2_2]);
    },
    scroll: function () {
        if (!this.scrollable) {
            return;
        }

        if ((Math.abs(this.x) >= 6318 && Math.abs(this.x) <= 6832)) {
            return;
        }

        if (Math.abs(this.x) >= 8804) {
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

        var spring = new Spring(6015, 352);
        spring.addToGameUI(gameUI);

        var tree = new Block(2655, 0, 21, 138);
        tree.addToGameUI(gameUI);
        tree.attachCollides(function(gameObject) {
            if (gameObject instanceof MarioBors) {
                this.gameUI.scene = World_2_1_Scene.Scene4;
                this.gameUI.changeScene();
            }
        });

        //scene5
        var floor_6850_400 = new Block(6850, 400, 1952, 48);
        floor_6850_400.addToGameUI(gameUI);

        var block_7100_240 = new Block(7100, 304, 128, 16, true);
        block_7100_240.enabled = false;
        block_7100_240.movingRight = true;
        block_7100_240.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_7100_240.sprite.setBackgroundPosition(0, 376);
        block_7100_240.attachUpdate(function () {
           
            if (!this.enabled) {
                return;
            }

            if (!this.gameUI.scrollable) {
                this.gameUI.scrollable = true;
            }

            if (this.x > 9000) {
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
        
        for (var i = 0; i < 56; i++) {
            var gold = new Gold2(7100 + i * 32, 160, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var block_8770_448 = new Block(8770, 448, 512, 48);
        block_8770_448.attachCollidesUp(function (gameObject) {
            this.gameUI.scene = World_2_1_Scene.Scene5;
            this.gameUI.changeScene();
        });
        block_8770_448.addToGameUI(gameUI);


        // scene1
        for (var i = 0; i < 3; i++) {
            if (i == 1) {
                continue;
            }
            var brick = new Brick(480 + 32 * i, 272, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var goomba_766_208 = new Goomba(766, 208, GameObjectIconType.Ground);
        goomba_766_208.addToGameUI(gameUI);

        var question_512_272 = new Question(512, 272, QuestionItemType.BigMushroom, QuestionDisplayType.Brick, GameObjectIconType.Ground);
        question_512_272.addToGameUI(gameUI);
        
        for (var i = 0; i < 3; i++) {
            var brick = new Brick(926 + 32 * i, 144, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 5; j++) {
                if ((i == 0 && j < 4) || (i == 1 && j < 3) || (i == 2 && j < 2) || (i == 3 && j < 1)) {
                    continue;
                }
                var iron = new Block(638 + j * 32, 240 + i * 32, 32, 32);
                iron.addToGameUI(gameUI);
            }
        }

        var question_894_272 = new Question(894, 272, QuestionItemType.Gold, QuestionDisplayType.Hidden, GameObjectIconType.Ground);
        question_894_272.addToGameUI(gameUI);

        var koopaTroopa_990_352 = new KoopaTroopa(990, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
        koopaTroopa_990_352.addToGameUI(gameUI);

        var koopaTroopa_1054_352 = new KoopaTroopa(1054, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
        koopaTroopa_1054_352.addToGameUI(gameUI);


        var iron_1086_272 = new Block(1086, 272, 32, 128);
        iron_1086_272.addToGameUI(gameUI);
        
        var iron_1118_352 = new Block(1119, 336, 32, 64);
        iron_1118_352.addToGameUI(gameUI);
        
        var goomba_1336_368 = new Goomba(1336, 368, GameObjectIconType.Ground);
        goomba_1336_368.addToGameUI(gameUI);
        
        var goomba_1384_368 = new Goomba(1384, 368, GameObjectIconType.Ground);
        goomba_1384_368.addToGameUI(gameUI);

        var tube_1471_272 = new Block(1471, 272, 64, 128);
        tube_1471_272.addToGameUI(gameUI);
        

        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 5; j++) {
                var question = new Question(1695 + j * 32, 144 + i * 128, (i == 1 && j == 0) ? QuestionItemType.BigMushroom : QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Ground);
                question.addToGameUI(gameUI);
            }
        }
        
        var koopaTroopa_1791_272 = new KoopaTroopa(1791, 224, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
        koopaTroopa_1791_272.addToGameUI(gameUI);
        
        var goomba_1922_368 = new Goomba(1922, 368, GameObjectIconType.Ground);
        goomba_1922_368.addToGameUI(gameUI);
        
        var goomba_1970_368 = new Goomba(1970, 368, GameObjectIconType.Ground);
        goomba_1970_368.addToGameUI(gameUI);
        
        
        var koopaTroopa_2030_272 = new KoopaTroopa(2030, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
        koopaTroopa_2030_272.addToGameUI(gameUI);
        
        var goomba_2175_368 = new Goomba(2175, 368, GameObjectIconType.Ground);
        goomba_2175_368.addToGameUI(gameUI);
        
        var goomba_2223_368 = new Goomba(2223, 368, GameObjectIconType.Ground);
        goomba_2223_368.addToGameUI(gameUI);
        
        var goomba_2271_368 = new Goomba(2271, 368, GameObjectIconType.Ground);
        goomba_2271_368.addToGameUI(gameUI);
        
        var goomba_2719_368 = new Goomba(2719, 368, GameObjectIconType.Ground);
        goomba_2719_368.addToGameUI(gameUI);
        
        var goomba_2767_368 = new Goomba(2767, 368, GameObjectIconType.Ground);
        goomba_2767_368.addToGameUI(gameUI);
        
        var goomba_2815_368 = new Goomba(2815, 368, GameObjectIconType.Ground);
        goomba_2815_368.addToGameUI(gameUI);
        
        var goomba_3310_240 = new Goomba(3310, 240, GameObjectIconType.Ground);
        goomba_3310_240.addToGameUI(gameUI);
        
        var goomba_3612_368 = new Goomba(3612, 368, GameObjectIconType.Ground);
        goomba_3612_368.addToGameUI(gameUI);
        
        var goomba_3808_368 = new Goomba(3808, 368, GameObjectIconType.Ground);
        goomba_3808_368.addToGameUI(gameUI);
        
        var koopaTroopa_4332_352 = new KoopaTroopa(4332, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
        koopaTroopa_4332_352.addToGameUI(gameUI);
        
        var koopaTroopa_4775_352 = new KoopaTroopa(4775, 352, KoopaTroopaType.Fly, true, false, GameObjectIconType.Ground);
        koopaTroopa_4775_352.addToGameUI(gameUI);
        
        var goomba_5274_368 = new Goomba(5274, 368, GameObjectIconType.Ground);
        goomba_5274_368.addToGameUI(gameUI);
        
        var goomba_5322_368 = new Goomba(5322, 368, GameObjectIconType.Ground);
        goomba_5322_368.addToGameUI(gameUI);
        
        var koopaTroopa_5439_352 = new KoopaTroopa(5439, 352, KoopaTroopaType.Fly, true, false, GameObjectIconType.Ground);
        koopaTroopa_5439_352.addToGameUI(gameUI);
        
        var koopaTroopa_5503_352 = new KoopaTroopa(5503, 352, KoopaTroopaType.Fly, true, false, GameObjectIconType.Ground);
        koopaTroopa_5503_352.addToGameUI(gameUI);

        var brick_2175_272 = new Brick(2175, 272, GameObjectIconType.Ground);
        brick_2175_272.addToGameUI(gameUI);
        
        var koopaTroopa_5900_352 = new KoopaTroopa(5900, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
        koopaTroopa_5900_352.addToGameUI(gameUI);

        var question_2207_144 = new Question(2207, 144, QuestionItemType.Star, QuestionDisplayType.Brick, GameObjectIconType.Ground);
        question_2207_144.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var brick = new Brick(2239 + 32 * i, 144, GameObjectIconType.Ground);
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
        tube_3295_272.attachCollidesUp(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.DOWN) && ((gameObject.x > this.x) && (gameObject.x + gameObject.width < this.x + this.width))) {
                this.gameUI.scene = World_2_1_Scene.Scene2;
                this.gameUI.changeScene();
            }
        });
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

        var floor_3070_400 = new Block(3070, 400, 322, 48);
        floor_3070_400.addToGameUI(gameUI);
        
        var floor_3070_400 = new Block(3070, 400, 322, 48);
        floor_3070_400.addToGameUI(gameUI);

        var floor_3487_400 = new Block(3487, 400, 961, 48);
        floor_3487_400.addToGameUI(gameUI);

        var floor_4543_400 = new Block(4543, 400, 321, 48);
        floor_4543_400.addToGameUI(gameUI);

        var floor_4926_400 = new Block(4926, 400, 1906, 48);
        floor_4926_400.addToGameUI(gameUI);
        

        // scene2
        var floor_9325_400 = new Block(9325, 400, 512, 48);
        floor_9325_400.addToGameUI(gameUI);

        var brick_9325_48 = new Block(9325, 48, 32, 32 * 11);
        brick_9325_48.addToGameUI(gameUI);

        var brick_9453_320 = new Block(9453, 304, 32 * 7, 94);
        brick_9453_320.addToGameUI(gameUI);

        var brick_9453_320 = new Block(9453, 48, 32 * 7, 32);
        brick_9453_320.addToGameUI(gameUI);

        var tube_9742_338 = new Block(9742, 338, 72, 64);
        tube_9742_338.addToGameUI(gameUI);
        tube_9742_338.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.RIGHT)) {
                this.gameUI.scene = World_2_1_Scene.Scene3;
                this.gameUI.changeScene();
            }
        });

        var tube_9811_338 = new Block(9811, 48, 26, 32 * 11);
        tube_9811_338.addToGameUI(gameUI);

        for (var goldIndexY = 0; goldIndexY < 3; goldIndexY++) {
            for (var goldIndexX = 0; goldIndexX < 7; goldIndexX++) {
                if (goldIndexY == 0 && (goldIndexX == 0 || goldIndexX == 6)) {
                    continue;
                }
                var gold_xy = new Gold2(9453 + 32 * goldIndexX, 144 + 64 * goldIndexY, GameObjectIconType.Underground);
                gold_xy.addToGameUI(gameUI);
            }
        }
        
        var iron_6399_366 = new Block(6399, 366, 32, 32);
        iron_6399_366 .addToGameUI(gameUI);

        var flag = new Block(6399 + 12, 66, 8, 303);
        flag.addToGameUI(gameUI);
        flag.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors) {
                if (gameObject instanceof MarioBors) {
                    this.setCollidable(false, false, false, false);
                    SoundManager.setBGM(Const.Sound.Effects.Flagpole, false, null);
                    this.gameUI.end();
                }
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

        if (Math.abs(oldX) >= 3000) {
            this.setX(-3000);
            this.mario.setPosition(3100, 400 - this.mario.height);
        } else {
            this.setX(0);
            this.mario.setPosition(84, 400 - this.mario.height);
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
            if (!this.initEnd) {
                this.initEnd = true;
                var world = this;
                SoundManager.setBGM(Const.Sound.Effects.LevelClear, false, function () {
                    var newWorld = new World_2_2();
                    world.gameUI.setWorld(newWorld);
                });
            }
            if (this.mario.spriteType != MarioSprite.Move) {
                this.mario.setSprite(MarioSprite.Move);
                this.mario.moving = true;
                this.mario.movingToLeft = true;
                this.mario.setX(this.mario.x + 32);
                this.mario.sprite.setFrameCounter(2);
            }
        }
        if (this.mario.x < 6589) {
            this.mario.moveDown(7);
            this.falling = false;
            this.mario.moveRight(2);
            this.mario.sprite.moveToNextFrame();
        }
    },
    onChangedScene: function () {
        switch (this.scene) {
            case World_2_1_Scene.Scene1:
                this.scrollable = true;
                this.mario.setPosition(84, 400 - this.mario.height);
                this.setPosition(0, 0);
                SoundManager.setBGM(Const.Sound.Backgrounds.OverworldTheme, true);
                break;
            case World_2_1_Scene.Scene2:
                this.scrollable = false;
                this.mario.setPosition(9375, 0);
                this.setPosition(-9325, 0);
                SoundManager.setBGM(Const.Sound.Backgrounds.UnderGroundTheme, true);
                break;
            case World_2_1_Scene.Scene3:
                this.scrollable = true;
                this.mario.setPosition(3692, 336 - this.mario.height);
                this.setPosition(-3560, 0);
                SoundManager.setBGM(Const.Sound.Backgrounds.OverworldTheme, true);
                break;
            case World_2_1_Scene.Scene4:
                this.scrollable = true;
                this.mario.setPosition(7010, 400 - this.mario.height);
                this.setPosition(-6850, 0);
                SoundManager.setBGM(Const.Sound.Backgrounds.Sky, true);
                break;
            case World_2_1_Scene.Scene5:
                this.scrollable = true;
                this.mario.setPosition(5240, -this.mario.height);
                this.setPosition(-5000, 0);
                SoundManager.setBGM(Const.Sound.Backgrounds.OverworldTheme, true);
                break;
        }
    }
});