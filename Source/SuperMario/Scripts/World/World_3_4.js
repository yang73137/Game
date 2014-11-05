

World_3_4 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setSize(5115, 448);
        this.setBackgroundImage(Const.IMAGE_WORLD_3_4);
        this.setBackgroundPosition(4, 3);
        this.setPosition(0, 0);
        this.show();
        
        this.setTitle("World  3-4");
        this.scrollable = true;
        
        ImageLoader.load(this, [Const.IMAGE_WORLD_4_1]);
        ScriptLoader.load(this, [Const.SCRIPT_WORLD_4_1]);
    },
    scroll: function () {
        if (!this.scrollable) {
            return;
        }

        if (Math.abs(this.x) >= 4602) {
            return;
        }

        if (this.mario.x - Math.abs(this.x) > 220) {
            this.setX(this.x - (this.mario.jumping ? this.mario.speed + 1 : this.mario.speed));
        }
    },
    build: function() {
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
        
        var roof_512_46 = new Block(512, 48, 4603, 32);
        roof_512_46.addToGameUI(gameUI);
        
        var fire_528_700 = new EnemyFireball(528, 700, true);
        fire_528_700.addToGameUI(gameUI);
        
        var floor_576_304 = new Block(576, 304, 96, 144);
        floor_576_304.addToGameUI(gameUI);
        
        var fire_688_700 = new EnemyFireball(688, 700, true);
        fire_688_700.addToGameUI(gameUI);
        
        var floor_736_304 = new Block(736, 304, 96, 144);
        floor_736_304.addToGameUI(gameUI);
        
        var floor_896_304 = new Block(896, 304, 96, 144);
        floor_896_304.addToGameUI(gameUI);
        
        var floor_1056_304 = new Block(1056, 304, 64, 96);
        floor_1056_304.addToGameUI(gameUI);
        
        var floor_1056_400 = new Block(1056, 400, 417, 48);
        floor_1056_400.addToGameUI(gameUI);
        
        var roof_1184_80 = new Block(1184, 80, 64, 64);
        roof_1184_80.addToGameUI(gameUI);
        
        var roof_1312_80 = new Block(1312, 80, 160, 64);
        roof_1312_80.addToGameUI(gameUI);
        
        for (var i = 0; i < 3; i++) {
            var question = new Question(1344 + 32 * i, 272, i == 1 ? QuestionItemType.BigMushroom : QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Ground);
            question.addToGameUI(gameUI);
        }
        
        var floor_1056_400 = new Block(1536, 400, 1278, 48);
        floor_1056_400.addToGameUI(gameUI);
        
        var roof_1696_80 = new Block(1696, 80, 96, 64);
        roof_1696_80.addToGameUI(gameUI);
        
        var floor_1696_368 = new Block(1696, 368, 96, 32);
        floor_1696_368.addToGameUI(gameUI);

        var block_1728_144 = new Block(1728, 144, 32, 32);
        block_1728_144.addToGameUI(gameUI);
        
        var block_1728_336 = new Block(1728, 336, 32, 32);
        block_1728_336.addToGameUI(gameUI);
        
        var roof_2016_80 = new Block(2016, 80, 96, 64);
        roof_2016_80.addToGameUI(gameUI);

        var floor_2016_368 = new Block(2016, 368, 96, 32);
        floor_2016_368.addToGameUI(gameUI);

        var block_2048_144 = new Block(2048, 144, 32, 32);
        block_2048_144.addToGameUI(gameUI);

        var block_2048_336 = new Block(2048, 336, 32, 32);
        block_2048_336.addToGameUI(gameUI);
        
        var roof_2526_80 = new Block(2526, 80, 96, 64);
        roof_2526_80.addToGameUI(gameUI);

        var floor_2526_368 = new Block(2526, 368, 96, 32);
        floor_2526_368.addToGameUI(gameUI);

        var block_2558_144 = new Block(2558, 144, 32, 32);
        block_2558_144.addToGameUI(gameUI);
        
        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(2590 + 32 * i, 176, GameObjectIconType.Castle);
            gold.addToGameUI(gameUI);
        }

        var block_2558_336 = new Block(2558, 336, 32, 32);
        block_2558_336.addToGameUI(gameUI);
        
        var fire_2830_700 = new EnemyFireball(2830, 700, true);
        fire_2830_700.addToGameUI(gameUI);

        var roof_2878_80 = new Block(2878, 80, 192, 64);
        roof_2878_80.addToGameUI(gameUI);
        
        var floor_2878_304 = new Block(2878, 304, 192, 144);
        floor_2878_304.addToGameUI(gameUI);
        
        var fire_3118_700 = new EnemyFireball(3118, 700, true);
        fire_3118_700.addToGameUI(gameUI);
        
        var floor_3166_304 = new Block(3166, 304, 96, 144);
        floor_3166_304.addToGameUI(gameUI);
        
        var fire_3310_700 = new EnemyFireball(3310, 700, true);
        fire_3310_700.addToGameUI(gameUI);
        
        var  floor_3358_304 = new Block(3358, 304, 96, 144);
        floor_3358_304.addToGameUI(gameUI);
        
        var fire_3500_700 = new EnemyFireball(3500, 700, true);
        fire_3500_700.addToGameUI(gameUI);
        
        var roof_3548_80 = new Block(3548, 80, 544, 64);
        roof_3548_80.addToGameUI(gameUI);
        
        var floor_3358_304 = new Block(3548, 304, 160, 144);
        floor_3358_304.addToGameUI(gameUI);
        
        var floor_3708_400 = new Block(3708, 400, 64, 48);
        floor_3708_400.addToGameUI(gameUI);
        
        var floor_3772_304 = new Block(3772, 304, 320, 144);
        floor_3772_304.addToGameUI(gameUI);
        
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 2; j++) {
                var brick = new Brick(4220 + 32 * j, 80 + 32 * i, GameObjectIconType.Castle);
                brick.addToGameUI(gameUI);
            }
        }

        this.bridge_4094_302 = new Block(4094, 304, 416, 35);
        this.bridge_4094_302.broken = false;
        this.bridge_4094_302.addToGameUI(gameUI);

        var afx_4512_240 = new Block(4512, 240, 32, 32, true);
        afx_4512_240.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        afx_4512_240.sprite.setFrameSequence([{ x: 0, y: 255 }, { x: 32, y: 255 }, { x: 32 * 2, y: 255 }, { x: 32 * 3, y: 255 }]);
        afx_4512_240.sprite.setFrameCounter(8);
        afx_4512_240.sprite.setRepeat(0);
        afx_4512_240.sprite.start();
        afx_4512_240.used = false;
        afx_4512_240.attachUpdate(function () {
            if (!this.used) {
                this.sprite.moveToNextFrame();
            }
        });
        afx_4512_240.attachCollides(function (gameObject) {
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
        afx_4512_240.addToGameUI(gameUI);
        
        var block_4508_272 = new Block(4508, 272, 96, 128);
        block_4508_272.addToGameUI(gameUI);

        var floor_4508_400 = new Block(4508, 400, 611, 48);
        floor_4508_400.addToGameUI(gameUI);

        var block_4540_272 = new Block(4540, 78, 64, 96);
        block_4540_272.addToGameUI(gameUI);

        var x = new Block(4870, 350, 32, 48);
        x.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        x.sprite.setBackgroundPosition(0, 464);
        x.setStoppable(true);
        x.attachCollides(function (gameObject) {
            if (gameObject instanceof MarioBors) {
                var world = new World_4_1();
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