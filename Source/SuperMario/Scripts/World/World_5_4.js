

World_5_4 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setSize(5115, 448);
        this.setBackgroundImage(Const.IMAGE_WORLD_5_4);
        this.setBackgroundPosition(6, 5);
        this.setPosition(0, 0);
        this.show();
        
        this.setTitle("World  5-4");
        this.scrollable = true;
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

        var floor_0_302 = new Block(0, 304, 512, 144);
        floor_0_302.addToGameUI(gameUI);
        
        var roof_512_46 = new Block(512, 48, 4603, 32);
        roof_512_46.addToGameUI(gameUI);

        var block_576_272 = new Block(576, 272, 64, 32);
        block_576_272.addToGameUI(gameUI);

        var block_704_208 = new Block(704, 208, 96, 32);
        block_704_208.addToGameUI(gameUI);

        var block_864_272 = new Block(864, 272, 64, 32);
        block_864_272.addToGameUI(gameUI);

        var question_736_80 = new Question(736, 80, QuestionItemType.BigMushroom, QuestionDisplayType.Question, GameObjectIconType.Ground);
        question_736_80.addToGameUI(gameUI);

        var floor_1024_304 = new Block(1024, 304, 64, 144);
        floor_1024_304.addToGameUI(gameUI);

        var roof_1088_48 = new Block(1088, 48, 1568, 128);
        roof_1088_48.addToGameUI(gameUI);

        var floor_1088_400 = new Block(1088, 400, 1600, 48);
        floor_1088_400.addToGameUI(gameUI);

        var block_1184_272 = new Block(1184, 272, 1184, 32);
        block_1184_272.addToGameUI(gameUI);

        var block_2560_304 = new Block(2560, 304, 128, 96);
        block_2560_304.addToGameUI(gameUI);

        var block_2624_176 = new Block(2624, 176, 32, 32);
        block_2624_176.addToGameUI(gameUI);
        
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
    },
    onGame: function() {}
});