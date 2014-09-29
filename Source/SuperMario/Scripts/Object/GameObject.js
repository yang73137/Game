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
    }
});