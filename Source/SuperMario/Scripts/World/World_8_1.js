
World_8_1_Scene = {
    None: 0,
    Scene1: 1,
    Scene2: 2,
    Scene3: 3
};

World_8_1 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setSize(13036, 448);
        this.setBackgroundImage(Const.IMAGE_WORLD_8_1);
        this.show();

        this.scrollable = true;
        this.setTitle("World  8-1");

        this.scene = World_8_1_Scene.Scene1;
    },
    scroll: function () {
        if (!this.scrollable) {
            return;
        }

        if (Math.abs(this.x) >= 12008) {
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
        
        var floor_0_400 = new Block(0, 400, 1473, 48);
        floor_0_400.addToGameUI(gameUI);

        var buzzyBeetle_530_368 = new BuzzyBeetle(530, 368, GameObjectIconType.Ground);
        buzzyBeetle_530_368.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var goomba = new Goomba(740 + 40 * i, 368, GameObjectIconType.Ground);
            goomba.addToGameUI(gameUI);
        }

        var goomba_946_368 = new Goomba(946, 368, GameObjectIconType.Ground);
        goomba_946_368.addToGameUI(gameUI);

        var tube_1120_272 = new Block(1120, 272, 64, 128);
        tube_1120_272.addToGameUI(gameUI);

        for (var i = 0; i < 2; i++) {
            var koopaTroopa = new KoopaTroopa(1320 + 40 * i, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
            koopaTroopa.addToGameUI(gameUI);
        }

        var floor_1504_400 = new Block(1504, 400, 32, 48);
        floor_1504_400.addToGameUI(gameUI);

        var floor_1568_400 = new Block(1568, 400, 64, 48);
        floor_1568_400.addToGameUI(gameUI);

        var floor_1664_400 = new Block(1664, 400, 64, 48);
        floor_1664_400.addToGameUI(gameUI);

        var floor_1760_400 = new Block(1760, 400, 64, 48);
        floor_1760_400.addToGameUI(gameUI);

        var floor_1856_400 = new Block(1856, 400, 3553, 48);
        floor_1856_400.addToGameUI(gameUI);

        var koopaTroopa_1952_352 = new KoopaTroopa(1952, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
        koopaTroopa_1952_352.addToGameUI(gameUI);

        var gold_2048_240 = new Gold2(2048, 240, GameObjectIconType.Ground);
        gold_2048_240.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var goomba = new Goomba(2200 + 40 * i, 368, GameObjectIconType.Ground);
            goomba.addToGameUI(gameUI);
        }

        var tube_2432_272 = new Block(2432, 272, 64, 128);
        tube_2432_272.addToGameUI(gameUI);

        var buzzyBeetle_2532_368 = new BuzzyBeetle(2532, 368, GameObjectIconType.Ground);
        buzzyBeetle_2532_368.addToGameUI(gameUI);

        var tube_2624_304 = new Block(2624, 304, 64, 96);
        tube_2624_304.addToGameUI(gameUI);

        var gold_2814_240 = new Gold2(2814, 240, GameObjectIconType.Ground);
        gold_2814_240.addToGameUI(gameUI);

        var tube_3008_272 = new Block(3008, 272, 64, 128);
        tube_3008_272.addToGameUI(gameUI);

        var gold_2048_240 = new Gold2(3136, 240, GameObjectIconType.Ground);
        gold_2048_240.addToGameUI(gameUI);

        var tube_3328_272 = new Block(3328, 272, 64, 128);
        tube_3328_272.attachCollidesUp(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.DOWN)) {
                this.gameUI.scene = World_8_1_Scene.Scene2;
                this.gameUI.changeScene();
            }
        });
        tube_3328_272.addToGameUI(gameUI);

        var gold_3484_112 = new Gold2(3484, 112, GameObjectIconType.Ground);
        gold_3484_112.addToGameUI(gameUI);

        var gold_3516_112 = new Gold2(3516, 112, GameObjectIconType.Ground);
        gold_3516_112.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var goomba = new Goomba(3484 + 40 * i, 368, GameObjectIconType.Ground);
            goomba.addToGameUI(gameUI);
        }

        var tube_3680_336 = new Block(3680, 336, 64, 64);
        tube_3680_336.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var koopaTroopa = new KoopaTroopa(3812 + 40 * i, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
            koopaTroopa.addToGameUI(gameUI);
        }

        var tube_4480_304 = new Block(4480, 304, 64, 96);
        tube_4480_304.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var goomba = new Goomba(4672 + 40 * i, 368, GameObjectIconType.Ground);
            goomba.addToGameUI(gameUI);
        }

        var block_4896_272 = new Block(4896, 272, 32, 128);
        block_4896_272.addToGameUI(gameUI);

        var koopaTroopa_5094_352 = new KoopaTroopa(5094, 352, KoopaTroopaType.Fly, true, false, GameObjectIconType.Ground);
        koopaTroopa_5094_352.addToGameUI(gameUI);

        var block_5216_272 = new Block(5216, 272, 32, 128);
        block_5216_272.addToGameUI(gameUI);

        for (var i = 0; i < 8; i++) {
            var brick = new Brick(4928 + 32 * i, 144, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var koopaTroopa_5440_352 = new KoopaTroopa(5440, 352, KoopaTroopaType.Fly, true, false, GameObjectIconType.Ground);
        koopaTroopa_5440_352.addToGameUI(gameUI);

        var floor_5440_400 = new Block(5440, 400, 32, 48);
        floor_5440_400.addToGameUI(gameUI);

        var floor_5504_400 = new Block(5504, 400, 64, 48);
        floor_5504_400.addToGameUI(gameUI);

        var koopaTroopa_5600_352 = new KoopaTroopa(5600, 352, KoopaTroopaType.Fly, true, false, GameObjectIconType.Ground);
        koopaTroopa_5600_352.addToGameUI(gameUI);

        var floor_5600_400 = new Block(5600, 400, 32, 48);
        floor_5600_400.addToGameUI(gameUI);

        var floor_5664_400 = new Block(5664, 400, 64, 48);
        floor_5664_400.addToGameUI(gameUI);

        var floor_5760_400 = new Block(5760, 400, 545, 48);
        floor_5760_400.addToGameUI(gameUI);

        for (var i = 0; i < 8; i++) {
            if (i == 2) {
                var question = new Question(5888 + 32 * i, 240, QuestionItemType.Star, QuestionDisplayType.Brick, GameObjectIconType.Ground);
                question.addToGameUI(gameUI);
                continue;
            }
            var brick = new Brick(5888 + 32 * i, 240, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var floor_6336_400 = new Block(6336, 400, 32, 48);
        floor_6336_400.addToGameUI(gameUI);

        var floor_6400_400 = new Block(6400, 400, 32, 48);
        floor_6400_400.addToGameUI(gameUI);

        var floor_6464_400 = new Block(6464, 400, 609, 48);
        floor_6464_400.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var koopaTroopa = new KoopaTroopa(6596 + 40 * i, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
            koopaTroopa.addToGameUI(gameUI);
        }

        var block_6720_336 = new Block(6720, 336, 32, 64);
        block_6720_336.addToGameUI(gameUI);

        var gold_7136_240 = new Gold2(7136, 240, GameObjectIconType.Ground);
        gold_7136_240.addToGameUI(gameUI);

        var gold_7168_240 = new Gold2(7168, 240, GameObjectIconType.Ground);
        gold_7168_240.addToGameUI(gameUI);

        var floor_7264_400 = new Block(7264, 400, 321, 48);
        floor_7264_400.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var goomba = new Goomba(7400 + 40 * i, 368, GameObjectIconType.Ground);
            goomba.addToGameUI(gameUI);
        }

        var block_7616_306 = new Block(7616, 304, 64, 144);
        block_7616_306.addToGameUI(gameUI);

        var block_7744_272 = new Block(7744, 272, 64, 176);
        block_7744_272.addToGameUI(gameUI);

        var block_7872_240 = new Block(7872, 240, 64, 160);
        block_7872_240.addToGameUI(gameUI);

        var floor_7872_400 = new Block(7872, 400, 1409, 48);
        floor_7872_400.addToGameUI(gameUI);

        var buzzyBeetle_8140_368 = new BuzzyBeetle(8140, 368, GameObjectIconType.Ground);
        buzzyBeetle_8140_368.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var goomba = new Goomba(8270 + 40 * i, 368, GameObjectIconType.Ground);
            goomba.addToGameUI(gameUI);
        }

        var goomba_8480_368 = new Goomba(8480, 368, GameObjectIconType.Ground);
        goomba_8480_368.addToGameUI(gameUI);

        for (var i = 0; i < 2; i++) {
            var goomba = new Goomba(8674 + 40 * i, 368, GameObjectIconType.Ground);
            goomba.addToGameUI(gameUI);
        }

        for (var i = 0; i < 6; i++) {
            var iron = new Block(8800 + 32 * i, 368 - 32 * i, 32, 32 * (i + 1));
            iron.addToGameUI(gameUI);
        }

        var gold_9058_240 = new Gold2(9058, 240, GameObjectIconType.Ground);
        gold_9058_240.addToGameUI(gameUI);

        var gold_9090_240 = new Gold2(9090, 240, GameObjectIconType.Ground);
        gold_9090_240.addToGameUI(gameUI);

        var buzzyBeetle_9100_368 = new BuzzyBeetle(9100, 368, GameObjectIconType.Ground);
        buzzyBeetle_9100_368.addToGameUI(gameUI);

        var gold_9328_240 = new Gold2(9328, 240, GameObjectIconType.Ground);
        gold_9328_240.addToGameUI(gameUI);

        var floor_9376_400 = new Block(9376, 400, 64, 48);
        floor_9376_400.addToGameUI(gameUI);

        var gold_9488_240 = new Gold2(9488, 240, GameObjectIconType.Ground);
        gold_9488_240.addToGameUI(gameUI);

        var floor_9536_400 = new Block(9536, 400, 513, 48);
        floor_9536_400.addToGameUI(gameUI);

        var block_9696_336 = new Block(9696, 336, 32, 64);
        block_9696_336.addToGameUI(gameUI);

        var koopaTroopa_9760_352 = new KoopaTroopa(9760, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
        koopaTroopa_9760_352.addToGameUI(gameUI);

        var block_9824_336 = new Block(9824, 336, 32, 64);
        block_9824_336.addToGameUI(gameUI);

        var gold_10112_240 = new Gold2(10112, 240, GameObjectIconType.Ground);
        gold_10112_240.addToGameUI(gameUI);

        var gold_10144_240 = new Gold2(10144, 240, GameObjectIconType.Ground);
        gold_10144_240.addToGameUI(gameUI);

        var floor_10208_400 = new Block(10208, 400, 32, 48);
        floor_10208_400.addToGameUI(gameUI);

        var gold_10272_240 = new Gold2(10272, 240, GameObjectIconType.Ground);
        gold_10272_240.addToGameUI(gameUI);

        var gold_10304_240 = new Gold2(10304, 240, GameObjectIconType.Ground);
        gold_10304_240.addToGameUI(gameUI);

        var floor_10368_400 = new Block(10368, 400, 1121, 48);
        floor_10368_400.addToGameUI(gameUI);

        var koopaTroopa_10544_352 = new KoopaTroopa(10544, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
        koopaTroopa_10544_352.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var koopaTroopa = new KoopaTroopa(10828 + 40 * i, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
            koopaTroopa.addToGameUI(gameUI);
        }

        var tube_11008_304 = new Block(11008, 304, 64, 96);
        tube_11008_304.addToGameUI(gameUI);

        var tube_11360_336 = new Block(11360, 336, 64, 64);
        tube_11360_336.addToGameUI(gameUI);

        var block_11520_336 = new Block(11520, 336, 32, 128);
        block_11520_336.addToGameUI(gameUI);

        var block_11584_336 = new Block(11584, 272, 32, 176);
        block_11584_336.addToGameUI(gameUI);

        var block_11648_208 = new Block(11648, 208, 32, 240);
        block_11648_208.addToGameUI(gameUI);

        var block_11712_144 = new Block(11712, 144, 64, 256);
        block_11712_144.addToGameUI(gameUI);

        var floor_11712_400 = new Block(11712, 400, 808, 48);
        floor_11712_400.addToGameUI(gameUI);

        var block_6400_368 = new Block(12033, 368, 32, 32);
        block_6400_368.addToGameUI(gameUI);

        var flag = new Block(12033 + 12, 66, 8, 303);
        flag.addToGameUI(gameUI);
        flag.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors) {
                this.setCollidable(false, false, false, false);
                this.gameUI.end();
            }
        });

        // scene2
        var block_12521_48 = new Block(12521, 48, 32, 32 * 11);
        block_12521_48.addToGameUI(gameUI);

        var floor_12521_400 = new Block(12521, 400, 512, 48);
        floor_12521_400.addToGameUI(gameUI);

        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 10; j++) {
                var brick = new Brick(12618 + 32 * j, 48 + 32 * i, GameObjectIconType.Underground);
                brick.addToGameUI(gameUI);
            }
        }

        for (var i = 0; i < 9; i++) {
            var brick = new Brick(12618 + 32 * i, 272, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 8; i++) {
            var gold = new Gold2(12650 + 32 * i, 240, GameObjectIconType.Underground);
            gold.addToGameUI(gameUI);
        }

        for (var i = 0; i < 9; i++) {
            var gold = new Gold2(12618 + 32 * i, 368, GameObjectIconType.Underground);
            gold.addToGameUI(gameUI);
        }

        var question_12906_272 = new Question(12906, 272, QuestionItemType.MultiGold, QuestionDisplayType.Brick, GameObjectIconType.Underground);
        question_12906_272.setCollideCount(10);
        question_12906_272.addToGameUI(gameUI);

        var block_12939_48 = new Block(12938, 48, 96, 288);
        block_12939_48.addToGameUI(gameUI);

        var tube_12943_336 = new Block(12942, 336, 90, 64);
        tube_12943_336.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.RIGHT)) {
                this.gameUI.scene = World_8_1_Scene.Scene3;
                this.gameUI.changeScene();
            }
        });
        tube_12943_336.addToGameUI(gameUI);
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
        if (this.mario.x < 12224) {
            this.mario.moveDown(7);
            this.falling = false;
            this.mario.moveRight(2);
            this.mario.sprite.moveToNextFrame();
        } else {
            this.state = WorldState.None;
            alert("To be contiuned......");
        }
    },
    onChangedScene: function () {
        switch (this.scene) {
            case World_8_1_Scene.Scene1:
                this.scrollable = true;
                this.mario.setPosition(50, 400 - this.mario.height);
                this.setPosition(0, 0);
                break;
            case World_8_1_Scene.Scene2:
                this.scrollable = false;
                this.setPosition(-12521, 0);
                this.mario.setPosition(12571, 0);
                break;
            case World_8_1_Scene.Scene3:
                this.scrollable = true;
                this.setPosition(-3560, 0);
                this.mario.setPosition(3696, 304 - this.mario.height);
                break;
        }
    }
});