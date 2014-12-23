
World_8_2_Scene = {
    None: 0,
    Scene1: 1,
    Scene2: 2,
    Scene3: 3
};

World_8_2 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setSize(7913, 448);
        this.setBackgroundImage(Const.IMAGE_WORLD_8_2);
        this.show();

        this.scrollable = true;
        this.setTitle("World  8-2");

        this.scene = World_8_2_Scene.Scene1;

        ImageLoader.load(this, [Const.IMAGE_WORLD_8_3]);
        ScriptLoader.load(this, [Const.SCRIPT_WORLD_8_3]);
    },
    scroll: function () {
        if (!this.scrollable) {
            return;
        }

        if (Math.abs(this.x) >= 6886) {
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
        
        var floor_0_400 = new Block(0, 400, 480, 48);
        floor_0_400.addToGameUI(gameUI);

        var floor_512_400 = new Block(512, 400, 160, 48);
        floor_512_400.addToGameUI(gameUI);

        var koopaTroopa_512_352 = new KoopaTroopa(512, 352, KoopaTroopaType.Fly, true, false, GameObjectIconType.Ground);
        koopaTroopa_512_352.addToGameUI(gameUI);

        for (var i = 0; i < 4; i++) {
            var block = new Block(545 + 32 * i, 400 - 32 * i, 32, 32 * i);
            block.addToGameUI(gameUI);
        }

        for (var i = 0; i < 4; i++) {
            var block = new Block(544 + 32 * i, 400 - 32 * (i + 1), 32, 32 * (i + 1));
            block.addToGameUI(gameUI);
        }

        for (var i = 0; i < 4; i++) {
            var block = new Block(704 + 32 * i, 400 - 32 * Math.min(i + 6, 8), 32, 32 * Math.min(i + 6, 8));
            block.addToGameUI(gameUI);
        }

        var floor_704_400 = new Block(704, 400, 448, 48);
        floor_704_400.addToGameUI(gameUI);

        for (var i = 0; i < 4; i++) {
            var question = new Question(928 + 32 * i, 272, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Ground);
            question.addToGameUI(gameUI);
        }

        var floor_1184_400 = new Block(1184, 400, 256, 48);
        floor_1184_400.addToGameUI(gameUI);

        for (var i = 0; i < 33; i++) {
            if (i == 1) {
                continue;
            }
            var brick = new Brick(1376 + 32 * i, 144, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var question_1408_144 = new Question(1408, 144, QuestionItemType.LifeMushroom, QuestionDisplayType.Brick, GameObjectIconType.Ground);
        question_1408_144.addToGameUI(gameUI);

        var spring_1408_352 = new Spring(1408, 352, GameObjectIconType.Ground);
        spring_1408_352.addToGameUI(gameUI);

        var floor_1472_400 = new Block(1472, 400, 128, 48);
        floor_1472_400.addToGameUI(gameUI);

        var floor_1632_400 = new Block(1632, 400, 32, 48);
        floor_1632_400.addToGameUI(gameUI);

        var floor_1632_400 = new Block(1696, 400, 96, 48);
        floor_1632_400.addToGameUI(gameUI);

        var koopaTroopa_1734_352 = new KoopaTroopa(1734, 352, KoopaTroopaType.Fly, true, false, GameObjectIconType.Ground);
        koopaTroopa_1734_352.addToGameUI(gameUI);

        var floor_1824_400 = new Block(1824, 400, 192, 48);
        floor_1824_400.addToGameUI(gameUI);

        var floor_2048_400 = new Block(2048, 400, 448, 48);
        floor_2048_400.addToGameUI(gameUI);

        var koopaTroopa_2132_352 = new KoopaTroopa(2132, 352, KoopaTroopaType.Fly, true, false, GameObjectIconType.Ground);
        koopaTroopa_2132_352.addToGameUI(gameUI);

        var koopaTroopa_2278_352 = new KoopaTroopa(2278, 352, KoopaTroopaType.Fly, true, false, GameObjectIconType.Ground);
        koopaTroopa_2278_352.addToGameUI(gameUI);

        for (var i = 0; i < 2; i++) {
            var brick = new Brick(2464 + 32 * i, 272, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var floor_2560_400 = new Block(2560, 400, 128, 48);
        floor_2560_400.addToGameUI(gameUI);

        var billBlaster_2720_336 = new BillBlaster(2720, 336, GameObjectIconType.Ground);
        billBlaster_2720_336.addToGameUI(gameUI);

        var floor_2720_400 = new Block(2720, 400, 1696, 48);
        floor_2720_400.addToGameUI(gameUI);

        var koopaTroopa_2916_352 = new KoopaTroopa(2916, 352, KoopaTroopaType.Fly, true, false, GameObjectIconType.Ground);
        koopaTroopa_2916_352.addToGameUI(gameUI);

        var billBlaster_2976_304 = new BillBlaster(2976, 304, GameObjectIconType.Ground);
        billBlaster_2976_304.addToGameUI(gameUI);

        var block_2976_368 = new Block(2976, 368, 32, 32);
        block_2976_368.addToGameUI(gameUI);

        for (var i = 0; i < 1; i++) {
            var brick = new Brick(3168 + 32 * i, 272, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var question_3200_272 = new Question(3200, 272, QuestionItemType.BigMushroom, QuestionDisplayType.Brick, GameObjectIconType.Ground);
        question_3200_272.addToGameUI(gameUI);

        var koopaTroopa_3248_352 = new KoopaTroopa(3248, 352, KoopaTroopaType.Fly, true, false, GameObjectIconType.Ground);
        koopaTroopa_3248_352.addToGameUI(gameUI);

        var billBlaster_3360_336 = new BillBlaster(3360, 336, GameObjectIconType.Ground);
        billBlaster_3360_336.addToGameUI(gameUI);

        for (var i = 0; i < 2; i++) {
            var brick = new Brick(3520 + 32 * i, 272, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var buzzyBeetle_3520_352 = new BuzzyBeetle(3520, 352, GameObjectIconType.Ground);
        buzzyBeetle_3520_352.addToGameUI(gameUI);

        var block_3680_368 = new Block(3680, 368, 32, 32);
        block_3680_368.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            if (i == 1) {
                continue;
            }
            var brick = new Brick(3776 + 32 * i, 272, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var block_3808_240 = new Block(3808, 240, 32, 64);
        block_3808_240.addToGameUI(gameUI);

        var buzzyBeetle_3808_352 = new BuzzyBeetle(3808, 352, GameObjectIconType.Ground);
        buzzyBeetle_3808_352.addToGameUI(gameUI);

        var billBlaster_4000_304 = new BillBlaster(4000, 304, GameObjectIconType.Ground);
        billBlaster_4000_304.addToGameUI(gameUI);

        var block_4000_368 = new Block(4000, 368, 32, 32);
        block_4000_368.addToGameUI(gameUI);

        var tube_4192_336 = new Block(4192, 336, 64, 64);
        tube_4192_336.addToGameUI(gameUI);

        var koopaTroopa_4448_352 = new KoopaTroopa(4448, 352, KoopaTroopaType.Fly, true, false, GameObjectIconType.Ground);
        koopaTroopa_4448_352.addToGameUI(gameUI);

        var floor_4448_400 = new Block(4448, 400, 160, 48);
        floor_4448_400.addToGameUI(gameUI);

        var tube_4544_336 = new Block(4544, 336, 64, 64);
        tube_4544_336.addToGameUI(gameUI);

        var floor_4640_400 = new Block(4640, 400, 32, 48);
        floor_4640_400.addToGameUI(gameUI);

        var floor_4704_400 = new Block(4704, 400, 32, 48);
        floor_4704_400.addToGameUI(gameUI);

        var floor_4928_400 = new Block(4928, 400, 640, 48);
        floor_4928_400.addToGameUI(gameUI);

        var tube_4992_272 = new Block(4992, 272, 64, 128);
        tube_4992_272.attachCollidesUp(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.DOWN) && ((gameObject.x > this.x) && (gameObject.x + gameObject.width < this.x + this.width))) {
                this.gameUI.scene = World_8_2_Scene.Scene2;
                this.gameUI.changeScene();
            }
        });
        tube_4992_272.addToGameUI(gameUI);

        var tube_5216_336 = new Block(5216, 336, 64, 64);
        tube_5216_336.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var koopaTroopa = new KoopaTroopa(5300 + 50 * i, 352, KoopaTroopaType.Fly, true, false, GameObjectIconType.Ground);
            koopaTroopa.addToGameUI(gameUI);
        }

        var billBlaster_5600_336 = new BillBlaster(5600, 336, GameObjectIconType.Ground);
        billBlaster_5600_336.addToGameUI(gameUI);

        var floor_5600_400 = new Block(5600, 400, 32, 48);
        floor_5600_400.addToGameUI(gameUI);

        var floor_5728_400 = new Block(5728, 400, 736, 48);
        floor_5728_400.addToGameUI(gameUI);

        for (var i = 0; i < 5; i++) {
            var block = new Block(5824 + 32 * i, 400 - 32 * (i + 1), 32, 32 * (i + 1));
            block.addToGameUI(gameUI);
        }

        var goomba_5888_272 = new Goomba(5888, 272, GameObjectIconType.Ground);
        goomba_5888_272.addToGameUI(gameUI);

        var goomba_5952_208 = new Goomba(5952, 208, GameObjectIconType.Ground);
        goomba_5952_208.addToGameUI(gameUI);

        var buzzyBeetle_6030_352 = new BuzzyBeetle(6030, 352, GameObjectIconType.Ground);
        buzzyBeetle_6030_352.addToGameUI(gameUI);

        var billBlaster_6112_304 = new BillBlaster(6112, 304, GameObjectIconType.Ground);
        billBlaster_6112_304.addToGameUI(gameUI);

        var block_6112_368 = new Block(6112, 368, 32, 32);
        block_6112_368.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var block = new Block(6368 + 32 * i, 400 - 32 * (i + 1), 32, 32 * (i + 1));
            block.addToGameUI(gameUI);
        }

        var block_6496_240 = new Block(6496, 240, 32, 208);
        block_6496_240.addToGameUI(gameUI);

        var block_6592_144 = new Block(6592, 144, 64, 256);
        block_6592_144.addToGameUI(gameUI);

        var floor_6592_400 = new Block(6592, 400, 806, 48);
        floor_6592_400.addToGameUI(gameUI);

        var block_6400_368 = new Block(6912, 368, 32, 32);
        block_6400_368.addToGameUI(gameUI);

        var flag = new Block(6912 + 12, 66, 8, 303);
        flag.addToGameUI(gameUI);
        flag.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors) {
                this.setCollidable(false, false, false, false);
                this.gameUI.end();
            }
        });

        // Scene2
        var floor_7399_400 = new Block(7399, 400, 512, 48);
        floor_7399_400.addToGameUI(gameUI);

        var block_7399_48 = new Block(7399, 48, 32, 352);
        block_7399_48.addToGameUI(gameUI);

        for (var i = 0; i < 7; i++) {
            var brick = new Brick(7527 + 32 * i, 48, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 5; j++) {
                var gold = new Gold2(7559 + 32 * j, 144 + 32 * i, GameObjectIconType.Underground);
                gold.addToGameUI(gameUI);
            }
        }

        for (var i = 0; i < 7; i++) {
            var brick = new Brick(7527 + 32 * i, 208, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var brick = new Brick(7527, 176, GameObjectIconType.Underground);
        brick.addToGameUI(gameUI);

        for (var i = 0; i < 4; i++) {
            var brick = new Brick(7719, 80 + 32 * i, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 2; i++) {
            var brick = new Brick(7751 + 32 * i, 176, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var question_11445_208 = new Question(7847, 208, QuestionItemType.MultiGold, QuestionDisplayType.Brick, GameObjectIconType.Underground);
        question_11445_208.setCollideCount(7);
        question_11445_208.addToGameUI(gameUI);

        var block_11481_48 = new Block(7883, 48, 32, 288);
        block_11481_48.addToGameUI(gameUI);

        var tube_11413_336 = new Block(7819, 336, 90, 64);
        tube_11413_336.addToGameUI(gameUI);
        tube_11413_336.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.RIGHT)) {
                this.gameUI.scene = World_8_2_Scene.Scene3;
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

        if (Math.abs(oldX) >= 3100) {
            this.setX(-3100);
            this.mario.setPosition(3200, 400 - this.mario.height);
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
        if (this.mario.x < 7104) {
            this.mario.moveDown(7);
            this.falling = false;
            this.mario.moveRight(2);
            this.mario.sprite.moveToNextFrame();
        } else {
            this.state = WorldState.None;
            var world = new World_8_3();
            this.gameUI.setWorld(world);
        }
    },
    onChangedScene: function () {
        switch (this.scene) {
            case World_8_2_Scene.Scene1:
                this.scrollable = true;
                this.mario.setPosition(50, 400 - this.mario.height);
                this.setPosition(0, 0);
                break;
            case World_8_2_Scene.Scene2:
                this.scrollable = false;
                this.setPosition(-7399, 0);
                this.mario.setPosition(7450, 0);
                break;
            case World_8_2_Scene.Scene3:
                this.scrollable = true;
                this.setPosition(-5138, 0);
                this.mario.setPosition(5216, 304 - this.mario.height);
                break;
        }
    }
});