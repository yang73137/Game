
Bomb = ClassFactory.createClass(GameObject, {
    init: function (big) {

        GameObject.init.call(this);

        // 创建爆炸精灵
        this.sprite = new Sprite(Const.IMAGE_BOOM, 64, 64, big ? [0, 1, 2, 3, 4] : [0, 1]);
        this.sprite.setZ(Const.Z_BOOM);

        if (big) {
            this.sprite.setFrameCounter(3);
        }
        else {
            this.sprite.setFrameCounter(0);
        }
    },
    update: function () {
        return this.sprite.moveToNextFrame();
    },
    boom: function (x, y) {
        // 定位爆炸精灵
        this.sprite.moveTo(x, y);
 
        // 开始播放爆炸动画
        this.sprite.start();
    },
    addToGameUI: function (gameUI) {
        GameObject.prototype.addToGameUI.call(this, gameUI);
        gameUI.gameArea.append(this.sprite);
    }
});