
World_1_2_State = {
    None: 0,
    Normal: 1,
    Scene1: 2,
    Scene2: 3,
    Scene3: 4,
    Scene4: 5,
    Scene5: 6,
    Scene6: 7
};

World_1_2 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setPosition(0, 0);
        this.setSize(8414, 448);
        this.setBackgroundImage(Const.IMAGE_WORLD_1_2);
        this.setBackgroundPosition(0, 0);
        this.show();

        this.state = World_1_2_State.Normal;
    },
    scroll: function () {

        if (this.mario.x >= 6639 && this.mario.x < 6661) {
            this.mario.setX(6639);
        }
        if (this.scrollable) {
            if (Math.abs(this.x) >= 6156 && Math.abs(this.x) < 6156 + 512) {
                return;
            }
            if (this.mario.x + this.x > 220) {
                this.setX(this.x - this.mario.speed);
            }
        }
    },
    build: function () {
        var gameUI = this;
        
        this.mario.addToGameUI(this);

        // scene2
        var block_524_48 = new Block(524, 48, 32, 32 * 11);
        block_524_48.addToGameUI(gameUI);
        
        for (var i = 0; i < 133; i++) {
            if (i == 84) {
                continue;
            }
            var brick = new Brick(668 + i * 32, 48, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }
        var brick = new Brick(668 + 133 * 32, 48, GameObjectIconType.Underground);
        brick.setSize(16, 32);
        brick.addToGameUI(gameUI);
        
        for (var i = 0; i < 7; i++) {
            var brick = new Brick(5676 + i * 32, 48, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 10; i++) {
            var brick = new Brick(6188 + i * 32, 48, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var question_844_272 = new Question(844, 272, QuestionItemType.BigMushroom, QuestionDisplayType.Question, GameObjectIconType.Underground);
        question_844_272.addToGameUI(gameUI);
        
        var question_876_272 = new Question(876, 272, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Underground);
        question_876_272.addToGameUI(gameUI);
        
        var question_908_272 = new Question(908, 272, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Underground);
        question_908_272.addToGameUI(gameUI);
        
        var question_940_272 = new Question(940, 272, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Underground);
        question_940_272.addToGameUI(gameUI);
        
        var question_972_272 = new Question(972, 272, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Underground);
        question_972_272.addToGameUI(gameUI);

        var question_1996_208 = new Question(1996, 208, QuestionItemType.Star, QuestionDisplayType.Brick, GameObjectIconType.Underground);
        question_1996_208.addToGameUI(gameUI);

        var question_2734_240 = new Question(2734, 240, QuestionItemType.BigMushroom, QuestionDisplayType.Brick, GameObjectIconType.Underground);
        question_2734_240.addToGameUI(gameUI);

        var question_2862_240 = new Question(2862, 240, QuestionItemType.MultiGold, QuestionDisplayType.Brick, GameObjectIconType.Underground);
        question_2862_240.addToGameUI(gameUI);
        
        var question_3356_48 = new Question(3356, 48, QuestionItemType.LifeMushroom, QuestionDisplayType.Brick, GameObjectIconType.Underground);
        question_3356_48.addToGameUI(gameUI);

        var question_5324_240 = new Question(5324, 240, QuestionItemType.BigMushroom, QuestionDisplayType.Brick, GameObjectIconType.Underground);
        question_5324_240.addToGameUI(gameUI);


        var iron_1068_368 = new Block(1068, 368, 32, 32);
        iron_1068_368.addToGameUI(gameUI);
        
        var iron_1132_336 = new Block(1132, 336, 32, 64);
        iron_1132_336.addToGameUI(gameUI);
        
        var iron_1196_304 = new Block(1196, 304, 32, 96);
        iron_1196_304.addToGameUI(gameUI);
        
        var iron_1260_272 = new Block(1260, 272, 32, 128);
        iron_1260_272.addToGameUI(gameUI);
        
        var iron_1324_272 = new Block(1324, 272, 32, 128);
        iron_1324_272.addToGameUI(gameUI);
        
        var iron_1388_304 = new Block(1388, 304, 32, 96);
        iron_1388_304.addToGameUI(gameUI);

        var question_1452_ = new Question(1452, 240, QuestionItemType.MultiGold, QuestionDisplayType.Brick, GameObjectIconType.Underground);
        question_1452_.addToGameUI(gameUI);
        
        var iron_1516_304 = new Block(1516, 304, 32, 96);
        iron_1516_304.addToGameUI(gameUI);

        var iron_1580_336 = new Block(1580, 336, 32, 64);
        iron_1580_336.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 8; j++) {
                if (((i == 0 || i == 1) && (j == 1 || j == 6)) || ((i == 1 || i == 2) && (j == 3 || j == 4)) || (i == 0 && j == 7)) {
                    continue;
                }
                var brick = new Brick(1772 + j * 32, 208 + i * 32, GameObjectIconType.Underground);
                brick.addToGameUI(gameUI);
            }
        }
        
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 4; j++) {
                if (((i == 0 || i == 1 || i == 7 || i == 8 || i == 9) && (j == 0 || j == 1)) || ((i == 2 || i == 3 || i == 4 || i == 5) && (j == 2 || j == 3))) {
                    continue;
                }
                var brick = new Brick(2190 + j * 32, 80 + i * 32, GameObjectIconType.Underground);
                brick.addToGameUI(gameUI);
            }
        }
        
        for (var i = 0; i < 7; i++) {
            for (var j = 0; j < 6; j++) {
                if (((i == 3 || i == 4 || i == 5) && (j == 0 || j == 1 || j == 2 || j == 3))) {
                    continue;
                }
                var brick = new Brick(2382 + j * 32, 80 + i * 32, GameObjectIconType.Underground);
                brick.addToGameUI(gameUI);
            }
        }
        
        for (var i = 0; i < 7; i++) {
            for (var j = 0; j < 4; j++) {
                if (((i > 1) && (j == 0)) || ((i > 1 && i < 6) && (j == 2)) || ((i > 1 && i < 5) && (j == 3)) || (i == 5 && j == 3)) {
                    continue;
                }
                var brick = new Brick(2638 + j * 32, 80 + i * 32, GameObjectIconType.Underground);
                brick.addToGameUI(gameUI);
            }
        }
        
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 2; j++) {
                if (i == 3 && j == 1) {
                    continue;
                }
                var brick = new Brick(2830 + j * 32, 144 + i * 32, GameObjectIconType.Underground);
                brick.addToGameUI(gameUI);
            }
        }
        
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 5; j++) {
                var brick = new Brick(2958 + j * 32, 80 + i * 32, GameObjectIconType.Underground);
                brick.addToGameUI(gameUI);
            }
        }
        
        for (var i = 0; i < 4; i++) {
            var brick = new Brick(2958 + i * 32, 272, GameObjectIconType.Underground);
                brick.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 6; j++) {
                var brick = new Brick(3214 + j * 32, 208 + i * 32, GameObjectIconType.Underground);
                brick.addToGameUI(gameUI);
            }
        }


        var tube_3820_304 = new Block(3820, 304, 64, 96);
        tube_3820_304.addToGameUI(gameUI);
        tube_3820_304.attachCollidesUp(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.DOWN)) {
                this.gameUI.changeToScene3();
            }
        });
        
        var tube_4012_272 = new Block(4012, 272, 64, 128);
        tube_4012_272.addToGameUI(gameUI);
        
        var tube_4204_336 = new Block(4204, 336, 64, 64);
        tube_4204_336.addToGameUI(gameUI);

        var block_4428_304 = new Block(4428, 304, 64, 96);
        block_4428_304.addToGameUI(gameUI);
  
        
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 5; j++) {
                if ((i == 0 && j < 3) || (i == 1 && j < 2) || (i == 2 && j < 1)) {
                    continue;
                }
                var iron = new Block(4780 + j * 32, 272 + i * 32, 32, 32);
                iron.addToGameUI(gameUI);
            }
        }
        
        for (var i = 0; i < 5; i++) {
            var brick = new Brick(5164 + i * 32, 240, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var block_5644_272 = new Block(5644, 304, 544, 96);
        block_5644_272.addToGameUI(gameUI);
        

        var tube_5836_240 = new Block(5836, 240, 68, 64);
        tube_5836_240.attachCollidesLeft(function(gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.RIGHT)) {
                this.gameUI.changeToScene5();
            }
        });
        tube_5836_240.addToGameUI(gameUI);
        
        var tube_5904_48 = new Block(5904, 48, 60, 256);
        tube_5904_48.addToGameUI(gameUI);

        var block_5946_48 = new Block(5964, 48, 224, 256);
        block_5946_48.addToGameUI(gameUI);

        var tube_6220_304 = new Block(6220, 304, 64, 96);
        tube_6220_304.addToGameUI(gameUI);
        tube_6220_304.tip = false;
        tube_6220_304.attachCollidesUp(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.DOWN)) {
                if (!this.tip) {
                    this.tip = true;
                    alert("想跳关，请充值1元到作者支付宝账户");
                }
            }
        });
        
        var tube_6348_304 = new Block(6348, 304, 64, 96);
        tube_6348_304.addToGameUI(gameUI);
        tube_6348_304.tip = false;
        tube_6348_304.attachCollidesUp(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.DOWN)) {
                if (!this.tip) {
                    this.tip = true;
                    alert("想跳关，请充值1元到作者支付宝账户");
                }
            }
        });
        
        var tube_6476_304 = new Block(6476, 304, 64, 96);
        tube_6476_304.addToGameUI(gameUI);
        tube_6476_304.tip = false;
        tube_6476_304.attachCollidesUp(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.DOWN)) {
                if (!this.tip) {
                    this.tip = true;
                    alert("想跳关，请充值1元到作者支付宝账户");
                }
            }
        });
        
        var block_6604_48 = new Block(6604, 48, 64, 352);
        block_6604_48.addToGameUI(gameUI);
        


        var floor_524_400 = new Block(524, 400, 2560, 48);
        floor_524_400.addToGameUI(gameUI);
        
        var floor_3180_400 = new Block(3180, 400, 1184, 48);
        floor_3180_400.addToGameUI(gameUI);
        
        var floor_4428_400 = new Block(4428, 400, 64, 48);
        floor_4428_400.addToGameUI(gameUI);
        
        var floor_4556_400 = new Block(4556, 400, 384, 48);
        floor_4556_400.addToGameUI(gameUI);
        
        var floor_5164_400 = new Block(5164, 400, 256, 48);
        floor_5164_400.addToGameUI(gameUI);
        
        var floor_5644_400 = new Block(5644, 400, 1025, 48);
        floor_5644_400.addToGameUI(gameUI);


        var goomba_960_368 = new Goomba(960, 368, GameObjectIconType.Underground);
        goomba_960_368.addToGameUI(gameUI);

        var goomba_992_368 = new Goomba(992, 368, GameObjectIconType.Underground);
        goomba_992_368.addToGameUI(gameUI);

        var goomba_1452_368 = new Goomba(1452, 368, GameObjectIconType.Underground);
        goomba_1452_368.addToGameUI(gameUI);

        var koopaTroopa_1964_368 = new KoopaTroopa(1964, 336, KoopaTroopaType.Green, GameObjectIconType.Underground);
        koopaTroopa_1964_368.addToGameUI(gameUI);

        var koopaTroopa_2028_368 = new KoopaTroopa(2028, 336, KoopaTroopaType.Green, GameObjectIconType.Underground);
        koopaTroopa_2028_368.addToGameUI(gameUI);

        var koopaTroopa_2382_368 = new KoopaTroopa(2382, 336, KoopaTroopaType.Green, GameObjectIconType.Underground);
        koopaTroopa_2382_368.addToGameUI(gameUI);

        var koopaTroopa_5300_368 = new KoopaTroopa(5300, 336, KoopaTroopaType.Red, GameObjectIconType.Underground);
        koopaTroopa_5300_368.addToGameUI(gameUI);

        var goomba_2510_368 = new Goomba(2510, 368, GameObjectIconType.Underground);
        goomba_2510_368.addToGameUI(gameUI);

        var goomba_2638_368 = new Goomba(2638, 368, GameObjectIconType.Underground);
        goomba_2638_368.addToGameUI(gameUI);

        var goomba_2830_102 = new Goomba(2830, 102, GameObjectIconType.Underground);
        goomba_2830_102.addToGameUI(gameUI);

        var goomba_2958_244 = new Goomba(2958, 228, GameObjectIconType.Underground);
        goomba_2958_244.addToGameUI(gameUI);

        var goomba_3006_244 = new Goomba(3006, 228, GameObjectIconType.Underground);
        goomba_3006_244.addToGameUI(gameUI);

        var goomba_3660_244 = new Goomba(3692, 368, GameObjectIconType.Underground);
        goomba_3660_244.addToGameUI(gameUI);

        var goomba_3724_244 = new Goomba(3740, 368, GameObjectIconType.Underground);
        goomba_3724_244.addToGameUI(gameUI);

        var goomba_3788_244 = new Goomba(3788, 368, GameObjectIconType.Underground);
        goomba_3788_244.addToGameUI(gameUI);

        var goomba_4140_244 = new Goomba(4140, 368, GameObjectIconType.Underground);
        goomba_4140_244.addToGameUI(gameUI);

        var goomba_4864_240 = new Goomba(4864, 240, GameObjectIconType.Underground);
        goomba_4864_240.addToGameUI(gameUI);

        var goomba_4896_240 = new Goomba(4896, 240, GameObjectIconType.Underground);
        goomba_4896_240.addToGameUI(gameUI);


        var gold_2702_240 = new Gold2(2702, 240, GameObjectIconType.Underground);
        gold_2702_240.addToGameUI(gameUI);

        for (var i = 0; i < 6; i++) {
            var gold = new Gold2(3214 + i * 32, 176, GameObjectIconType.Underground);
            gold.addToGameUI(gameUI);
        }

        var gold_1804_240 = new Gold2(1804, 240, GameObjectIconType.Underground);
        gold_1804_240.addToGameUI(gameUI);

        for (var i = 0; i < 4; i++) {
            var gold = new Gold2(1836 + i * 32, 176, GameObjectIconType.Underground);
            gold.addToGameUI(gameUI);
        }

        var gold_1964_240 = new Gold2(1964, 240, GameObjectIconType.Underground);
        gold_1964_240.addToGameUI(gameUI);

        for (var i = 0; i < 4; i++) {
            var gold = new Gold2(2382 + i * 32, 240, GameObjectIconType.Underground);
            gold.addToGameUI(gameUI);
        }


        // scene3
        var block_6678_48 = new Block(6678, 48, 32, 32 * 11);
        block_6678_48.addToGameUI(gameUI);
        
        var floor_6678_400 = new Block(6678, 400, 512, 48);
        floor_6678_400.addToGameUI(gameUI);

        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 10; j++) {
                var brick = new Brick(6774 + 32 * j, 48 + 32 * i, GameObjectIconType.Underground);
                brick.addToGameUI(gameUI);
            }
        }
        
        for (var i = 0; i < 9; i++) {
            var brick = new Brick(6774 + 32 * i, 272, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 8; i++) {
            var gold = new Gold2(6806 + 32 * i, 240, GameObjectIconType.Underground);
            gold.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 9; i++) {
            var gold = new Gold2(6774 + 32 * i, 368, GameObjectIconType.Underground);
            gold.addToGameUI(gameUI);
        }

        var question_7062_272 = new Question(7062, 272, QuestionItemType.MultiGold, QuestionDisplayType.Brick, GameObjectIconType.Underground);
        question_7062_272.addToGameUI(gameUI);
        
        var block_7096_48 = new Block(7096, 48, 96, 288);
        block_7096_48.addToGameUI(gameUI);
        
        var tube_7096_336 = new Block(7096, 336, 96, 64);
        tube_7096_336.addToGameUI(gameUI);
        
        tube_7096_336.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.RIGHT)) {
                this.gameUI.changeToScene4();
            }
        });

        var block_4988_16 = new Block(4988, -16, 128, 16, true);
        block_4988_16.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_4988_16.sprite.setBackgroundPosition(0, 376);
        block_4988_16.attachUpdate(function () {
            if (this.y < this.gameUI.height) {
                this.moveDown(2);
            } else {
                this.setY(-16);
            }
        });
        block_4988_16.addToGameUI(gameUI);
        

        var block_4988_224 = new Block(4988, 224, 128, 16, true);
        block_4988_224.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_4988_224.sprite.setBackgroundPosition(0, 376);
        block_4988_224.attachUpdate(function () {
            if (this.y < this.gameUI.height) {
                this.moveDown(2);
            } else {
                this.setY(-16);
            }
        });
        block_4988_224.addToGameUI(gameUI);
        
        var block_5468_20 = new Block(5468, -16, 128, 16, true);
        block_5468_20.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_5468_20.sprite.setBackgroundPosition(0, 376);
        block_5468_20.attachUpdate(function () {
            if (this.y > -16) {
                this.moveUp(2);
            } else {
                this.setY(this.gameUI.height);
            }
        });
        block_5468_20.addToGameUI(gameUI);

        
        var block_5468_240 = new Block(5468, 224, 128, 16, true);
        block_5468_240.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_5468_240.sprite.setBackgroundPosition(0, 376);
        block_5468_240.attachUpdate(function () {
            if (this.y > -16) {
                this.moveUp(2);
            } else {
                this.setY(this.gameUI.height);
            }
        });
        block_5468_240.addToGameUI(gameUI);
        

        // scene5
        var floor_7199_400 = new Block(7199, 400, 1314, 48);
        floor_7199_400.addToGameUI(gameUI);

        var tube_72964_336 = new Block(7294, 336, 64, 64);
        tube_72964_336.addToGameUI(gameUI);

        for (var i = 0; i < 9; i++) {
            var block = new Block(7358 + 32 * i, 368 - 32 * Math.min(i, 7), 32, 32 + 32 * Math.min(i, 7));
            block.addToGameUI(gameUI);
        }

        var block_7902_368 = new Block(7902, 368, 32, 32);
        block_7902_368.addToGameUI(gameUI);

        var flag = new Block(7902 + 12, 62, 8, 308);
        flag.addToGameUI(gameUI);
        flag.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors) {
                this.gameUI.changeToScene6();
            }
        });

        this.changeToScene1();
    },
    restart: function () {
        
        var oldX = this.x;
        this.div.innerHTML = "";
        this.staticObjects = [];
        this.animateObjects = [];
        this.build();

        this.mario.reborn();
        this.state = World_1_2_State.Normal;

        if (Math.abs(oldX) >= 3596) {
            this.setX(-3376);
            this.mario.setPosition(3396, 400 - this.mario.height);
        } else {
            this.setX(-524);
            this.mario.setPosition(574, 400 - this.mario.height);
        }

        this.scrollable = true;
    },
    update: function () {
        switch (this.state) {
            case World_1_2_State.Normal:
                for (var i = 0; i < this.animateObjects.length; i++) {
                    this.animateObjects[i].update();
                }
                break;
            case World_1_2_State.Scene1:
                this.mario.moveRight(1);
                this.mario.sprite.moveToNextFrame();
                if (this.mario.x >= 292) {
                    this.changeToScene2();
                }
                break;
            case World_1_2_State.Scene2:
                this.mario.setPosition(572, 0);
                this.setPosition(-524, 0);
                this.state = World_1_2_State.Normal;
                break;
            case World_1_2_State.Scene3:
                this.mario.setPosition(6720, 0);
                this.setPosition(-6678, 0);
                this.state = World_1_2_State.Normal;
                break;
            case World_1_2_State.Scene4:
                this.mario.setPosition(4220, this.mario.type == MarioType.Small ? 304 : 272);
                this.setPosition(-4100, 0);
                this.state = World_1_2_State.Normal;
                break;
            case World_1_2_State.Scene5:
                this.mario.setPosition(7310, 336 - this.mario.height);
                this.setPosition(-7199, 0);
                this.state = World_1_2_State.Normal;
                break;
            case World_1_2_State.Scene6:
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
                if (this.mario.x < 8094) {
                    this.mario.moveDown(7);
                    this.falling = false;
                    this.mario.moveRight(2);
                    this.mario.sprite.moveToNextFrame();
                } else {
                    var world_1_3 = new World_1_3();
                    this.gameUI.setWorld(world_1_3);
                    this.state = World_1_2_State.None;
                    this.mario.setCollidable(true, true, true, true);
                }
                break;
        }
    },
    changeToScene1: function () {
        this.scrollable = false;
        this.mario.setPosition(90, 400 - this.mario.height);
        this.mario.moving = true;
        this.mario.movingToLeft = true;
        this.mario.setSprite(MarioSprite.Move);
        this.mario.sprite.setFrameCounter(4);
        this.setPosition(-1, 0);
        this.state = World_1_2_State.Scene1;
    },
    changeToScene2: function () {
        this.scrollable = true;
        this.state = World_1_2_State.Scene2;
    },
    changeToScene3: function () {
        this.scrollable = false;
        this.state = World_1_2_State.Scene3;
    },
    changeToScene4: function () {
        this.scrollable = true;
        this.state = World_1_2_State.Scene4;
    },
    changeToScene5: function () {
        this.scrollable = true;
        this.state = World_1_2_State.Scene5;
    },
    changeToScene6: function () {
        this.mario.setCollidable(false, true, false, false);
        this.state = World_1_2_State.Scene6;
    }
});