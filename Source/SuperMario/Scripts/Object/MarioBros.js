MarioBors = ClassFactory.createClass({
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
        this.standSprite.setSize(32, 64);
        this.standSprite.setBackgroundImage("../Images/MarioBros4.png");
        this.standSprite.setFrameOffset(0, 0);
        this.standSprite.setFrameSequence([0]);
        this.standSprite.setRepeat([0]);
        this.standSprite.show();
        this.standSprite.start();
        this.standSprite.appendTo(app);
        
        this.squatSprite = new Sprite();
        this.squatSprite.setSize(32, 48);
        this.squatSprite.setBackgroundImage("../Images/MarioBros4.png");
        this.squatSprite.setFrameOffset(0, 16);
        this.squatSprite.setFrameSequence([6]);
        this.squatSprite.setRepeat([0]);
        this.squatSprite.show();
        this.squatSprite.start();
        this.squatSprite.appendTo(app);
        
        this.jumpSprite = new Sprite();
        this.jumpSprite.setSize(32, 64);
        this.jumpSprite.setBackgroundImage("../Images/MarioBros4.png");
        this.jumpSprite.setFrameOffset(0, 0);
        this.jumpSprite.setFrameSequence([5]);
        this.jumpSprite.setRepeat([0]);
        this.jumpSprite.show();
        this.jumpSprite.start();
        this.jumpSprite.appendTo(app);

        this.moveSprite = new Sprite();
        this.moveSprite.setSize(32, 64);
        this.moveSprite.setBackgroundImage("../Images/MarioBros4.png");
        this.moveSprite.setFrameOffset(0, 0);
        this.moveSprite.setFrameSequence([1, 2, 3]);
        this.moveSprite.setRepeat(0);
        this.moveSprite.setFrameCounter(4);
        this.moveSprite.show();
        this.moveSprite.start();
        this.moveSprite.appendTo(app);

        this.currentSprite = this.standSprite;
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
                this.jumpingUp = false;
                this.jumpingDown = true;
            }
        }
        
        if (this.jumpingDown) {
            this.jumpSprite.setFrameSequence([this.faceToRight ? 5 : 36]);
            this.currentSprite = this.jumpSprite;
            if (this.currentJumpHeight > 0) {
                this.currentSprite = this.jumpSprite;
                this.currentJumpHeight -= 7;
                this.y += 7;
            } else {
                this.y = this.standSprite.y;
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
        this.currentSprite.setPosition(this.x, this.y);
        this.currentSprite.setPosition(this.x, this.y);
        if (Input.isPressed(InputAction.DOWN)) {
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
    }
});