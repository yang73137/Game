
Enemy = ClassFactory.createClass(GameObject, {
    init: function () {
        GameObject.init.call(this);
        this.speed = 1;
    },
    addToGameUI: function (gameUI) {
        GameObject.prototype.addToGameUI.call(this, gameUI);
        gameUI.addAnimateObject(this);
    },
    dead: function () {
    },
    onCollidesUp: function(gameObject) {
        if (gameObject instanceof MarioBors) {
            this.dead();
            gameObject.reJump();
        }
    },
    onCollidesDown: function (gameObject) {
        if (gameObject instanceof MarioBors) {
            gameObject.invincible ? this.dead() : gameObject.hurt();
        }
        else if (gameObject instanceof Brick) {
            if (gameObject.state == BrickState.Up || gameObject.state == BrickState.Break) {
                this.dead();
            }
        }
        else if (gameObject instanceof Question) {
            if (gameObject.state == QuestionState.Up) {
                this.dead();
            }
        }
    },
    onCollidesLeft: function (gameObject) {
        if (gameObject.stoppable || gameObject instanceof Enemy) {
            this.movingToRight = true;
        }
        if (gameObject instanceof MarioBors) {
            gameObject.invincible ? this.dead() : gameObject.hurt();
        }
    },
    onCollidesRight: function (gameObject) {
        if (gameObject.stoppable || gameObject instanceof Enemy) {
            this.movingToRight = false;
        }
        if (gameObject instanceof MarioBors) {
            gameObject.invincible ? this.dead() : gameObject.hurt();
        }
    }
});