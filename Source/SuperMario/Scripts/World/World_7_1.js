
World_7_1_Scene = {
    None: 0,
    Scene1: 1,
    Scene2: 2,
    Scene3: 3
};

World_7_1 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setSize(6732, 448);
        this.setBackgroundImage(Const.IMAGE_WORLD_7_1);
        this.show();

        this.scrollable = true;
        this.setTitle("World  7-1");

        this.scene = World_7_1_Scene.Scene1;
    },
    scroll: function () {
        if (!this.scrollable) {
            return;
        }

        if (Math.abs(this.x) >= 5704) {
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
        
        var floor_0_400 = new Block(0, 400, 2338, 48);
        floor_0_400.addToGameUI(gameUI);

        var billBlaster_608_336 = new BillBlaster(608, 336, GameObjectIconType.Ground);
        billBlaster_608_336.addToGameUI(gameUI);

        var koopaTroopa_756_352 = new KoopaTroopa(756, 352, KoopaTroopaType.Fly, true, false, GameObjectIconType.Ground);
        koopaTroopa_756_352.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            if (i == 0) {
                var question = new Question(864, 144, QuestionItemType.BigMushroom, QuestionDisplayType.Brick, GameObjectIconType.Ground);
                question.addToGameUI(gameUI);
                continue;
            }
            var brick = new Brick(864 + 32 * i, 144, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var billBlaster_896_304 = new BillBlaster(896, 304, GameObjectIconType.Ground);
        billBlaster_896_304.addToGameUI(gameUI);

        var block_896_368 = new Block(896, 368, 32, 32);
        block_896_368.addToGameUI(gameUI);

        var billBlaster_1152_336 = new BillBlaster(1152, 336, GameObjectIconType.Ground);
        billBlaster_1152_336.addToGameUI(gameUI);

        for (var i = 0; i < 4; i++) {
            var question = new Question(1248 + 32 * i, 272, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Ground);
            question.addToGameUI(gameUI);
        }

        var koopaTroopa_1316_352 = new KoopaTroopa(1316, 352, KoopaTroopaType.Fly, true, false, GameObjectIconType.Ground);
        koopaTroopa_1316_352.addToGameUI(gameUI);

        var billBlaster_1472_336 = new BillBlaster(1472, 304, GameObjectIconType.Ground);
        billBlaster_1472_336.addToGameUI(gameUI);

        var block_1472_368 = new Block(1472, 368, 32, 32);
        block_1472_368.addToGameUI(gameUI);

        var koopaTroopa_1652_352 = new KoopaTroopa(1652, 352, KoopaTroopaType.Fly, true, false, GameObjectIconType.Ground);
        koopaTroopa_1652_352.addToGameUI(gameUI);

        var billBlaster_1792_304 = new BillBlaster(1792, 304, GameObjectIconType.Ground);
        billBlaster_1792_304.addToGameUI(gameUI);

        var block_1792_368 = new Block(1792, 368, 32, 32);
        block_1792_368.addToGameUI(gameUI);

        for (var i = 0; i < 5; i++) {
            if (i == 2) {
                continue;
            }
            if (i == 3) {
                var question = new Question(1984 + 32 * i, 272, QuestionItemType.MultiGold, QuestionDisplayType.Brick, GameObjectIconType.Ground);
                question.setCollideCount(6);
                question.addToGameUI(gameUI);
            }
            var brick = new Brick(1984 + 32 * i, 272, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var billBlaster_2048_208 = new BillBlaster(2048, 208, GameObjectIconType.Ground);
        billBlaster_2048_208.addToGameUI(gameUI);

        var koopaTroopa_2048_352 = new KoopaTroopa(2048, 352, KoopaTroopaType.Fly, true, false, GameObjectIconType.Ground);
        koopaTroopa_2048_352.addToGameUI(gameUI);

        var block_2048_272 = new Block(2048, 272, 32, 32);
        block_2048_272.addToGameUI(gameUI);

        var billBlaster_2176_336 = new BillBlaster(2176, 336, GameObjectIconType.Ground);
        billBlaster_2176_336.addToGameUI(gameUI);

        var floor_2400_400 = new Block(2400, 400, 2466, 48);
        floor_2400_400.addToGameUI(gameUI);

        var tube_2432_304 = new Block(2432, 304, 64, 96);
        tube_2432_304.addToGameUI(gameUI);

        for (var i = 0; i < 8; i++) {
            var brick1 = new Brick(2624 + 32 * i, 144, GameObjectIconType.Ground);
            brick1.addToGameUI(gameUI);
            var brick2 = new Brick(2624 + 32 * i, 272, GameObjectIconType.Ground);
            brick2.addToGameUI(gameUI);
        }

        var hammerBrother_2784_224 = new HammerBrother(2784, 224);
        hammerBrother_2784_224.addToGameUI(gameUI);

        var hammerBrother_2752_96 = new HammerBrother(2752, 96);
        hammerBrother_2752_96.addToGameUI(gameUI);

        var tube_2976_304 = new Block(2976, 304, 64, 96);
        tube_2976_304.attachCollidesUp(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.DOWN) && ((gameObject.x > this.x) && (gameObject.x + gameObject.width < this.x + this.width))) {
                this.gameUI.scene = World_7_1_Scene.Scene2;
                this.gameUI.changeScene();
            }
        });
        tube_2976_304.addToGameUI(gameUI);

        var billBlaster_3328_336 = new BillBlaster(3328, 336, GameObjectIconType.Ground);
        billBlaster_3328_336.addToGameUI(gameUI);

        var tube_3488_304 = new Block(3488, 304, 64, 96);
        tube_3488_304.addToGameUI(gameUI);

        var tube_3680_304 = new Block(3680, 336, 64, 64);
        tube_3680_304.addToGameUI(gameUI);

        var koopaTroopa_3820_352 = new KoopaTroopa(3820, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
        koopaTroopa_3820_352.addToGameUI(gameUI);

        var billBlaster_3904_336 = new BillBlaster(3904, 336, GameObjectIconType.Ground);
        billBlaster_3904_336.addToGameUI(gameUI);

        var tube_4096_304 = new Block(4096, 336, 64, 64);
        tube_4096_304.addToGameUI(gameUI);

        for (var i = 0; i < 5; i++) {
            var brick1 = new Brick(4288 + 32 * i, 144, GameObjectIconType.Ground);
            brick1.addToGameUI(gameUI);
            var brick2 = new Brick(4288 + 32 * i, 272, GameObjectIconType.Ground);
            brick2.addToGameUI(gameUI);
        }

        var hammerBrother_4384_224 = new HammerBrother(4384, 224);
        hammerBrother_4384_224.addToGameUI(gameUI);

        var hammerBrother_4352_96 = new HammerBrother(4352, 96);
        hammerBrother_4352_96.addToGameUI(gameUI);

        var block_4512_304 = new Block(4512, 304, 32, 96);
        block_4512_304.addToGameUI(gameUI);

        var billBlaster_4672_304 = new BillBlaster(4672, 304, GameObjectIconType.Ground);
        billBlaster_4672_304.addToGameUI(gameUI);

        var block_4672_368 = new Block(4672, 368, 32, 32);
        block_4672_368.addToGameUI(gameUI);

        for (var i = 0; i < 2; i++) {
            var brick = new Brick(4768 + 32 * i, 240, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var brick_4832_48 = new Brick(4832, 48, GameObjectIconType.Ground);
        brick_4832_48.addToGameUI(gameUI);

        for (var i = 0; i < 2; i++) {
            var brick = new Brick(4896 + 32 * i, 176, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 6; i++) {
            var iron = new Block(4896 + 32 * i, 400 - 32 * (i + 1), 32, 32 * (i + 1));
            iron.addToGameUI(gameUI);
        }

        var floor_4896_400 = new Block(4896, 400, 1320, 48);
        floor_4896_400.addToGameUI(gameUI);

        for (var i = 0; i < 9; i++) {
            var block = new Block(5184 + 32 * i, 368 - 32 * Math.min(i, 7), 32, 32 + 32 * Math.min(i, 7));
            block.addToGameUI(gameUI);
        }

        var buzzyBeetle_5408_80 = new BuzzyBeetle(5408, 80, GameObjectIconType.Ground);
        buzzyBeetle_5408_80.addToGameUI(gameUI);

        var block_6400_368 = new Block(5728, 368, 32, 32);
        block_6400_368.addToGameUI(gameUI);

        var flag = new Block(5728 + 12, 66, 8, 303);
        flag.addToGameUI(gameUI);
        flag.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors) {
                this.setCollidable(false, false, false, false);
                this.gameUI.end();
            }
        });

        // scene2
        var floor_6218_400 = new Block(6218, 400, 512, 48);
        floor_6218_400.addToGameUI(gameUI);

        var brick_6346_48 = new Block(6218, 48, 32, 32 * 11);
        brick_6346_48.addToGameUI(gameUI);

        var brick_6346_320 = new Block(6346, 48, 32 * 7, 32);
        brick_6346_320.addToGameUI(gameUI);

        var brick_6346_320 = new Block(6346, 304, 32 * 7, 94);
        brick_6346_320.addToGameUI(gameUI);

        for (var goldIndexY = 0; goldIndexY < 3; goldIndexY++) {
            for (var goldIndexX = 0; goldIndexX < 7; goldIndexX++) {
                if (goldIndexY == 0 && (goldIndexX == 0 || goldIndexX == 6)) {
                    continue;
                }
                var gold_xy = new Gold2(6346 + 32 * goldIndexX, 144 + 64 * goldIndexY, GameObjectIconType.Underground);
                gold_xy.addToGameUI(gameUI);
            }
        }

        var tube_6702_338 = new Block(6702, 48, 26, 32 * 11);
        tube_6702_338.addToGameUI(gameUI);

        var tube_6636_338 = new Block(6636, 338, 72, 64);
        tube_6636_338.addToGameUI(gameUI);
        tube_6636_338.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.RIGHT)) {
                this.gameUI.scene = World_7_1_Scene.Scene3;
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
        if (this.mario.x < 5920) {
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
            case World_7_1_Scene.Scene1:
                this.scrollable = true;
                this.mario.setPosition(50, 400 - this.mario.height);
                this.setPosition(0, 0);
                break;
            case World_7_1_Scene.Scene2:
                this.scrollable = false;
                this.setPosition(-6218, 0);
                this.mario.setPosition(6268, 0);
                break;
            case World_7_1_Scene.Scene3:
                this.scrollable = true;
                this.setPosition(-3566, 0);
                this.mario.setPosition(3696, 304 - this.mario.height);
                break;
        }
    }
});