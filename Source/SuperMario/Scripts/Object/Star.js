
StarState = {
    None: 0,
    Birth: 1,
    Move: 2
};

Star = ClassFactory.createClass(GameObject, {
    init: function (x, y) {
        GameObject.init.call(this);

        this.sprite = new Sprite();
        this.sprite.setBackgroundImage(Const.IMAGE_ITEMS);
        this.sprite.setFrameSequence([{ x: 0, y: 32 * 3 }, { x: 32, y: 32 * 3 }, { x: 32 * 2, y: 32 * 3 }, { x: 32 * 3, y: 32 * 3 }]);
        this.sprite.setRepeat(0);
        this.sprite.setFrameCounter(1);
        this.sprite.hide();

        this.setSize(32, 32);
        this.setPosition(x, y);
        
        this.state = StarState.None;
        this.movingToRight = true;
        this.movingToDown = true;
        this.movingUpTime = 0;
        this.upCounter = new Counter(1, true, true);
        this.originalX = x;
        this.originalY = y;

        this.setCollidable(false, false, false, false);
    },
    addToGameUI: function (gameUI) {
        GameObject.prototype.addToGameUI.call(this, gameUI);
        gameUI.addAnimateObject(this);
    },
    update: function () {
        switch (this.state) {
            case StarState.None:
                this.sprite.hide();
                break;
            case StarState.Birth:
                this.onBirth();
                break;
            case StarState.Move:
                this.onMove();
                break;
        }
    },
    onMove: function() {

        if (!this.movingToDown) {
            this.movingUpTime++;
        }

        if (this.movingUpTime == 16) {
            this.movingUpTime = 0;
            this.movingToDown = true;
        }

        this.movingToDown ? this.moveDown(5) : this.moveUp(5);
        this.movingToRight ? this.moveRight(2) : this.moveLeft(2);

        this.sprite.moveToNextFrame();

        if (!this.onScreen()) {
            this.onOffScreen();
            return;
        }
    },
    onBirth: function () {
        this.setCollidable(true, true, true, true);
        if (this.y > this.originalY - this.height) {
            if (!this.upCounter.countdown()) {
                this.setY(this.y - 1);
                this.sprite.moveToNextFrame();
            }
        } else {
            this.state = StarState.Move;
        }
    },
    animate: function () {
        this.state = StarState.Birth;
        this.sprite.start();
    },
    onCollides: function (gameObject) {
        if (gameObject instanceof MarioBors) {
            this.sprite.hide();
            this.state = StarState.None;
            this.setCollidable(false, false, false, false);
            gameObject.setInvincible();
        }
    },
    onCollidesLeft: function (gameObject) {
        if (gameObject.stoppable) {
            this.movingToRight = true;
        }
    },
    onCollidesRight: function (gameObject) {
        if (gameObject.stoppable) {
            this.movingToRight = false;
        }
    },
    onCollidesUp: function (gameObject) {
        if (gameObject.stoppable) {
            this.movingToDown = true;
        }
    },
    onCollidesDown: function (gameObject) {
        if (gameObject.stoppable) {
            this.movingUpTime = 0;
            this.movingToDown = false;
        }
    },
    onOffScreen: function () {
        this.sprite.hide();
        this.setCollidable(false, false, false, false);
        this.state = StarState.None;
    }
});