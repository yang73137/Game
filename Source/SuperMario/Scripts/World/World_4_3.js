
World_4_3 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setSize(5138, 448);
        this.setBackgroundImage(Const.IMAGE_WORLD_4_3);
        this.show();
        
        this.setTitle("World  4-3");
        this.scrollable = true;

        ImageLoader.load(this, [Const.IMAGE_WORLD_5_1]);
        ScriptLoader.load(this, [Const.SCRIPT_WORLD_5_1]);
    },
    scroll: function () {
        if (!this.scrollable) {
            return;
        }

        if (Math.abs(this.x) >= 4626) {
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

        var floor_0_400 = new Block(0, 400, 482, 48);
        floor_0_400.addToGameUI(gameUI);

        var block_513_400 = new Block(513, 400, 160, 32);
        block_513_400.addToGameUI(gameUI);

        var block_609_140 = new Block(609, 144, 160, 32);
        block_609_140.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(641 + 32 * i, 112, GameObjectIconType.Ground, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var block_737_272 = new Block(737, 272, 224, 32);
        block_737_272.addToGameUI(gameUI);

        var question_929_144 = new Question(929, 144, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Ground);
        question_929_144.addToGameUI(gameUI);

        for (var i = 0; i < 5; i++) {
            var gold = new Gold2(769 + 32 * i, 240, GameObjectIconType.Ground, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        for (var i = 0; i < 2; i++) {
            var koopaTroopa = new KoopaTroopa(769 + 48 * i, 224, KoopaTroopaType.Normal, true, true, GameObjectIconType.Sky);
            koopaTroopa.addToGameUI(gameUI);
        }

        var block_1025_112 = new Block(1025, 112, 96, 32);
        block_1025_112.addToGameUI(gameUI);

        var koopaTroopa_1153_272 = new KoopaTroopa(1153, 272, KoopaTroopaType.Fly, false, true, GameObjectIconType.Sky);
        koopaTroopa_1153_272.addToGameUI(gameUI);

        var block_1153_368 = new Block(1153, 368, 224, 32);
        block_1153_368.addToGameUI(gameUI);

        var koopaTroopa_1217_176 = new KoopaTroopa(1217, 320, KoopaTroopaType.Normal, true, true, GameObjectIconType.Sky);
        koopaTroopa_1217_176.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(1217 + 32 * i, 336, GameObjectIconType.Ground, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var block_1249_144 = new Block(1249, 144, 160, 32);
        block_1249_144.addToGameUI(gameUI);

        var block_1249_144 = new Block(1249, 144, 160, 32);
        block_1249_144.addToGameUI(gameUI);

        var question_1377_48 = new Question(1377, 48, QuestionItemType.BigMushroom, QuestionDisplayType.Question, GameObjectIconType.Ground);
        question_1377_48.addToGameUI(gameUI);

        var block_1409_272 = new Block(1409, 272, 96, 32);
        block_1409_272.addToGameUI(gameUI);

        var gold_1529_240 = new Gold2(1529, 240, GameObjectIconType.Ground);
        gold_1529_240.addToGameUI(gameUI);

        var block_529_336 = new Block(1529, 336, 100, 16, true);
        block_529_336.movingUp = true;
        block_529_336.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_529_336.sprite.setBackgroundPosition(0, 376);
        block_529_336.attachUpdate(function () {
            if (this.y >= 336) {
                this.movingUp = true;
            } else if (this.y <= 176) {
                this.movingUp = false;
            }

            this.movingUp ? this.moveUp(1) : this.moveDown(1);
        });
        block_529_336.addToGameUI(gameUI);

        var block_1633_240 = new Block(1633, 240, 96, 32);
        block_1633_240.addToGameUI(gameUI);

        var block_1745_400 = new Block(1745, 400, 100, 16, true);
        block_1745_400.movingUp = true;
        block_1745_400.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_1745_400.sprite.setBackgroundPosition(0, 376);
        block_1745_400.attachUpdate(function () {
            if (this.y >= 400) {
                this.movingUp = true;
            } else if (this.y <= 224) {
                this.movingUp = false;
            }

            this.movingUp ? this.moveUp(1) : this.moveDown(1);
        });
        block_1745_400.addToGameUI(gameUI);

        var block_1745_400 = new Block(1745, 400, 100, 16, true);
        block_1745_400.movingUp = true;
        block_1745_400.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_1745_400.sprite.setBackgroundPosition(0, 376);
        block_1745_400.attachUpdate(function () {
            if (this.y >= 400) {
                this.movingUp = true;
            } else if (this.y <= 224) {
                this.movingUp = false;
            }

            this.movingUp ? this.moveUp(1) : this.moveDown(1);
        });
        block_1745_400.addToGameUI(gameUI);

        var block_1745_400 = new Block(1865, 400, 100, 16, true);
        block_1745_400.movingUp = true;
        block_1745_400.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_1745_400.sprite.setBackgroundPosition(0, 376);
        block_1745_400.attachUpdate(function () {
            if (this.y >= 400) {
                this.movingUp = true;
            } else if (this.y <= 192) {
                this.movingUp = false;
            }

            this.movingUp ? this.moveUp(1) : this.moveDown(1);
        });
        block_1745_400.addToGameUI(gameUI);

        var block_1745_400 = new Block(1980, 400, 100, 16, true);
        block_1745_400.movingUp = true;
        block_1745_400.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_1745_400.sprite.setBackgroundPosition(0, 376);
        block_1745_400.attachUpdate(function () {
            if (this.y >= 400) {
                this.movingUp = true;
            } else if (this.y <= 160) {
                this.movingUp = false;
            }

            this.movingUp ? this.moveUp(1) : this.moveDown(1);
        });
        block_1745_400.addToGameUI(gameUI);

        var block_2081_400 = new Block(2081, 400, 160, 32);
        block_2081_400.addToGameUI(gameUI);

        var koopaTroopa_2113_366 = new KoopaTroopa(2113, 352, KoopaTroopaType.Normal, true, true, GameObjectIconType.Sky);
        koopaTroopa_2113_366.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(2145 + 32 * i, 176, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var block_2415_208 = new Block(2145, 208, 96, 32);
        block_2415_208.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(2241 + 32 * i, 48, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var block_2241_80 = new Block(2241, 80, 96, 32);
        block_2241_80.addToGameUI(gameUI);

        var block_2305_272 = new Block(2305, 272, 96, 32);
        block_2305_272.addToGameUI(gameUI);

        var gold_2337_240 = new Gold2(2337, 240, GameObjectIconType.Ground);
        gold_2337_240.addToGameUI(gameUI);

        var block_2369_144 = new Block(2369, 144, 160, 32);
        block_2369_144.addToGameUI(gameUI);

        var block_2545_336 = new Block(2545, 336, 100, 16, true);
        block_2545_336.movingUp = true;
        block_2545_336.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_2545_336.sprite.setBackgroundPosition(0, 376);
        block_2545_336.attachUpdate(function () {
            if (this.y >= 336) {
                this.movingUp = true;
            } else if (this.y <= 240) {
                this.movingUp = false;
            }

            this.movingUp ? this.moveUp(1) : this.moveDown(1);
        });
        block_2545_336.addToGameUI(gameUI);

        var block_2817_336 = new Block(2817, 336, 100, 16, true);
        block_2817_336.movingUp = true;
        block_2817_336.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_2817_336.sprite.setBackgroundPosition(0, 376);
        block_2817_336.attachUpdate(function () {
            if (this.y >= 336) {
                this.movingUp = true;
            } else if (this.y <= 240) {
                this.movingUp = false;
            }

            this.movingUp ? this.moveUp(1) : this.moveDown(1);
        });
        block_2817_336.addToGameUI(gameUI);

        var block_2981_336 = new Block(2981, 336, 100, 16, true);
        block_2981_336.movingUp = true;
        block_2981_336.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_2981_336.sprite.setBackgroundPosition(0, 376);
        block_2981_336.attachUpdate(function () {
            if (this.y >= 336) {
                this.movingUp = true;
            } else if (this.y <= 240) {
                this.movingUp = false;
            }

            this.movingUp ? this.moveUp(1) : this.moveDown(1);
        });
        block_2981_336.addToGameUI(gameUI);

        var koopaTroopa_2401_96 = new KoopaTroopa(2401, 96, KoopaTroopaType.Normal, true, true, GameObjectIconType.Sky);
        koopaTroopa_2401_96.addToGameUI(gameUI);

        var block_2689_272 = new Block(2689, 272, 96, 32);
        block_2689_272.addToGameUI(gameUI);

        var block_3169_336 = new Block(3169, 336, 96, 32);
        block_3169_336.addToGameUI(gameUI);

        var block_3361_304 = new Block(3361, 304, 96, 32);
        block_3361_304.addToGameUI(gameUI);

        var block_3489_336 = new Block(3489, 336, 100, 16, true);
        block_3489_336.movingUp = true;
        block_3489_336.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_3489_336.sprite.setBackgroundPosition(0, 376);
        block_3489_336.attachUpdate(function () {
            if (this.y >= 336) {
                this.movingUp = true;
            } else if (this.y <= 240) {
                this.movingUp = false;
            }

            this.movingUp ? this.moveUp(1) : this.moveDown(1);
        });
        block_3489_336.addToGameUI(gameUI);

        for (var i = 0; i < 5; i++) {
            var gold = new Gold2(3617 + 32 * i, 240, GameObjectIconType.Ground, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var block_3617_272 = new Block(3617, 272, 160, 32);
        block_3617_272.addToGameUI(gameUI);

        var block_3745_176 = new Block(3745, 176, 96, 32);
        block_3745_176.addToGameUI(gameUI);

        var block_3873_400 = new Block(3873, 400, 224, 32);
        block_3873_400.addToGameUI(gameUI);

        var block_4161_304 = new Block(4161, 304, 160, 32);
        block_4161_304.addToGameUI(gameUI);

        var block_4369_336 = new Block(4369, 336, 100, 16, true);
        block_4369_336.movingUp = true;
        block_4369_336.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_4369_336.sprite.setBackgroundPosition(0, 376);
        block_4369_336.attachUpdate(function () {
            if (this.y >= 368) {
                this.movingUp = true;
            } else if (this.y <= 80) {
                this.movingUp = false;
            }

            this.movingUp ? this.moveUp(1) : this.moveDown(1);
        });
        block_4369_336.addToGameUI(gameUI);

        var floor_4513_400 = new Block(4513, 400, 625, 48);
        floor_4513_400.addToGameUI(gameUI);

        var iron_4805_368 = new Block(4705, 368, 32, 32);
        iron_4805_368.addToGameUI(gameUI);

        var flag = new Block(4705 + 12, 66, 8, 304);
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
        if (this.mario.x < 4865) {
            this.mario.moveDown(7);
            this.falling = false;
            this.mario.moveRight(2);
            this.mario.sprite.moveToNextFrame();
        } else {
            this.state = WorldState.None;
            var world = new World_5_1();
            this.gameUI.setWorld(world);
        }
    }
});