

GameUI = ClassFactory.createClass(UIBase, {
    init: function () {
        UIBase.init.call(this);

        this.world = null;
        this.mario = null;

    },
    update: function () {
        if (this.world != null) {
            this.world.update();
        }
    },
    setWorld: function (world) {
        this.div.innerHTML = "";
        this.world = null;
        world.addToGameUI(this);
    },
    setMario: function (mario) {
        this.mario = mario;
    }
});