MarioType = {
    Small: 1,
    Big: 2,
    Flower: 3
};

MarioSprite = {
    Stand: 1,
    Move: 2,
    Jump: 3,
    Squat: 4,
    Dead: 5
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

        this.jumpPressedTime = 0;
        this.jumping = false;
        this.falling = true;

        this.maxJumpHeight = 10;
        this.currentJumpHeight = 0;
        
        this.speed = 2;
        this.speedUpLevel = 0;
        this.speedUpPressedTime = 0;
        
        this.direction = 0;
        

        this.direction = Const.DIRECTION_NONE;

        this.x = 0;
        this.y = 0;

        this.faceToRight = true;
        this.squating = false;

        this.currentSprite = new Sprite();
        this.currentSprite.setBackgroundImage("../Images/MarioBros4.png");
        this.currentSprite.setFrameSequence([{ x: 0, y: 64 }]);
        this.currentSprite.setRepeat([0]);
        this.currentSprite.show();
        this.currentSprite.start();
        world.append(this.currentSprite);

        this.spriteType = MarioSprite.Stand;

        this.type = MarioType.Small;
        this.setType(MarioType.Small);
        this.setSprite(MarioSprite.Stand);

        this.changeCounter = new Counter(30, false, true);
        this.changeCounter.setEnabled(true);

    },
    update: function () {

        this.currentSprite.hide();
        var spriteType = MarioSprite.Stand;

        if (Input.isPressed(InputAction.GAME_D)) {
            if (!this.falling && this.jumpPressedTime == 0) {
                this.maxJumpHeight = 160;
                this.jumpPressedTime = 0;
                this.jumping = true;
            }
        } else {
            if (!this.falling) {
                this.jumpPressedTime = 0;
            }
        }

        this.fallDown();
        
        if (this.jumping) {
            spriteType = MarioSprite.Jump;
            if (Input.isPressed(InputAction.GAME_D)) {
                this.jumpPressedTime++;
            }
            else {
                if (this.jumpPressedTime >= 30) {
                    this.maxJumpHeight = 160;
                }
                else if (this.jumpPressedTime < 30 && this.jumpPressedTime >= 20) {
                    this.maxJumpHeight = 120;
                } else {
                    this.maxJumpHeight = 80;
                }
            }
            this.maxJumpHeight = Math.max(this.currentJumpHeight, this.maxJumpHeight);
            for (var i = 0; i < 6; i++) {
                this.currentJumpHeight += 1;
                this.y -= 1;
                this.currentSprite.y -= 1;
                for (var blockIndex = 0; blockIndex < blocks.length; blockIndex++) {
                    var block = blocks[blockIndex];
                    if (this.currentSprite.collidesUpWith(block)) {
                        this.y = block.y + block.height;
                        this.jumping = false;
                    }
                }
                if (this.currentJumpHeight >= this.maxJumpHeight) {
                    this.currentJumpHeight = 0;
                    this.jumping = false;
                }
            }
        }

        if (Input.isPressed(InputAction.RIGHT)) {
            if (!this.jumping && !this.falling) {
                this.faceToRight = true;
                spriteType = MarioSprite.Move;
            }
            
            if (!this.squating) {
                for (var i = 0; i < this.speed; i++) {
                    this.x += 1;
                    this.currentSprite.x += 1;
                    for (var blockIndex = 0; blockIndex < blocks.length; blockIndex++) {
                        var block = blocks[blockIndex];
                        if (this.currentSprite.collidesRightWith(block)) {
                            this.x -= 1;
                            this.currentSprite.x -= 1;
                            break;
                        }
                    }
                    if (this.x + world.x > 220) {
                        if (-world.x >= 6784 - 512) {
                            world.setX(-(6784 - 512));
                        } else {
                            world.setX(world.x - 1);
                            this.x = -world.x + 220;
                        }
                    }
                    if (this.x + world.x + this.currentSprite.width > 512) {
                        this.x = -world.x + 512 - this.currentSprite.width;
                        break;
                    }
                }
            }
        }
        
        if (Input.isPressed(InputAction.LEFT)) {

            if (!this.jumping && !this.falling) {
                this.faceToRight = false;
                spriteType = MarioSprite.Move;
            }
            if (!this.squating) {
                for (var i = 0; i < this.speed; i++) {
                    this.x -= 1;
                    this.currentSprite.x -= 1;
                    for (var blockIndex = 0; blockIndex < blocks.length; blockIndex++) {
                        var block = blocks[blockIndex];
                        if (this.currentSprite.collidesLeftWith(block)) {
                            this.x += 1;
                            this.currentSprite.x += 1;
                            break;
                        }
                    }
                    if (this.x < -world.x) {
                        this.x = -world.x;
                        this.currentSprite.x += this.x;
                        break;
                    }
                }
            }
        }
        
        if ((Input.isPressed(InputAction.RIGHT) || Input.isPressed(InputAction.LEFT)) && Input.isPressed(InputAction.GAME_C)) {
            this.speedUpPressedTime++;
            if (this.speedUpPressedTime == 15) {
                this.speed = 3;
                this.speedUpLevel = 1;
            }
            else if (this.speedUpPressedTime > 25) {
                this.speed = 4;
                this.speedUpLevel = 2;
            }
        } else {
            this.speed = 2;
            this.speedUpLevel = 0;
            this.speedUpPressedTime = 0;
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
            spriteType = MarioSprite.Stand;
        }

        if (Input.isPressed(InputAction.DOWN) && this.type != MarioType.Small) {
            this.squating = true;
            spriteType = MarioSprite.Squat;
        } else {
            this.squating = false;
        }

        this.setSprite(spriteType);
        this.currentSprite.setPosition(this.x, this.y);
        this.currentSprite.show();

        if (!this.currentSprite.moveToNextFrame()) {
            console.log(1);
        }
    },
    setPosition: function (x, y) {
        this.x = x;
        this.y = y;
    },
    setType: function (type) {
        if (type == MarioType.Small) {
            this.currentSprite.setSize(32, 32);
            if (this.type != MarioType.Small) {
                this.y += 32;
            }
        }
        else if (type == MarioType.Big) {
            this.currentSprite.setSize(32, 64);
            if (this.type == MarioType.Small) {
                this.y -= 32;
            }
        }
        else if (type == MarioType.Flower) {
            this.currentSprite.setSize(32, 64);
            if (this.type == MarioType.Small) {
                this.y -= 32;
            }
        }
        this.type = type;
    },
    setSprite: function (spriteType) {
        if (this.spriteType != spriteType) {
            this.currentSprite.frameIndex = 0;
            this.spriteType = spriteType;
        }
        switch (spriteType) {
            case MarioSprite.Stand:
                this.currentSprite.setFrameCounter(0);
                if (this.type == MarioType.Small) {
                    this.currentSprite.setFrameSequence(this.faceToRight ? [{ x: 0, y: 64 }] : [{ x: 32 * 41, y: 64 }]);
                }
                else if (this.type == MarioType.Big) {
                    this.currentSprite.setFrameSequence(this.faceToRight ? [{ x: 0, y: 0 }] : [{ x: 32 * 41, y: 0 }]);
                }
                else if (this.type == MarioType.Flower) {
                    this.currentSprite.setFrameSequence(this.faceToRight ? [{ x: 0, y: 64 * 3 }] : [{ x: 32 * 41, y: 64 * 3 }]);
                }
                break;
            case MarioSprite.Move:
                this.currentSprite.setFrameCounter(3 - this.speedUpLevel);
                if (this.type == MarioType.Small) {
                    this.currentSprite.setFrameSequence(this.faceToRight ? [{ x: 32, y: 64 }, { x: 32 * 2, y: 64 }, { x: 32 * 3, y: 64 }] : [{ x: 32 * 40, y: 64 }, { x: 32 * 39, y: 64 }, { x: 32 * 38, y: 64 }]);
                }
                else if (this.type == MarioType.Big) {
                    this.currentSprite.setFrameSequence(this.faceToRight ? [{ x: 32, y: 0 }, { x: 32 * 2, y: 0 }, { x: 32 * 3, y: 0 }] : [{ x: 32 * 40, y: 0 }, { x: 32 * 39, y: 0 }, { x: 32 * 38, y: 0 }]);
                }
                else if (this.type == MarioType.Flower) {
                    this.currentSprite.setFrameSequence(this.faceToRight ? [{ x: 32, y: 192 }, { x: 32 * 2, y: 192 }, { x: 32 * 3, y: 192 }] : [{ x: 32 * 40, y: 192 }, { x: 32 * 39, y: 192 }, { x: 32 * 38, y: 192 }]);
                }
                break;
            case MarioSprite.Jump:
                this.currentSprite.setFrameCounter(0);
                if (this.type == MarioType.Small) {
                    this.currentSprite.setFrameSequence(this.faceToRight ? [{ x: 5 * 32, y: 64 }] : [{ x: 36 * 32, y: 64 }]);
                }
                else if (this.type == MarioType.Big) {
                    this.currentSprite.setFrameSequence(this.faceToRight ? [{ x: 5 * 32, y: 0 }] : [{ x: 36 * 32, y: 0 }]);
                }
                else if (this.type == MarioType.Flower) {
                    this.currentSprite.setFrameSequence(this.faceToRight ? [{ x: 5 * 32, y: 192 }] : [{ x: 36 * 32, y: 192 }]);
                }
                break;
            case MarioSprite.Squat:
                this.currentSprite.setFrameCounter(0);
                if (this.type == MarioType.Big) {
                    this.currentSprite.setFrameSequence(this.faceToRight ? [{ x: 6 * 32, y: 0 }] : [{ x: 35 * 32, y: 0 }]);
                }
                else if (this.type == MarioType.Flower) {
                    this.currentSprite.setFrameSequence(this.faceToRight ? [{ x: 6 * 32, y: 192 }] : [{ x: 35 * 32, y: 192 }]);
                }
                break;
        }
    },
    fallDown: function () {
        this.falling = true;
        if (!this.jumping) {
            for (var i = 0; i < 7; i++) {
                this.y += 1;
                this.currentSprite.y = this.y;
                for (var blockIndex = 0; blockIndex < blocks.length; blockIndex++) {
                    var block = blocks[blockIndex];
                    if (this.currentSprite.collidesDownWith(block)) {
                        this.y = block.y - this.currentSprite.height;
                        this.currentSprite.y = this.y;
                        this.falling = false;
                        return;
                    }
                }
            }
        }
    }
});