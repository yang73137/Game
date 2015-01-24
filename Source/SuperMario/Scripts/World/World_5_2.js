

World_5_2_Scene = {
    None: 0,
    Scene1: 1,
    Scene2: 2,
    Scene3: 3,
    Scene4: 4,
    Scene5: 5,
};


World_5_2 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setSize(11428, 448);
        this.setBackgroundImage(Const.IMAGE_WORLD_5_2);
        this.setBackgroundPosition(1, 1);
        this.show();
        
        this.setTitle("World  5-2");

        this.scene = World_5_2_Scene.Scene1;

        ImageLoader.load(this, [Const.IMAGE_WORLD_5_3]);
        ScriptLoader.load(this, [Const.SCRIPT_WORLD_5_3]);
    },
    scroll: function () {
        if (!this.scrollable) {
            return;
        }

        if (this.scene == World_5_2_Scene.Scene2 && Math.abs(this.x) >= 8438) {
            return;
        }

        if (this.scene == World_5_2_Scene.Scene4 && Math.abs(this.x) >= 10914) {
            return;
        }

        if (Math.abs(this.x) >= 6374 && Math.abs(this.x) <= 6374 + 512) {
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

        // scene1
        var floor_0_400 = new Block(0, 400, 832, 48);
        floor_0_400.addToGameUI(gameUI);

        var spring = new Spring(800, 352);
        spring.addToGameUI(gameUI);

        for (var i = 0; i < 4; i++) {
            var block = new Block(384 + 32 * i, 368 - 32 * i, 32, 32 * (i + 1));
            block.addToGameUI(gameUI);
        }

        var block_512_272 = new Block(512, 272, 32 * 3, 32);
        block_512_272.addToGameUI(gameUI);

        var billBlaster_544_208 = new BillBlaster(544, 208, GameObjectIconType.Ground);
        billBlaster_544_208.addToGameUI(gameUI);

        var floor_928_400 = new Block(928, 400, 1184, 48);
        floor_928_400.addToGameUI(gameUI);

        for (var i = 0; i < 6; i++) {
            var brick = new Brick(928 + 32 * i, 144, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 6; i++) {
            var brick = new Brick(928 + 32 * i, 272, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 4; i++) {
            var block = new Block(1408 + 32 * i, 368 - 32 * i, 32, 32 * (i + 1));
            block.addToGameUI(gameUI);
        }

        var iron_1536_272 = new Block(1536, 272, 32, 32 * 4);
        iron_1536_272.addToGameUI(gameUI);

        var iron_1568_336 = new Block(1568, 336, 32, 32 * 2);
        iron_1568_336.addToGameUI(gameUI);

        var tube_1760_304 = new Block(1760, 304, 64, 96);
        tube_1760_304.attachCollidesUp(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.DOWN) && ((gameObject.x > this.x) && (gameObject.x + gameObject.width < this.x + this.width))) {
                this.gameUI.scene = World_5_2_Scene.Scene2;
                this.gameUI.changeScene();
            }
        });
        tube_1760_304.addToGameUI(gameUI);

        for (var i = 0; i < 4; i++) {
            var block = new Block(1984 + 32 * i, 368 - 32 * i, 32, 32 * (i + 1));
            block.addToGameUI(gameUI);
        }

        var floor_2176_400 = new Block(2176, 400, 768, 48);
        floor_2176_400.addToGameUI(gameUI);

        var iron_2176_240 = new Block(2176, 240, 32, 160);
        iron_2176_240.addToGameUI(gameUI);

        var iron_2208_208 = new Block(2208, 208, 64, 192);
        iron_2208_208.addToGameUI(gameUI);

        for (var i = 0; i < 5; i++) {
            var question = new Question(2496 + 32 * i, 272, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Ground);
            question.addToGameUI(gameUI);
        }

        for (var i = 0; i < 3; i++) {
            var brick = new Brick(2720 + 32 * i, 144, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var tree = new Block(2720, 0, 32, 144);
        tree.addToGameUI(gameUI);
        tree.attachCollides(function (gameObject) {
            if (gameObject instanceof MarioBors) {
                this.gameUI.scene = World_5_2_Scene.Scene4;
                this.gameUI.changeScene();
            }
        });

        for (var i = 0; i < 3; i++) {
            var brick = new Brick(2848 + 32 * i, 240, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var floor_3072_400 = new Block(3072, 400, 992, 48);
        floor_3072_400.addToGameUI(gameUI);

        var billBlaster_3424_336 = new BillBlaster(3424, 336, GameObjectIconType.Ground);
        billBlaster_3424_336.addToGameUI(gameUI);

        var tube_3680_336 = new Block(3680, 336, 64, 64);
        tube_3680_336.addToGameUI(gameUI);

        for (var i = 0; i < 8; i++) {
            var brick = new Brick(3776 + 32 * i, 144, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 8; i++) {
            var brick = new Brick(3776 + 32 * i, 272, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var floor_4128_400 = new Block(4128, 400, 480, 48);
        floor_4128_400.addToGameUI(gameUI);

        var iron_4128_304 = new Block(4128, 304, 32, 96);
        iron_4128_304.addToGameUI(gameUI);

        for (var i = 0; i < 2; i++) {
            var brick = new Brick(4512 + 32 * i, 336, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 3; i++) {
            var brick = new Brick(4704 + 32 * i, 272, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var floor_4832_400 = new Block(4832, 400, 608, 48);
        floor_4832_400.addToGameUI(gameUI);

        for (var i = 0; i < 5; i++) {
            var brick = new Brick(4896 + 32 * i, 144, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var brick_5376_272 = new Brick(5376, 272, GameObjectIconType.Ground);
        brick_5376_272.addToGameUI(gameUI);

        for (var i = 0; i < 4; i++) {
            var brick = new Brick(5504 + 32 * i, 144, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var floor_5536_336 = new Block(5536, 336, 64, 112);
        floor_5536_336.addToGameUI(gameUI);

        var floor_5664_400 = new Block(5664, 400, 256, 48);
        floor_5664_400.addToGameUI(gameUI);

        for (var i = 0; i < 4; i++) {
            var block = new Block(5856 + 32 * i, 368 - 32 * i, 32, 32 * (i + 1));
            block.addToGameUI(gameUI);

            var floor_5664_400 = new Block(5664, 400, 256, 48);
            floor_5664_400.addToGameUI(gameUI);
        }

        var floor_5952_272 = new Block(5952, 272, 64, 178);
        floor_5952_272.addToGameUI(gameUI);

        var iron_5984_240 = new Block(5984, 240, 32, 32);
        iron_5984_240.addToGameUI(gameUI);

        var floor_6048_400 = new Block(6048, 400, 838, 48);
        floor_6048_400.addToGameUI(gameUI);

        var iron_6048_176 = new Block(6048, 176, 32, 224);
        iron_6048_176.addToGameUI(gameUI);

        var iron_6080_144 = new Block(6080, 144, 64, 256);
        iron_6080_144.addToGameUI(gameUI);

        var iron_6400_368 = new Block(6400, 368, 32, 32);
        iron_6400_368.addToGameUI(gameUI);

        var flag = new Block(6400 + 12, 66, 8, 304);
        flag.addToGameUI(gameUI);
        flag.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors) {
                if (gameObject instanceof MarioBors) {
                    this.setCollidable(false, false, false, false);
                    this.gameUI.end();
                }
            }
        });

        // Water
        var floor_6888_400 = new Block(6888, 400, 704, 48);
        floor_6888_400.addToGameUI(gameUI);

        var block_7240_176 = new Block(7240, 176, 160, 32);
        block_7240_176.addToGameUI(gameUI);

        var block_7272_304 = new Block(7272, 304, 32, 96);
        block_7272_304.addToGameUI(gameUI);

        var block_7368_112 = new Block(7368, 112, 32, 64);
        block_7368_112.addToGameUI(gameUI);

        var block_7528_272 = new Block(7528, 272, 32, 128);
        block_7528_272.addToGameUI(gameUI);

        var block_7720_48 = new Block(7720, 48, 64, 96);
        block_7720_48.addToGameUI(gameUI);

        var block_7720_304 = new Block(7720, 304, 64, 144);
        block_7720_304.addToGameUI(gameUI);

        var block_7912_48 = new Block(7912, 48, 64, 96);
        block_7912_48.addToGameUI(gameUI);

        var block_7912_304 = new Block(7912, 304, 64, 144);
        block_7912_304.addToGameUI(gameUI);

        var floor_7976_400 = new Block(7976, 400, 128, 48);
        floor_7976_400.addToGameUI(gameUI);

        var block_8104_112 = new Block(8104, 112, 192, 32);
        block_8104_112.addToGameUI(gameUI);

        var block_8104_144 = new Block(8104, 144, 32, 128);
        block_8104_144.addToGameUI(gameUI);

        var floor_8168_400 = new Block(8168, 400, 64, 48);
        floor_8168_400.addToGameUI(gameUI);

        var block_8264_144 = new Block(8264, 144, 32, 128);
        block_8264_144.addToGameUI(gameUI);

        var floor_8296_400 = new Block(8296, 400, 654, 48);
        floor_8296_400.addToGameUI(gameUI);

        var block_8360_336 = new Block(8360, 336, 32, 64);
        block_8360_336.addToGameUI(gameUI);

        var block_8488_272 = new Block(8488, 272, 128, 32);
        block_8488_272.addToGameUI(gameUI);

        var block_8616_176 = new Block(8616, 176, 128, 32);
        block_8616_176.addToGameUI(gameUI);

        for (var i = 0; i < 4; i++) {
            var block = new Block(8776 + 32 * i, 400 - 32 * (i + 1), 32, 32 * (i + 1));
            block.addToGameUI(gameUI);
        }

        var block_8840_272 = new Block(8840, 272, 32, 32);
        block_8840_272.addToGameUI(gameUI);

        var block_8840_48 = new Block(8840, 48, 32 * 5, 32 * 4);
        block_8840_48.addToGameUI(gameUI);

        var tube_8872_208 = new Block(8872, 208, 32, 64);
        tube_8872_208.attachCollidesLeft(function (gameObject) {
            
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.RIGHT)) {
                this.gameUI.scene = World_5_2_Scene.Scene3;
                this.gameUI.changeScene();
            }
        });
        tube_8872_208.addToGameUI(gameUI);

        var block_8904_176 = new Block(8904, 176, 32, 32);
        block_8904_176.addToGameUI(gameUI);

        // sky
        var floor_8960_400 = new Block(8960, 400, 1952, 48);
        floor_8960_400.addToGameUI(gameUI);

        var block_9210_240 = new Block(9210, 304, 128, 16, true);
        block_9210_240.enabled = false;
        block_9210_240.movingRight = true;
        block_9210_240.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_9210_240.sprite.setBackgroundPosition(0, 376);
        block_9210_240.attachUpdate(function () {

            if (!this.enabled) {
                return;
            }

            if (!this.gameUI.scrollable) {
                this.gameUI.scrollable = true;
            }

            if (this.x > 11100) {
                this.sprite.hide();
                this.setCollidable(false, false, false, false);
                return;
            }
            this.moveRight(2);
        });
        block_9210_240.attachCollidesUp(function (gameObject) {
            if (gameObject instanceof MarioBors && !this.enabled) {
                this.enabled = true;
            }
        });
        block_9210_240.addToGameUI(gameUI);

        for (var i = 0; i < 56; i++) {
            var gold = new Gold2(9210 + i * 32, 160, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var block_10880_448 = new Block(10880, 448, 512, 48);
        block_10880_448.attachCollidesUp(function (gameObject) {
            this.gameUI.scene = World_5_2_Scene.Scene5;
            this.gameUI.changeScene();
        });
        block_10880_448.addToGameUI(gameUI);
    },
    restart: function () {

        var oldX = this.x;
        this.div.innerHTML = "";
        this.staticObjects = [];
        this.animateObjects = [];
        this.build();

        this.mario.reborn();

        if (Math.abs(oldX) >= 3072) {
            this.setX(-3072);
            this.mario.setPosition(3172, 400 - this.mario.height);
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
        if (this.mario.x < 6592) {
            this.mario.moveDown(7);
            this.falling = false;
            this.mario.moveRight(2);
            this.mario.sprite.moveToNextFrame();
        } else {
            this.state = WorldState.None;
            var world = new World_5_3();
            this.gameUI.setWorld(world);
        }
    },
    onChangedScene: function () {
        switch (this.scene) {
            case World_5_2_Scene.Scene1:
                this.scrollable = true;
                this.mario.setPosition(84, 400 - this.mario.height);
                this.setPosition(0, 0);
                break;
            case World_5_2_Scene.Scene2:
                this.scrollable = true;
                this.mario.setInWater(true);
                this.mario.setPosition(7000, 0);
                this.setPosition(-6888, 0);
                break;
            case World_5_2_Scene.Scene3:
                this.scrollable = true;
                this.mario.setInWater(false);
                this.mario.setPosition(3696, 336 - this.mario.height);
                this.setPosition(-3584, 0);
                break;
            case World_5_2_Scene.Scene4:
                this.scrollable = true;
                this.mario.setPosition(9150, 400 - this.mario.height);
                this.setPosition(-8960, 0);
                break;
            case World_5_2_Scene.Scene5:
                this.scrollable = true;
                this.mario.setPosition(4210, 0);
                this.setPosition(-4064, 0);
                break;
        }
    }
});