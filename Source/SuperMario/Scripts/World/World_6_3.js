
World_6_3 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setSize(5800, 448);
        this.setBackgroundImage(Const.IMAGE_WORLD_6_3);
        this.show();
        
        this.setTitle("World  6-3");
        this.scrollable = true;

        ImageLoader.load(this, [Const.IMAGE_WORLD_6_4]);
        ScriptLoader.load(this, [Const.SCRIPT_WORLD_6_4]);
    },
    scroll: function () {
        if (!this.scrollable) {
            return;
        }

        if (Math.abs(this.x) >= 5286) {
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

        var grass_576_400 = new Block(576, 400, 96, 32);
        grass_576_400.addToGameUI(gameUI);

        var grass_672_272 = new Block(672, 272, 96, 32);
        grass_672_272.addToGameUI(gameUI);

        var grass_768_400 = new Block(768, 400, 96, 32);
        grass_768_400.addToGameUI(gameUI);

        for (var i = 0; i < 2; i++) {
            var gold = new Gold2(896 + 32 * i, 48, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var block_896_430 = new Block(896, 410, 72, 16, true);
        block_896_430.movingUp = true;
        block_896_430.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_896_430.sprite.setBackgroundPosition(0, 376);
        block_896_430.attachUpdate(function () {
            if (this.y >= 410) {
                this.movingUp = true;
            } else if (this.y <= 164) {
                this.movingUp = false;
            }

            this.movingUp ? this.moveUp(1.5) : this.moveDown(1.5);
        });
        block_896_430.addToGameUI(gameUI);

        var grass_992_128 = new Block(992, 272, 128, 32);
        grass_992_128.addToGameUI(gameUI);

        var grass_1184_400 = new Block(1184, 400, 96, 32);
        grass_1184_400.addToGameUI(gameUI);

        var spring_1216_352 = new Spring(1216, 352, GameObjectIconType.Ground);
        spring_1216_352.addToGameUI(gameUI);

        var block_1264_144 = new Block(1264, 144, 72, 16, true);
        block_1264_144.movingRight = true;
        block_1264_144.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_1264_144.sprite.setBackgroundPosition(0, 376);
        block_1264_144.attachUpdate(function () {
            if (this.x >= 1392) {
                this.movingRight = false;
            } else if (this.x <= 1264) {
                this.movingRight = true;
            }

            this.movingRight ? this.moveRight(1) : this.moveLeft(1);
        });
        block_1264_144.addToGameUI(gameUI);

        var block_1552_208 = new Block(1552, 208, 72, 16, true);
        block_1552_208.movingRight = false;
        block_1552_208.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_1552_208.sprite.setBackgroundPosition(0, 376);
        block_1552_208.attachUpdate(function () {
            if (this.x >= 1552) {
                this.movingRight = false;
            } else if (this.x <= 1440) {
                this.movingRight = true;
            }

            this.movingRight ? this.moveRight(1) : this.moveLeft(1);
        });
        block_1552_208.addToGameUI(gameUI);

        for (var i = 0; i < 7; i++) {
            var gold = new Gold2(1376 + 32 * i, 112, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var grass_1376_400 = new Block(1376, 400, 96, 32);
        grass_1376_400.addToGameUI(gameUI);

        var block_1648_144 = new Block(1648, 144, 72, 16, true);
        block_1648_144.movingRight = true;
        block_1648_144.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_1648_144.sprite.setBackgroundPosition(0, 376);
        block_1648_144.attachUpdate(function () {
            if (this.x >= 1760) {
                this.movingRight = false;
            } else if (this.x <= 1648) {
                this.movingRight = true;
            }

            this.movingRight ? this.moveRight(1) : this.moveLeft(1);
        });
        block_1648_144.addToGameUI(gameUI);

        var grass_1568_334 = new Block(1568, 336, 128, 32);
        grass_1568_334.addToGameUI(gameUI);

        var question_1760_80 = new Question(1760, 80, QuestionItemType.BigMushroom, QuestionDisplayType.Question, GameObjectIconType.Ground);
        question_1760_80.addToGameUI(gameUI);

        var block_1920_360 = new Block(1920, 360, 72, 16, true);
        block_1920_360.movingUp = true;
        block_1920_360.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_1920_360.sprite.setBackgroundPosition(0, 376);
        block_1920_360.attachUpdate(function () {
            if (this.y >= 360) {
                this.movingUp = true;
            } else if (this.y <= 100) {
                this.movingUp = false;
            }

            this.movingUp ? this.moveUp(1.5) : this.moveDown(1.5);
        });
        block_1920_360.addToGameUI(gameUI);

        var grass_2080_128 = new Block(2080, 272, 160, 32);
        grass_2080_128.addToGameUI(gameUI);

        for (var i = 0; i < 2; i++) {
            var gold = new Gold2(2336 + 32 * i, 144, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var block_2230_224 = new Block(2230, 224, 72, 16, true);
        block_2230_224.movingRight = true;
        block_2230_224.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_2230_224.sprite.setBackgroundPosition(0, 376);
        block_2230_224.attachUpdate(function () {
            if (this.x >= 2390) {
                this.movingRight = false;
            } else if (this.x <= 2230) {
                this.movingRight = true;
            }

            this.movingRight ? this.moveRight(1) : this.moveLeft(1);
        });
        block_2230_224.addToGameUI(gameUI);

        var block_2640_192 = new Block(2640, 192, 72, 16, true);
        block_2640_192.movingRight = false;
        block_2640_192.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_2640_192.sprite.setBackgroundPosition(0, 376);
        block_2640_192.attachUpdate(function () {
            if (this.x >= 2640) {
                this.movingRight = false;
            } else if (this.x <= 2430) {
                this.movingRight = true;
            }

            this.movingRight ? this.moveRight(1) : this.moveLeft(1);
        });
        block_2640_192.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(2720 + 32 * i, 48, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var grass_2720_80 = new Block(2720, 80, 96, 32);
        grass_2720_80.addToGameUI(gameUI);

        var grass_2720_304 = new Block(2720, 304, 160, 32);
        grass_2720_304.addToGameUI(gameUI);

        var grass_2880_240 = new Block(2880, 240, 96, 32);
        grass_2880_240.addToGameUI(gameUI);

        var grass_2976_400 = new Block(2976, 400, 96, 32);
        grass_2976_400.addToGameUI(gameUI);

        var grass_3104_400 = new Block(3104, 400, 128, 32);
        grass_3104_400.addToGameUI(gameUI);

        for (var i = 0; i < 4; i++) {
            var gold = new Gold2(3200 + 32 * i, 240, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var grass_3296_400 = new Block(3296, 400, 96, 32);
        grass_3296_400.addToGameUI(gameUI);

        var grass_3424_272 = new Block(3424, 272, 160, 32);
        grass_3424_272.addToGameUI(gameUI);

        var grass_3616_400 = new Block(3616, 400, 160, 32);
        grass_3616_400.addToGameUI(gameUI);

        var spring_3712_352 = new Spring(3712, 352, GameObjectIconType.Ground);
        spring_3712_352.addToGameUI(gameUI);

        var block_3760_144 = new Block(3760, 144, 72, 16, true);
        block_3760_144.movingRight = true;
        block_3760_144.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_3760_144.sprite.setBackgroundPosition(0, 376);
        block_3760_144.attachUpdate(function () {
            if (this.x >= 3856) {
                this.movingRight = false;
            } else if (this.x <= 3760) {
                this.movingRight = true;
            }

            this.movingRight ? this.moveRight(1) : this.moveLeft(1);
        });
        block_3760_144.addToGameUI(gameUI);

        var block_4144_180 = new Block(4144, 180, 72, 16, true);
        block_4144_180.movingRight = false;
        block_4144_180.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_4144_180.sprite.setBackgroundPosition(0, 376);
        block_4144_180.attachUpdate(function () {
            if (this.x >= 4144) {
                this.movingRight = false;
            } else if (this.x <= 3870) {
                this.movingRight = true;
            }

            this.movingRight ? this.moveRight(1) : this.moveLeft(1);
        });
        block_4144_180.addToGameUI(gameUI);

        var grass_3936_400 = new Block(3936, 400, 96, 32);
        grass_3936_400.addToGameUI(gameUI);

        var grass_4224_144 = new Block(4224, 144, 96, 32);
        grass_4224_144.addToGameUI(gameUI);

        var grass_4224_400 = new Block(4224, 400, 128, 32);
        grass_4224_400.addToGameUI(gameUI);

        var grass_4320_272 = new Block(4320, 272, 128, 32);
        grass_4320_272.addToGameUI(gameUI);

        var block_4460_240 = new Block(4460, 240, 72, 16, true);
        block_4460_240.movingRight = true;
        block_4460_240.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_4460_240.sprite.setBackgroundPosition(0, 376);
        block_4460_240.attachUpdate(function () {
            if (this.x >= 4640) {
                this.movingRight = false;
            } else if (this.x <= 4460) {
                this.movingRight = true;
            }

            this.movingRight ? this.moveRight(1) : this.moveLeft(1);
        });
        block_4460_240.addToGameUI(gameUI);

        var block_4890_208 = new Block(4890, 208, 72, 16, true);
        block_4890_208.movingRight = false;
        block_4890_208.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_4890_208.sprite.setBackgroundPosition(0, 376);
        block_4890_208.attachUpdate(function () {
            if (this.x >= 4890) {
                this.movingRight = false;
            } else if (this.x <= 4700) {
                this.movingRight = true;
            }

            this.movingRight ? this.moveRight(1) : this.moveLeft(1);
        });
        block_4890_208.addToGameUI(gameUI);

        var grass_4992_144 = new Block(4992, 144, 96, 32);
        grass_4992_144.addToGameUI(gameUI);

        var floor_5120_400 = new Block(5120, 400, 678, 48);
        floor_5120_400.addToGameUI(gameUI);

        var iron_5344_368 = new Block(5344, 368, 32, 32);
        iron_5344_368.addToGameUI(gameUI);

        var flag = new Block(5344 + 12, 66, 8, 304);
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

        if (Math.abs(oldX) >= 2940) {
            this.setX(-2950);
            this.mario.setPosition(3160, 400 - this.mario.height);
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
        if (this.mario.x < 5504) {
            this.mario.moveDown(7);
            this.falling = false;
            this.mario.moveRight(2);
            this.mario.sprite.moveToNextFrame();
        } else {
            this.state = WorldState.None;
            var world = new World_6_4();
            this.gameUI.setWorld(world);
        }
    }
});