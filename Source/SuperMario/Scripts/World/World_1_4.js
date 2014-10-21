
World_1_4_State = {
    None: 0,
    Normal: 1
};

World_1_4 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setSize(5126, 448);
        this.setBackgroundImage(Const.IMAGE_WORLD_1_4);
        this.setBackgroundPosition(3, 2);
        this.setPosition(0, 0);
        this.show();

        this.scrollable = true;
        this.state = World_1_4_State.Normal;
    },
    scroll: function () {
        if (!this.scrollable) {
            return;
        }

        if (this.mario.x - Math.abs(this.x) > 220 && Math.abs(this.x) <= 4590) {
            this.setX(this.x - (this.mario.jumping ? this.mario.speed + 1 : this.mario.speed));
        }
    },
    build: function () {
        var gameUI = this;

        this.mario.addToGameUI(gameUI);
        this.mario.setPosition(84, 206 - this.mario.height);

        var x = new Block(4880, 350, 32, 48);
        x.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        x.sprite.setBackgroundPosition(0, 464);
        x.setStoppable(true);
        x.attachCollides(function(gameObject) {
            if (gameObject instanceof MarioBors) {
                alert("后续关卡开发中");
                this.gameUI.state = World_1_4_State.None;
            }
        });
        x.addToGameUI(gameUI);

        this.bowser = new Bowser(4300, 240);
        this.bowser.addToGameUI(gameUI);

        var roof_0_46 = new Block(0, 46, 718, 96);
        roof_0_46.addToGameUI(gameUI);

        var roof_719_46 = new Block(719, 46, 32, 128);
        roof_719_46.addToGameUI(gameUI);

        var roof_752_46 = new Block(752, 46, 414, 32);
        roof_752_46.addToGameUI(gameUI);

        var roof_1167_46 = new Block(1167, 46, 1120, 128);
        roof_1167_46.addToGameUI(gameUI);

        var roof_2288_46 = new Block(2288, 46, 2818, 32);
        roof_2288_46.addToGameUI(gameUI);

        var roof_3087_78 = new Block(3087, 78, 224, 64);
        roof_3087_78.addToGameUI(gameUI);

        var roof_3919_78 = new Block(3919, 78, 160, 64);
        roof_3919_78.addToGameUI(gameUI);

        var roof_4527_78 = new Block(4527, 78, 64, 96);
        roof_4527_78.addToGameUI(gameUI);


        var block_719_176 = new Block(719, 176, 32, 32);
        block_719_176.addToGameUI(gameUI);

        var block_1167_176 = new Block(1167, 176, 32, 24);
        block_1167_176.addToGameUI(gameUI);

        var block_1551_176 = new Block(1551, 176, 32, 24);
        block_1551_176.addToGameUI(gameUI);

        var block_1903_176 = new Block(1903, 176, 32, 24);
        block_1903_176.addToGameUI(gameUI);


        var block_2127_176 = new Block(2127, 176, 32, 24);
        block_2127_176.addToGameUI(gameUI);

        var block_2415_272 = new Block(2415, 272, 32, 32);
        block_2415_272.addToGameUI(gameUI);

        var block_2671_272 = new Block(2671, 272, 32, 32);
        block_2671_272.addToGameUI(gameUI);

        var block_2543_78 = new Block(2543, 78, 32, 66);
        block_2543_78.addToGameUI(gameUI);

        var block_2799_78 = new Block(2799, 78, 32, 66);
        block_2799_78.addToGameUI(gameUI);
        
        var block_2927_272 = new Block(2927, 272, 32, 32);
        block_2927_272.addToGameUI(gameUI);


        var question_943_176 = new Question(943, 176, QuestionItemType.BigMushroom, QuestionDisplayType.Question, GameObjectIconType.Ground);
        question_943_176.addToGameUI(gameUI);




        var floor_0_206 = new Block(0, 206, 96, 32);
        floor_0_206.addToGameUI(gameUI);

        var floor_0_228 = new Block(0, 238, 128, 32);
        floor_0_228.addToGameUI(gameUI);

        var floor_0_270 = new Block(0, 270, 160, 32);
        floor_0_270.addToGameUI(gameUI);

        var floor_0_302 = new Block(0, 302, 416, 143);
        floor_0_302.addToGameUI(gameUI);

        var floor_463_302 = new Block(463, 302, 352, 144);
        floor_463_302.addToGameUI(gameUI);

        var floor_911_302 = new Block(911, 302, 96, 144);
        floor_911_302.addToGameUI(gameUI);

        var floor_1103_270 = new Block(1103, 270, 1185, 176);
        floor_1103_270.addToGameUI(gameUI);

        var floor_2288_302 = new Block(2288, 302, 1024, 144);
        floor_2288_302.addToGameUI(gameUI);

        var floor_3312_398 = new Block(3312, 398, 382, 48);
        floor_3312_398.addToGameUI(gameUI);

        var floor_3695_302 = new Block(3695, 302, 128, 144);
        floor_3695_302.addToGameUI(gameUI);

        var floor_3824_398 = new Block(3824, 398, 94, 48);
        floor_3824_398.addToGameUI(gameUI);

        var floor_3919_302 = new Block(3919, 302, 160, 144);
        floor_3919_302.addToGameUI(gameUI);

        this.bridge_4079_302 = new Block(4079, 302, 416, 34);
        this.bridge_4079_302.broken = false;
        this.bridge_4079_302.addToGameUI(gameUI);

        var lian_4463_270 = new Block(4463, 270, 32, 32);
        lian_4463_270.addToGameUI(gameUI);
        lian_4463_270.setCollidable(false, false, false, false);

        var floor_4495_272 = new Block(4495, 272, 96, 173);
        floor_4495_272.addToGameUI(gameUI);

        var afx_4495_240 = new Block(4498, 240, 32, 32, true);
        afx_4495_240.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        afx_4495_240.sprite.setFrameSequence([{ x: 0, y: 255 }, { x: 32, y: 255 }, { x: 32 * 2, y: 255 }, { x: 32 * 3, y: 255 }]);
        afx_4495_240.sprite.setFrameCounter(8);
        afx_4495_240.sprite.setRepeat(0);
        afx_4495_240.sprite.start();
        afx_4495_240.used = false;
        afx_4495_240.attachUpdate(function () {
            if (!this.used) {
                this.sprite.moveToNextFrame();
            }
        });
        afx_4495_240.attachCollides(function (gameObject) {
            if (gameObject instanceof MarioBors) {
                this.setCollidable(false, false, false);
                this.sprite.hide();
                this.used = true;
                this.gameUI.bridge_4079_302.sprite.setBackground("#000000");
                this.gameUI.bridge_4079_302.setCollidable(false, false, false, false);
                this.gameUI.bowser.dead();
            }
        });
        afx_4495_240.addToGameUI(gameUI);

        var floor_4592_400 = new Block(4592, 400, 515, 48);
        floor_4592_400.addToGameUI(gameUI);

    },
    restart: function () {

        this.div.innerHTML = "";
        this.staticObjects = [];
        this.animateObjects = [];
        this.build();
        
        this.mario.setPosition(84, 208 - this.mario.height);
        this.mario.reborn();

        this.setPosition(-3, -3);

        this.scrollable = true;
    },
    update: function () {
        switch (this.state) {
        case World_1_4_State.None:
            break;
        case World_1_4_State.Normal:
            for (var i = 0; i < this.animateObjects.length; i++) {
                this.animateObjects[i].update();
            }
            break;
        }
    }
});