
World_3_2 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setSize(7112, 448);
        this.setBackgroundImage(Const.IMAGE_WORLD_3_2);
        this.setBackgroundPosition(3, 3);
        this.setPosition(0, 0);
        this.show();
        
        this.setTitle("World  3-2");
        this.scrollable = true;
        
        ImageLoader.load(this, [Const.IMAGE_WORLD_3_3]);
        ScriptLoader.load(this, [Const.SCRIPT_WORLD_3_3]);
    },
    scroll: function () {
        if (!this.scrollable) {
            return;
        }

        if (Math.abs(this.x) >= 6594) {
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

        var koopaTroopa_500_352 = new KoopaTroopa(500, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
        koopaTroopa_500_352.addToGameUI(gameUI);
        
        for (var i = 0; i < 3; i++) {
            var goomba = new Goomba(768 + 36 * i, 368, GameObjectIconType.Ground);
            goomba.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 2; i++) {
            var koopaTroopa = new KoopaTroopa(998 + 36 * i, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
            koopaTroopa.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 2; i++) {
            var koopaTroopa = new KoopaTroopa(1340 + 36 * i, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
            koopaTroopa.addToGameUI(gameUI);
        }

        for (var i = 0; i < 3; i++) {
            var gold = new Gold2(1761 + 32 * i, 272, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }

        var koopaTroopa_2068_352 = new KoopaTroopa(2068, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
        koopaTroopa_2068_352.addToGameUI(gameUI);
        
        for (var i = 0; i < 3; i++) {
            var goomba = new Goomba(2240 + 36 * i, 368, GameObjectIconType.Ground);
            goomba.addToGameUI(gameUI);
        }
        
        var koopaTroopa_2454_352 = new KoopaTroopa(2454, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
        koopaTroopa_2454_352.addToGameUI(gameUI);
        
        var koopaTroopa_2920_352 = new KoopaTroopa(2920, 352, KoopaTroopaType.Fly, true, true, GameObjectIconType.Ground);
        koopaTroopa_2920_352.addToGameUI(gameUI);
        
        var koopaTroopa_3440_352 = new KoopaTroopa(3440, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
        koopaTroopa_3440_352.addToGameUI(gameUI);
        
        for (var i = 0; i < 3; i++) {
            var goomba = new Goomba(3744 + 36 * i, 368, GameObjectIconType.Ground);
            goomba.addToGameUI(gameUI);
        }
        
        var koopaTroopa_4312_352 = new KoopaTroopa(4312, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
        koopaTroopa_4312_352.addToGameUI(gameUI);
        
        for (var i = 0; i < 3; i++) {
            var koopaTroopa = new KoopaTroopa(4470 + 36 * i, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
            koopaTroopa.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 2; i++) {
            var koopaTroopa = new KoopaTroopa(4750 + 36 * i, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
            koopaTroopa.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 3; i++) {
            var koopaTroopa = new KoopaTroopa(5130 + 36 * i, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
            koopaTroopa.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 4; i++) {
            var gold = new Gold2(5377 + 32 * i, 176, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Ground);
            gold.addToGameUI(gameUI);
        }
        
        var koopaTroopa_5530_352 = new KoopaTroopa(5530, 352, KoopaTroopaType.Normal, true, false, GameObjectIconType.Ground);
        koopaTroopa_5530_352.addToGameUI(gameUI);
        
        for (var i = 0; i < 2; i++) {
            var goomba = new Goomba(5730 + 36 * i, 368, GameObjectIconType.Ground);
            goomba.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 2; i++) {
            var goomba = new Goomba(5940 + 36 * i, 368, GameObjectIconType.Ground);
            goomba.addToGameUI(gameUI);
        }

        var floor_0_400 = new Block(0, 400, 2561, 48);
        floor_0_400.addToGameUI(gameUI);

        var block_1569_368 = new Block(1569, 368, 32, 32);
        block_1569_368.addToGameUI(gameUI);

        var question_1921_174 = new Question(1921, 176, QuestionItemType.BigMushroom, QuestionDisplayType.Question, GameObjectIconType.Ground);
        question_1921_174.addToGameUI(gameUI);

        var block_1921_304 = new Block(1921, 304, 32, 96);
        block_1921_304.addToGameUI(gameUI);
        
        var block_2401_336 = new Block(2401, 336, 32, 64);
        block_2401_336.addToGameUI(gameUI);
        
        var question_2465_144 = new Question(2465, 144, QuestionItemType.Star, QuestionDisplayType.Brick, GameObjectIconType.Ground);
        question_2465_144.addToGameUI(gameUI);
        
        var question_2465_272 = new Question(2465, 272, QuestionItemType.MultiGold, QuestionDisplayType.Brick, GameObjectIconType.Ground);
        question_2465_272.setCollideCount(5);
        question_2465_272.addToGameUI(gameUI);
        
        var block_2529_336 = new Block(2529, 336, 32, 64);
        block_2529_336.addToGameUI(gameUI);
        
        var floor_2625_400 = new Block(2625, 400, 1312, 48);
        floor_2625_400.addToGameUI(gameUI);
        
        var floor_2625_400 = new Block(2625, 400, 1312, 48);
        floor_2625_400.addToGameUI(gameUI);
        
        var floor_4001_400 = new Block(4001, 400, 96, 48);
        floor_4001_400.addToGameUI(gameUI);

        var brick_4033_176 = new Brick(4033, 176, GameObjectIconType.Ground);
        brick_4033_176.addToGameUI(gameUI);
        
        var block_4033_336 = new Block(4033, 336, 32, 64);
        block_4033_336.addToGameUI(gameUI);
        
        var floor_4001_400 = new Block(4161, 400, 2945, 48);
        floor_4001_400.addToGameUI(gameUI);

        var tube_5409_304 = new Block(5409, 304, 64, 96);
        tube_5409_304.addToGameUI(gameUI);
        
        for (var i = 0; i < 9; i++) {
            var block = new Block(6145 + 32 * i, 368 - 32 * Math.min(i, 7), 32, 32 + 32 * Math.min(i, 7));
            block.addToGameUI(gameUI);
        }

        var iron_6689_368 = new Block(6689, 368, 32, 32);
        iron_6689_368.addToGameUI(gameUI);

        var flag = new Block(6689 + 12, 66, 8, 304);
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

        if (Math.abs(oldX) >= 3044) {
            this.setX(-3044);
            this.mario.setPosition(3100, 400 - this.mario.height);
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
        if (this.mario.x < 6881) {
            this.mario.moveDown(7);
            this.falling = false;
            this.mario.moveRight(2);
            this.mario.sprite.moveToNextFrame();
        } else {
            var world = new World_3_3();
            this.gameUI.setWorld(world);
        }
    }
});