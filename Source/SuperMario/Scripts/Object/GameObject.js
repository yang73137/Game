GameObject = ClassFactory.createClass({
    init: function () {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;

        this.sprite = null;
        this.gameUI = null;

        this.falling = false;

        // 碰撞
        this.collidable = true;
        this.upCollidable = true;
        this.downCollidable = true;
        this.leftCollidable = true;
        this.rightCollidable = true;

        // 停止其他物体移动
        this.stoppable = false;
        // 被其他物体停止运动
        this.stoppedable = true;

        // 等待屏幕滚动
        this.waitingForScreen = true;
    },
    addToGameUI: function (gameUI) {
        this.gameUI = gameUI;
        if (this.sprite != null) {
            gameUI.append(this.sprite);
        }
    },
    getX: function() {
        return this.x;
    },
    setX: function (x) {
        this.x = x;
        if (this.sprite != null) {
            this.sprite.setX(x);
        }
    },
    getY: function () {
        return this.y;
    },
    setY: function (y) {
        this.y = y;
        if (this.sprite != null) {
            this.sprite.setY(y);
        }
    },
    setPosition: function(x, y) {
        this.setX(x);
        this.setY(y);
        if (this.sprite != null) {
            this.sprite.setPosition(x, y);
        }
    },
    setWidth: function (width) {
        this.width = width;
        this.sprite.setWidth(width);
    },
    setHeight: function (height) {
        this.height = height;
        this.sprite.setHeight(height);
    },
    setSize: function (width, height) {
        this.setWidth(width);
        this.setHeight(height);
        this.sprite.setSize(width, height);
    },
    setStoppable: function (stoppable) {
        this.stoppable = stoppable;
    },
    setCollidable: function (up, down, left, right) {
        this.collidable = up || down || left || right;
        this.upCollidable = up;
        this.downCollidable = down;
        this.leftCollidable = left;
        this.rightCollidable = right;
    },
    collidesWith: function (gameObject) {
        
        if (this == gameObject) {
            return false;
        }

        if (!this.collidable || !gameObject.collidable) {
            return false;
        }

        //自身精灵坐标
        var x1 = this.x;
        var y1 = this.y;
        var w1 = this.width;
        var h1 = this.height;

        //目标精灵
        var x2 = gameObject.x;
        var y2 = gameObject.y;
        var w2 = gameObject.width;
        var h2 = gameObject.height;

        return (x1 - x2 < w2 && x2 < x1 + w1) && (y1 - y2 < h2 && y2 < y1 + h1);
    },
    collidesUpWith: function (gameObject) {
        if (this == gameObject) {
            return false;
        }

        if (!this.upCollidable || !gameObject.downCollidable) {
            return false;
        }

        if (!this.collidesWith(gameObject)) {
            return false;
        }

        return (this.y > gameObject.y) && (this.y < gameObject.y + gameObject.height);
    },
    collidesDownWith: function (gameObject) {
        if (this == gameObject) {
            return false;
        }

        if (!this.downCollidable || !gameObject.upCollidable) {
            return false;
        }
        
        if (!this.collidesWith(gameObject)) {
            return false;
        }

        return (this.y < gameObject.y) && (this.y + this.height > gameObject.y);
    },
    collidesLeftWith: function (gameObject) {
        if (this == gameObject) {
            return false;
        }

        if (!this.leftCollidable || !gameObject.rightCollidable) {
            return false;
        }

        if (!this.collidesWith(gameObject)) {
            return false;
        }

        return this.x > gameObject.x && this.x < gameObject.x + gameObject.width;
    },
    collidesRightWith: function (gameObject) {
        if (this == gameObject) {
            return false;
        }

        if (!this.rightCollidable || !gameObject.leftCollidable) {
            return false;
        }

        if (!this.collidesWith(gameObject)) {
            return false;
        }

        return (this.x < gameObject.x) && (this.x + this.width > gameObject.x);
    },
    onCollides: function (gameObject) {

    },
    onCollidesUp: function (gameObject) {
    },
    onCollidesDown: function (gameObject) {
    },
    onCollidesLeft: function (gameObject) {
    },
    onCollidesRight: function (gameObject) {
    },
    update: function () {
    },
    freefall: function () {
        this.falling = this.moveDown(7);
    },
    moveLeft: function (speed) {
        for (var i = 0; i < speed; i++) {
            
            this.setX(this.x - 1);
            
            if (!this.onScreen()) {
                this.onOffScreen();
                return false;
            }

            for (var blockIndex = 0; blockIndex < this.gameUI.animateObjects.length; blockIndex++) {
                var block = this.gameUI.animateObjects[blockIndex];
                if (this.collidesLeftWith(block) && (block.x + block.width >= Math.abs(this.gameUI.x))) {
                    this.onCollides(block);
                    this.onCollidesLeft(block);
                    block.onCollides(this);
                    block.onCollidesRight(this);
                    if (block.stoppable && this.stoppedable) {
                        this.setX(this.x + 1);
                        return false;
                    }
                }
            }
            for (var blockIndex = 0; blockIndex < this.gameUI.staticObjects.length; blockIndex++) {
                var block = this.gameUI.staticObjects[blockIndex];
                if (this.collidesLeftWith(block) && (block.x + block.width >= Math.abs(this.gameUI.x))) {
                    this.onCollides(block);
                    this.onCollidesLeft(block);
                    block.onCollides(this);
                    block.onCollidesRight(this);
                    if (block.stoppable && this.stoppedable) {
                        this.setX(this.x + 1);
                        return false;
                    }
                }
            }
        }
        return true;
    },
    moveRight: function (speed) {
        for (var i = 0; i < speed; i++) {
            
            this.setX(this.x + 1);
            
            if (!this.onScreen()) {
                this.onOffScreen();
                return false;
            }
            
            for (var blockIndex = 0; blockIndex < this.gameUI.animateObjects.length; blockIndex++) {
                var block = this.gameUI.animateObjects[blockIndex];
                if (this.collidesRightWith(block) && (block.x + block.width >= Math.abs(this.gameUI.x))) {
                    this.onCollides(block);
                    this.onCollidesRight(block);
                    block.onCollides(this);
                    block.onCollidesLeft(this);
                    if (block.stoppable && this.stoppedable) {
                        this.setX(this.x - 1);
                        return false;
                    }
                }
            }
            for (var blockIndex = 0; blockIndex < this.gameUI.staticObjects.length; blockIndex++) {
                var block = this.gameUI.staticObjects[blockIndex];
                if (this.collidesRightWith(block) && (block.x + block.width >= Math.abs(this.gameUI.x))) {
                    this.onCollides(block);
                    this.onCollidesRight(block);
                    block.onCollides(this);
                    block.onCollidesLeft(this);
                    if (block.stoppable && this.stoppedable) {
                        this.setX(this.x - 1);
                        return false;
                    }
                }
            }
        }
        return true;
    },
    moveUp: function (speed) {
        for (var i = 0; i < speed; i++) {
            
            if (!this.onScreen()) {
                this.onOffScreen();
                return false;
            }

            this.setY(this.y - 1);
            for (var blockIndex = 0; blockIndex < this.gameUI.animateObjects.length; blockIndex++) {
                var block = this.gameUI.animateObjects[blockIndex];
                if (this.collidesUpWith(block) && (block.x + block.width >= Math.abs(this.gameUI.x))) {
                    this.onCollides(block);
                    this.onCollidesUp(block);
                    block.onCollides(this);
                    block.onCollidesDown(this);
                    if (block.stoppable && this.stoppedable) {
                        this.setY(this.y + 1);
                        return false;;
                    }
                }
            }
            for (var blockIndex = 0; blockIndex < this.gameUI.staticObjects.length; blockIndex++) {
                var block = this.gameUI.staticObjects[blockIndex];
                if (this.collidesUpWith(block) && (block.x + block.width >= Math.abs(this.gameUI.x))) {
                    this.onCollides(block);
                    this.onCollidesUp(block);
                    block.onCollides(this);
                    block.onCollidesDown(this);
                    if (block.stoppable && this.stoppedable) {
                        this.setY(this.y + 1);
                        return false;;
                    }
                }
            }
        }
        return true;
    },
    moveDown: function (speed) {
        for (var i = 0; i < speed; i++) {
            
            this.setY(this.y + 1);
            
            if (!this.onScreen()) {
                this.onOffScreen();
                return false;
            }

            for (var blockIndex = 0; blockIndex < this.gameUI.animateObjects.length; blockIndex++) {
                var block = this.gameUI.animateObjects[blockIndex];
                if (this.collidesDownWith(block) && (block.x + block.width >= Math.abs(this.gameUI.x))) {
                    this.onCollides(block);
                    this.onCollidesDown(block);
                    block.onCollides(this);
                    block.onCollidesUp(this);
                    if (block.stoppable && this.stoppedable) {
                        this.setY(this.y - 1);
                        return false;
                    }
                }
            }
            for (var blockIndex = 0; blockIndex < this.gameUI.staticObjects.length; blockIndex++) {
                var block = this.gameUI.staticObjects[blockIndex];
                if (this.collidesDownWith(block) && (block.x + block.width >= Math.abs(this.gameUI.x))) {
                    this.onCollides(block);
                    this.onCollidesDown(block);
                    block.onCollides(this);
                    block.onCollidesUp(this);
                    if (block.stoppable && this.stoppedable) {
                        this.setY(this.y - 1);
                        return false;
                    }
                }
            }
        }
        return true;
    },
    onScreen: function () {
        var flag = this.x + this.width >= Math.abs(this.gameUI.x) && this.x <= (Math.abs(this.gameUI.x) + Const.SCREEN_WIDTH) && this.y <= Const.SCREEN_HEIGHT;
        return flag;
    },
    onOffScreen: function () {
    },
    waitForScreen: function () {
        if (this.waitingForScreen) {
            if (this.onScreen()) {
                this.waitingForScreen = false;
            }
        }

        return this.waitingForScreen;
    }
});