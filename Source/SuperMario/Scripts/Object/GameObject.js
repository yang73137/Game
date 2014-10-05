GameObject = ClassFactory.createClass({
    init: function () {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;

        this.sprite = new Sprite();
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
    },
    addToGameUI: function (gameUI) {
        this.gameUI = gameUI;
        gameUI.append(this.sprite);
    },
    getX: function() {
        return this.x;
    },
    setX: function (x) {
        this.x = x;
        this.sprite.setX(x);
    },
    getY: function () {
        return this.y;
    },
    setY: function (y) {
        this.y = y;
        this.sprite.setY(y);
    },
    setPosition: function(x, y) {
        this.setX(x);
        this.setY(y);
        this.sprite.setPosition(x, y);
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
    update: function() {
    },
    freefall: function () {
        for (var i = 0; i < 7; i++) {
            this.setY(this.y + 1);
            for (var blockIndex = 0; blockIndex < this.gameUI.staticObjects.length; blockIndex++) {
                var block = this.gameUI.staticObjects[blockIndex];
                if (this.collidesDownWith(block) && block.upCollidable) {
                    block.onCollides(this);
                    block.onCollidesUp(this);
                    this.setY(block.y - this.sprite.height);
                    this.falling = false;
                    return false;
                }
            }
        }
        return true;
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
        if (!this.upCollidable || !gameObject.downCollidable) {
            return false;
        }

        if (!this.collidesWith(gameObject)) {
            return false;
        }

        return (this.y > gameObject.y) && (this.y < gameObject.y + gameObject.height);
    },
    collidesDownWith: function (gameObject) {
        
        if (!this.downCollidable || !gameObject.upCollidable) {
            return false;
        }
        
        if (!this.collidesWith(gameObject)) {
            return false;
        }

        return (this.y < gameObject.y) && (this.y + this.height > gameObject.y);
    },
    collidesLeftWith: function (gameObject) {
        
        if (!this.leftCollidable || !gameObject.rightCollidable) {
            return false;
        }

        if (!this.collidesWith(gameObject)) {
            return false;
        }

        return this.x > gameObject.x && this.x < gameObject.x + gameObject.width;
    },
    collidesRightWith: function (gameObject) {
        
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
    }
});