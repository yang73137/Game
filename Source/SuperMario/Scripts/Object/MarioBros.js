MarioType = {
    Small: 1,
    Big: 2,
    Flower: 3
};

MarioState = {
    Live: 1,
    ChangingSmall: 2,
    ChangingBig: 3,
    ChangingFlower: 4,
    Dead: 5
};

MarioBors = ClassFactory.createClass(GameObject, {
    init: function () {

        this.jumping = false;
        this.jumpPressed = false;
        this.jumpPressedUp = false;

        this.jumpPressedTime = 0;
        this.jumpingUp = false;
        this.jumpingDown = false;

        this.maxJumpHeight = 10;
        this.currentJumpHeight = 0;
        
        this.speed = 2;
        this.direction = 0;
        

        this.direction = Const.DIRECTION_NONE;

        this.x = 0;
        this.y = 0;

        this.faceToRight = true;
        this.squating = false;

        this.jumpCounter = new Counter(2, true, true);

        this.standSprite = new Sprite();
        this.standSprite.setBackgroundImage("../Images/MarioBros4.png");
        this.standSprite.setFrameSequence([0]);
        this.standSprite.setRepeat([0]);
        this.standSprite.show();
        this.standSprite.start();
        this.standSprite.appendTo(app);
        
        this.squatSprite = new Sprite();
        this.squatSprite.setBackgroundImage("../Images/MarioBros4.png");
        this.squatSprite.setFrameSequence([6]);
        this.squatSprite.setRepeat([0]);
        this.squatSprite.show();
        this.squatSprite.start();
        this.squatSprite.appendTo(app);
        
        this.jumpSprite = new Sprite();
        this.jumpSprite.setBackgroundImage("../Images/MarioBros4.png");
        this.jumpSprite.setFrameOffset(0, 0);
        this.jumpSprite.setRepeat([0]);
        this.jumpSprite.show();
        this.jumpSprite.start();
        this.jumpSprite.appendTo(app);

        this.moveSprite = new Sprite();
        this.moveSprite.setBackgroundImage("../Images/MarioBros4.png");
        this.moveSprite.setFrameSequence([1, 2, 3]);
        this.moveSprite.setRepeat(0);
        this.moveSprite.setFrameCounter(4);
        this.moveSprite.show();
        this.moveSprite.start();
        this.moveSprite.appendTo(app);

        this.currentSprite = this.standSprite;
        this.type = MarioBors.Small;
        this.setType(MarioType.Small);

        this.changeCounter = new Counter(30, false, true);
        this.changeCounter.setEnabled(true);

    },
    update: function () {
        this.standSprite.hide();
        this.squatSprite.hide();
        this.jumpSprite.hide();
        this.moveSprite.hide();

        this.standSprite.setFrameSequence([this.faceToRight ? 0 : 41]);
        this.currentSprite = this.standSprite;
        

        if (!this.jumpingUp && !this.jumpingDown) {
            if (Input.isPressed(InputAction.GAME_D)) {
                this.maxJumpHeight = 55;
                this.jumpPressedTime = 0;
                this.jumpingUp = true;
            }
        }
        
        if (this.jumpingUp) {
            this.jumpSprite.setFrameSequence([this.faceToRight ? 5 : 36]);
            this.currentSprite = this.jumpSprite;
            if (Input.isPressed(InputAction.GAME_D)) {
                this.jumpPressedTime++;
            } else {
                this.jumpPressedTime = -1;
            }
            if (this.jumpPressedTime % 9 == 0) {
                this.maxJumpHeight += 30;
                
            }
            this.maxJumpHeight = Math.min(this.maxJumpHeight, 140);
            this.currentJumpHeight += 6;
            this.y -= 6; 
            if (this.currentJumpHeight >= this.maxJumpHeight) {
                this.currentJumpHeight = 0;
                this.jumpingUp = false;
                this.jumpingDown = true;
            }
        }
        
        if (this.jumpingDown) {
            this.jumpSprite.setFrameSequence([this.faceToRight ? 5 : 36]);
            this.currentSprite = this.jumpSprite;
            if (this.y + this.currentSprite.height <= 402) {
                this.currentSprite = this.jumpSprite;
                this.y += 7;
            } else {
                this.y = 402 - this.currentSprite.height;
                this.jumpingDown = false;
                this.currentSprite = this.standSprite;
            }
        }

        if (Input.isPressed(InputAction.GAME_C)) {
            this.speed = 3;
            this.moveSprite.setFrameCounter(2);
        } else {
            this.speed = 2;
            this.moveSprite.setFrameCounter(4);
        }
        
        world.scrolling = false;
        if (Input.isPressed(InputAction.RIGHT)) {
            if (!this.jumpingUp && !this.jumpingDown) {
                this.faceToRight = true;
                this.moveSprite.setFrameSequence([1, 2, 3]);
                this.currentSprite = this.moveSprite;
            }
            
            if (!this.squating) {
                this.x += this.speed;
                if (this.x > 220) {
                    world.setBackgroundX(world.backgroundX + this.speed);
                    if (world.backgroundX >= 6784 - 512) {
                        world.setBackgroundX(6784 - 512);
                    } else {
                        this.x = 220;
                        world.scrolling = true;
                    }
                }
            }
        } else {
            enemy.speed = 1;
        }
        
        if (Input.isPressed(InputAction.LEFT)) {

            if (!this.jumpingUp && !this.jumpingDown) {
                this.faceToRight = false;
                this.moveSprite.setFrameSequence([40, 39, 38]);
                this.currentSprite = this.moveSprite;
            }
            if (!this.squating) {
                this.x -= this.speed;
                this.x = Math.max(this.x, 0);
            }
        }
        
        if (this.state == MarioState.ChangingSmall || this.state == MarioState.ChangingBig) {
            if (this.changeCounter.countdown()) {
                if (this.changeCounter.currentCount % 4 == 0) {
                    this.setType(this.type == MarioType.Small ? MarioType.Big : MarioType.Small);
                }
            } else {
                if (this.state == MarioState.ChangingSmall) {
                    this.setType(MarioType.Small);
                }
                else if (this.state == MarioState.ChangingBig) {
                    this.setType(MarioType.Big);
                }
                this.state = MarioState.Live;
            }
        }

        this.currentSprite.setPosition(this.x, this.y);
        
        if (Input.isPressed(InputAction.DOWN) && this.type != MarioType.Small) {
            this.squating = true;
            this.squatSprite.setFrameSequence([this.faceToRight ? 6 : 35]);
            this.currentSprite = this.squatSprite;
            this.currentSprite.setPosition(this.x, this.y + 16);
        } else {
            this.squating = false;
        }
        
        this.currentSprite.show();
        this.currentSprite.moveToNextFrame();
    },
    setPosition: function (x, y) {
        this.x = x;
        this.y = y;
    },
    setType: function (type) {
        if (type == MarioType.Small) {
            this.standSprite.setSize(32, 32);
            this.standSprite.setFrameOffset(0, 64);
            
            this.jumpSprite.setSize(32, 32);
            this.jumpSprite.setFrameOffset(0, 64);
            
            this.moveSprite.setSize(32, 32);
            this.moveSprite.setFrameOffset(0, 64);
            
            if (this.type != MarioType.Small) {
                this.y += 32;
            }
        }
        else if (type == MarioType.Big) {
            this.standSprite.setSize(32, 64);
            this.standSprite.setFrameOffset(0, 0);
            
            this.squatSprite.setSize(32, 48);
            this.squatSprite.setFrameOffset(0, 16);

            this.jumpSprite.setSize(32, 64);
            this.jumpSprite.setFrameOffset(0, 0);

            this.moveSprite.setSize(32, 64);
            this.moveSprite.setFrameOffset(0, 0);
            
            if (this.type == MarioType.Small) {
                this.y -= 32;
            }
        }
        else if (type == MarioType.Flower) {
            this.standSprite.setSize(32, 64);
            this.standSprite.setFrameOffset(0, 192);

            this.squatSprite.setSize(32, 48);
            this.squatSprite.setFrameOffset(0, 192 + 16);

            this.jumpSprite.setSize(32, 64);
            this.jumpSprite.setFrameOffset(0, 192);

            this.moveSprite.setSize(32, 64);
            this.moveSprite.setFrameOffset(0, 192);
            
            if (this.type == MarioType.Small) {
                this.y -= 32;
            }
        }
        this.type = type;
    }
});