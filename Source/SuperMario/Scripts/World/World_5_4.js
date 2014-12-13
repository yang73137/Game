

World_5_4 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setSize(5120, 448);
        this.setBackgroundImage(Const.IMAGE_WORLD_5_4);
        this.setBackgroundPosition(8, 5);
        this.setPosition(0, 0);
        this.show();

        this.scrollable = true;
        this.setTitle("World  5-4");

        ImageLoader.load(this, [Const.IMAGE_WORLD_6_1]);
        ScriptLoader.load(this, [Const.SCRIPT_WORLD_6_1]);
    },
    scroll: function () {
        if (!this.scrollable) {
            return;
        }

        if (Math.abs(this.x) >= 4608) {
            return;
        }

        if (this.mario.x - Math.abs(this.x) > 220 && Math.abs(this.x) <= 4590) {
            this.setX(this.x - (this.mario.jumping ? this.mario.speed + 1 : this.mario.speed));
        }
    },
    build: function () {
        var gameUI = this;

        this.mario.addToGameUI(gameUI);
        this.mario.setPosition(84, 208 - this.mario.height);

        this.bowser = new Bowser(4300, 240);
        this.bowser.addToGameUI(gameUI);


        var roof_0_46 = new Block(0, 48, 512, 96);
        roof_0_46.addToGameUI(gameUI);

        var floor_0_206 = new Block(0, 208, 96, 32);
        floor_0_206.addToGameUI(gameUI);

        var floor_0_228 = new Block(0, 240, 128, 32);
        floor_0_228.addToGameUI(gameUI);

        var floor_0_270 = new Block(0, 272, 160, 32);
        floor_0_270.addToGameUI(gameUI);

        var floor_0_302 = new Block(0, 304, 512, 143);
        floor_0_302.addToGameUI(gameUI);

        var fire_526_700 = new EnemyFireball(526, 700, true);
        fire_526_700.addToGameUI(gameUI);

        var fire_958_700 = new EnemyFireball(958, 700, true);
        fire_958_700.addToGameUI(gameUI);

        var block_574_272 = new Block(574, 272, 64, 32);
        block_574_272.addToGameUI(gameUI);

        var question_734_80 = new Question(734, 80, QuestionItemType.BigMushroom, QuestionDisplayType.Question, GameObjectIconType.Ground);
        question_734_80.addToGameUI(gameUI);

        var block_702_208 = new Block(702, 208, 96, 32);
        block_702_208.addToGameUI(gameUI);

        var block_862_272 = new Block(862, 272, 64, 32);
        block_862_272.addToGameUI(gameUI);

        var block_1022_304 = new Block(1022, 304, 64, 96);
        block_1022_304.addToGameUI(gameUI);

        var floor_1022_400 = new Block(1022, 400, 1664, 48);
        floor_1022_400.addToGameUI(gameUI);

        var roof_1086_46 = new Block(1086, 48, 1568, 128);
        roof_1086_46.addToGameUI(gameUI);

        var block_1182_272 = new Block(1182, 272, 1183, 32);
        block_1182_272.addToGameUI(gameUI);

        var block_2622_176 = new Block(2622, 176, 32, 32);
        block_2622_176.addToGameUI(gameUI);

        var block_2558_304 = new Block(2558, 304, 128, 96);
        block_2558_304.addToGameUI(gameUI);

        var block_2738_20 = new Block(2738, -16, 52, 16, true);
        block_2738_20.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_2738_20.sprite.setBackgroundPosition(0, 376);
        block_2738_20.attachUpdate(function () {
            if (this.y > -16) {
                this.moveUp(2);
            } else {
                this.setY(this.gameUI.height);
            }
        });
        block_2738_20.addToGameUI(gameUI);


        var block_2738_240 = new Block(2738, 224, 52, 16, true);
        block_2738_240.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_2738_240.sprite.setBackgroundPosition(0, 376);
        block_2738_240.attachUpdate(function () {
            if (this.y > -16) {
                this.moveUp(2);
            } else {
                this.setY(this.gameUI.height);
            }
        });
        block_2738_240.addToGameUI(gameUI);

        var block_2834_16 = new Block(2834, -16, 52, 16, true);
        block_2834_16.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_2834_16.sprite.setBackgroundPosition(0, 376);
        block_2834_16.attachUpdate(function () {
            if (this.y < this.gameUI.height) {
                this.moveDown(2);
            } else {
                this.setY(-16);
            }
        });
        block_2834_16.addToGameUI(gameUI);

        var block_2834_224 = new Block(2834, 224, 52, 16, true);
        block_2834_224.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        block_2834_224.sprite.setBackgroundPosition(0, 376);
        block_2834_224.attachUpdate(function () {
            if (this.y < this.gameUI.height) {
                this.moveDown(2);
            } else {
                this.setY(-16);
            }
        });
        block_2834_224.addToGameUI(gameUI);

        var block_2942_304 = new Block(2942, 304, 224, 96);
        block_2942_304.addToGameUI(gameUI);

        var floor_2942_400 = new Block(2942, 400, 544, 48);
        floor_2942_400.addToGameUI(gameUI);

        var roof_2974_46 = new Block(2974, 48, 192, 96);
        roof_2974_46.addToGameUI(gameUI);

        var block_3294_336 = new Block(3294, 336, 32, 32);
        block_3294_336.addToGameUI(gameUI);

        var block_3294_336 = new Block(3454, 304, 32, 96);
        block_3294_336.addToGameUI(gameUI);

        var block_3550_304 = new Block(3550, 304, 64, 144);
        block_3550_304.addToGameUI(gameUI);

        var roof_3678_46 = new Block(3678, 48, 1443, 32);
        roof_3678_46.addToGameUI(gameUI);

        var block_3678_78 = new Block(3678, 78, 418, 64);
        block_3678_78.addToGameUI(gameUI);

        var block_3678_304 = new Block(3678, 304, 160, 96);
        block_3678_304.addToGameUI(gameUI);

        var floor_3678_400 = new Block(3678, 400, 416, 48);
        floor_3678_400.addToGameUI(gameUI);

        var block_3678_304 = new Block(3678, 304, 160, 96);
        block_3678_304.addToGameUI(gameUI);

        var block_3902_304 = new Block(3902, 304, 64, 96);
        block_3902_304.addToGameUI(gameUI);

        var block_4030_304 = new Block(4030, 304, 64, 96);
        block_4030_304.addToGameUI(gameUI);

        for (var i = 0; i < 9; i++) {
            var brick = new Brick(4094 + 32 * i, 144, GameObjectIconType.Castle);
            brick.addToGameUI(gameUI);
        }

        this.bridge_4094_302 = new Block(4094, 304, 416, 35);
        this.bridge_4094_302.broken = false;
        this.bridge_4094_302.addToGameUI(gameUI);

        var afx_4510_240 = new Block(4514, 240, 32, 32, true);
        afx_4510_240.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        afx_4510_240.sprite.setFrameSequence([{ x: 0, y: 255 }, { x: 32, y: 255 }, { x: 32 * 2, y: 255 }, { x: 32 * 3, y: 255 }]);
        afx_4510_240.sprite.setFrameCounter(8);
        afx_4510_240.sprite.setRepeat(0);
        afx_4510_240.sprite.start();
        afx_4510_240.used = false;
        afx_4510_240.attachUpdate(function () {
            if (!this.used) {
                this.sprite.moveToNextFrame();
            }
        });
        afx_4510_240.attachCollides(function (gameObject) {
            if (gameObject instanceof MarioBors) {
                this.setCollidable(false, false, false);
                this.sprite.hide();
                this.used = true;
                this.gameUI.bridge_4094_302.sprite.setBackground("#000000");
                this.gameUI.bridge_4094_302.setCollidable(false, false, false, false);
                this.gameUI.bowser.dead();
                this.gameUI.end();
            }
        });
        afx_4510_240.addToGameUI(gameUI);


        var block_3902_304 = new Block(4510, 272, 96, 128);
        block_3902_304.addToGameUI(gameUI);

        var floor_4510_400 = new Block(4510, 400, 611, 48);
        floor_4510_400.addToGameUI(gameUI);

        var block_4542_272 = new Block(4542, 78, 64, 96);
        block_4542_272.addToGameUI(gameUI);

        var x = new Block(4880, 350, 32, 48);
        x.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        x.sprite.setBackgroundPosition(0, 464);
        x.setStoppable(true);
        x.attachCollides(function (gameObject) {
            if (gameObject instanceof MarioBors) {
                var world = new World_6_1();
                this.gameUI.gameUI.setWorld(world);
            }
        });
        x.addToGameUI(gameUI);
    },
    restart: function () {
        this.div.innerHTML = "";
        this.staticObjects = [];
        this.animateObjects = [];
        this.build();

        this.setPosition(0, 0);
        this.mario.setPosition(84, 208 - this.mario.height);
        this.mario.reborn();

        this.scrollable = true;
    },
    onEnd: function () {
        if (!this.initEnd) {
            this.mario.setSprite(MarioSprite.Move);
            this.mario.moving = true;
            this.mario.movingToLeft = true;
            this.mario.sprite.setFrameCounter(2);
            this.initEnd = true;
        }

        this.mario.moveDown(7);
        this.falling = false;
        this.mario.moveRight(2);
        this.mario.sprite.moveToNextFrame();
    }
});