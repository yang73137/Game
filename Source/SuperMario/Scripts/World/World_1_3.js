
World_1_3_State = {
    None: 0,
    Normal: 1,
    Scene1: 2
};

World_1_3 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setSize(7296, 448);
        this.setBackgroundImage(Const.IMAGE_WORLD_1_3);
        this.setBackgroundPosition(0, 0);
        this.setPosition(-4, -2);
        this.show();

        this.scrollable = true;
        this.state = World_1_3_State.Normal;
    },
    scroll: function () {
        if (!this.scrollable) {
            return;
        }
        if (this.mario.x - Math.abs(this.x) > 220 && Math.abs(this.x) <= 4748) {
            this.setX(this.x - (this.mario.jumping ? this.mario.speed + 1 : this.mario.speed));
        }
    },
    build: function () {
        var gameUI = this;

        this.mario.addToGameUI(gameUI);
        this.mario.setPosition(84, 400 - this.mario.height);

        var koopaTroopa_900_98 = new KoopaTroopa(900, 98, KoopaTroopaType.Clever, GameObjectIconType.Ground);
        koopaTroopa_900_98.addToGameUI(gameUI);

        var koopaTroopa_2388_114 = new KoopaTroopa(2388, 272, KoopaTroopaType.Fly, GameObjectIconType.Ground);
        koopaTroopa_2388_114.addToGameUI(gameUI);

        var koopaTroopa_2490_114 = new KoopaTroopa(2490, 114, KoopaTroopaType.Clever, GameObjectIconType.Ground);
        koopaTroopa_2490_114.addToGameUI(gameUI);

        var koopaTroopa_3652_340 = new KoopaTroopa(3652, 340, KoopaTroopaType.Fly, GameObjectIconType.Ground);
        koopaTroopa_3652_340.addToGameUI(gameUI);

        var koopaTroopa_4260_352 = new KoopaTroopa(4260, 352, KoopaTroopaType.Clever, GameObjectIconType.Ground);
        koopaTroopa_4260_352.addToGameUI(gameUI);
        

        var gold_868_114 = new Gold2(868, 114, GameObjectIconType.Ground);
        gold_868_114.addToGameUI(gameUI);

        var gold_900_114 = new Gold2(900, 114, GameObjectIconType.Ground);
        gold_900_114.addToGameUI(gameUI);

        var gold_932_114 = new Gold2(932, 114, GameObjectIconType.Ground);
        gold_932_114.addToGameUI(gameUI);

        var gold_1060_338 = new Gold2(1060, 338, GameObjectIconType.Ground);
        gold_1060_338.addToGameUI(gameUI);

        var gold_1380_50 = new Gold2(1188, 50, GameObjectIconType.Ground);
        gold_1380_50.addToGameUI(gameUI);

        var gold_1412_50 = new Gold2(1220, 50, GameObjectIconType.Ground);
        gold_1412_50.addToGameUI(gameUI);

        var goomba_1172_82 = new Goomba(1172, 82, GameObjectIconType.Ground);
        goomba_1172_82.addToGameUI(gameUI);

        var goomba_1236_82 = new Goomba(1236, 82, GameObjectIconType.Ground);
        goomba_1236_82.addToGameUI(gameUI);

        var gold_1604_180 = new Gold2(1604, 180, GameObjectIconType.Ground);
        gold_1604_180.addToGameUI(gameUI);

        var gold_1636_180 = new Gold2(1636, 180, GameObjectIconType.Ground);
        gold_1636_180.addToGameUI(gameUI);

        var gold_3620_372 = new Gold2(3620, 372, GameObjectIconType.Ground);
        gold_3620_372.addToGameUI(gameUI);

        var gold_3652_372 = new Gold2(3652, 372, GameObjectIconType.Ground);
        gold_3652_372.addToGameUI(gameUI);

        var gold_3688_372 = new Gold2(3688, 372, GameObjectIconType.Ground);
        gold_3688_372.addToGameUI(gameUI);

        for (var i = 0; i < 4; i++) {
            var gold = new Gold2(1924 + 32 * i, 114, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var gold_2756_146 = new Gold2(2756, 146, GameObjectIconType.Ground);
        gold_2756_146.addToGameUI(gameUI);

        var gold_2788_146 = new Gold2(2788, 146, GameObjectIconType.Ground);
        gold_2788_146.addToGameUI(gameUI);

        var gold_2962_114 = new Gold2(2962, 114, GameObjectIconType.Ground);
        gold_2962_114.addToGameUI(gameUI);

        var gold_2994_114 = new Gold2(2994, 114, GameObjectIconType.Ground);
        gold_2994_114.addToGameUI(gameUI);

        var gold_3126_114 = new Gold2(3126, 114, GameObjectIconType.Ground);
        gold_3126_114.addToGameUI(gameUI);

        var gold_3158_114 = new Gold2(3158, 114, GameObjectIconType.Ground);
        gold_3158_114.addToGameUI(gameUI);

        var gold_3844_146 = new Gold2(3844, 146, GameObjectIconType.Ground);
        gold_3844_146.addToGameUI(gameUI);

        var gold_3876_146 = new Gold2(3876, 146, GameObjectIconType.Ground);
        gold_3876_146.addToGameUI(gameUI);


        var block_1748_240 = new Block(1748, 164, 128, 16, true);
        block_1748_240.movingDown = true;
        block_1748_240.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_1748_240.sprite.setBackgroundPosition(0, 376);
        block_1748_240.attachUpdate(function () {

            if (this.y <= 164) {
                this.movingDown = true;
            } else if (this.y >= this.gameUI.height - 8) {
                this.movingDown = false;
            }

            this.movingDown ? this.moveDown(2) : this.moveUp(2);
        });
        block_1748_240.addToGameUI(gameUI);


        var block_2660_242 = new Block(2660, 242, 128, 16, true);
        block_2660_242.movingRight = true;
        block_2660_242.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_2660_242.sprite.setBackgroundPosition(0, 376);
        block_2660_242.attachUpdate(function () {

            if (this.x <= 2660) {
                this.movingRight = true;
            } else if (this.x >= 2760) {
                this.movingRight = false;
            }

            this.movingRight ? this.moveRight(1) : this.moveLeft(1);
            
            var mario = this.gameUI.mario;
            if (this.collidesUpWith(mario) && !mario.moving) {
                mario.setX(mario.x + (this.movingRight ? 1 : -1));
            }
        });
        block_2660_242.addToGameUI(gameUI);

        var block_3018_258 = new Block(3018, 258, 128, 16, true);
        block_3018_258.movingRight = false;
        block_3018_258.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_3018_258.sprite.setBackgroundPosition(0, 376);
        block_3018_258.attachUpdate(function () {

            if (this.x <= 2878) {
                this.movingRight = true;
            } else if (this.x >= 3018) {
                this.movingRight = false;
            }

            this.movingRight ? this.moveRight(1) : this.moveLeft(1);
            
            var mario = this.gameUI.mario;
            if (this.collidesWith(mario) && !mario.moving) {
                mario.setX(mario.x + (this.movingRight ? 1 : -1));
            }
        });
        block_3018_258.addToGameUI(gameUI);

        var block_4100_178 = new Block(4100, 178, 128, 16, true);
        block_4100_178.movingRight = true;
        block_4100_178.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_4100_178.sprite.setBackgroundPosition(0, 376);
        block_4100_178.attachUpdate(function () {

            if (this.x <= 4100) {
                this.movingRight = true;
            } else if (this.x >= 4200) {
                this.movingRight = false;
            }

            this.movingRight ? this.moveRight(1) : this.moveLeft(1);
            
            var mario = this.gameUI.mario;
            if (this.collidesWith(mario) && !mario.moving) {
                mario.setX(mario.x + (this.movingRight ? 1 : -1));
            }
        });
        block_4100_178.addToGameUI(gameUI);
        

        var floor_0_400 = new Block(0, 400, 516, 48);
        floor_0_400.addToGameUI(gameUI);

        var grass_580_370 = new Block(580, 370, 128, 32);
        grass_580_370.addToGameUI(gameUI);

        var grass_772_274 = new Block(772, 274, 256, 32);
        grass_772_274.addToGameUI(gameUI);

        var grass_836_146 = new Block(836, 146, 160, 32);
        grass_836_146.addToGameUI(gameUI);

        var grass_1028_70 = new Block(1028, 370, 96, 32);
        grass_1028_70.addToGameUI(gameUI);

        var grass_1124_242 = new Block(1124, 242, 160, 32);
        grass_1124_242.addToGameUI(gameUI);

        var grass_1284_114 = new Block(1284, 114, 224, 32);
        grass_1284_114.addToGameUI(gameUI);

        var grass_1604_402 = new Block(1604, 402, 128, 32);
        grass_1604_402.addToGameUI(gameUI);

        var grass_1892_402 = new Block(1892, 402, 160, 32);
        grass_1892_402.addToGameUI(gameUI);

        var question_1892_306 = new Question(1892, 306, QuestionItemType.BigMushroom, QuestionDisplayType.Question, GameObjectIconType.Ground);
        question_1892_306.addToGameUI(gameUI);

        var grass_1924_146 = new Block(1924, 146, 128, 32);
        grass_1924_146.addToGameUI(gameUI);

        var grass_2084_402 = new Block(2084, 402, 160, 32);
        grass_2084_402.addToGameUI(gameUI);

        var grass_2244_274 = new Block(2244, 274, 96, 32);
        grass_2244_274.addToGameUI(gameUI);

        var grass_2436_178 = new Block(2436, 178, 192, 32);
        grass_2436_178.addToGameUI(gameUI);

        var grass_3140_338 = new Block(3140, 338, 128, 32);
        grass_3140_338.addToGameUI(gameUI);

        var grass_3332_210 = new Block(3332, 210, 256, 32);
        grass_3332_210.addToGameUI(gameUI);

        var grass_3620_402 = new Block(3620, 402, 96, 32);
        grass_3620_402.addToGameUI(gameUI);

        var grass_3716_274 = new Block(3716, 274, 128, 32);
        grass_3716_274.addToGameUI(gameUI);

        var grass_3908_274 = new Block(3908, 274, 128, 32);
        grass_3908_274.addToGameUI(gameUI);

        var floor_4132_400 = new Block(4132, 400, 1128, 48);
        floor_4132_400.addToGameUI(gameUI);

        var iron_4420_272 = new Block(4420, 272, 64, 128);
        iron_4420_272.addToGameUI(gameUI);

        var iron_4484_208 = new Block(4484, 208, 64, 192);
        iron_4484_208.addToGameUI(gameUI);

        var iron_4548_144 = new Block(4548, 144, 64, 256);
        iron_4548_144.addToGameUI(gameUI);

        var iron_4548_144 = new Block(4548, 144, 64, 256);
        iron_4548_144.addToGameUI(gameUI);

        var iron_4868_368 = new Block(4868, 368, 32, 32);
        iron_4868_368.addToGameUI(gameUI);

        var flag = new Block(4868 + 12, 62, 8, 308);
        flag.addToGameUI(gameUI);
        flag.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors) {
                if (gameObject instanceof MarioBors) {
                    this.gameUI.changeToScene1();
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
        this.state = World_1_3_State.Normal;

        if (Math.abs(oldX) >= 2062) {
            this.setX(-2062);
            this.mario.setPosition(2130, 400 - this.mario.height);
        } else {
            this.setX(-4);
            this.mario.setPosition(84, 400 - this.mario.height);
        }

        this.scrollable = true;
    },
    update: function () {
        switch (this.state) {
            case World_1_3_State.Normal:
                for (var i = 0; i < this.animateObjects.length; i++) {
                    this.animateObjects[i].update();
                }
                break;
            case World_1_3_State.Scene1:
                if (this.mario.freefall()) {
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
                if (this.mario.x < 5028) {
                    this.mario.moveDown(7);
                    this.falling = false;
                    this.mario.moveRight(2);
                    this.mario.sprite.moveToNextFrame();
                } else {
                    alert("后续关卡正在制作中......");
                    this.state = World_1_3_State.None;
                }
                break;
        }
    },
    changeToScene1: function () {
        this.mario.setCollidable(false, true, false, false);
        this.state = World_1_3_State.Scene1;
    },
});