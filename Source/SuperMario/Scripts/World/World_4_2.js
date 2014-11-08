

World_4_2_Scene = {
    None: 0,
    Scene1: 1,
    Scene2: 2,
    Scene3: 3
};


World_4_2 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setSize(11554, 448);
        this.setBackgroundImage(Const.IMAGE_WORLD_4_2);
        this.setBackgroundPosition(7, 4);
        this.setPosition(0, 0);
        this.show();

        this.scene = World_4_2_Scene.Scene1;
        this.setTitle("World  4-2");
    },
    scroll: function () {
        if (!this.scrollable) {
            return;
        }

        if (Math.abs(this.x) >= 6500 && this.lakitu.active) {
            this.lakitu.active = false;
            this.lakitu.setCollidable(false, false, false, false);
            this.lakitu.state = LakituState.None;
            this.lakitu.sprite.hide();
        }

        if (Math.abs(this.x)  >= 7148) {
            return;
        }

        if (this.mario.x - Math.abs(this.x) > 220) {
            this.setX(this.x - (this.mario.jumping ? this.mario.speed + 1 : this.mario.speed));
        }
    },
    build: function () {
        var gameUI = this;

        this.mario.addToGameUI(gameUI);

        // scene1
        var floor_0_400 = new Block(0, 400, 512, 48);
        floor_0_400.addToGameUI(gameUI);

        // Scene2
        var floor_515_400 = new Block(515, 400, 352, 48);
        floor_515_400.addToGameUI(gameUI);

        var block_515_48 = new Block(515, 48, 32, 352);
        block_515_48.addToGameUI(gameUI);

        for (var i = 0; i < 51; i++) {
            var brick = new Brick(707 + 32 * i, 48, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var floor_931_400 = new Block(931, 400, 64, 48);
        floor_931_400.addToGameUI(gameUI);

        var floor_1059_400 = new Block(1059, 400, 32, 48);
        floor_1059_400.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 28; j++) {
                var brick = new Brick(1155 + 32 * j, 80 + 32 * i, GameObjectIconType.Underground);
                brick.addToGameUI(gameUI);
            }
        }

        var floor_1187_400 = new Block(1187, 400, 1152, 48);
        floor_1187_400.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 7; j++) {
                if (i != 0 && (j == 5 || j == 6)) {
                    continue;
                }
               var brick = new Brick(1219 + 32 * j, 272 + 32 * i, GameObjectIconType.Underground);
                brick.addToGameUI(gameUI); 
            }
        }

        var block_1475_272 = new Block(1475, 272, 576, 128);
        block_1475_272.addToGameUI(gameUI);

        for (var i = 0; i < 2; i++) {
            var question = new Question(2115 + 32 * i, 144, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Underground);
            question.addToGameUI(gameUI);
        }

        for (var i = 0; i < 2; i++) {
            var question = new Question(2115 + 32 * i, 272, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Underground);
            question.addToGameUI(gameUI);
        }

        for (var i = 0; i < 3; i++) {
            var question = new Question(2243 + 32 * i, 272, QuestionItemType.Gold, QuestionDisplayType.Question, GameObjectIconType.Underground);
            question.addToGameUI(gameUI);
        }

        var floor_2531_400 = new Block(2531, 400, 1344, 48);
        floor_2531_400.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var brick = new Brick(2563 + 32 * i, 144, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 3; i++) {
            var question = new Question(2563 + 32 * i, 272, QuestionItemType.Gold, QuestionDisplayType.Hidden, GameObjectIconType.Underground);
            question.addToGameUI(gameUI);
        }

        for (var i = 0; i < 45; i++) {
            var brick = new Brick(2659 + 32 * i, 48, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var tube_2819_304 = new Block(2819, 304, 64, 96);
        tube_2819_304.addToGameUI(gameUI);

        for (var i = 0; i < 2; i++) {
            var brick = new Brick(2947 + 32 * i, 272, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var tube_3012_176 = new Block(3011, 176, 64, 224);
        tube_3012_176.addToGameUI(gameUI);

        for (var i = 0; i < 2; i++) {
            var brick = new Brick(3075 + 32 * i, 272, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var tube_3204_304 = new Block(3201, 304, 64, 96);
        tube_3204_304.addToGameUI(gameUI);

        var question_3299_240 = new Question(3299, 240, QuestionItemType.MultiGold, QuestionDisplayType.Brick, GameObjectIconType.Underground);
        question_3299_240.addToGameUI(gameUI);

        var tube_3364_304 = new Block(3363, 304, 64, 96);
        tube_3364_304.addToGameUI(gameUI);

        var block_3811_336 = new Block(3811, 336, 64, 64);
        block_3811_336.addToGameUI(gameUI);

        var block_3843_304 = new Block(3843, 304, 32, 32);
        block_3843_304.addToGameUI(gameUI);

        var block_3939_272 = new Block(3939, 272, 64, 176);
        block_3939_272.addToGameUI(gameUI);

        var block_4067_272 = new Block(4067, 304, 64, 144);
        block_4067_272.addToGameUI(gameUI);

        for (var i = 0; i < 4; i++) {
            var brick = new Brick(4323 + 32 * i, 48, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 3; i++) {
            var brick = new Brick(4323 + 32 * i, 144, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 4; i++) {
            var brick = new Brick(4323 + 32 * i, 272, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var floor_4323_400 = new Block(4323, 400, 128, 48);
        floor_4323_400.addToGameUI(gameUI);

        for (var i = 0; i < 27; i++) {
            var brick = new Brick(4611 + 32 * i, 48, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var floor_4643_400 = new Block(4643, 400, 480, 48);
        floor_4643_400.addToGameUI(gameUI);

        var tube_4707_336 = new Block(4707, 336, 64, 64);
        tube_4707_336.addToGameUI(gameUI);

        var tube_4931_304 = new Block(4931, 304, 64, 96);
        tube_4931_304.addToGameUI(gameUI);

        var tube_5059_272 = new Block(5059, 272, 64, 128);
        tube_5059_272.addToGameUI(gameUI);

        var floor_5187_400 = new Block(5187, 400, 288, 48);
        floor_5187_400.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            var block = new Block(5379 + 32 * i, 368 - 32 * i, 32, 32 * (i + 1));
            block.addToGameUI(gameUI);
        }

        var floor_5635_400 = new Block(5635, 400, 736, 48);
        floor_5635_400.addToGameUI(gameUI);

        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 16; j++) {
                var brick = new Brick(5635 + 32 * j, 48 + 32 * i, GameObjectIconType.Underground);
                brick.addToGameUI(gameUI);
            }
        }

        for (var i = 0; i < 2; i++) {
            var brick = new Brick(5635, 176 + 32 * i, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 11; i++) {
            var brick = new Brick(5667 + 32 * i, 272, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        for (var i = 0; i < 4; i++) {
            var block = new Block(6051 + 32 * i, 400 - 32 * (i + 1), 32, 32 * (i + 1));
            block.addToGameUI(gameUI);
        }

        for (var i = 0; i < 13; i++) {
            var brick = new Brick(6147 + 32 * i, 48, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var tube_6275_176 = new Block(6275, 176, 64, 224);
        tube_6275_176.addToGameUI(gameUI);

        var floor_6435_400 = new Block(6435, 400, 1280, 48);
        floor_6435_400.addToGameUI(gameUI);

        var block_6435_304 = new Block(6435, 304, 800, 96);
        block_6435_304.addToGameUI(gameUI);

        var block_6505_240 = new Block(6505, 240, 32, 64);
        block_6505_240.addToGameUI(gameUI);

        var block_6569_48 = new Block(6569, 48, 666, 256);
        block_6569_48.addToGameUI(gameUI);

        for (var i = 0; i < 10; i++) {
            var brick = new Brick(7235 + 32 * i, 48, GameObjectIconType.Underground);
            brick.addToGameUI(gameUI);
        }

        var tube_7395_304 = new Block(7395, 304, 64, 96);
        tube_7395_304.addToGameUI(gameUI);

        var block_7651_48 = new Block(7651, 48, 64, 352);
        block_7651_48.addToGameUI(gameUI);
    },
    restart: function () {

        var oldX = this.x;
        this.div.innerHTML = "";
        this.staticObjects = [];
        this.animateObjects = [];
        this.build();

        this.mario.reborn();

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
        if (this.mario.x < 7392) {
            this.mario.moveDown(7);
            this.falling = false;
            this.mario.moveRight(2);
            this.mario.sprite.moveToNextFrame();
        } else {
            this.state = WorldState.None;
            alert("To be continued......");
        }
    },
    onChangedScene: function() {
        switch (this.scene) {
            case World_4_2_Scene.Scene1:
                this.mario.setPosition(90, 400 - this.mario.height);
                this.mario.moving = true;
                this.mario.movingToLeft = true;
                this.mario.setSprite(MarioSprite.Move);
                this.mario.sprite.setFrameCounter(4);
                break;
            case World_4_2_Scene.Scene2:
                this.scrollable = true;
                this.mario.setPosition(572, 0);
                this.setPosition(-524, 0);
                break;
            case World_4_2_Scene.Scene3:
                this.scrollable = false;
                this.mario.setPosition(6720, 0);
                this.setPosition(-6678, 0);
                break;
            case World_4_2_Scene.Scene4:
                this.scrollable = true;
                this.mario.setPosition(4220, this.mario.type == MarioType.Small ? 304 : 272);
                this.setPosition(-4100, 0);
                break;
            case World_4_2_Scene.Scene5:
                this.scrollable = true;
                this.mario.setPosition(7310, 336 - this.mario.height);
                this.setPosition(-7199, 0);
                break;
        }
    },
    onGame: function () {
        if (this.mario.x < 292) {
            this.mario.moveRight(2);
            this.mario.sprite.moveToNextFrame();
            if (this.mario.x >= 292) {
                this.scene = World_4_2_Scene.Scene2;
                this.changeScene();
            }
            return;
        }
        World.prototype.onGame.call(this);
    },
});