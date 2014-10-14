MushroomType = {
    Big: 1,
    Bonus: 2
};

MushroomState = {
    None: 0,
    Birth: 1,
    Move: 2
};

Mushroom = ClassFactory.createClass(GameObject, {
    init: function (x, y, type) {

        GameObject.init.call(this);

        this.type = type;
        this.speed = 2;
        this.upCounter = new Counter(1, true, true);
        this.movingToRight = true;
        this.changeMovingCounter = new Counter(10, true, true);
        this.originalX = x;
        this.originalY = y;

        this.sprite = new Sprite();
        this.sprite.setBackgroundImage("../Images/Items.png");
        this.sprite.setRepeat(0);
        this.sprite.setFrameCounter(5);
        if (type == 1) {
            this.sprite.setFrameSequence([{ x: 0, y: 0 }, { x: 0, y: 32 }]);
        } else {
            this.sprite.setFrameSequence([{ x: 32, y: 0 }, { x: 32, y: 32 }]);
        }
        this.sprite.hide();
        
        this.setPosition(x, y);
        this.setSize(32, 32);

        this.setCollidable(false, false, false, false);
    },
    update: function () {

        switch (this.state) {
            case MushroomState.None:
                this.sprite.hide();
                break;
            case MushroomState.Birth:
                this.onBirth();
                break;
            case MushroomState.Move:
                this.onMove();
                break;
        }
    },
    addToGameUI: function (gameUI) {
        GameObject.prototype.addToGameUI.call(this, gameUI);
        gameUI.addAnimateObject(this);
    },
    onCollides: function (gameObject) {
        if (gameObject instanceof MarioBors) {
            this.setCollidable(false, false, false, false);
            this.sprite.hide();
            this.state = MushroomState.None;
            if (this.type == MushroomType.Big || this.type == MushroomType.Flower) {
                gameObject.changeType(MarioType.Big);
            }
        }
    },
    onCollidesLeft: function(gameObject) {
        if (gameObject.stoppable) {
            this.movingToRight = true;
        }
    },
    onCollidesRight: function (gameObject) {
        if (gameObject.stoppable) {
            this.movingToRight = false;
        }
    },
    animate: function () {
        this.state = MushroomState.Birth;
        this.sprite.start();
    },
    onBirth: function () {
        if (this.y > this.originalY - this.height) {
            if (!this.upCounter.countdown()) {
                this.setCollidable(true, true, true, true);
                this.moveUp(1);
                this.sprite.moveToNextFrame();
            }
        } else {
            this.state = MushroomState.Move;
        }
    },
    onMove: function () {
        
        this.freefall();
        
        this.movingToRight ? this.moveRight(this.speed) : this.moveLeft(this.speed);

        this.sprite.moveToNextFrame();

        if (!this.onScreen) {
            this.onOffScreen();
        }
    },
    onOffScreen: function () {
        this.sprite.hide();
        this.setCollidable(false, false, false, false);
        this.state = MushroomState.None;
    }
});