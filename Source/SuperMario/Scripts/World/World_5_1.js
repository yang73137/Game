

World_5_1_Scene = {
    None: 0,
    Scene1: 1,
    Scene2: 2,
    Scene3: 3
};


World_5_1 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setSize(7393, 448);
        this.setBackgroundImage(Const.IMAGE_WORLD_5_1);
        this.setBackgroundPosition(6, 6);
        this.setPosition(0, 0);
        this.show();
        
        this.setTitle("World  5-1");

        this.scene = World_5_1_Scene.Scene1;

        ImageLoader.load(this, [Const.IMAGE_WORLD_5_3]);
        ScriptLoader.load(this, [Const.SCRIPT_WORLD_5_3]);
    },
    scroll: function () {
        if (!this.scrollable) {
            return;
        }

        if (Math.abs(this.x)  >= 6342) {
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

        var floor_0_400 = new Block(0, 400, 1569, 48);
        floor_0_400.addToGameUI(gameUI);

        var koopaTroopa_480_352 = new KoopaTroopa(480, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
        koopaTroopa_480_352.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var goomba = new Goomba(586 + i * 40, 368, GameObjectIconType.Ground);
            goomba.addToGameUI(gameUI);
        }

        for (var i = 0; i < 3; i++) {
            var goomba = new Goomba(922 + i * 40, 368, GameObjectIconType.Ground);
            goomba.addToGameUI(gameUI);
        }

        for (var i = 0; i < 2; i++) {
            var koopaTroopa = new KoopaTroopa(1306 + 40 * i, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
            koopaTroopa.addToGameUI(gameUI);
        }

        var tube_1408_304 = new Block(1408, 304, 64, 96);
        tube_1408_304.addToGameUI(gameUI);

        var floor_1632_400 = new Block(1632, 400, 1313, 48);
        floor_1632_400.addToGameUI(gameUI);

        var tube_1632_304 = new Block(1632, 304, 64, 96);
        tube_1632_304.addToGameUI(gameUI);

        var koopaTroopa_1920_352 = new KoopaTroopa(1920, 352, KoopaTroopaType.Fly, true, false, GameObjectIconType.Ground);
        koopaTroopa_1920_352.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var goomba = new Goomba(2060 + 32 * i, 368, GameObjectIconType.Ground);
            goomba.addToGameUI(gameUI);
        }

        for (var i = 0; i < 2; i++) {
            var goomba = new Goomba(2440 + i * 40, 368, GameObjectIconType.Ground);
            goomba.addToGameUI(gameUI);
        }

        var koopaTroopa_2700_352 = new KoopaTroopa(2700, 352, KoopaTroopaType.Fly, true, false, GameObjectIconType.Ground);
        koopaTroopa_2700_352.addToGameUI(gameUI);

        var iron_2848_272 = new Block(2848, 272, 32, 128);
        iron_2848_272.addToGameUI(gameUI);

        var iron_2880_272 = new Block(2880, 272, 128, 32);
        iron_2880_272.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            if (i == 1) {
                continue;
            }
            var brick = new Brick(2880 + 32 * i, 144, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var question_2912_144 = new Question(2912, 144, QuestionItemType.Star, QuestionDisplayType.Brick, GameObjectIconType.Ground);
        question_2912_144.addToGameUI(gameUI);

        var floor_3072_400 = new Block(3072, 400, 577, 48);
        floor_3072_400.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var goomba = new Goomba(3294 + i * 40, 368, GameObjectIconType.Ground);
            goomba.addToGameUI(gameUI);
        }

        var billBlaster_3552_336 = new BillBlaster(3552, 336, GameObjectIconType.Ground);
        billBlaster_3552_336.addToGameUI(gameUI);

        var iron_3712_304 = new Block(3712, 304, 32, 96);
        iron_3712_304.addToGameUI(gameUI);

        var floor_3712_400 = new Block(3712, 400, 1153, 48);
        floor_3712_400.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var goomba = new Goomba(3872 + i * 40, 368, GameObjectIconType.Ground);
            goomba.addToGameUI(gameUI);
        }

        for (var i = 0; i < 2; i++) {
            var koopaTroopa = new KoopaTroopa(4564 + 40 * i, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
            koopaTroopa.addToGameUI(gameUI);
        }

        for (var i = 0; i < 3; i++) {
            var goomba = new Goomba(4350 + i * 40, 368, GameObjectIconType.Ground);
            goomba.addToGameUI(gameUI);
        }

        var koopaTroopa_4000_352 = new KoopaTroopa(4000, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
        koopaTroopa_4000_352.addToGameUI(gameUI);

        var iron_4704_272 = new Block(4704, 272, 32, 128);
        iron_4704_272.addToGameUI(gameUI);

        var question_4736_272 = new Question(4736, 272, QuestionItemType.LifeMushroom, QuestionDisplayType.Hidden, GameObjectIconType.Ground);
        question_4736_272.addToGameUI(gameUI);

        for (var i = 0; i < 2; i++) {
            var brick = new Brick(4768 + 32 * i, 272, GameObjectIconType.Ground);
            brick.addToGameUI(gameUI);
        }

        var floor_4960_400 = new Block(4960, 400, 1895, 48);
        floor_4960_400.addToGameUI(gameUI);

        var tube_4992_208 = new Block(4992, 208, 64, 96);
        tube_4992_208.attachCollidesUp(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.DOWN) && ((gameObject.x > this.x) && (gameObject.x + gameObject.width < this.x + this.width))) {
                this.gameUI.scene = World_5_1_Scene.Scene2;
                this.gameUI.changeScene();
            }
        });
        tube_4992_208.addToGameUI(gameUI);

        var billBlaster_5088_336 = new BillBlaster(5088, 336, GameObjectIconType.Ground);
        billBlaster_5088_336.addToGameUI(gameUI);

        var tube_5216_336 = new Block(5216, 336, 64, 64);
        tube_5216_336.addToGameUI(gameUI);

        var billBlaster_5440_336 = new BillBlaster(5440, 336, GameObjectIconType.Ground);
        billBlaster_5440_336.addToGameUI(gameUI);

        var koopaTroopa_5636_352 = new KoopaTroopa(5636, 352, KoopaTroopaType.Fly, true, false, GameObjectIconType.Ground);
        koopaTroopa_5636_352.addToGameUI(gameUI);

        var koopaTroopa_5738_352 = new KoopaTroopa(5738, 352, KoopaTroopaType.Fly, true, false, GameObjectIconType.Ground);
        koopaTroopa_5738_352.addToGameUI(gameUI);

        for (var i = 0; i < 5; i++) {
            var iron = new Block(5824 + 32 * i, 368 - 32 * i, 32, 32 * (i + 1));
            iron.addToGameUI(gameUI);
        }

        var iron_6048_144 = new Block(6048, 144, 64, 192);
        iron_6048_144.addToGameUI(gameUI);

        var block_7200_368 = new Block(6368, 368, 32, 32);
        block_7200_368.addToGameUI(gameUI);

        var flag = new Block(6368 + 12, 66, 8, 303);
        flag.addToGameUI(gameUI);
        flag.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors) {
                this.setCollidable(false, false, false, false);
                this.gameUI.end();
            }
        });

        // scene2
        var floor_6867_400 = new Block(6867, 400, 512, 48);
        floor_6867_400.addToGameUI(gameUI);

        var block_6867_48 = new Block(6867, 48, 32, 352);
        block_6867_48.addToGameUI(gameUI);

        for (var i = 0; i < 7; i++) {
            var brick = new Brick(6995 + 32 * i, 48, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 5; j++) {
                var gold = new Gold2(7027 + 32 * j, 144 + 32 * i, GameObjectIconType.Underground);
                gold.addToGameUI(gameUI);
            }
        }

        for (var i = 0; i < 7; i++) {
            var brick = new Brick(6995 + 32 * i, 208, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var brick = new Brick(6995, 176, GameObjectIconType.Underground);
        brick.addToGameUI(gameUI);

        for (var i = 0; i < 4; i++) {
            var brick = new Brick(7187, 80 + 32 * i, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 2; i++) {
            var brick = new Brick(7219 + 32 * i, 176, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var question_7315_208 = new Question(7315, 208, QuestionItemType.MultiGold, QuestionDisplayType.Brick, GameObjectIconType.Underground);
        question_7315_208.setCollideCount(7);
        question_7315_208.addToGameUI(gameUI);

        var block_7352_48 = new Block(7352, 48, 32, 288);
        block_7352_48.addToGameUI(gameUI);

        var tube_7285_336 = new Block(7285, 336, 90, 64);
        tube_7285_336.addToGameUI(gameUI);
        tube_7285_336.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.RIGHT)) {
                this.gameUI.scene = World_5_1_Scene.Scene3;
                this.gameUI.changeScene();
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

        if (Math.abs(oldX) >= 3072) {
            this.setX(-3072);
            this.mario.setPosition(3172, 400 - this.mario.height);
        } else {
            this.setX(0);
            this.mario.setPosition(84, 400 - this.mario.height);
        }

        this.scrollable = true;
    },
    onEnd: function() {
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
        if (this.mario.x < 6560) {
            this.mario.moveDown(7);
            this.falling = false;
            this.mario.moveRight(2);
            this.mario.sprite.moveToNextFrame();
        } else {
            this.state = WorldState.None;
            var world = new World_5_3();
            this.gameUI.setWorld(world);
        }
    },
    onChangedScene: function () {
        switch (this.scene) {
            case World_5_1_Scene.Scene1:
                this.scrollable = true;
                this.mario.setPosition(84, 400 - this.mario.height);
                this.setPosition(0, 0);
                break;
            case World_5_1_Scene.Scene2:
                this.scrollable = false;
                this.mario.setPosition(6920, 0);
                this.setPosition(-6867, 0);
                break;
            case World_5_1_Scene.Scene3:
                this.scrollable = true;
                this.mario.setPosition(5216, 336 - (this.mario.type == MarioType.Small ? 32 : 64));
                this.setPosition(-5132, 0);
                break;
        }
    }
});