﻿
World_1_2_State = {
    None: 0,
    Scene1: 1,
    Scene2: 2,
    Scene3: 3,
    Scene4: 4
};

World_1_2 = ClassFactory.createClass(World, {
    init: function () {
        World.init.call(this);

        this.setPosition(0, 0);
        this.setSize(8414, 448);
        this.setBackgroundImage("../Images/World_1_2.png");
        this.setBackgroundPosition(0, 0);
        this.show();
    },
    scroll: function () {
        if (this.state == World_1_2_State.Scene2) {
            if (this.mario.x + this.x > 220) {
                this.setX(this.x - this.mario.speed);
            }
        }
    },
    build: function () {
        var gameUI = this;

        var mario = new MarioBors(50, 370);
        mario.addToGameUI(gameUI);

        // secene2
        var block_524_48 = new Block(524, 48, 32, 32 * 11);
        block_524_48.addToGameUI(gameUI);
        
        for (var i = 0; i < 133; i++) {
            var brick = new Brick(668 + i * 32, 48);
            brick.setType(2);
            brick.addToGameUI(gameUI);
        }
        var brick = new Brick(668 + 133 * 32, 48);
        brick.setType(2);
        brick.setSize(16, 32);
        brick.addToGameUI(gameUI);
        
        for (var i = 0; i < 7; i++) {
            var brick = new Brick(5676 + i * 32, 48);
            brick.setType(2);
            brick.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 10; i++) {
            var brick = new Brick(6188 + i * 32, 48);
            brick.setType(2);
            brick.addToGameUI(gameUI);
        }

        var question_844_272 = new Question(844, 272, 1);
        question_844_272.addToGameUI(gameUI);
        
        var question_876_272 = new Question(876, 272, 3);
        question_876_272.addToGameUI(gameUI);
        
        var question_908_272 = new Question(908, 272, 1);
        question_908_272.addToGameUI(gameUI);
        
        var question_940_272 = new Question(940, 272, 1);
        question_940_272.addToGameUI(gameUI);
        
        var question_972_272 = new Question(972, 272, 1);
        question_972_272.addToGameUI(gameUI);
        



        var iron_1068_368 = new Block(1068, 368, 32, 32);
        iron_1068_368.addToGameUI(gameUI);
        
        var iron_1132_336 = new Block(1132, 336, 32, 64);
        iron_1132_336.addToGameUI(gameUI);
        
        var iron_1196_304 = new Block(1196, 304, 32, 96);
        iron_1196_304.addToGameUI(gameUI);
        
        var iron_1260_272 = new Block(1260, 272, 32, 128);
        iron_1260_272.addToGameUI(gameUI);
        
        var iron_1324_272 = new Block(1324, 272, 32, 128);
        iron_1324_272.addToGameUI(gameUI);
        
        var iron_1388_304 = new Block(1388, 304, 32, 96);
        iron_1388_304.addToGameUI(gameUI);

        var question_1452_ = new Question(1452, 240, 2);
        question_1452_.addToGameUI(gameUI);
        
        var iron_1516_304 = new Block(1516, 304, 32, 96);
        iron_1516_304.addToGameUI(gameUI);

        var iron_1580_336 = new Block(1580, 336, 32, 64);
        iron_1580_336.addToGameUI(gameUI);

        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 8; j++) {
                if (((i == 0 || i == 1) && (j == 1 || j == 6)) || ((i == 1 || i == 2) && (j == 3 || j == 4))) {
                    continue;
                }
                var brick = new Brick(1772 + j * 32, 208 + i * 32);
                brick.setType(2);
                brick.addToGameUI(gameUI);
            }
        }
        
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 4; j++) {
                if (((i == 0 || i == 1 || i == 8 || i == 9) && (j == 0 || j == 1)) || ((i == 2 || i == 3 || i == 4 || i == 5) && (j == 2 || j == 3))) {
                    continue;
                }
                var brick = new Brick(2190 + j * 32, 80 + i * 32);
                brick.setType(2);
                brick.addToGameUI(gameUI);
            }
        }
        
        for (var i = 0; i < 7; i++) {
            for (var j = 0; j < 6; j++) {
                if (((i == 3 || i == 4 || i == 5) && (j == 0 || j == 1 || j == 2 || j == 3))) {
                    continue;
                }
                var brick = new Brick(2382 + j * 32, 80 + i * 32);
                brick.setType(2);
                brick.addToGameUI(gameUI);
            }
        }
        
        for (var i = 0; i < 7; i++) {
            for (var j = 0; j < 4; j++) {
                if (((i > 1) && (j == 0)) || ((i > 1 && i < 6) && (j == 2)) || ((i > 1 && i < 5) && (j == 3))) {
                    continue;
                }
                var brick = new Brick(2638 + j * 32, 80 + i * 32);
                brick.setType(2);
                brick.addToGameUI(gameUI);
            }
        }
        
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 2; j++) {
                var brick = new Brick(2830 + j * 32, 144 + i * 32);
                brick.setType(2);
                brick.addToGameUI(gameUI);
            }
        }
        
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 5; j++) {
                var brick = new Brick(2958 + j * 32, 80 + i * 32);
                brick.setType(2);
                brick.addToGameUI(gameUI);
            }
        }
        
        for (var i = 0; i < 4; i++) {
            var brick = new Brick(2958 + i * 32, 272);
                brick.setType(2);
                brick.addToGameUI(gameUI);
        }
        
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 6; j++) {
                var brick = new Brick(3214 + j * 32, 208 + i * 32);
                brick.setType(2);
                brick.addToGameUI(gameUI);
            }
        }


        var tube_3820_304 = new Block(3820, 304, 64, 96);
        tube_3820_304.addToGameUI(gameUI);
        
        var tube_4012_272 = new Block(4012, 272, 64, 128);
        tube_4012_272.addToGameUI(gameUI);
        
        var tube_4204_336 = new Block(4204, 336, 64, 64);
        tube_4204_336.addToGameUI(gameUI);

        var block_4428_304 = new Block(4428, 304, 64, 96);
        block_4428_304.addToGameUI(gameUI);
  
        
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 5; j++) {
                if ((i == 0 && j < 3) || (i == 1 && j < 2) || (i == 2 && j < 1)) {
                    continue;
                }
                var iron = new Block(4780 + j * 32, 272 + i * 32, 32, 32);
                iron.addToGameUI(gameUI);
            }
        }
        
        for (var i = 0; i < 6; i++) {
            var brick = new Brick(5164 + i * 32, 240);
            brick.setType(2);
            brick.addToGameUI(gameUI);
        }

        var block_5644_272 = new Block(5644, 304, 544, 96);
        block_5644_272.addToGameUI(gameUI);
        

        var tube_5836_240 = new Block(5836, 240, 68, 64);
        tube_5836_240.addToGameUI(gameUI);
        
        var tube_5904_48 = new Block(5904, 48, 60, 256);
        tube_5904_48.addToGameUI(gameUI);

        var block_5946_48 = new Block(5964, 48, 224, 256);
        block_5946_48.addToGameUI(gameUI);

        var tube_6220_304 = new Block(6220, 304, 64, 96);
        tube_6220_304.addToGameUI(gameUI);
        
        var tube_6348_304 = new Block(6348, 304, 64, 96);
        tube_6348_304.addToGameUI(gameUI);
        
        var tube_6476_304 = new Block(6476, 304, 64, 96);
        tube_6476_304.addToGameUI(gameUI);
        
        var block_6604_48 = new Block(6604, 48, 64, 352);
        block_6604_48.addToGameUI(gameUI);
        


        var floor_524_400 = new Block(524, 400, 2560, 48);
        floor_524_400.addToGameUI(gameUI);
        
        var floor_3180_400 = new Block(3180, 400, 1184, 48);
        floor_3180_400.addToGameUI(gameUI);
        
        var floor_4428_400 = new Block(4428, 400, 64, 48);
        floor_4428_400.addToGameUI(gameUI);
        
        var floor_4556_400 = new Block(4556, 400, 384, 48);
        floor_4556_400.addToGameUI(gameUI);
        
        var floor_5164_400 = new Block(5164, 400, 256, 48);
        floor_5164_400.addToGameUI(gameUI);
        
        var floor_5644_400 = new Block(5644, 400, 1025, 48);
        floor_5644_400.addToGameUI(gameUI);

        this.changeToScene2();
    },
    restart: function () {
        
    },
    update: function() {
        for (var i = 0; i < this.animateObjects.length; i++) {
            this.animateObjects[i].update();
        }
    },
    changeToScene1: function () {
        this.setPosition(-1, 0);
    },
    changeToScene2: function () {
        this.mario.setPosition(572, 0);
        this.setPosition(-524, 0);
        this.state = World_1_2_State.Scene2;
    },
    changeToScene3: function () {
        this.setPosition(-6678, 0);
    },
    changeToScene4: function () {
        this.setPosition(-7198, 0);
    }
});