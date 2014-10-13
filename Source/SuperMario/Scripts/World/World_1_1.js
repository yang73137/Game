
World_1_1_State = {
    None: 0,
    Normal: 1,
    Scene1: 2,
    Scene2: 3
};

World_1_1 = ClassFactory.createClass(World, {
    init: function() {
        World.init.call(this);

        this.setPosition(0, 0);
        this.setSize(7296, 448);
        this.setBackgroundImage("../Images/World_1_1.png");
        this.setBackgroundPosition(0, 0);
        this.show();

        this.state = World_1_1_State.Normal;
    },
    scroll: function () {
        var mario = this.mario;
        if (mario.x > 6784) {

        } else {
            if (mario.x + this.x > 220) {
                if (-this.x >= 6784 - 512) {
                    this.setX(-(6784 - 512));
                } else {
                    this.setX(this.x - mario.speed);
                }
            }

            if (mario.x + this.x + mario.sprite.width > 512) {
                mario.x = -this.x + 512 - mario.sprite.width;
            }
        }
    },
    goToScene1: function() {
        this.mario.collidable = false;
        this.state = World_1_1_State.Scene1;
    },
    goToScene2: function() {
        this.mario.collidable = false;
        this.state = World_1_1_State.Scene2;
    },
    build: function () {
        var gameUI = this;

        var mario = new MarioBors(50, 370);
        mario.addToGameUI(gameUI);

        var kt = new KoopaTroopa(3200, 352);
        kt.addToGameUI(gameUI);

        var goomba_512_368 = new Goomba(512, 368);
        goomba_512_368.addToGameUI(gameUI);

        var goomba_1400_368 = new Goomba(1400, 368);
        goomba_1400_368.addToGameUI(gameUI);

        var goomba_1652_368 = new Goomba(1652, 368);
        goomba_1652_368.addToGameUI(gameUI);

        var goomba_1684_368 = new Goomba(1684, 368);
        goomba_1684_368.addToGameUI(gameUI);

        var goomba_2592_102 = new Goomba(2592, 112);
        goomba_2592_102.addToGameUI(gameUI);

        var goomba_2624_102 = new Goomba(2624, 112);
        goomba_2624_102.addToGameUI(gameUI);

        var goomba_3584_368 = new Goomba(3584, 368);
        goomba_3584_368.addToGameUI(gameUI);

        var goomba_3648_368 = new Goomba(3648, 368);
        goomba_3648_368.addToGameUI(gameUI);

        var goomba_3712_368 = new Goomba(3712, 368);
        goomba_3712_368.addToGameUI(gameUI);

        var goomba_5440_368 = new Goomba(5440, 368);
        goomba_5440_368.addToGameUI(gameUI);

        var goomba_5504_368 = new Goomba(5504, 368);
        goomba_5504_368.addToGameUI(gameUI);

        var question_512_272 = new Question(512, 272, QuestionItemType.Gold, QuestionIconType.Question);
        question_512_272.addToGameUI(gameUI);

        var brick_640_272 = new Brick(640, 272, BrickType.Red);
        brick_640_272.addToGameUI(gameUI);

        var question_672_272 = new Question(672, 272, QuestionItemType.BigMushroom, QuestionIconType.Question);
        question_672_272.addToGameUI(gameUI);

        var question_704_144 = new Question(704, 144, QuestionItemType.Gold, QuestionIconType.Question);
        question_704_144.addToGameUI(gameUI);

        var brick_704_272 = new Brick(704, 272, BrickType.Red);
        brick_704_272.addToGameUI(gameUI);

        var question_736_272 = new Question(736, 272, QuestionItemType.Gold, QuestionIconType.Question);
        question_736_272.addToGameUI(gameUI);

        var brick_768_272 = new Brick(768, 272, BrickType.Red);
        brick_768_272.addToGameUI(gameUI);

        var brick_2464_272 = new Brick(2464, 272, BrickType.Red);
        brick_2464_272.addToGameUI(gameUI);

        var question_2026_272 = new Question(2026, 240, QuestionItemType.LifeMushroom, QuestionIconType.None);
        question_2026_272.addToGameUI(gameUI);
        

        var question_2496_272 = new Question(2496, 272, QuestionItemType.BigMushroom, QuestionIconType.RedBrick);
        question_2496_272.addToGameUI(gameUI);

        var brick_2528_272 = new Brick(2528, 272, BrickType.Red);
        brick_2528_272.addToGameUI(gameUI);

        var brick_2560_144 = new Brick(2560, 144, BrickType.Red);
        brick_2560_144.addToGameUI(gameUI);

        var brick_2592_144 = new Brick(2592, 144, BrickType.Red);
        brick_2592_144.addToGameUI(gameUI);

        var brick_2624_144 = new Brick(2624, 144, BrickType.Red);
        brick_2624_144.addToGameUI(gameUI);

        var brick_2656_144 = new Brick(2656, 144, BrickType.Red);
        brick_2656_144.addToGameUI(gameUI);

        var brick_2688_144 = new Brick(2688, 144, BrickType.Red);
        brick_2688_144.addToGameUI(gameUI);

        var brick_2720_144 = new Brick(2720, 144, BrickType.Red);
        brick_2720_144.addToGameUI(gameUI);

        var brick_2752_144 = new Brick(2752, 144, BrickType.Red);
        brick_2752_144.addToGameUI(gameUI);

        var brick_2784_144 = new Brick(2784, 144, BrickType.Red);
        brick_2784_144.addToGameUI(gameUI);

        var brick_2912_144 = new Brick(2912, 144, BrickType.Red);
        brick_2912_144.addToGameUI(gameUI);

        var brick_2944_144 = new Brick(2944, 144, BrickType.Red);
        brick_2944_144.addToGameUI(gameUI);

        var brick_2976_144 = new Brick(2976, 144, BrickType.Red);
        brick_2976_144.addToGameUI(gameUI);

        var question_3008_144 = new Question(3008, 144, QuestionItemType.Gold, QuestionIconType.Question);
        question_3008_144.addToGameUI(gameUI);

        var question_3008_272 = new Question(3008, 272, QuestionItemType.Gold, QuestionIconType.RedBrick);
        question_3008_272.addToGameUI(gameUI);

        var brick_3200_272 = new Brick(3200, 272, BrickType.Red);
        brick_3200_272.addToGameUI(gameUI);

        var question_3232_272 = new Question(3232, 272, QuestionItemType.Star, QuestionIconType.RedBrick);
        question_3232_272.addToGameUI(gameUI);

        var question_3392_272 = new Question(3392, 272, QuestionItemType.Gold, QuestionIconType.Question);
        question_3392_272.addToGameUI(gameUI);

        var question_3488_272 = new Question(3488, 272, QuestionItemType.Gold, QuestionIconType.Question);
        question_3488_272.addToGameUI(gameUI);

        var question_3488_144 = new Question(3488, 144, QuestionItemType.BigMushroom, QuestionIconType.Question);
        question_3488_144.addToGameUI(gameUI);

        var question_3584_272 = new Question(3584, 272, QuestionItemType.Gold, QuestionIconType.Question);
        question_3584_272.addToGameUI(gameUI);

        var brick_3776_272 = new Brick(3776, 272, BrickType.Red);
        brick_3776_272.addToGameUI(gameUI);

        var brick_3872_144 = new Brick(3872, 144, BrickType.Red);
        brick_3872_144.addToGameUI(gameUI);

        var brick_3904_144 = new Brick(3904, 144, BrickType.Red);
        brick_3904_144.addToGameUI(gameUI);

        var brick_3936_144 = new Brick(3936, 144, BrickType.Red);
        brick_3936_144.addToGameUI(gameUI);

        var brick_4096_144 = new Brick(4096, 144, BrickType.Red);
        brick_4096_144.addToGameUI(gameUI);

        var question_4128_144 = new Question(4128, 144, QuestionItemType.Gold, QuestionIconType.Question);
        question_4128_144.addToGameUI(gameUI);

        var question_4160_144 = new Question(4160, 144, QuestionItemType.Gold, QuestionIconType.Question);
        question_4160_144.addToGameUI(gameUI);

        var brick_4192_144 = new Brick(4192, 144, BrickType.Red);
        brick_4192_144.addToGameUI(gameUI);

        var brick_4128_272 = new Brick(4128, 272, BrickType.Red);
        brick_4128_272.addToGameUI(gameUI);

        var brick_4160_272 = new Brick(4160, 272, BrickType.Red);
        brick_4160_272.addToGameUI(gameUI);

        var brick_5376_272 = new Brick(5376, 272, BrickType.Red);
        brick_5376_272.addToGameUI(gameUI);

        var brick_5408_272 = new Brick(5408, 272, BrickType.Red);
        brick_5408_272.addToGameUI(gameUI);

        var question_5440_272 = new Question(5440, 272, QuestionItemType.Gold, QuestionIconType.Question);
        question_5440_272.addToGameUI(gameUI);

        var brick_5472_272 = new Brick(5472, 272, BrickType.Red);
        brick_5472_272.addToGameUI(gameUI);


        var floor_0_400 = new Block(0, 400, 2208, 48);
        floor_0_400.addToGameUI(gameUI);

        var floor_2272_400 = new Block(2272, 400, 480, 48);
        floor_2272_400.addToGameUI(gameUI);

        var floor_2848_400 = new Block(2848, 400, 2048, 48);
        floor_2848_400.addToGameUI(gameUI);

        var floor_4960_400 = new Block(4960, 400, 1824, 48);
        floor_4960_400.addToGameUI(gameUI);

        var tube_869_336 = new Block(896, 336, 64, 64);
        tube_869_336.addToGameUI(gameUI);

        var tube_1216_303 = new Block(1216, 303, 64, 96);
        tube_1216_303.addToGameUI(gameUI);

        var tube_1472_271 = new Block(1472, 271, 64, 128);
        tube_1472_271.addToGameUI(gameUI);


        var tube_1824_271 = new Block(1824, 271, 64, 128);
        tube_1824_271.addToGameUI(gameUI);
        tube_1824_271.attachCollidesUp(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.DOWN)) {
                gameUI.goToScene1();
            }
        });

        var iron_4288_368 = new Block(4288, 368, 32, 32);
        iron_4288_368.addToGameUI(gameUI);

        var iron_4320_336 = new Block(4320, 336, 32, 64);
        iron_4320_336.addToGameUI(gameUI);

        var iron_4352_304 = new Block(4352, 304, 32, 96);
        iron_4352_304.addToGameUI(gameUI);

        var iron_4384_272 = new Block(4384, 272, 32, 128);
        iron_4384_272.addToGameUI(gameUI);


        var iron_4480_272 = new Block(4480, 272, 32, 128);
        iron_4480_272.addToGameUI(gameUI);

        var iron_4522_304 = new Block(4512, 304, 32, 96);
        iron_4522_304.addToGameUI(gameUI);

        var iron_4544_336 = new Block(4544, 336, 32, 64);
        iron_4544_336.addToGameUI(gameUI);

        var iron_4576_368 = new Block(4576, 368, 32, 32);
        iron_4576_368.addToGameUI(gameUI);


        var iron_4736_368 = new Block(4736, 368, 32, 32);
        iron_4736_368.addToGameUI(gameUI);

        var iron_4768_336 = new Block(4768, 336, 32, 64);
        iron_4768_336.addToGameUI(gameUI);

        var iron_4800_304 = new Block(4800, 304, 32, 96);
        iron_4800_304.addToGameUI(gameUI);

        var iron_4832_272 = new Block(4832, 272, 32, 128);
        iron_4832_272.addToGameUI(gameUI);

        var iron_4864_272 = new Block(4864, 272, 32, 128);
        iron_4864_272.addToGameUI(gameUI);


        var iron_4960_272 = new Block(4960, 272, 32, 128);
        iron_4960_272.addToGameUI(gameUI);

        var iron_4992_304 = new Block(4992, 304, 32, 96);
        iron_4992_304.addToGameUI(gameUI);

        var iron_5024_336 = new Block(5024, 336, 32, 64);
        iron_5024_336.addToGameUI(gameUI);

        var iron_5056_368 = new Block(5056, 368, 32, 32);
        iron_5056_368.addToGameUI(gameUI);


        var tube_5216_336 = new Block(5216, 336, 64, 64);
        tube_5216_336.addToGameUI(gameUI);

        var tube_5728_336 = new Block(5728, 336, 64, 64);
        tube_5728_336.addToGameUI(gameUI);


        var iron_5792_368 = new Block(5792, 368, 32, 32);
        iron_5792_368.addToGameUI(gameUI);

        var iron_5824_336 = new Block(5824, 336, 32, 64);
        iron_5824_336.addToGameUI(gameUI);

        var iron_5856_304 = new Block(5856, 304, 32, 96);
        iron_5856_304.addToGameUI(gameUI);

        var iron_5888_272 = new Block(5888, 272, 32, 128);
        iron_5888_272.addToGameUI(gameUI);

        var iron_5920_240 = new Block(5920, 240, 32, 160);
        iron_5920_240.addToGameUI(gameUI);

        var iron_5952_208 = new Block(5952, 208, 32, 192);
        iron_5952_208.addToGameUI(gameUI);

        var iron_5984_176 = new Block(5984, 176, 32, 224);
        iron_5984_176.addToGameUI(gameUI);

        var iron_6016_144 = new Block(6016, 144, 32, 256);
        iron_6016_144.addToGameUI(gameUI);

        var iron_6048_144 = new Block(6048, 144, 32, 256);
        iron_6048_144.addToGameUI(gameUI);


        var iron_6336_368 = new Block(6336, 368, 32, 32);
        iron_6336_368.addToGameUI(gameUI);



        var floor_6784_400 = new Block(6784, 400, 512, 48);
        floor_6784_400.addToGameUI(gameUI);

        var brick_6784_48 = new Block(6784, 48, 32, 32 * 11);
        brick_6784_48.addToGameUI(gameUI);

        var brick_6944_320 = new Block(6912, 304, 32 * 7, 32 * 3 - 16);
        brick_6944_320.addToGameUI(gameUI);

        var brick_6944_320 = new Block(6912, 48, 32 * 7, 32);
        brick_6944_320.addToGameUI(gameUI);

        var tube_7200_338 = new Block(7200, 338, 72, 64);
        tube_7200_338.addToGameUI(gameUI);
        tube_7200_338.attachCollidesLeft(function (gameObject) {
            if (gameObject instanceof MarioBors && Input.isPressed(InputAction.RIGHT)) {
                gameUI.goToScene2();
            }
        });

        var tube_7200_338 = new Block(7270, 48, 26, 32 * 11);
        tube_7200_338.addToGameUI(gameUI);

        for (var goldIndexY = 0; goldIndexY < 3; goldIndexY++) {
            for (var goldIndexX = 0; goldIndexX < 7; goldIndexX++) {
                if (goldIndexY == 0 && (goldIndexX == 0 || goldIndexX == 6)) {
                    continue;
                }
                var gold_xy = new Gold2(6912 + 32 * goldIndexX, 144 + 64 * goldIndexY);
                gold_xy.addToGameUI(gameUI);
            }
        }
    },
    restart: function () {
        var x = this.mario.x;
        this.setX(0);
        this.div.innerHTML = "";
        this.staticObjects = [];
        this.animateObjects = [];
        this.build();
        if (x >= 2752) {
            this.setX(-2602);
            this.mario.setX(2634);
        }
    },
    update: function() {
        switch (this.state) {
            case World_1_1_State.Normal:
                for (var i = 0; i < this.animateObjects.length; i++) {
                    this.animateObjects[i].update();
                }
                break;
            case World_1_1_State.Scene1:
                this.setPosition(-6784, 0);
                this.mario.setPosition(6834, 0);
                this.mario.collidable = true;
                this.state = World_1_1_State.Normal;

                break;
            case World_1_1_State.Scene2:
                this.setPosition(-5120, 0);
                this.mario.setPosition(5232, 304);
                this.mario.collidable = true;
                this.state = World_1_1_State.Normal;

                break;
        }
    }
});