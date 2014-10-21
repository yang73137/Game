
World_1_3_State = {
    None: 0,
    Normal: 1,
    Scene1: 2
};

World_1_3 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setSize(5270, 448);
        this.setBackgroundImage(Const.IMAGE_WORLD_1_3);
        this.setBackgroundPosition(4, 2);
        this.setPosition(0, 0);
        this.show();

        this.scrollable = true;
        this.state = World_1_3_State.Normal;
    },
    scroll: function () {
        if (!this.scrollable) {
            return;
        }
        if (this.mario.x - Math.abs(this.x) > 220 && Math.abs(this.x) <= 4740) {
            this.setX(this.x - (this.mario.jumping ? this.mario.speed + 1 : this.mario.speed));
        }
    },
    build: function () {
        var gameUI = this;

        this.mario.addToGameUI(gameUI);
        this.mario.setPosition(84, 400 - this.mario.height);

        var koopaTroopa_900_96 = new KoopaTroopa(900, 96, KoopaTroopaType.Clever, GameObjectIconType.Ground);
        koopaTroopa_900_96.addToGameUI(gameUI);

        var koopaTroopa_2388_272 = new KoopaTroopa(2388, 272, KoopaTroopaType.Fly, GameObjectIconType.Ground);
        koopaTroopa_2388_272.addToGameUI(gameUI);

        var koopaTroopa_2490_114 = new KoopaTroopa(2490, 114, KoopaTroopaType.Clever, GameObjectIconType.Ground);
        koopaTroopa_2490_114.addToGameUI(gameUI);

        var koopaTroopa_3652_340 = new KoopaTroopa(3652, 340, KoopaTroopaType.Fly, GameObjectIconType.Ground);
        koopaTroopa_3652_340.addToGameUI(gameUI);

        var koopaTroopa_4260_352 = new KoopaTroopa(4260, 352, KoopaTroopaType.Clever, GameObjectIconType.Ground);
        koopaTroopa_4260_352.addToGameUI(gameUI);
        

        var gold_864_112 = new Gold2(864, 112, GameObjectIconType.Ground);
        gold_864_112.addToGameUI(gameUI);

        var gold_896_112 = new Gold2(896, 112, GameObjectIconType.Ground);
        gold_896_112.addToGameUI(gameUI);

        var gold_928_112 = new Gold2(928, 112, GameObjectIconType.Ground);
        gold_928_112.addToGameUI(gameUI);

        var gold_1056_336 = new Gold2(1056, 336, GameObjectIconType.Ground);
        gold_1056_336.addToGameUI(gameUI);

        var gold_1184_48 = new Gold2(1184, 48, GameObjectIconType.Ground);
        gold_1184_48.addToGameUI(gameUI);

        var gold_1216_48 = new Gold2(1216, 48, GameObjectIconType.Ground);
        gold_1216_48.addToGameUI(gameUI);

        var goomba_1168_80 = new Goomba(1168, 80, GameObjectIconType.Ground);
        goomba_1168_80.addToGameUI(gameUI);

        var goomba_1232_80 = new Goomba(1232, 80, GameObjectIconType.Ground);
        goomba_1232_80.addToGameUI(gameUI);

        var gold_1600_178 = new Gold2(1600, 178, GameObjectIconType.Ground);
        gold_1600_178.addToGameUI(gameUI);

        var gold_1632_178 = new Gold2(1632, 178, GameObjectIconType.Ground);
        gold_1632_178.addToGameUI(gameUI);

        var gold_3616_370 = new Gold2(3616, 370, GameObjectIconType.Ground);
        gold_3616_370.addToGameUI(gameUI);

        var gold_3648_370 = new Gold2(3648, 370, GameObjectIconType.Ground);
        gold_3648_370.addToGameUI(gameUI);

        var gold_3684_370 = new Gold2(3684, 370, GameObjectIconType.Ground);
        gold_3684_370.addToGameUI(gameUI);

        for (var i = 0; i < 4; i++) {
            var gold = new Gold2(1920 + 32 * i, 112, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var gold_2752_144 = new Gold2(2752, 144, GameObjectIconType.Ground);
        gold_2752_144.addToGameUI(gameUI);

        var gold_2784_144 = new Gold2(2784, 144, GameObjectIconType.Ground);
        gold_2784_144.addToGameUI(gameUI);

        var gold_2958_112 = new Gold2(2958, 112, GameObjectIconType.Ground);
        gold_2958_112.addToGameUI(gameUI);

        var gold_2990_112 = new Gold2(2990, 112, GameObjectIconType.Ground);
        gold_2990_112.addToGameUI(gameUI);

        var gold_3122_112 = new Gold2(3122, 112, GameObjectIconType.Ground);
        gold_3122_112.addToGameUI(gameUI);

        var gold_3154_112 = new Gold2(3154, 112, GameObjectIconType.Ground);
        gold_3154_112.addToGameUI(gameUI);

        var gold_3840_144 = new Gold2(3840, 144, GameObjectIconType.Ground);
        gold_3840_144.addToGameUI(gameUI);

        var gold_3872_144 = new Gold2(3872, 144, GameObjectIconType.Ground);
        gold_3872_144.addToGameUI(gameUI);


        var block_1744_162 = new Block(1744, 162, 128, 16, true);
        block_1744_162.movingDown = true;
        block_1744_162.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_1744_162.sprite.setBackgroundPosition(0, 376);
        block_1744_162.attachUpdate(function () {

            if (this.y <= 162) {
                this.movingDown = true;
            } else if (this.y >= this.gameUI.height - 8) {
                this.movingDown = false;
            }

            this.movingDown ? this.moveDown(2) : this.moveUp(2);
        });
        block_1744_162.addToGameUI(gameUI);


        var block_2656_240 = new Block(2656, 240, 128, 16, true);
        block_2656_240.movingRight = true;
        block_2656_240.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_2656_240.sprite.setBackgroundPosition(0, 376);
        block_2656_240.attachUpdate(function () {

            if (this.x <= 2656) {
                this.movingRight = true;
            } else if (this.x >= 2756) {
                this.movingRight = false;
            }

            this.movingRight ? this.moveRight(1) : this.moveLeft(1);
            
            var mario = this.gameUI.mario;
            if (this.collidesUpWith(mario) && !mario.moving) {
                mario.setX(mario.x + (this.movingRight ? 1 : -1));
            }
        });
        block_2656_240.addToGameUI(gameUI);

        var block_3014_256 = new Block(3014, 256, 128, 16, true);
        block_3014_256.movingRight = false;
        block_3014_256.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_3014_256.sprite.setBackgroundPosition(0, 376);
        block_3014_256.attachUpdate(function () {

            if (this.x <= 2876) {
                this.movingRight = true;
            } else if (this.x >= 3014) {
                this.movingRight = false;
            }

            this.movingRight ? this.moveRight(1) : this.moveLeft(1);
            
            var mario = this.gameUI.mario;
            if (this.collidesWith(mario) && !mario.moving) {
                mario.setX(mario.x + (this.movingRight ? 1 : -1));
            }
        });
        block_3014_256.addToGameUI(gameUI);

        var block_4096_176 = new Block(4096, 176, 128, 16, true);
        block_4096_176.movingRight = true;
        block_4096_176.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_4096_176.sprite.setBackgroundPosition(0, 376);
        block_4096_176.attachUpdate(function () {

            if (this.x <= 4096) {
                this.movingRight = true;
            } else if (this.x >= 4196) {
                this.movingRight = false;
            }

            this.movingRight ? this.moveRight(1) : this.moveLeft(1);
            
            var mario = this.gameUI.mario;
            if (this.collidesWith(mario) && !mario.moving) {
                mario.setX(mario.x + (this.movingRight ? 1 : -1));
            }
        });
        block_4096_176.addToGameUI(gameUI);
        

        var floor_0_400 = new Block(0, 400, 512, 48);
        floor_0_400.addToGameUI(gameUI);

        var grass_576_368 = new Block(576, 368, 128, 32);
        grass_576_368.addToGameUI(gameUI);

        var grass_768_272 = new Block(768, 272, 256, 32);
        grass_768_272.addToGameUI(gameUI);

        var grass_832_144 = new Block(832, 144, 160, 32);
        grass_832_144.addToGameUI(gameUI);

        var grass_1024_368 = new Block(1024, 368, 96, 32);
        grass_1024_368.addToGameUI(gameUI);

        var grass_1120_240 = new Block(1120, 240, 160, 32);
        grass_1120_240.addToGameUI(gameUI);

        var grass_1280_112 = new Block(1280, 112, 224, 32);
        grass_1280_112.addToGameUI(gameUI);

        var grass_1600_400 = new Block(1600, 400, 128, 32);
        grass_1600_400.addToGameUI(gameUI);

        var grass_1888_400 = new Block(1888, 400, 160, 32);
        grass_1888_400.addToGameUI(gameUI);

        var question_1888_304 = new Question(1888, 304, QuestionItemType.BigMushroom, QuestionDisplayType.Question, GameObjectIconType.Ground);
        question_1888_304.addToGameUI(gameUI);

        var grass_1920_142 = new Block(1920, 142, 128, 32);
        grass_1920_142.addToGameUI(gameUI);

        var grass_2080_400 = new Block(2080, 400, 160, 32);
        grass_2080_400.addToGameUI(gameUI);

        var grass_2240_272 = new Block(2240, 272, 96, 32);
        grass_2240_272.addToGameUI(gameUI);

        var grass_2432_176 = new Block(2432, 176, 192, 32);
        grass_2432_176.addToGameUI(gameUI);

        var grass_3136_336 = new Block(3136, 336, 128, 32);
        grass_3136_336.addToGameUI(gameUI);

        var grass_3328_208 = new Block(3328, 208, 256, 32);
        grass_3328_208.addToGameUI(gameUI);

        var grass_3616_400 = new Block(3616, 400, 96, 32);
        grass_3616_400.addToGameUI(gameUI);

        var grass_3712_272 = new Block(3712, 272, 128, 32);
        grass_3712_272.addToGameUI(gameUI);

        var grass_3904_272 = new Block(3904, 272, 128, 32);
        grass_3904_272.addToGameUI(gameUI);

        var floor_4128_400 = new Block(4128, 400, 1128, 48);
        floor_4128_400.addToGameUI(gameUI);

        var iron_4416_270 = new Block(4416, 270, 64, 128);
        iron_4416_270.addToGameUI(gameUI);

        var iron_4480_206 = new Block(4480, 206, 64, 192);
        iron_4480_206.addToGameUI(gameUI);

        var iron_4544_142 = new Block(4544, 142, 64, 256);
        iron_4544_142.addToGameUI(gameUI);

        var iron_4544_142 = new Block(4544, 142, 64, 256);
        iron_4544_142.addToGameUI(gameUI);

        var iron_4864_366 = new Block(4864, 366, 32, 32);
        iron_4864_366.addToGameUI(gameUI);

        var flag = new Block(4864 + 12, 60, 8, 308);
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
                    var world = new World_1_4();
                    this.gameUI.setWorld(world);
                    this.state = World_1_3_State.None;
                    this.mario.setCollidable(true, true, true, true);
                }
                break;
        }
    },
    changeToScene1: function () {
        this.mario.setCollidable(false, true, false, false);
        this.state = World_1_3_State.Scene1;
    },
});