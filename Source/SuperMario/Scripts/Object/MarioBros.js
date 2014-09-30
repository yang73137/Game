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
    Stay: 5,
    Dead: 6
};

MarioState = {
    None: 0,
    Live: 1,
    ChangingSmall: 2,
    ChangingBig: 3,
    ChangingFlower: 4,
    Dead: 5
};

MarioBors = ClassFactory.createClass(GameObject, {
    init: function (x, y) {
        GameObject.init.call(this);

        this.gameUI = null;

        this.jumpPressedTime = 0;
        this.jumping = false;
        this.jumpEnabled = true;
        
        this.falling = true;
        this.moving = false;
        this.movingToLeft = false;
        this.movingToRight = false;
        this.staying = false;
        this.stayToRight = false;
        this.moveCounter = new Counter(3, false, true);

        this.maxJumpHeight = 10;
        this.currentJumpHeight = 0;
        
        this.speed = 2;
        this.speedUpLevel = 0;
        this.speedUpPressedTime = 0;

        this.faceToRight = true;
        this.squating = false;

        this.sprite = new Sprite();
        this.sprite.setBackgroundImage("../Images/MarioBros4.png");
        this.sprite.setFrameSequence([{ x: 0, y: 64 }]);
        this.sprite.setRepeat([0]);
        this.sprite.show();
        this.sprite.start();

        this.sprite.setPosition(x, y);

        this.spriteType = MarioSprite.Stand;

        this.type = MarioType.Small;
        this.setType(MarioType.Small);
        this.setSprite(MarioSprite.Stand);

        this.changeCounter = new Counter(50, false, true);
        this.changeCounter.setEnabled(true);
        
        this.setPosition(x, y);

        this.state = MarioState.Live;
    },
    update: function () {
        switch (this.state) {
            case MarioState.Live:
            case MarioState.ChangingBig:
            case MarioState.ChangingSmall:
            case MarioState.ChangingFlower:
                this.onLive();
                break;
            case MarioState.Dead:
                this.onDead();
                break;
        }
    },
    setPosition: function (x, y) {
        this.x = x;
        this.y = y;
    },
    setType: function (type) {
        if (type == MarioType.Small) {
            this.setSize(32, 32);
            this.sprite.setSize(32, 32);
            if (this.type != MarioType.Small) {
                this.y += 32;
            }
        }
        else if (type == MarioType.Big) {
            this.setSize(32, 64);
            this.sprite.setSize(32, 64);
            if (this.type == MarioType.Small) {
                this.y -= 32;
            }
        }
        else if (type == MarioType.Flower) {
            this.setSize(32, 64);
            this.sprite.setSize(32, 64);
            if (this.type == MarioType.Small) {
                this.y -= 32;
            }
        }
        this.type = type;
    },
    setSprite: function (spriteType) {
        if (this.spriteType != spriteType) {
            this.sprite.frameIndex = 0;
            this.spriteType = spriteType;
        }
        switch (spriteType) {
            case MarioSprite.Stand:
                this.sprite.setFrameCounter(0);
                if (this.type == MarioType.Small) {
                    this.sprite.setFrameSequence(this.faceToRight ? [{ x: 0, y: 64 }] : [{ x: 32 * 41, y: 64 }]);
                }
                else if (this.type == MarioType.Big) {
                    this.sprite.setFrameSequence(this.faceToRight ? [{ x: 0, y: 0 }] : [{ x: 32 * 41, y: 0 }]);
                }
                else if (this.type == MarioType.Flower) {
                    this.sprite.setFrameSequence(this.faceToRight ? [{ x: 0, y: 64 * 3 }] : [{ x: 32 * 41, y: 64 * 3 }]);
                }
                break;
            case MarioSprite.Move:
                this.sprite.setFrameCounter(3 - this.speedUpLevel);
                if (this.type == MarioType.Small) {
                    this.sprite.setFrameSequence(this.faceToRight ? [{ x: 32, y: 64 }, { x: 32 * 2, y: 64 }, { x: 32 * 3, y: 64 }] : [{ x: 32 * 40, y: 64 }, { x: 32 * 39, y: 64 }, { x: 32 * 38, y: 64 }]);
                }
                else if (this.type == MarioType.Big) {
                    this.sprite.setFrameSequence(this.faceToRight ? [{ x: 32, y: 0 }, { x: 32 * 2, y: 0 }, { x: 32 * 3, y: 0 }] : [{ x: 32 * 40, y: 0 }, { x: 32 * 39, y: 0 }, { x: 32 * 38, y: 0 }]);
                }
                else if (this.type == MarioType.Flower) {
                    this.sprite.setFrameSequence(this.faceToRight ? [{ x: 32, y: 192 }, { x: 32 * 2, y: 192 }, { x: 32 * 3, y: 192 }] : [{ x: 32 * 40, y: 192 }, { x: 32 * 39, y: 192 }, { x: 32 * 38, y: 192 }]);
                }
                break;
            case MarioSprite.Jump:
                this.sprite.setFrameCounter(0);
                if (this.type == MarioType.Small) {
                    this.sprite.setFrameSequence(this.faceToRight ? [{ x: 5 * 32, y: 64 }] : [{ x: 36 * 32, y: 64 }]);
                }
                else if (this.type == MarioType.Big) {
                    this.sprite.setFrameSequence(this.faceToRight ? [{ x: 5 * 32, y: 0 }] : [{ x: 36 * 32, y: 0 }]);
                }
                else if (this.type == MarioType.Flower) {
                    this.sprite.setFrameSequence(this.faceToRight ? [{ x: 5 * 32, y: 192 }] : [{ x: 36 * 32, y: 192 }]);
                }
                break;
            case MarioSprite.Squat:
                this.sprite.setFrameCounter(0);
                if (this.type == MarioType.Big) {
                    this.sprite.setFrameSequence(this.faceToRight ? [{ x: 6 * 32, y: 0 }] : [{ x: 35 * 32, y: 0 }]);
                }
                else if (this.type == MarioType.Flower) {
                    this.sprite.setFrameSequence(this.faceToRight ? [{ x: 6 * 32, y: 192 }] : [{ x: 35 * 32, y: 192 }]);
                }
                break;
            case MarioSprite.Stay:
                this.sprite.setFrameCounter(0);
                if (this.type == MarioType.Small) {
                    this.sprite.setFrameSequence(this.stayToRight ? [{ x: 37 * 32, y: 64 }] : [{ x: 4 * 32, y: 64 }]);
                }
                else if (this.type == MarioType.Big) {
                    this.sprite.setFrameSequence(this.stayToRight ? [{ x: 37 * 32, y: 0 }] : [{ x: 4 * 32, y: 0 }]);
                }
                else if (this.type == MarioType.Flower) {
                    this.sprite.setFrameSequence(this.stayToRight ? [{ x: 37 * 32, y: 192 }] : [{ x: 4 * 32, y: 192 }]);
                }
                break;
        }
    },
    fallDown: function () {
        this.falling = true;
        if (!this.jumping) {
            for (var i = 0; i < 7; i++) {
                this.y += 1;
                this.sprite.y = this.y;
                for (var blockIndex = 0; blockIndex < this.gameUI.animateObjects.length; blockIndex++) {
                    var block = this.gameUI.animateObjects[blockIndex];
                    if (this.collidesDownWith(block)) {
                        block.onCollides(this);
                        block.onCollidesUp(this);
                        if (!(block instanceof Enemy || block instanceof Item)) {
                            this.y = block.y - this.sprite.height;
                            this.sprite.y = this.y;
                            this.falling = false;
                        }
                        break;
                    }
                }
                for (var blockIndex = 0; blockIndex < this.gameUI.staticObjects.length; blockIndex++) {
                    var block = this.gameUI.staticObjects[blockIndex];
                    if (this.collidesDownWith(block)) {
                        block.onCollides(this);
                        block.onCollidesUp(this);
                        this.y = block.y - this.sprite.height;
                        this.sprite.y = this.y;
                        this.falling = false;
                        break;
                    }
                }
            }
        }
        if (this.y > 448) {
            this.state = MarioState.Dead;
        }
    },
    moveToLeft: function () {
        for (var i = 0; i < this.speed; i++) {
            this.x -= 1;
            this.sprite.x -= 1;
            for (var blockIndex = 0; blockIndex < this.gameUI.animateObjects.length; blockIndex++) {
                var block = this.gameUI.animateObjects[blockIndex];
                if (this.collidesLeftWith(this)) {
                    block.onCollides(this);
                    block.onCollidesRight(this);
                    this.x += 1;
                    this.sprite.x += 1;
                    break;
                }
            }
            for (var blockIndex = 0; blockIndex < this.gameUI.staticObjects.length; blockIndex++) {
                var block = this.gameUI.staticObjects[blockIndex];
                if (this.collidesLeftWith(block)) {
                    block.onCollides(this);
                    block.onCollidesRight(this);
                    this.x += 1;
                    this.sprite.x += 1;
                    break;
                }
            }
            if (this.x < -gameUI.x) {
                this.x = -gameUI.x;
                this.sprite.x += this.x;
                break;
            }
        }
    },
    moveToRight: function() {
        for (var i = 0; i < this.speed; i++) {
            this.x += 1;
            this.sprite.x += 1;
            for (var blockIndex = 0; blockIndex < this.gameUI.animateObjects.length; blockIndex++) {
                var block = this.gameUI.animateObjects[blockIndex];
                if (this.collidesRightWith(block)) {
                    block.onCollides(this);
                    block.onCollidesLeft(this);
                    this.x -= 1;
                    this.sprite.x -= 1;
                    break;
                }
            }
            for (var blockIndex = 0; blockIndex < this.gameUI.staticObjects.length; blockIndex++) {
                var block = this.gameUI.staticObjects[blockIndex];
                if (this.collidesRightWith(block)) {
                    block.onCollides(this);
                    block.onCollidesLeft(this);
                    this.x -= 1;
                    this.sprite.x -= 1;
                    break;
                }
            }
            if (this.x + gameUI.x > 220) {
                if (-gameUI.x >= 6784 - 512) {
                    gameUI.setX(-(6784 - 512));
                } else {
                    gameUI.setX(gameUI.x - 1);
                    this.x = -gameUI.x + 220;
                }
            }
            if (this.x + gameUI.x + this.sprite.width > 512) {
                this.x = -gameUI.x + 512 - this.sprite.width;
                break;
            }
        }
    },
    addToGameUI: function (gameUI) {
        gameUI.append(this.sprite);
        this.gameUI = gameUI;
    },
    onLive: function() {
        // 初始化状态
        this.fallDown();
        this.sprite.hide();
        var spriteType = MarioSprite.Stand;

        if (Input.isPressed(InputAction.GAME_D)) {
            if (!this.falling && this.jumpPressedTime == 0) {
                this.maxJumpHeight = 150;
                this.currentJumpHeight = 0;
                this.jumpPressedTime = 0;
                this.jumping = true;
            }
        } else {
            if (!this.falling) {
                this.jumpPressedTime = 0;
            }
        }

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
            if (this.maxJumpHeight > 150) {
                this.maxJumpHeight = 150;
            }

            for (var i = 0; i < 6; i++) {
                this.currentJumpHeight += 1;
                this.y -= 1;
                this.sprite.y -= 1;

                if (this.currentJumpHeight >= this.maxJumpHeight) {
                    this.currentJumpHeight = 0;
                    this.jumping = false;
                }

                for (var blockIndex = 0; blockIndex < this.gameUI.animateObjects.length; blockIndex++) {
                    var block = this.gameUI.animateObjects[blockIndex];
                    if (this.collidesUpWith(block)) {
                        block.onCollides(this);
                        block.onCollidesDown(this);
                        this.y = block.y + block.height;
                        this.jumping = false;
                    }
                }

                for (var blockIndex = 0; blockIndex < this.gameUI.staticObjects.length; blockIndex++) {
                    var block = this.gameUI.staticObjects[blockIndex];
                    if (this.collidesUpWith(block)) {
                        block.onCollides(this);
                        block.onCollidesDown(this);
                        this.y = block.y + block.height;
                        this.jumping = false; 
                    }
                }
            }
        }

        if (Input.isPressed(InputAction.RIGHT)) {
            if (!this.movingToLeft) {
                if (this.moving && !this.faceToRight) {
                    this.staying = true;
                    this.stayToRight = false;
                }

                if (!this.jumping) {
                    this.faceToRight = true;
                    this.moving = true;
                    if (!this.falling) {
                        spriteType = MarioSprite.Move;
                    }
                }

                if (!this.squating && !this.staying) {
                    this.movingToRight = true;
                    this.moveToRight();
                }
            }
        } else {
            this.movingToRight = false;
        }

        if (Input.isPressed(InputAction.LEFT)) {
            if (!this.movingToRight) {
                if (this.moving && this.faceToRight) {
                    this.staying = true;
                    this.stayToRight = true;
                }

                if (!this.jumping) {
                    this.faceToRight = false;
                    this.moving = true;
                    if (!this.falling) {
                        spriteType = MarioSprite.Move;
                    }
                }

                if (!this.squating && !this.staying) {
                    this.movingToLeft = true;
                    this.moveToLeft();
                }
            }
        } else {
            this.movingToLeft = false;
        }

        if (Input.isPressed(InputAction.GAME_C) && this.moving && !this.squating) {
            this.speedUpPressedTime++;
            if (this.speedUpPressedTime == 15) {
                this.speed = 3;
                this.speedUpLevel = 1;
            }
            else if (this.speedUpPressedTime > 25) {
                this.speed = 4;
                this.speedUpLevel = 2;
            }
            if (!this.staying) {
                this.moveCounter.setCount(this.speedUpLevel * 8);
            }
        }

        if (!Input.isPressed(InputAction.RIGHT) && !Input.isPressed(InputAction.LEFT)) {
            this.moving = false;
            if (this.speedUpLevel > 0) {
                this.staying = true;
                this.stayToRight = this.faceToRight;
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
            spriteType = MarioSprite.Stand;
        }

        if (Input.isPressed(InputAction.DOWN)) {
            if (this.speedUpLevel > 0) {
                this.staying = true;
                this.stayToRight = this.faceToRight;
            }
            if (this.type != MarioType.Small) {
                this.squating = true;
                spriteType = MarioSprite.Squat;
            }
        } else {
            this.squating = false;
        }

        if (this.staying) {
            this.speed = 2;
            this.speedUpLevel = 0;
            this.speedUpPressedTime = 0;
            if (!this.moveCounter.countdown()) {
                this.staying = false;
                this.moveCounter.setCount(3);

            } else {
                if (!this.squating) {
                    if (this.faceToRight == this.stayToRight) {
                        spriteType = MarioSprite.Move;
                    } else {
                        spriteType = MarioSprite.Stay;
                    }
                }

                this.stayToRight ? this.moveToRight() : this.moveToLeft();
            }
        }

        this.setSprite(spriteType);
        this.sprite.setPosition(this.x, this.y);
        this.sprite.show();

        if (!this.sprite.moveToNextFrame()) {
        }
    },
    onDead: function() {
        if (this.y < Const.SCREEN_HEIGHT) {
            this.y += 5;
            this.sprite.setY(this.y);
        } else {
            this.state = MarioState.None;
        }
    },
    dead: function () {
        this.height = 32;
        this.y -= 120;

        this.sprite.setSize(this.width, this.height);
        this.sprite.setPosition(this.x, this.y);

        this.sprite.setFrameSequence([{ x: 32 * 6, y: 64 }]);
        this.sprite.moveToFrame(0);

        this.state = MarioState.Dead;
    },
    hurt: function() {
        if (this.state == MarioState.Live) {
            if (this.type == MarioType.Small) {
                this.dead();
            } else {
                this.state = MarioState.ChangingSmall;
            }
        }
    }
});