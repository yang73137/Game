EndingUI = ClassFactory.createClass(UIBase, {
    init: function() {
        UIBase.init.call(this);

        this.setSize(Const.SCREEN_WIDTH, Const.SCREEN_HEIGHT);
        this.setBackground("#000000");
        this.setPosition(0, 0);

        // game over logo
        this.logo = new Layer();
        this.logo.setSize(250, 160);
        this.logo.setPosition((Const.SCREEN_WIDTH - this.logo.width) / 2, (Const.SCREEN_HEIGHT - this.logo.height) / 2);
        this.logo.setBackground("url(" + Const.IMAGE_UI.src + ") no-repeat 0 -160px");
        this.logo.show();
        this.append(this.logo);

        this.counter = new Counter(180, false, true);
    },
    onEnter: function() {
        this.show();
    },
    onLevel: function() {
        this.hide();
    },
    onUpdate: function () {
        if (!this.counter.countdown()) {
            return false;
        }

        return true;
    }
});