

World_3_3 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setSize(5234, 448);
        this.setBackgroundImage(Const.IMAGE_WORLD_3_3);
        this.show();
        
        this.setTitle("World  3-3");
        this.scrollable = true;
        
        ImageLoader.load(this, [Const.IMAGE_WORLD_3_4]);
        ScriptLoader.load(this, [Const.SCRIPT_WORLD_3_4]);
    },
    scroll: function () {
        if (!this.scrollable) {
            return;
        }

        if (Math.abs(this.x) >= 4722) {
            return;
        }

        if (this.mario.x - Math.abs(this.x) > 220) {
            this.setX(this.x - (this.mario.jumping ? this.mario.speed + 1 : this.mario.speed));
        }
    },
    build: function() {
        var gameUI = this;

        this.mario.addToGameUI(gameUI);
        this.mario.setPosition(84, 400 - this.mario.height);

        var floor_0_400 = new Block(0, 400, 512, 48);
        floor_0_400.addToGameUI(gameUI);

        var grass_578_304 = new Block(577, 304, 160, 32);
        grass_578_304.addToGameUI(gameUI);

        var grass_706_208 = new Block(705, 208, 192, 32);
        grass_706_208.addToGameUI(gameUI);

        var goomba_800_176 = new Goomba(800, 176, GameObjectIconType.Ground);
        goomba_800_176.addToGameUI(gameUI);

        var block_846_112 = new Block(846, 112, 100, 16, true);
        block_846_112.movingRight = true;
        block_846_112.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_846_112.sprite.setBackgroundPosition(0, 376);
        block_846_112.attachUpdate(function() {

            if (this.x <= 846) {
                this.movingRight = true;
            } else if (this.x >= 961) {
                this.movingRight = false;
            }

            this.movingRight ? this.moveRight(1) : this.moveLeft(1);

            var mario = this.gameUI.mario;
            if (this.collidesUpWith(mario) && !mario.moving) {
                mario.setX(mario.x + (this.movingRight ? 1 : -1));
            }
        });
        block_846_112.addToGameUI(gameUI);

        var block_961_244 = new Block(961, 244, 100, 16, true);
        block_961_244.movingRight = true;
        block_961_244.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_961_244.sprite.setBackgroundPosition(0, 376);
        block_961_244.attachUpdate(function() {

            if (this.x <= 945) {
                this.movingRight = true;
            } else if (this.x >= 1057) {
                this.movingRight = false;
            }

            this.movingRight ? this.moveRight(1) : this.moveLeft(1);

            var mario = this.gameUI.mario;
            if (this.collidesUpWith(mario) && !mario.moving) {
                mario.setX(mario.x + (this.movingRight ? 1 : -1));
            }
        });
        block_961_244.addToGameUI(gameUI);

        var grass_962_400 = new Block(961, 400, 96, 32);
        grass_962_400.addToGameUI(gameUI);

        for (var i = 0; i < 2; i++) {
            var gold = new Gold2(993, 368, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }
        
        var grass_1154_368 = new Block(1153, 368, 224, 32);
        grass_1154_368.addToGameUI(gameUI);

        var gold_1185_176 = new Gold2(1185, 176, GameObjectIconType.Ground);
        gold_1185_176.addToGameUI(gameUI);
        
        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(1345 + 32 * i, 176, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }
        
        var grass_1378_272 = new Block(1377, 272, 128, 32);
        grass_1378_272.addToGameUI(gameUI);
        
        var grass_1474_336 = new Block(1473, 336, 320, 32);
        grass_1474_336.addToGameUI(gameUI);
        
        var grass_1506_208 = new Block(1505, 208, 192, 32);
        grass_1506_208.addToGameUI(gameUI);

        var question_1567_80 = new Question(1567, 80, QuestionItemType.BigMushroom, QuestionDisplayType.Question, GameObjectIconType.Ground);
        question_1567_80.addToGameUI(gameUI);

        var koopaTroopa_1660_160 = new KoopaTroopa(1660, 160, KoopaTroopaType.Normal, true, true, GameObjectIconType.Sky);
        koopaTroopa_1660_160.addToGameUI(gameUI);
        
        var koopaTroopa_1760_288 = new KoopaTroopa(1760, 288, KoopaTroopaType.Normal, true, true, GameObjectIconType.Sky);
        koopaTroopa_1760_288.addToGameUI(gameUI);
        
        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(1667 + 32 * i, 272, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }
        
        var grass_1762_80 = new Block(1761, 80, 128, 32);
        grass_1762_80.addToGameUI(gameUI);
        
        for (var i = 0; i < 2; i++) {
            var gold = new Gold2(1793 + 32 * i, 48, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }
        
        var block_1872_176 = new Block(1872, 176, 100, 16, true);
        block_1872_176.movingRight = true;
        block_1872_176.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_1872_176.sprite.setBackgroundPosition(0, 376);
        block_1872_176.attachUpdate(function () {

            if (this.x <= 1872) {
                this.movingRight = true;
            } else if (this.x >= 1972) {
                this.movingRight = false;
            }

            this.movingRight ? this.moveRight(1) : this.moveLeft(1);

            var mario = this.gameUI.mario;
            if (this.collidesUpWith(mario) && !mario.moving) {
                mario.setX(mario.x + (this.movingRight ? 1 : -1));
            }
        });
        block_1872_176.addToGameUI(gameUI);
        
        var grass_2082_400 = new Block(2081, 400, 510, 32);
        grass_2082_400.addToGameUI(gameUI);
        
        var grass_2081_208 = new Block(2081, 208, 96, 32);
        grass_2081_208.addToGameUI(gameUI);
        
        var gold_2113_176 = new Gold2(2113, 176, GameObjectIconType.Ground);
        gold_2113_176.addToGameUI(gameUI);
        
        var grass_2210_208 = new Block(2209, 208, 96, 32);
        grass_2210_208.addToGameUI(gameUI);
        
        var gold_2241_176 = new Gold2(2241, 176, GameObjectIconType.Ground);
        gold_2241_176.addToGameUI(gameUI);
        
        var grass_2338_208 = new Block(2337, 208, 96, 32);
        grass_2338_208.addToGameUI(gameUI);
        
        var gold_2369_176 = new Gold2(2369, 176, GameObjectIconType.Ground);
        gold_2369_176.addToGameUI(gameUI);
        
        var koopaTroopa_2369_352 = new KoopaTroopa(2369, 352, KoopaTroopaType.Normal, true, true, GameObjectIconType.Sky);
        koopaTroopa_2369_352.addToGameUI(gameUI);
        
        var grass_2466_96 = new Block(2465, 113, 96, 32);
        grass_2466_96.addToGameUI(gameUI);
        
        var gold_2497_81 = new Gold2(2497, 81, GameObjectIconType.Ground);
        gold_2497_81.addToGameUI(gameUI);
        
        var gold_2593_144 = new Gold2(2593, 144, GameObjectIconType.Ground);
        gold_2593_144.addToGameUI(gameUI);
        
        var grass_2690_336 = new Block(2689, 336, 128, 32);
        grass_2690_336.addToGameUI(gameUI);
        
        var gold_2817_144 = new Gold2(2817, 144, GameObjectIconType.Ground);
        gold_2817_144.addToGameUI(gameUI);
        
        var gold_2881_144 = new Gold2(2881, 144, GameObjectIconType.Ground);
        gold_2881_144.addToGameUI(gameUI);
        
        var block_2840_272 = new Block(2840, 272, 100, 16, true);
        block_2840_272.movingRight = true;
        block_2840_272.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_2840_272.sprite.setBackgroundPosition(0, 376);
        block_2840_272.attachUpdate(function () {

            if (this.x <= 2840) {
                this.movingRight = true;
            } else if (this.x >= 2980) {
                this.movingRight = false;
            }

            this.movingRight ? this.moveRight(1) : this.moveLeft(1);

            var mario = this.gameUI.mario;
            if (this.collidesUpWith(mario) && !mario.moving) {
                mario.setX(mario.x + (this.movingRight ? 1 : -1));
            }
        });
        block_2840_272.addToGameUI(gameUI);
        
        var grass_3106_272 = new Block(3105, 272, 96, 32);
        grass_3106_272.addToGameUI(gameUI);
        
        var block_3201_336 = new Block(3201, 336, 100, 16, true);
        block_3201_336.movingRight = true;
        block_3201_336.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_3201_336.sprite.setBackgroundPosition(0, 376);
        block_3201_336.attachUpdate(function () {

            if (this.x <= 3201) {
                this.movingRight = true;
            } else if (this.x >= 3320) {
                this.movingRight = false;
            }

            this.movingRight ? this.moveRight(1) : this.moveLeft(1);

            var mario = this.gameUI.mario;
            if (this.collidesUpWith(mario) && !mario.moving) {
                mario.setX(mario.x + (this.movingRight ? 1 : -1));
            }
        });
        block_3201_336.addToGameUI(gameUI);
        
        var grass_3330_144 = new Block(3329, 144, 128, 32);
        grass_3330_144.addToGameUI(gameUI);
        
        for (var i = 0; i < 2; i++) {
            var gold = new Gold2(3361, 112, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }
        
        var grass_3426_336 = new Block(3425, 336, 160, 32);
        grass_3426_336.addToGameUI(gameUI);
        
        var grass_3458_208 = new Block(3457, 208, 96, 32);
        grass_3458_208.addToGameUI(gameUI);
        
        var gold_3489_176 = new Gold2(3489, 176, GameObjectIconType.Ground);
        gold_3489_176.addToGameUI(gameUI);
        
        var gold_3457_304 = new Gold2(3457, 304, GameObjectIconType.Ground);
        gold_3457_304.addToGameUI(gameUI);
        
        var koopaTroopa_2369_368 = new KoopaTroopa(3649, 368, KoopaTroopaType.Fly, false, true, GameObjectIconType.Sky);
        koopaTroopa_2369_368.addToGameUI(gameUI);
        
        var grass_3714_400 = new Block(3713, 400, 96, 32);
        grass_3714_400.addToGameUI(gameUI);
        
        var grass_3810_304 = new Block(3809, 304, 384, 32);
        grass_3810_304.addToGameUI(gameUI);
        
        var koopaTroopa_4000_272 = new KoopaTroopa(4000, 256, KoopaTroopaType.Normal, true, true, GameObjectIconType.Sky);
        koopaTroopa_4000_272.addToGameUI(gameUI);
        
        var koopaTroopa_4080_272 = new KoopaTroopa(4080, 256, KoopaTroopaType.Normal, true, true, GameObjectIconType.Sky);
        koopaTroopa_4080_272.addToGameUI(gameUI);
        
        var block_4210_208 = new Block(4210, 208, 100, 16, true);
        block_4210_208.movingRight = true;
        block_4210_208.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_4210_208.sprite.setBackgroundPosition(0, 376);
        block_4210_208.attachUpdate(function () {

            if (this.x <= 4210) {
                this.movingRight = true;
            } else if (this.x >= 4310) {
                this.movingRight = false;
            }

            this.movingRight ? this.moveRight(1) : this.moveLeft(1);

            var mario = this.gameUI.mario;
            if (this.collidesUpWith(mario) && !mario.moving) {
                mario.setX(mario.x + (this.movingRight ? 1 : -1));
            }
        });
        block_4210_208.addToGameUI(gameUI);
        
        var block_4410_176 = new Block(4410, 176, 100, 16, true);
        block_4410_176.movingRight = true;
        block_4410_176.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_4410_176.sprite.setBackgroundPosition(0, 376);
        block_4410_176.attachUpdate(function () {

            if (this.x <= 4410) {
                this.movingRight = true;
            } else if (this.x >= 4560) {
                this.movingRight = false;
            }

            this.movingRight ? this.moveRight(1) : this.moveLeft(1);

            var mario = this.gameUI.mario;
            if (this.collidesUpWith(mario) && !mario.moving) {
                mario.setX(mario.x + (this.movingRight ? 1 : -1));
            }
        });
        block_4410_176.addToGameUI(gameUI);

        var floor_4909_400 = new Block(4609, 400, 625, 48);
        floor_4909_400.addToGameUI(gameUI);

        var iron_6689_368 = new Block(4833, 368, 32, 32);
        iron_6689_368.addToGameUI(gameUI);

        var flag = new Block(4833 + 12, 66, 8, 304);
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

        if (Math.abs(oldX) >= 2070) {
            this.setX(-2070);
            this.mario.setPosition(2100, 400 - this.mario.height);
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
        if (this.mario.x < 5058) {
            this.mario.moveDown(7);
            this.falling = false;
            this.mario.moveRight(2);
            this.mario.sprite.moveToNextFrame();
        } else {
            var world = new World_3_4();
            this.gameUI.setWorld(world);
        }
    }
});