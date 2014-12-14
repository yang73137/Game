

World_6_1 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setSize(6497, 448);
        this.setBackgroundImage(Const.IMAGE_WORLD_6_1);
        this.show();

        this.scrollable = true;
        this.setTitle("World  6-1");
    },
    scroll: function () {
        if (!this.scrollable) {
            return;
        }

        if (Math.abs(this.x) >= 5184 && this.lakitu.active) {
            this.lakitu.active = false;
            this.lakitu.setCollidable(false, false, false, false);
            this.lakitu.state = LakituState.None;
            this.lakitu.sprite.hide();
        }

        if (Math.abs(this.x) >= 5984) {
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

        this.lakitu = new Lakitu(768, 48);
        this.lakitu.active = true;
        this.lakitu.addToGameUI(gameUI);
        
        var floor_0_400 = new Block(0, 400, 640, 48);
        floor_0_400.addToGameUI(gameUI);

        for (var i = 0; i < 2; i++) {
            var question = new Question(514 + 32 * i, 272, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Ground);
            question.addToGameUI(gameUI);
        }

        var floor_704_400 = new Block(704, 400, 288, 48);
        floor_704_400.addToGameUI(gameUI);

        var iron_832_368 = new Block(832, 368, 192, 32);
        iron_832_368.addToGameUI(gameUI);

        var iron_928_336 = new Block(928, 336, 160, 32);
        iron_928_336.addToGameUI(gameUI);

        var iron_1024_304 = new Block(1024, 304, 128, 32);
        iron_1024_304.addToGameUI(gameUI);

        var iron_1120_272 = new Block(1120, 272, 96, 32);
        iron_1120_272.addToGameUI(gameUI);

        var question_1152_144 = new Question(1152, 144, QuestionItemType.BigMushroom, QuestionDisplayType.Brick, GameObjectIconType.Ground);
        question_1152_144.addToGameUI(gameUI);

        var brick_1184_144 = new Brick(1184, 144, GameObjectIconType.Ground);
        brick_1184_144.addToGameUI(gameUI);

        var floor_1184_400 = new Block(1184, 400, 64, 48);
        floor_1184_400.addToGameUI(gameUI);

        for (var i = 0; i < 2; i++) {
            var brick = new Brick(1312 + 32 * i, 272, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var question_1376_272 = new Question(1376, 272, QuestionItemType.MultiGold, QuestionDisplayType.Brick, GameObjectIconType.Ground);
        question_1376_272.setCollideCount(8);
        question_1376_272.addToGameUI(gameUI);

        var floor_1312_400 = new Block(1312, 400, 512, 48);
        floor_1312_400.addToGameUI(gameUI);

        var floor_1888_400 = new Block(1888, 400, 480, 48);
        floor_1888_400.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(1984 + 32 * i, 272, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        for (var i = 0; i < 5; i++) {
            var iron = new Block(2208 + 32 * i, 400 - 32 * Math.min(i + 1, 4), 32, 32 * Math.min(i + 1, 4));
            iron.addToGameUI(gameUI);
        }

        for (var i = 0; i < 2; i++) {
            var gold = new Gold2(2432 + 32 * i, 208, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var floor_2464_400 = new Block(2464, 400, 512, 48);
        floor_2464_400.addToGameUI(gameUI);

        var iron_2688_336 = new Block(2688, 336, 64, 32);
        iron_2688_336.addToGameUI(gameUI);

        var iron_2720_304 = new Block(2720, 304, 32, 32);
        iron_2720_304.addToGameUI(gameUI);

        var iron_2784_240 = new Block(2784, 240, 96, 160);
        iron_2784_240.addToGameUI(gameUI);

        var iron_2816_208 = new Block(2816, 208, 64, 32);
        iron_2816_208.addToGameUI(gameUI);

        var iron_2848_176 = new Block(2848, 176, 32, 32);
        iron_2848_176.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var brick = new Brick(2880 + 32 * i, 176, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 3; i++) {
            var brick = new Brick(2944 + 32 * i, 304, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var floor_3072_400 = new Block(3072, 400, 992, 48);
        floor_3072_400.addToGameUI(gameUI);

        var tube_3264_304 = new Block(3264, 304, 64, 96);
        tube_3264_304.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(3392 + 32 * i, 240, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        for (var i = 0; i < 5; i++) {
            var iron = new Block(3904 + 32 * i, 400 - 32 * (i + 1), 32, 32 * (i + 1));
            iron.addToGameUI(gameUI);
        }

        for (var i = 0; i < 2; i++) {
            var brick = new Brick(4064 + 32 * i, 240, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var question_4160_240 = new Question(4160, 240, QuestionItemType.BigMushroom, QuestionDisplayType.Question, GameObjectIconType.Ground);
        question_4160_240.addToGameUI(gameUI);

        var question_4192_240 = new Question(4192, 240, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Ground);
        question_4192_240.addToGameUI(gameUI);

        for (var i = 0; i < 5; i++) {
            var brick = new Brick(4160 + 32 * i, 368, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var floor_4288_400 = new Block(4288, 400, 64, 48);
        floor_4288_400.addToGameUI(gameUI);

        var floor_4384_400 = new Block(4384, 400, 384, 48);
        floor_4384_400.addToGameUI(gameUI);

        for (var i = 0; i < 6; i++) {
            var iron = new Block(4576 + 32 * i, 400 - 32 * (i + 1), 32, 32 * (i + 1));
            iron.addToGameUI(gameUI);
        }

        for (var i = 0; i < 3; i++) {
            var brick = new Brick(4768 + 32 * i, 208, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 2; i++) {
            var brick = new Brick(4832 + 32 * i, 272, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 3; i++) {
            var brick = new Brick(4864 + 32 * i, 336, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var floor_4960_400 = new Block(4960, 400, 288, 48);
        floor_4960_400.addToGameUI(gameUI);

        var floor_5344_400 = new Block(5344, 400, 224, 48);
        floor_5344_400.addToGameUI(gameUI);

        for (var i = 0; i < 5; i++) {
            var iron = new Block(5408 + 32 * i, 400 - 32 * (i + 1), 32, 32 * (i + 1));
            iron.addToGameUI(gameUI);
        }

        var floor_5632_400 = new Block(5632, 400, 864, 48);
        floor_5632_400.addToGameUI(gameUI);

        var iron_5632_144 = new Block(5632, 144, 64, 256);
        iron_5632_144.addToGameUI(gameUI);

        var block_6400_368 = new Block(5952, 368, 32, 32);
        block_6400_368.addToGameUI(gameUI);

        var flag = new Block(5952 + 12, 66, 8, 303);
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

        if (Math.abs(oldX) >= 2848) {
            this.setX(-3080);
            this.mario.setPosition(3168, 400 - this.mario.height);
        } else {
            this.setX(0);
            this.mario.setPosition(84, 400 - this.mario.height);
        }

        this.lakitu.active = true;
        this.lakitu.setPosition(this.mario.x + 512, 48);

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
        if (this.mario.x < 6208) {
            this.mario.moveDown(7);
            this.falling = false;
            this.mario.moveRight(2);
            this.mario.sprite.moveToNextFrame();
        } else {
            this.state = WorldState.None;
            alert("To be contiuned......");
        }
    }
});