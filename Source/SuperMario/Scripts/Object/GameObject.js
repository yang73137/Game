GameObject = ClassFactory.createClass({
    init: function () {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;

        this.sprite = null;
        this.gameUI = null;

        this.upCollideble = true;
        this.downCollideble = true;
        this.leftCollideble = true;
        this.rightCollideble = true;

        this.collideble = true;
        this.stoppable = false;
    },
    addToGameUI: function (gameUI) {
        this.gameUI = gameUI;
        gameUI.append(this.sprite);
    },
    getX: function() {
        return this.sprite.x;
    },
    setX: function (x) {
        this.sprite.setX(x);
    },
    getY: function () {
        return this.sprite.y;
    },
    setY: function (y) {
        this.sprite.setY(y);
    },
    setPosition: function(x, y) {
        this.x = x;
        this.y = y;
    },
    setSize: function (width, height) {
        this.width = width;
        this.height = height;
    },
    onCollides: function (gameObject) {
        
    },
    onCollidesUp: function(gameObject) {
    },
    onCollidesDown: function (gameObject) {
    },
    onCollidesLeft: function (gameObject) {
    },
    onCollidesRight: function (gameObject) {
    },
    collidesWith: function (gameObject) {
        if (this.collideble && gameObject.collideble) {
            return this.sprite.collidesWith(gameObject.sprite);
        }
        return false;
    },
    collidesUpWith: function (gameObject) {
        if (this.collideble && gameObject.collideble) {
            return this.sprite.collidesUpWith(gameObject.sprite);
        }
        return false;
    },
    collidesDownWith: function (gameObject) {
        if (this.collideble && gameObject.collideble) {
            return this.sprite.collidesDownWith(gameObject.sprite);
        }
        return false;
    },
    collidesLeftWith: function (gameObject) {
        if (this.collideble && gameObject.collideble) {
            return this.sprite.collidesLeftWith(gameObject.sprite);
        }
        return false;
    },
    collidesRightWith: function (gameObject) {
        if (this.collideble && gameObject.collideble) {
            return this.sprite.collidesRightWith(gameObject.sprite);
        }
        return false;
    },
    update: function() {
    },
    fallDown: function () {
        for (var i = 0; i < 7; i++) {
            this.y += 1;
            this.sprite.y = this.y;
            for (var blockIndex = 0; blockIndex < this.gameUI.staticObjects.length; blockIndex++) {
                var block = this.gameUI.staticObjects[blockIndex];
                if (this.collidesDownWith(block) && block.upCollideble) {
                    block.onCollides(this);
                    block.onCollidesUp(this);
                    this.y = block.y - this.sprite.height;
                    this.sprite.y = this.y;
                    this.falling = false;
                    return false;
                }
            }
        }
        return true;
    }
});