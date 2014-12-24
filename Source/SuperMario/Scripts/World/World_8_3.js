
World_8_3 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setSize(7400, 448);
        this.setBackgroundImage(Const.IMAGE_WORLD_8_3);
        this.show();

        this.scrollable = true;
        this.setTitle("World  8-3");
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
        
        var floor_0_400 = new Block(0, 400, 2208, 48);
        floor_0_400.addToGameUI(gameUI);

        var billBlaster_576_336 = new BillBlaster(576, 336, GameObjectIconType.Ground);
        billBlaster_576_336.addToGameUI(gameUI);

        var koopaTroopa_900_352 = new KoopaTroopa(900, 352, KoopaTroopaType.Fly, true, false, GameObjectIconType.Ground);
        koopaTroopa_900_352.addToGameUI(gameUI);

        var billBlaster_1088_304 = new BillBlaster(1088, 304, GameObjectIconType.Ground);
        billBlaster_1088_304.addToGameUI(gameUI);

        var block_1088_368 = new Block(1088, 368, 32, 32);
        block_1088_368.addToGameUI(gameUI);

        var tube_1696_272 = new Block(1696, 272, 64, 128);
        tube_1696_272.addToGameUI(gameUI);

        for (var i = 0; i < 8; i++) {
            if (i == 6) {
                var question = new Question(1920 + 32 * i, 144, QuestionItemType.BigMushroom, QuestionDisplayType.Brick, GameObjectIconType.Ground);
                question.addToGameUI(gameUI);
                continue;
            }
            var brick = new Brick(1920 + 32 * i, 144, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 8; i++) {
            var brick = new Brick(1920 + 32 * i, 272, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var hammerBrother_2016_224 = new HammerBrother(2016, 224);
        hammerBrother_2016_224.addToGameUI(gameUI);

        var hammerBrother_1952_96 = new HammerBrother(1952, 96);
        hammerBrother_1952_96.addToGameUI(gameUI);

        for (var i = 0; i < 4; i++) {
            var block = new Block(2272 + 32 * i, 272 + 32 * i, 32, 128 - 32 * i);
            block.addToGameUI(gameUI);
        }

        var floor_2272_400 = new Block(2272, 400, 128, 48);
        floor_2272_400.addToGameUI(gameUI);

        var floor_2464_400 = new Block(2464, 400, 1504, 48);
        floor_2464_400.addToGameUI(gameUI);

        var billBlaster_2752_336 = new BillBlaster(2752, 336, GameObjectIconType.Ground);
        billBlaster_2752_336.addToGameUI(gameUI);

        var koopaTroopa_2940_352 = new KoopaTroopa(2940, 352, KoopaTroopaType.Fly, true, false, GameObjectIconType.Ground);
        koopaTroopa_2940_352.addToGameUI(gameUI);

        var block_3040_304 = new Block(3040, 304, 32, 96);
        block_3040_304.addToGameUI(gameUI);

        var block_3488_272 = new Block(3488, 272, 64, 128);
        block_3488_272.addToGameUI(gameUI);

        for (var i = 0; i < 8; i++) {
            var brick = new Brick(3680 + 32 * i, 144, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 8; i++) {
            var brick = new Brick(3680 + 32 * i, 272, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var hammerBrother_3806_224 = new HammerBrother(3806, 224);
        hammerBrother_3806_224.addToGameUI(gameUI);

        var hammerBrother_3742_96 = new HammerBrother(3742, 96);
        hammerBrother_3742_96.addToGameUI(gameUI);

        var block_4032_272 = new Block(4032, 272, 64, 176);
        block_4032_272.addToGameUI(gameUI);

        var floor_4160_400 = new Block(4160, 400, 2144, 48);
        floor_4160_400.addToGameUI(gameUI);

        var koopaTroopa_4350_352 = new KoopaTroopa(4350, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
        koopaTroopa_4350_352.addToGameUI(gameUI);

        var tube_5376_304 = new Block(5376, 304, 64, 96);
        tube_5376_304.addToGameUI(gameUI);

        var question_6080_272 = new Question(6080, 272, QuestionItemType.MultiGold, QuestionDisplayType.Brick, GameObjectIconType.Ground);
        question_6080_272.setCollideCount(5);
        question_6080_272.addToGameUI(gameUI);

        var block_6240_336 = new Block(6240, 336, 32, 64);
        block_6240_336.addToGameUI(gameUI);

        var block_6336_304 = new Block(6336, 336, 32, 32);
        block_6336_304.addToGameUI(gameUI);

        var block_6400_272 = new Block(6400, 272, 32, 32);
        block_6400_272.addToGameUI(gameUI);

        var block_6464_208 = new Block(6464, 208, 32, 32);
        block_6464_208.addToGameUI(gameUI);

        var block_6528_144 = new Block(6528, 144, 64, 32);
        block_6528_144.addToGameUI(gameUI);

        var floor_6656_400 = new Block(6656, 400, 742, 48);
        floor_6656_400.addToGameUI(gameUI);

        var block_6848_368 = new Block(6848, 368, 32, 32);
        block_6848_368.addToGameUI(gameUI);

        var flag = new Block(6848 + 12, 66, 8, 303);
        flag.addToGameUI(gameUI);
        flag.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors) {
                this.setCollidable(false, false, false, false);
                this.gameUI.end();
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
            alert("To be countiuned......");
        }
    }
});