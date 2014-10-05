
StarState = {
    None: 0,
    Birth: 1,
    Move: 2
};

Star = ClassFactory.createClass(GameObject, {
    init: function (x, y) {
        GameObject.init.call(this);

        this.sprite = new Sprite();
        this.sprite.setBackgroundImage("../Images/Items.png");
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
    onMove: function () {
        for (var i = 0; i < 1; i++) {
            this.x += this.movingToRight ? 2 : -2;
            this.y += this.movingToDown ? 3 : -3;
            if (!this.movingToDown) {
                this.movingUpTime++;
            }

            if (this.movingUpTime == 16) {
                this.movingUpTime = 0;
                this.movingToDown = true;
            }
            this.setPosition(this.x, this.y);

            for (var index = 0; index < this.gameUI.staticObjects.length; index++) {
                var block = this.gameUI.staticObjects[index];

                if (this.collidesDownWith(block) || this.collidesUpWith(block)) {
                    this.movingToDown = !this.movingToDown;
                    this.y += this.movingToDown ? 3 : -3;
                    this.setY(this.y);
                }
                if (this.collidesLeftWith(block) || this.collidesRightWith(block)) {
                    this.movingToRight = !this.movingToRight;
                    this.movingUpTime = 0;
                    break;
                }
            }

            if (this.x + 32 < Math.abs(this.gameUI.x) || this.x > Math.abs(this.gameUI.x) + Const.SCREEN_WIDTH) {
                this.state = StarState.None;
                break;
            }
        }
        this.sprite.moveToNextFrame();
    },
    onBirth: function () {
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
        if (gameObject == mario) {
            this.sprite.hide();
            this.state = StarState.None;
            mario.setInvincible();
        }
    },
});