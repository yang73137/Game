
World_5_3 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setSize(5258, 448);
        this.setBackgroundImage(Const.IMAGE_WORLD_5_3);
        this.show();
        
        this.setTitle("World  5-3");
        this.scrollable = true;

        ImageLoader.load(this, [Const.IMAGE_WORLD_5_4]);
        ScriptLoader.load(this, [Const.SCRIPT_WORLD_5_4]);
    },
    scroll: function () {
        if (!this.scrollable) {
            return;
        }

        if (Math.abs(this.x) >= 4744) {
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

        var floor_0_400 = new Block(0, 400, 512, 48);
        floor_0_400.addToGameUI(gameUI);

        var grass_576_368 = new Block(576, 368, 128, 32);
        grass_576_368.addToGameUI(gameUI);

        var grass_768_272 = new Block(768, 272, 256, 32);
        grass_768_272.addToGameUI(gameUI);

        var grass_832_144 = new Block(832, 144, 160, 32);
        grass_832_144.addToGameUI(gameUI);

        var koopaTroopa_864_96 = new KoopaTroopa(864, 96, KoopaTroopaType.Normal, true, true, GameObjectIconType.Sky);
        koopaTroopa_864_96.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(864 + 32 * i, 112, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var grass_1024_368 = new Block(1024, 368, 96, 32);
        grass_1024_368.addToGameUI(gameUI);

        var gold_1056_336 = new Gold2(1056, 336, GameObjectIconType.Ground);
        gold_1056_336.addToGameUI(gameUI);

        var grass_1120_240 = new Block(1120, 240, 160, 32);
        grass_1120_240.addToGameUI(gameUI);

        for (var i = 0; i < 2; i++) {
            var gold = new Gold2(1184 + 32 * i, 80, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var grass_1280_112 = new Block(1280, 112, 224, 32);
        grass_1280_112.addToGameUI(gameUI);

        for (var i = 0; i < 2; i++) {
            var goomba = new Goomba(1360 + 48 * i, 80, GameObjectIconType.Ground);
            goomba.addToGameUI(gameUI);
        }

        for (var i = 0; i < 2; i++) {
            var gold = new Gold2(1600 + 32 * i, 176, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var grass_1600_400 = new Block(1600, 400, 128, 32);
        grass_1600_400.addToGameUI(gameUI);

        var block_1760_430 = new Block(1760, 430, 72, 16, true);
        block_1760_430.movingUp = true;
        block_1760_430.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_1760_430.sprite.setBackgroundPosition(0, 376);
        block_1760_430.attachUpdate(function () {
            if (this.y >= 430) {
                this.movingUp = true;
            } else if (this.y <= 164) {
                this.movingUp = false;
            }

            this.movingUp ? this.moveUp(1.5) : this.moveDown(1.5);
        });
        block_1760_430.addToGameUI(gameUI);

        var question_1888_304 = new Question(1888, 304, QuestionItemType.BigMushroom, QuestionDisplayType.Question, GameObjectIconType.Ground);
        question_1888_304.addToGameUI(gameUI);

        var grass_1888_400 = new Block(1888, 400, 160, 32);
        grass_1888_400.addToGameUI(gameUI);

        for (var i = 0; i < 4; i++) {
            var gold = new Gold2(1920 + 32 * i, 112, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var grass_1920_144 = new Block(1920, 144, 128, 32);
        grass_1920_144.addToGameUI(gameUI);

        var grass_2080_400 = new Block(2080, 400, 160, 32);
        grass_2080_400.addToGameUI(gameUI);

        var grass_2240_272 = new Block(2240, 272, 96, 32);
        grass_2240_272.addToGameUI(gameUI);

        var koopaTroopa_2400_336 = new KoopaTroopa(2368, 336, KoopaTroopaType.Fly, false, true, GameObjectIconType.Sky);
        koopaTroopa_2400_336.addToGameUI(gameUI);

        var grass_2432_176 = new Block(2432, 176, 192, 32);
        grass_2432_176.addToGameUI(gameUI);

        var goomba_2496_144 = new Goomba(2496, 144, GameObjectIconType.Ground);
        goomba_2496_144.addToGameUI(gameUI);

        var block_2656_240 = new Block(2656, 240, 72, 16, true);
        block_2656_240.movingRight = true;
        block_2656_240.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_2656_240.sprite.setBackgroundPosition(0, 376);
        block_2656_240.attachUpdate(function () {
            if (this.x >= 2752) {
                this.movingRight = false;
            } else if (this.x <= 2656) {
                this.movingRight = true;
            }

            this.movingRight ? this.moveRight(1) : this.moveLeft(1);
        });
        block_2656_240.addToGameUI(gameUI);

        for (var i = 0; i < 2; i++) {
            var gold = new Gold2(2720 + 32 * i, 144, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var block_2876_240 = new Block(2976, 240, 72, 16, true);
        block_2876_240.movingRight = false;
        block_2876_240.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_2876_240.sprite.setBackgroundPosition(0, 376);
        block_2876_240.attachUpdate(function () {
            if (this.x >= 2976) {
                this.movingRight = false;
            } else if (this.x <= 2876) {
                this.movingRight = true;
            }

            this.movingRight ? this.moveRight(1) : this.moveLeft(1);
        });
        block_2876_240.addToGameUI(gameUI);

        for (var i = 0; i < 2; i++) {
            var gold = new Gold2(2976 + 32 * i, 112, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        for (var i = 0; i < 2; i++) {
            var gold = new Gold2(3104 + 32 * i, 112, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var grass_3136_336 = new Block(3136, 336, 128, 32);
        grass_3136_336.addToGameUI(gameUI);

        var grass_3328_208 = new Block(3328, 208, 256, 32);
        grass_3328_208.addToGameUI(gameUI);

        var koopaTroopa_3430_176 = new KoopaTroopa(3430, 160, KoopaTroopaType.Normal, true, true, GameObjectIconType.Sky);
        koopaTroopa_3430_176.addToGameUI(gameUI);

        var grass_3616_400 = new Block(3616, 400, 96, 32);
        grass_3616_400.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(3616 + 32 * i, 368, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var koopaTroopa_3648_320 = new KoopaTroopa(3648, 320, KoopaTroopaType.Fly, false, true, GameObjectIconType.Sky);
        koopaTroopa_3648_320.addToGameUI(gameUI);

        var grass_3712_272 = new Block(3712, 272, 128, 32);
        grass_3712_272.addToGameUI(gameUI);

        for (var i = 0; i < 2; i++) {
            var gold = new Gold2(3840 + 32 * i, 144, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var grass_3904_272 = new Block(3904, 272, 128, 32);
        grass_3904_272.addToGameUI(gameUI);

        var floor_4128_400 = new Block(4128, 400, 1128, 48);
        floor_4128_400.addToGameUI(gameUI);

        var block_4128_176 = new Block(4128, 176, 72, 16, true);
        block_4128_176.movingRight = false;
        block_4128_176.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_4128_176.sprite.setBackgroundPosition(0, 376);
        block_4128_176.attachUpdate(function () {
            if (this.x >= 4228) {
                this.movingRight = false;
            } else if (this.x <= 4128) {
                this.movingRight = true;
            }

            this.movingRight ? this.moveRight(1) : this.moveLeft(1);
        });
        block_4128_176.addToGameUI(gameUI);

        var koopaTroopa_4246_352 = new KoopaTroopa(4246, 352, KoopaTroopaType.Normal, true, true, GameObjectIconType.Sky);
        koopaTroopa_4246_352.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var iron = new Block(4416 + 64 * i, 272 - 64 * i, 64, 128 + 64 * i);
            iron.addToGameUI(gameUI);
        }

        var iron_4864_368 = new Block(4864, 368, 32, 32);
        iron_4864_368.addToGameUI(gameUI);

        var flag = new Block(4864 + 12, 66, 8, 304);
        flag.addToGameUI(gameUI);
        flag.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors) {
                if (gameObject instanceof MarioBors) {
                    this.setCollidable(false, false, false, false);
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

        if (Math.abs(oldX) >= 2081) {
            this.setX(-2081);
            this.mario.setPosition(2145, 208 - this.mario.height);
        } else {
            this.setX(0);
            this.mario.setPosition(84, 400 - this.mario.height);
        }

        this.scrollable = true;
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
        if (this.mario.x < 5025) {
            this.mario.moveDown(7);
            this.falling = false;
            this.mario.moveRight(2);
            this.mario.sprite.moveToNextFrame();
        } else {
            this.state = WorldState.None;
            var world = new World_5_4();
            this.gameUI.setWorld(world);
        }
    }
});