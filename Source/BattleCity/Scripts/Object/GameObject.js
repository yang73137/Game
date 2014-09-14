GameObject = ClassFactory.createClass({
    init: function() {
        this.gameUI = null;
        this.sprite = null;
    },
    addToGameUI: function (gameUI) {
        this.gameUI = gameUI;
    },
    update: function() {}
});