

World_2_2_Scene = {
    None: 0,
    Scene1: 1,
    Scene2: 2,
    Scene3: 3
};

World_2_2 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setPosition(0, 0);
        this.setSize(7904, 450);
        this.setBackgroundImage(Const.IMAGE_WORLD_2_2);
        this.setBackgroundPosition(1, 0);
        this.show();

        this.scene = World_2_2_Scene.Scene1;
        this.setTitle("World  2-2");
        this.scrollable = true;
        ImageLoader.load(this, [Const.IMAGE_WORLD_2_3]);
        ScriptLoader.load(this, [Const.SCRIPT_WORLD_2_3]);
    },
    scroll: function () {

        if (this.scene == World_2_2_Scene.Scene2 && Math.abs(this.x) >= 6210) {
            return false;
        }
        if (this.scene == World_2_2_Scene.Scene3 && Math.abs(this.x) >= 7390) {
            return false;
        }
        if (this.scrollable) {
            if (this.mario.x + this.x > 220) {
                this.setX(this.x - (this.mario.jumping ? this.mario.speed + 1 : this.mario.speed));
            }
        }
    },
    build: function () {
        var gameUI = this;

        this.mario.addToGameUI(this);

        var blurp_900_272 = new Blurp(900, 272, GameObjectIconType.Castle);
        blurp_900_272.addToGameUI(this);
        
        var blurp_900_144 = new Blurp(964, 144, GameObjectIconType.Sky);
        blurp_900_144.addToGameUI(this);

        var blurp_1368_96 = new Blurp(1368, 96, GameObjectIconType.Castle);
        blurp_1368_96.addToGameUI(this);
        
        var blurp_1400_208 = new Blurp(1400, 208, GameObjectIconType.Sky);
        blurp_1400_208.addToGameUI(this);
                
        var blurp_2500_368 = new Blurp(2500, 368, GameObjectIconType.Sky);
        blurp_2500_368.addToGameUI(this);
        
        var blurp_2500_368 = new Blurp(2500, 240, GameObjectIconType.Castle);
        blurp_2500_368.addToGameUI(this);
        
        for (var i = 0; i < 3; i++) {
            var blurp = new Blurp(2886 + 48 * i, 144, GameObjectIconType.Castle);
            blurp.addToGameUI(this);
        }
        
        for (var i = 0; i < 3; i++) {
            var blurp = new Blurp(3528, 144 + 64 * i, GameObjectIconType.Sky);
            blurp.addToGameUI(this);
        }
        
        for (var i = 0; i < 3; i++) {
            var blurp = new Blurp(4000 + 48 * i, 144, GameObjectIconType.Castle);
            blurp.addToGameUI(this);
        }
        
        for (var i = 0; i < 3; i++) {
            var blurp = new Blurp(4550, 96 + 64 * i, GameObjectIconType.Castle);
            blurp.addToGameUI(this);
        }
        
        for (var i = 0; i < 3; i++) {
            var blurp = new Blurp(4860 + 48 * i, 176, GameObjectIconType.Sky);
            blurp.addToGameUI(this);
        }
        
        for (var i = 0; i < 3; i++) {
            var blurp = new Blurp(5796 + 48 * i, 240, GameObjectIconType.Castle);
            blurp.addToGameUI(this);
        }
        
        for (var i = 0; i < 3; i++) {
            var blurp = new Blurp(5792 + 48 * i, 336, GameObjectIconType.Sky);
            blurp.addToGameUI(this);
        }
        
        var blurp_6300_240 = new Blurp(6300, 240, GameObjectIconType.Castle);
        blurp_6300_240.addToGameUI(this);
        
        var blurp_6300_240 = new Blurp(6400, 96, GameObjectIconType.Sky);
        blurp_6300_240.addToGameUI(this);

        var floor_0_400 = new Block(516, 400, 2146, 48);
        floor_0_400.addToGameUI(gameUI);

        var block_868_304 = new Block(868, 304, 32, 96);
        block_868_304.addToGameUI(gameUI);
        
        for (var i = 0; i < 2; i++) {
            var gold = new Gold2(960 + 32 * i, 368, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }
        
        var block_1094_272 = new Block(1094, 272, 96, 32);
        block_1094_272.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(1414 + 32 * i, 144, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var block_1606_240 = new Block(1606, 240, 32, 160);
        block_1606_240.addToGameUI(gameUI);
        
        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(1702 + 32 * i, 368, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var block_1894_208 = new Block(1894, 208, 32, 96);
        block_1894_208.addToGameUI(gameUI);

        var block_1926_272 = new Block(1926, 272, 32, 32);
        block_1926_272.addToGameUI(gameUI);

        var block_2150_272 = new Block(2150, 272, 32, 128);
        block_2150_272.addToGameUI(gameUI);

        var block_2598_304 = new Block(2598, 304, 32, 96);
        block_2598_304.addToGameUI(gameUI);

        var block_2630_240 = new Block(2630, 240, 32, 160);
        block_2630_240.addToGameUI(gameUI);
        
        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(2694 + 32 * i, 304, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var block_2822_240 = new Block(2822, 240, 32, 160);
        block_2822_240.addToGameUI(gameUI);

        var floor_2822_400 = new Block(2822, 400, 1918, 48);
        floor_2822_400.addToGameUI(gameUI);

        var block_2854_304 = new Block(2854, 304, 32, 96);
        block_2854_304.addToGameUI(gameUI);

        var block_3046_48 = new Block(3046, 48, 64, 96);
        block_3046_48.addToGameUI(gameUI);

        var block_3046_304 = new Block(3046, 304, 64, 96);
        block_3046_304.addToGameUI(gameUI);

        var block_3174_140 = new Block(3174, 144, 96, 32);
        block_3174_140.addToGameUI(gameUI);

        var block_3206_80 = new Block(3206, 80, 32, 64);
        block_3206_80.addToGameUI(gameUI);

        var block_3398_304 = new Block(3398, 304, 32, 96);
        block_3398_304.addToGameUI(gameUI);
        
        for (var i = 0; i < 2; i++) {
            var gold = new Gold2(3782 + 32 * i, 336, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var block_3814_144 = new Block(3814, 144, 32, 128);
        block_3814_144.addToGameUI(gameUI);

        var block_3814_272 = new Block(3814, 272, 64, 32);
        block_3814_272.addToGameUI(gameUI);
        
        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(4164 + 32 * i, 176, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var block_4228_240 = new Block(4228, 240, 64, 32);
        block_4228_240.addToGameUI(gameUI);

        var block_4388_272 = new Block(4388, 272, 32, 128);
        block_4388_272.addToGameUI(gameUI);

        var block_4676_272 = new Block(4676, 272, 32, 128);
        block_4676_272.addToGameUI(gameUI);

        var block_4708_336 = new Block(4708, 336, 32, 64);
        block_4708_336.addToGameUI(gameUI);

        var block_4740_48 = new Block(4740, 48, 32, 64);
        block_4740_48.addToGameUI(gameUI);

        var block_4740_112 = new Block(4740, 112, 32 * 9, 32);
        block_4740_112.addToGameUI(gameUI);

        var gold = new Gold2(4804, 336, GameObjectIconType.Ground);
        gold.addToGameUI(gameUI);
        
        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(4836 + 32 * i, 368, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }
        
        var gold = new Gold2(4836 + 96, 336, GameObjectIconType.Ground);
        gold.addToGameUI(gameUI);

        var block_5028_336 = new Block(5028, 336, 32, 64);
        block_5028_336.addToGameUI(gameUI);

        var block_5060_272 = new Block(5060, 272, 32, 128);
        block_5060_272.addToGameUI(gameUI);

        var block_5252_336 = new Block(5252, 336, 32, 64);
        block_5252_336.addToGameUI(gameUI);

        var block_5316_304 = new Block(5316, 304, 32, 96);
        block_5316_304.addToGameUI(gameUI);

        var block_5540_144 = new Block(5540, 144, 32, 32 * 8);
        block_5540_144.addToGameUI(gameUI);

        var block_5572_144 = new Block(5572, 144, 64, 32);
        block_5572_144.addToGameUI(gameUI);
        
        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(5636 + 32 * i, 272, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(5636 + 32 * i, 368, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var block_5732_144 = new Block(5732, 144, 64, 32);
        block_5732_144.addToGameUI(gameUI);

        var block_5796_144 = new Block(5796, 144, 32, 32 * 8);
        block_5796_144.addToGameUI(gameUI);


        var floor_5796_400 = new Block(5796, 400, 926, 48);
        floor_5796_400.addToGameUI(gameUI);

        var block_6052_140 = new Block(6052, 144, 32 * 5, 32);
        block_6052_140.addToGameUI(gameUI);

        var block_6052_272 = new Block(6052, 272, 32 * 5, 32);
        block_6052_272.addToGameUI(gameUI);

        var block_6084_80 = new Block(6084, 80, 32, 64);
        block_6084_80.addToGameUI(gameUI);

        var block_6306_140 = new Block(6306, 144, 32 * 4, 32);
        block_6306_140.addToGameUI(gameUI);

        var block_6306_272 = new Block(6306, 272, 32 * 4, 32);
        block_6306_272.addToGameUI(gameUI);

        for (var i = 0; i < 4; i++) {
            var block = new Block(6466 + 32 * i, 400 - 32 * (i + 1), 32, 32 * (i + 1));
            block.addToGameUI(gameUI);
        }

        var block_6306_272 = new Block(6562, 48, 32 * 5, 32 * 4);
        block_6306_272.addToGameUI(gameUI);

        var tube_6594_208 = new Block(6594, 208, 32, 64);
        tube_6594_208.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.RIGHT)) {
                this.gameUI.scene = World_2_2_Scene.Scene3;
                this.gameUI.changeScene();
            }
        });
        tube_6594_208.addToGameUI(gameUI);

        var block_6626_176 = new Block(6626, 176, 32, 32);
        block_6626_176.addToGameUI(gameUI);


        // scene3
        var floor_6726_400 = new Block(6726, 400, 1176, 48);
        floor_6726_400.addToGameUI(gameUI);

        var tube_6820_336 = new Block(6820, 336, 64, 64);
        tube_6820_336.addToGameUI(gameUI);

        for (var i = 0; i < 9; i++) {
            var block = new Block(6884 + 32 * i, 368 - 32 * Math.min(i, 7), 32, 32 + 32 * Math.min(i, 7));
            block.addToGameUI(gameUI);
        }

        var block_7428_368 = new Block(7428, 368, 32, 32);
        block_7428_368.addToGameUI(gameUI);

        var flag = new Block(7428 + 12, 66, 8, 303);
        flag.addToGameUI(gameUI);
        flag.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors) {
                this.setCollidable(false, false, false, false);
                this.gameUI.end();
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

        this.setX(-524);
        this.mario.setPosition(574, 400 - this.mario.height);

        this.scrollable = true;
    },
    onGame: function () {
        if (this.mario.x < 292) {
            this.mario.moveRight(2);
            this.mario.sprite.moveToNextFrame();
            if (this.mario.x >= 292) {
                this.scene = World_2_2_Scene.Scene2;
                this.changeScene();
            }
            return;
        }

        World.prototype.onGame.call(this);
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
        if (this.mario.x < 7620) {
            this.mario.moveDown(7);
            this.falling = false;
            this.mario.moveRight(2);
            this.mario.sprite.moveToNextFrame();
        } else {
            var world = new World_2_3();
            this.gameUI.setWorld(world);
        }
    },
    onChangedScene: function() {
        switch (this.scene) {
        case World_2_2_Scene.Scene1:
            this.scrollable = false;
            this.mario.setPosition(90, 400 - this.mario.height);
            this.mario.moving = true;
            this.mario.movingToLeft = true;
            this.mario.setSprite(MarioSprite.Move);
            this.mario.sprite.setFrameCounter(4);
            break;
        case World_2_2_Scene.Scene2:
            this.mario.setInWater(true);
            this.scrollable = true;
            this.mario.setPosition(550, 0);
            this.setPosition(-516, 0);
            break;
        case World_2_2_Scene.Scene3:
            this.mario.setInWater(false);
            this.scrollable = true;
            this.mario.setPosition(6836, 336 - this.mario.height);
            this.setPosition(-6726, 0);
            break;
        }
    }
});