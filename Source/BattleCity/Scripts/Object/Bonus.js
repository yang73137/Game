BonusType = {
    BaseProof: 0,
    Star: 1,
    Life: 2,
    BulletProof: 3,
    Bomb: 4,
    Timer: 5
};

Bonus = ClassFactory.createClass(GameObject, {
    init: function () {
        GameObject.init.call(this);
        this.type = -1;
        this.sprite = new Sprite(Const.IMAGE_TANK, 32, 32);
        this.sprite.setZ(Const.Z_BONUS);

        this.flashCounter = new Counter(8, true, true);
        this.flashCounter.setEnabled(false);

        this.scoreCounter = new Counter(30, false, true);
        this.scoreCounter.setEnabled(false);
    },
    random: function () {
        this.type = Math.round(Math.random() * 5);
        var x = Math.round(Math.random() * 12) * 32;
        var y = Math.round(Math.random() * 12) * 32;
        this.sprite.setZ(Const.Z_BONUS);
        this.sprite.setPosition(x, y);
        this.sprite.setFrameSequence([121 + this.type]);
        this.sprite.moveToFrame(0);
        this.flashCounter.setEnabled(true);
        this.scoreCounter.setEnabled(false);
    },
    take: function () {
        
        this.flashCounter.setEnabled(false);
        this.scoreCounter.setEnabled(true);
        this.gameUI.addScore(500);

        this.sprite.setFrameSequence([120]);
        this.sprite.moveToFrame(0);
        this.sprite.setZ(Const.Z_SCORE);

        switch (this.type) {
            case BonusType.BaseProof:
                this.gameUI.activateBaseProof(Const.TIME_WALL_IRON);
                break;
            case BonusType.Star:
                this.gameUI.player.levelUp();
                break;
            case BonusType.Life:
                this.gameUI.lifeLabel.setText(this.gameUI.player.life++);
                break;
            case BonusType.BulletProof:
                this.gameUI.player.setBulletProofTime(Const.TIME_BULPRF_BONUS);
                break;
            case BonusType.Bomb:
                for (var i = 1; i < this.gameUI.tanks.length; i++) {
                    if (this.gameUI.tanks[i].state == TankState.LIVE) {
                        this.gameUI.tanks[i].boom();
                    }
                }
                break;
            case BonusType.Timer:
                this.gameUI.stop(600);
                break;
        }
    },
    update: function () {
        if (this.flashCounter.enabled && !this.flashCounter.countdown()) {
            this.sprite.setVisible(!this.sprite.visible);
        }
        if (this.scoreCounter.enabled && !this.scoreCounter.countdown()) {
            this.sprite.hide();
            this.scoreCounter.setEnabled(false);
        }
    },
    addToGameUI: function (gameUI) {
        GameObject.prototype.addToGameUI.call(this, gameUI);
        gameUI.gameArea.append(this.sprite);
        gameUI.gameArea.append(this.scoreSprite);
    }
});