UIBase = ClassFactory.createClass(Layer, {
    init: function() {
        Layer.init.call(this);
    },
    onEnter: function () { },
    onLevel: function () { },
    onUpdate: function () { },
    enter: function() {
        return this.onEnter();
    },
    level: function() {
        return this.onLevel();
    },
    update: function() {
        return this.onUpdate();
    }
});