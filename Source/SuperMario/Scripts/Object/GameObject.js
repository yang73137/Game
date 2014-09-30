GameObject = ClassFactory.createClass({
    init: function () {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;

        this.sprite = null;
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
    addToGameUI: function (gameUI) {
        
    },
    collidesWith: function (gameObject) {
        return this.sprite.collidesWith(gameObject.sprite);
    },
    collidesUpWith: function (gameObject) {
        return this.sprite.collidesUpWith(gameObject.sprite);
    },
    collidesDownWith: function (gameObject) {
        return this.sprite.collidesDownWith(gameObject.sprite);
    },
    collidesLeftWith: function (gameObject) {
        return this.sprite.collidesLeftWith(gameObject.sprite);
    },
    collidesRightWith: function (gameObject) {
        return this.sprite.collidesRightWith(gameObject.sprite);
    },
    update: function() {
    },
    fallDown: function () {
        for (var i = 0; i < 7; i++) {
            this.y += 1;
            this.sprite.y = this.y;
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
            if (!this.onFallDown()) {
                return;
            }
        }
    },
    onFallDown: function() {
        
    }
});