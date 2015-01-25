/// <reference path="World_3_1.js" />


World_6_2_Scene = {
    None: 0,
    Scene1: 1,
    Scene2: 2,
    Scene3: 3,
    Scene4: 4,
    Scene5: 5,
    Scene6: 6,
    Scene7: 7,
    Scene8: 8,
    Scene9: 9,
};


World_6_2 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setSize(13521, 448);
        this.setBackgroundImage(Const.IMAGE_WORLD_6_2);
        this.setBackgroundPosition(1, 1);
        this.show();

        this.setTitle("World  6-2");

        this.scene = World_6_2_Scene.Scene1;

        ImageLoader.load(this, [Const.IMAGE_WORLD_6_3]);
        ScriptLoader.load(this, [Const.SCRIPT_WORLD_6_3]);
    },
    scroll: function () {
        if (!this.scrollable) {
            return;
        }

        if (this.scene == World_6_2_Scene.Scene4 && Math.abs(this.x) >= 9471) {
            return;
        }

        if (this.scene == World_6_2_Scene.Scene8 && Math.abs(this.x) >= 12492) {
            return;
        }

        if (Math.abs(this.x) >= 6886 && Math.abs(this.x) <= 6886 + 512) {
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
        var floor_0_400 = new Block(0, 400, 3936, 48);
        floor_0_400.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var brick = new Brick(320 + 32 * i, 272, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var tube_608_272 = new Block(608, 272, 64, 128);
        tube_608_272.attachCollidesUp(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.DOWN) && ((gameObject.x > this.x) && (gameObject.x + gameObject.width < this.x + this.width))) {
                this.gameUI.scene = World_6_2_Scene.Scene2;
                this.gameUI.changeScene();
            }
        });
        tube_608_272.addToGameUI(gameUI);
      
        for (var i = 0; i < 3; i++) {
            var brick = new Brick(736 + 32 * i, 144, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var tube_896_272 = new Block(896, 272, 64, 128);
        tube_896_272.addToGameUI(gameUI);

        var block_1024_176 = new Block(1024, 176, 64, 96);
        block_1024_176.addToGameUI(gameUI);

        var tube_1120_336 = new Block(1120, 336, 64, 64);
        tube_1120_336.addToGameUI(gameUI);

        var tube_1184_336 = new Block(1184, 336, 64, 64);
        tube_1184_336.addToGameUI(gameUI);

        var tube_1472_272 = new Block(1472, 272, 64, 128);
        tube_1472_272.addToGameUI(gameUI);

        for (var i = 0; i < 2; i++) {
            var brick = new Brick(1632 + 32 * i, 272, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var tube_1792_240 = new Block(1792, 240, 64, 160);
        tube_1792_240.attachCollidesUp(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.DOWN) && ((gameObject.x > this.x) && (gameObject.x + gameObject.width < this.x + this.width))) {
                this.gameUI.scene = World_6_2_Scene.Scene4;
                this.gameUI.changeScene();
            }
        });
        tube_1792_240.addToGameUI(gameUI);

        var block_1984_208 = new Block(1984, 208, 64, 96);
        block_1984_208.addToGameUI(gameUI);

        for (var i = 0; i < 5; i++) {
            var brick = new Brick(2144 + 32 * i, 144, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var tube_2144_336 = new Block(2144, 336, 64, 64);
        tube_2144_336.addToGameUI(gameUI);

        var tube_2368_336 = new Block(2368, 336, 64, 64);
        tube_2368_336.addToGameUI(gameUI);

        for (var i = 0; i < 5; i++) {
            var brick = new Brick(2464 + 32 * i, 144, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var tube_2560_304 = new Block(2560, 304, 64, 96);
        tube_2560_304.addToGameUI(gameUI);

        var tree = new Block(2594, 0, 32, 144);
        tree.attachCollides(function (gameObject) {
            if (gameObject instanceof  MarioBors) {
                this.gameUI.scene = World_6_2_Scene.Scene8;
                this.gameUI.changeScene();
            }
        });
        tree.addToGameUI(gameUI);

        var tube_2688_336 = new Block(2688, 336, 64, 64);
        tube_2688_336.addToGameUI(gameUI);

        var tube_2784_208 = new Block(2784, 208, 64, 192);
        tube_2784_208.addToGameUI(gameUI);

        var tube_3008_304 = new Block(3008, 304, 64, 96);
        tube_3008_304.addToGameUI(gameUI);

        var tube_3264_272 = new Block(3264, 272, 64, 128);
        tube_3264_272.addToGameUI(gameUI);

        var tube_3360_336 = new Block(3360, 336, 64, 64);
        tube_3360_336.addToGameUI(gameUI);

        var brick_3520_272 = new Brick(3520, 272, GameObjectIconType.Ground);
        brick_3520_272.addToGameUI(gameUI);

        var block_3552_176 = new Block(3552, 176, 64, 128);
        block_3552_176.addToGameUI(gameUI);

        var brick_3616_272 = new Brick(3616, 272, GameObjectIconType.Ground);
        brick_3616_272.addToGameUI(gameUI);

        var brick_3680_144 = new Brick(3680, 144, GameObjectIconType.Ground);
        brick_3680_144.addToGameUI(gameUI);

        var tube_3680_336 = new Block(3680, 336, 64, 64);
        tube_3680_336.attachCollidesUp(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.DOWN) && ((gameObject.x > this.x) && (gameObject.x + gameObject.width < this.x + this.width))) {

            }
        });
        tube_3680_336.addToGameUI(gameUI);

        for (var i = 0; i < 9; i++) {
            var brick = new Brick(3808 + 32 * i, 144, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var floor_4128_400 = new Block(4128, 400, 384, 48);
        floor_4128_400.addToGameUI(gameUI);

        var tube_4192_336 = new Block(4192, 336, 64, 64);
        tube_4192_336.addToGameUI(gameUI);

        var tube_4320_336 = new Block(4320, 336, 64, 64);
        tube_4320_336.addToGameUI(gameUI);

        for (var i = 0; i < 2; i++) {
            var brick = new Brick(4416 + 32 * i, 240, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 2; i++) {
            var brick = new Brick(4480 + 32 * i, 144, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var floor_4544_400 = new Block(4544, 400, 32, 48);
        floor_4544_400.addToGameUI(gameUI);

        var floor_4608_400 = new Block(4608, 400, 256, 48);
        floor_4608_400.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var brick = new Brick(4608 + 32 * i, 272, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 2; i++) {
            var brick = new Brick(4640 + 32 * i, 144, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 3; i++) {
            var block = new Block(4768 + 32 * i, 368 - 32 * i, 32, 32 * (i + 1));
            block.addToGameUI(gameUI);
        }

        var floor_4896_400 = new Block(4896, 400, 2502, 48);
        floor_4896_400.addToGameUI(gameUI);

        var tube_4896_304 = new Block(4896, 304, 64, 96);
        tube_4896_304.attachCollidesUp(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.DOWN) && ((gameObject.x > this.x) && (gameObject.x + gameObject.width < this.x + this.width))) {
                this.gameUI.scene = World_6_2_Scene.Scene6;
                this.gameUI.changeScene();
            }
        });
        tube_4896_304.addToGameUI(gameUI);

        var block_4992_272 = new Block(4992, 272, 32, 128);
        block_4992_272.addToGameUI(gameUI);

        var block_5024_336 = new Block(5024, 336, 32, 64);
        block_5024_336.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var brick = new Brick(5120 + 32 * i, 144, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 3; i++) {
            var brick = new Brick(5120 + 32 * i, 272, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var block_5344_176 = new Block(5344, 176, 64, 128);
        block_5344_176.addToGameUI(gameUI);

        var tube_5568_272 = new Block(5568, 272, 64, 128);
        tube_5568_272.addToGameUI(gameUI);

        var tube_5728_336 = new Block(5728, 336, 64, 64);
        tube_5728_336.addToGameUI(gameUI);

        var tube_5792_304 = new Block(5792, 304, 64, 96);
        tube_5792_304.addToGameUI(gameUI);

        var tube_5856_272 = new Block(5856, 272, 64, 128);
        tube_5856_272.addToGameUI(gameUI);

        var tube_6048_304 = new Block(6048, 304, 64, 96);
        tube_6048_304.addToGameUI(gameUI);

        for (var i = 0; i < 9; i++) {
            var block = new Block(6368 + 32 * i, 368 - 32 * Math.min(i, 7), 32, 32 + 32 * Math.min(i, 7));
            block.addToGameUI(gameUI);
        }

        var block_6432_272 = new Block(6432, 272, 32, 32);
        block_6432_272.addToGameUI(gameUI);

        var block_6912_368 = new Block(6912, 368, 32, 32);
        block_6912_368.addToGameUI(gameUI);

        var flag = new Block(6912 + 12, 66, 8, 303);
        flag.addToGameUI(gameUI);
        flag.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors) {
                this.setCollidable(false, false, false, false);
                this.gameUI.end();
            }
        });

        // Underground1
        var distinct1 = -3598;
        var floor_10997_400 = new Block(10997 + distinct1, 400, 512, 48);
        floor_10997_400.addToGameUI(gameUI);

        var block_10997_48 = new Block(10997 + distinct1, 48, 32, 352);
        block_10997_48.addToGameUI(gameUI);

        for (var i = 0; i < 7; i++) {
            var brick = new Brick(11125 + 32 * i + distinct1, 48, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 5; j++) {
                var gold = new Gold2(11157 + 32 * j + distinct1, 144 + 32 * i, GameObjectIconType.Underground);
                gold.addToGameUI(gameUI);
            }
        }

        for (var i = 0; i < 7; i++) {
            var brick = new Brick(11125 + 32 * i + distinct1, 208, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var brick = new Brick(11125 + distinct1, 176, GameObjectIconType.Underground);
        brick.addToGameUI(gameUI);

        for (var i = 0; i < 4; i++) {
            var brick = new Brick(11317 + distinct1, 80 + 32 * i, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 2; i++) {
            var brick = new Brick(11349 + 32 * i + distinct1, 176, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var question_11445_208 = new Question(11445 + distinct1, 208, QuestionItemType.MultiGold, QuestionDisplayType.Brick, GameObjectIconType.Underground);
        question_11445_208.setCollideCount(7);
        question_11445_208.addToGameUI(gameUI);

        var block_11481_48 = new Block(11481 + distinct1, 48, 32, 288);
        block_11481_48.addToGameUI(gameUI);

        var tube_11413_336 = new Block(11418 + distinct1, 336, 90, 64);
        tube_11413_336.addToGameUI(gameUI);
        tube_11413_336.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.RIGHT)) {
                this.gameUI.scene = World_6_2_Scene.Scene3;
                this.gameUI.changeScene();
            }
        });

        // Underground2
        var distinct2 = 5335;
        var floor_7678_400 = new Block(7678 + distinct2, 400, 512, 48);
        floor_7678_400.addToGameUI(gameUI);

        var block_7678_48 = new Block(7678 + distinct2, 48, 32, 32 * 11);
        block_7678_48.addToGameUI(gameUI);

        for (var i = 0; i < 12; i++) {
            var brick = new Brick(7774 + 32 * i + distinct2, 48, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 3; i++) {
            var brick = new Brick(7774 + distinct2, 272 + 32 * i, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 6; i++) {
            var brick = new Brick(7806 + 32 * i + distinct2, 272, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 3; i++) {
            var brick = new Brick(7998 + distinct2, 272 + 32 * i, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var tube_8096_336 = new Block(8096 + distinct2, 336, 90, 64);
        tube_8096_336.addToGameUI(gameUI);
        tube_8096_336.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.RIGHT)) {
                this.gameUI.scene = World_6_2_Scene.Scene7;
                this.gameUI.changeScene();
            }
        });
        tube_8096_336.addToGameUI(gameUI);

        var tube_8164_48 = new Block(8164 + distinct2, 48, 28, 288);
        tube_8164_48.addToGameUI(gameUI);

        var question_8096_208 = new Question(8094 + distinct2, 272, QuestionItemType.BigMushroom, QuestionDisplayType.Brick, GameObjectIconType.Underground);
        question_8096_208.addToGameUI(gameUI);

        for (var i = 0; i < 8; i++) {
            var gold = new Gold2(7774 + 32 * i + distinct2, 240, GameObjectIconType.Underground);
            gold.addToGameUI(gameUI);
        }

        for (var i = 0; i < 10; i++) {
            var gold = new Gold2(7774 + 32 * i + distinct2, 368, GameObjectIconType.Underground);
            gold.addToGameUI(gameUI);
        }

        // Water
        var distinct3 = 1033;
        var floor_6888_400 = new Block(6888 + distinct3, 400, 704, 48);
        floor_6888_400.addToGameUI(gameUI);

        var block_7240_176 = new Block(7240 + distinct3, 176, 160, 32);
        block_7240_176.addToGameUI(gameUI);

        var block_7272_304 = new Block(7272 + distinct3, 304, 32, 96);
        block_7272_304.addToGameUI(gameUI);

        var block_7368_112 = new Block(7368 + distinct3, 112, 32, 64);
        block_7368_112.addToGameUI(gameUI);

        var block_7528_272 = new Block(7528 + distinct3, 272, 32, 128);
        block_7528_272.addToGameUI(gameUI);

        var block_7720_48 = new Block(7720 + distinct3, 48, 64, 96);
        block_7720_48.addToGameUI(gameUI);

        var block_7720_304 = new Block(7720 + distinct3, 304, 64, 144);
        block_7720_304.addToGameUI(gameUI);

        var block_7912_48 = new Block(7912 + distinct3, 48, 64, 96);
        block_7912_48.addToGameUI(gameUI);

        var block_7912_304 = new Block(7912 + distinct3, 304, 64, 144);
        block_7912_304.addToGameUI(gameUI);

        var floor_7976_400 = new Block(7976 + distinct3, 400, 128, 48);
        floor_7976_400.addToGameUI(gameUI);

        var block_8104_112 = new Block(8104 + distinct3, 112, 192, 32);
        block_8104_112.addToGameUI(gameUI);

        var block_8104_144 = new Block(8104 + distinct3, 144, 32, 128);
        block_8104_144.addToGameUI(gameUI);

        var floor_8168_400 = new Block(8168 + distinct3, 400, 64, 48);
        floor_8168_400.addToGameUI(gameUI);

        var block_8264_144 = new Block(8264 + distinct3, 144, 32, 128);
        block_8264_144.addToGameUI(gameUI);

        var floor_8296_400 = new Block(8296 + distinct3, 400, 654, 48);
        floor_8296_400.addToGameUI(gameUI);

        var block_8360_336 = new Block(8360 + distinct3, 336, 32, 64);
        block_8360_336.addToGameUI(gameUI);

        var block_8488_272 = new Block(8488 + distinct3, 272, 128, 32);
        block_8488_272.addToGameUI(gameUI);

        var block_8616_176 = new Block(8616 + distinct3, 176, 128, 32);
        block_8616_176.addToGameUI(gameUI);

        for (var i = 0; i < 4; i++) {
            var block = new Block(8776 + 32 * i + distinct3, 400 - 32 * (i + 1), 32, 32 * (i + 1));
            block.addToGameUI(gameUI);
        }

        var block_8840_272 = new Block(8840 + distinct3, 272, 32, 32);
        block_8840_272.addToGameUI(gameUI);

        var block_8840_48 = new Block(8840 + distinct3, 48, 32 * 5, 32 * 4);
        block_8840_48.addToGameUI(gameUI);

        var tube_8872_208 = new Block(8872 + distinct3, 208, 32, 64);
        tube_8872_208.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.RIGHT)) {
                this.gameUI.scene = World_6_2_Scene.Scene5;
                this.gameUI.changeScene();
            }
        });
        tube_8872_208.addToGameUI(gameUI);

        var block_8904_176 = new Block(8904 + distinct3, 176, 32, 32);
        block_8904_176.addToGameUI(gameUI);

        // Sky
        var distinct4 = 2621;
        var floor_7372_400 = new Block(7372 + distinct4, 400, 2656, 48);
        floor_7372_400.addToGameUI(gameUI);

        var block_7100_240 = new Block(7700 + distinct4, 304, 128, 16, true);
        block_7100_240.enabled = false;
        block_7100_240.movingRight = true;
        block_7100_240.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_7100_240.sprite.setBackgroundPosition(0, 376);
        block_7100_240.attachUpdate(function () {

            if (!this.enabled) {
                return;
            }

            if (this.x > 12766) {
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
            var gold = new Gold2(7852 + i * 32 + distinct4, 176, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        for (var i = 0; i < 16; i++) {
            var gold = new Gold2(8460 + i * 32 + distinct4, 176, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        for (var i = 0; i < 7; i++) {
            var gold = new Gold2(9068 + i * 32 + distinct4, 144, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        for (var i = 0; i < 10; i++) {
            var gold = new Gold2(9644 + i * 32 + distinct4, 144, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(10060 + i * 32 + distinct4, 336, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var block_8396_240 = new Block(8396 + distinct4, 240, 32, 32);
        block_8396_240.addToGameUI(gameUI);

        var block_9004_208 = new Block(9004 + distinct4, 208, 32, 64);
        block_9004_208.addToGameUI(gameUI);

        var block_9324_208 = new Block(9324 + distinct4, 208, 32, 64);
        block_9324_208.addToGameUI(gameUI);

        for (var i = 0; i < 13; i++) {
            if ((i > 2 && i % 2 != 0) || i == 2) {
                continue;
            }
            var block = new Block(9516 + 32 * i + distinct4, 176, 32, 32);
            block.addToGameUI(gameUI);
        }

        var block_10028_448 = new Block(10028 + distinct4, 448, 400, 32);
        block_10028_448.attachCollidesUp(function (gameObject) {
            if (gameObject instanceof MarioBors) {
                this.gameUI.scene = World_6_2_Scene.Scene9;
                this.gameUI.changeScene();
            }
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
        this.mario.setInWater(false);

        this.setX(0);
        this.mario.setPosition(84, 400 - this.mario.height);

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
            var world = new World_6_3();
            this.gameUI.setWorld(world);
        }
    },
    onChangedScene: function () {
        switch (this.scene) {
            case World_6_2_Scene.Scene1:
                this.scrollable = true;
                this.mario.setPosition(84, 400 - this.mario.height);
                this.setPosition(0, 0);
                break;
            case World_6_2_Scene.Scene2:
                this.scrollable = false;
                this.mario.setPosition(7450, 0);
                this.setPosition(-7399, 0);
                break;
            case World_6_2_Scene.Scene3:
                this.scrollable = true;
                this.mario.setPosition(1136, 336 - this.mario.height);
                this.setPosition(-1010, 0);
                break;
            case World_6_2_Scene.Scene4:
                this.scrollable = true;
                this.mario.setInWater(true);
                this.mario.setPosition(8033, 0);
                this.setPosition(-7921, 0);
                break;
            case World_6_2_Scene.Scene5:
                this.scrollable = true;
                this.mario.setInWater(false);
                this.mario.setPosition(3696, 336 - this.mario.height);
                this.setPosition(-3648, 0);
                break;
            case World_6_2_Scene.Scene6:
                this.scrollable = false;
                this.mario.setPosition(13063, 0);
                this.setPosition(-13013, 0);
                break;
            case World_6_2_Scene.Scene7:
                this.scrollable = true;
                this.mario.setPosition(5744, 336 - this.mario.height);
                this.setPosition(-5652, 0);
                break;
            case World_6_2_Scene.Scene8:
                this.scrollable = true;
                this.mario.setPosition(10153, 400 - this.mario.height);
                this.setPosition(-9993, 0);
                break;
            case World_6_2_Scene.Scene9:
                this.scrollable = true;
                this.mario.setPosition(5150, 0);
                this.setPosition(-5054, 0);
                break;
        }
    }
});