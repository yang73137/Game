GameObject = ClassFactory.createClass({
    init: function() {
        this.x = 0;
        this.y = 0;
    },
    setPosition: function(x, y) {
        this.x = x;
        this.y = y;
    }
});