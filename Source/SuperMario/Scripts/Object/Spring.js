
SpringState = {
    None: 0,
    Static: 1,
    Animate: 2
};

Spring = ClassFactory.createClass(GameObject, {
    init: function (x, y, gameObjectIconType) {
        GameObject.init.call(this);

        this.sprite = new Sprite();
        this.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        this.sprite.setBackgroundPosition(32 * 6, 16);
        this.sprite.show();

        this.setSize(32, 48);
        this.setPosition(x, y);

        this.stoppable = true;
        this.setCollidable(true, true, true, true);

        this.originalX = x;
        this.originalY = y;

        this.state = SpringState.Static;

        this.index = 0;
        this.animateCounter = new Counter(6, true, true);
    },
    addToGameUI: function (gameUI) {
        GameObject.prototype.addToGameUI.call(this, gameUI);

        gameUI.addAnimateObject(this);
    },
    update: function () {
        
        if (this.state == SpringState.Static) {
            return;
        }

        if (this.animateCounter.countdown()) {
            return;
        }
        
        if (this.state == Sprite.animate) {
            
            if (this.index == 0) {
                this.setSize(32, 48);
                this.sprite.setBackgroundPosition(32 * 6, 16);
                this.setPosition(this.originalX, this.originalY);
                this.index = 1;
            }
            else if (this.index == 1) {
                this.setSize(32, 32);
                this.sprite.setBackgroundPosition(32 * 7, 32);
                this.setPosition(this.originalX, this.originalY + 16);
                this.index = 2;
            }
            else if (this.index == 2) {
                this.setSize(32, 48);
                this.sprite.setBackgroundPosition(32 * 6, 16);
                this.setPosition(this.originalX, this.originalY);
                this.index = 3;
            }
            else if (this.index == 3) {
                this.setSize(32, 64);
                this.sprite.setBackgroundPosition(32 * 5, 0);
                this.setPosition(this.originalX, this.originalY - 16);
                this.index = 0;
                
                
            }

            if (Input.isPressed(InputAction.GAME_B)) {
                this.gameUI.mario.reJump(200);
                this.changeToStatic();
            }
        }
    },
    onCollidesUp: function (gameObject) {
        if (gameObject instanceof MarioBors) {
            if (this.state == SpringState.Static) {
                this.changeToAnimate();
            }
        }
    },
    changeToStatic: function () {
        this.setSize(32, 48);
        this.sprite.setBackgroundPosition(32 * 6, 16);
        this.setPosition(this.originalX, this.originalY);
        this.state = SpringState.Static;
    },
    changeToAnimate: function () {
        this.state = SpringState.Aminate;
        this.index = 1;
    }
});