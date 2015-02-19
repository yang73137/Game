

World_7_3 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setSize(7602, 448);
        this.setBackgroundImage(Const.IMAGE_WORLD_7_3);
        this.show();

        this.setTitle("World  7-3");
        this.scrollable = true;
        
        ImageLoader.load(this, [Const.IMAGE_WORLD_8_1]);
        ScriptLoader.load(this, [Const.SCRIPT_WORLD_8_1]);
    },
    scroll: function () {
        if (!this.scrollable) {
            return;
        }

        if (Math.abs(this.x) >= 7088) {
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
        
        for (var i = 0; i < 3; i++) {
            var cheep = new Cheep(1200 + 64 * i + 1, this.height + 32 * i, false, GameObjectIconType.Ground);
            cheep.addToGameUI(gameUI);
        }

        for (var i = 0; i < 3; i++) {
            var cheep = new Cheep(1500 + 64 * i, this.height + 32 * (3 - i), true, GameObjectIconType.Ground);
            cheep.addToGameUI(gameUI);
        }

        for (var i = 0; i < 3; i++) {
            var cheep = new Cheep(2780 + 64 * i + 1, this.height + 32 * i, false, GameObjectIconType.Ground);
            cheep.addToGameUI(gameUI);
        }

        for (var i = 0; i < 3; i++) {
            var cheep = new Cheep(4360 + 64 * i + 1, this.height + 32 * i, false, GameObjectIconType.Ground);
            cheep.addToGameUI(gameUI);
        }

        for (var i = 0; i < 3; i++) {
            var cheep = new Cheep(5300 + 64 * i + 1, this.height + 32 * i, false, GameObjectIconType.Ground);
            cheep.addToGameUI(gameUI);
        }

        for (var i = 0; i < 3; i++) {
            var cheep = new Cheep(5400 + 64 * i, this.height + 32 * (3 - i), true, GameObjectIconType.Ground);
            cheep.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 4; i++) {
            var gold = new Gold2(1152 + 32 * i, 144, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(1758 + 64 * i, 144, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 2; i++) {
            var gold = new Gold2(1790 + 64 * i, 176, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 2; i++) {
            var gold = new Gold2(2336 + 32 * i, 112, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 2; i++) {
            var gold = new Gold2(2304 + 96 * i, 144, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(3104 + 32 * i, 144, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(3456 + 32 * i, 144, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 6; i++) {
            var gold = new Gold2(4258 + 32 * i, 144, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 4; i++) {
            var gold = new Gold2(4768 + 32 * i, 240, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 6; i++) {
            var gold = new Gold2(5536 + 32 * i, 144, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var floor_0_400 = new Block(0, 400, 225, 48);
        floor_0_400.addToGameUI(gameUI);
        
        var floor_256_400 = new Block(256, 400, 256, 48);
        floor_256_400.addToGameUI(gameUI);
        
        for (var i = 0; i < 3; i++) {
            var block = new Block(320 + (2 - i) * 32, 304 + i * 32, 160 - (2 - i) * 32, 32);
            block.addToGameUI(gameUI);
        }
        
        var floor_480_304 = new Block(480, 304, 1536, 16);
        floor_480_304.addToGameUI(gameUI);

        var iron_992_304 = new Block(992, 304, 32, 144);
        iron_992_304.addToGameUI(gameUI);
        
        var iron_1504_304 = new Block(1504, 304, 32, 144);
        iron_1504_304.addToGameUI(gameUI);
        
        var iron_2016_304 = new Block(2016, 304, 32, 144);
        iron_2016_304.addToGameUI(gameUI);
        
        var iron_2176_304 = new Block(2176, 304, 32, 144);
        iron_2176_304.addToGameUI(gameUI);
        
        var floor_2208_400 = new Block(2208, 304, 320, 16);
        floor_2208_400.addToGameUI(gameUI);
        
        var iron_2528_304 = new Block(2528, 304, 32, 144);
        iron_2528_304.addToGameUI(gameUI);
        
        var iron_2688_304 = new Block(2688, 304, 32, 144);
        iron_2688_304.addToGameUI(gameUI);

        var floor_2720_400 = new Block(2720, 304, 320, 16);
        floor_2720_400.addToGameUI(gameUI);

        var iron_2528_304 = new Block(3040, 304, 32, 144);
        iron_2528_304.addToGameUI(gameUI);
        
        var iron_3168_272 = new Block(3168, 272, 32, 176);
        iron_3168_272.addToGameUI(gameUI);
        
        var floor_3200_272 = new Block(3200, 272, 160, 16);
        floor_3200_272.addToGameUI(gameUI);
        
        var iron_3360_272 = new Block(3360, 272, 32, 176);
        iron_3360_272.addToGameUI(gameUI);

        var question_3264_144 = new Question(3264, 144, QuestionItemType.BigMushroom, QuestionDisplayType.Question, GameObjectIconType.Ground);
        question_3264_144.addToGameUI(gameUI);
        
        var floor_3584_400 = new Block(3584, 400, 256, 48);
        floor_3584_400.addToGameUI(gameUI);
        
        var floor_3904_304 = new Block(3904, 304, 96, 16);
        floor_3904_304.addToGameUI(gameUI);
        
        var iron_4064_304 = new Block(4064, 304, 32, 144);
        iron_4064_304.addToGameUI(gameUI);

        var floor_4096_304 = new Block(4096, 304, 480, 16);
        floor_4096_304.addToGameUI(gameUI);

        var iron_4576_304 = new Block(4576, 304, 32, 144);
        iron_4576_304.addToGameUI(gameUI);
        
        var iron_4672_368 = new Block(4672, 368, 32, 80);
        iron_4672_368.addToGameUI(gameUI);

        var floor_4704_368 = new Block(4704, 368, 256, 16);
        floor_4704_368.addToGameUI(gameUI);

        var iron_4960_368 = new Block(4960, 368, 32, 80);
        iron_4960_368.addToGameUI(gameUI);
        
        var iron_5088_304 = new Block(5088, 304, 32, 144);
        iron_5088_304.addToGameUI(gameUI);

        var floor_5120_304 = new Block(5120, 304, 256, 16);
        floor_5120_304.addToGameUI(gameUI);
        
        var iron_5376_304 = new Block(5376, 304, 32, 144);
        iron_5376_304.addToGameUI(gameUI);
        
        var floor_5472_304 = new Block(5472, 304, 64, 16);
        floor_5472_304.addToGameUI(gameUI);
        
        var floor_5600_304 = new Block(5600, 304, 64, 16);
        floor_5600_304.addToGameUI(gameUI);
        
        var floor_5728_304 = new Block(5728, 304, 64, 16);
        floor_5728_304.addToGameUI(gameUI);
        
        var iron_5856_304 = new Block(5856, 304, 32, 144);
        iron_5856_304.addToGameUI(gameUI);
        
        var floor_5888_304 = new Block(5888, 304, 288, 16);
        floor_5888_304.addToGameUI(gameUI);
        
        var iron_5856_304 = new Block(5856, 304, 32, 144);
        iron_5856_304.addToGameUI(gameUI);
        
        for (var i = 0; i < 3; i++) {
            var block = new Block(6176, 304 + 32 * i, 32 * (i + 2), 32);
            block.addToGameUI(gameUI);
        }
        
        var floor_6144_400 = new Block(6144, 400, 418, 32);
        floor_6144_400.addToGameUI(gameUI);
        
        var floor_0_400 = new Block(6624, 400, 976, 48);
        floor_0_400.addToGameUI(gameUI);

        for (var i = 0; i < 9; i++) {
            var block = new Block(6656 + 32 * i, 368 - 32 * Math.min(i, 7), 32, 32 + 32 * Math.min(i, 7));
            block.addToGameUI(gameUI);
        }
        
        var iron_7200_366 = new Block(7200, 366, 32, 32);
        iron_7200_366.addToGameUI(gameUI);

        var flag = new Block(7200 + 12, 66, 8, 303);
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

        if (Math.abs(oldX) >= 3584) {
            this.setX(-3584);
            this.mario.setPosition(3698, 400 - this.mario.height);
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
            if (this.mario.spriteType != MarioSprite.Move) {
                this.mario.setSprite(MarioSprite.Move);
                this.mario.moving = true;
                this.mario.movingToLeft = true;
                this.mario.setX(this.mario.x + 32);
                this.mario.sprite.setFrameCounter(2);
            }
        }
        if (this.mario.x < 7360) {
            this.mario.moveDown(7);
            this.falling = false;
            this.mario.moveRight(2);
            this.mario.sprite.moveToNextFrame();
        } else {
            this.state = WorldState.None;
            var world = new World_8_1();
            this.gameUI.setWorld(world);
        }
    }
});