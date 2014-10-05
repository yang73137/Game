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
    onCollides: function(gameObject) {
        if (gameObject instanceof MarioBors) {
            this.state = MushroomState.None;
            if (this.type == MushroomType.Big && gameObject.type == MarioType.Small) {
                gameObject.state = MarioState.ChangingBig;
            }
        }
    },
    animate: function () {
        this.state = MushroomState.Birth;
        this.sprite.start();
    },
    onBirth: function () {
        if (this.y > this.originalY - this.height) {
            if (!this.upCounter.countdown()) {
                this.setY(this.y - 1);
                this.sprite.moveToNextFrame();
            }
        } else {
            this.state = MushroomState.Move;
        }
    },
    onMove: function () {
        
        this.sprite.moveToNextFrame();

        if (this.movingToRight) {
            this.setX(this.x + this.speed);
        }
        else {
            this.setX(this.x - this.speed);
        }

        for (var blockIndex = 0; blockIndex < this.gameUI.staticObjects.length; blockIndex++) {
            var block = this.gameUI.staticObjects[blockIndex];
            if (this.collidesDownWith(block) && !this.changeMovingCounter.countdown()) {
                block.onCollides(this);
                block.onCollidesLeft(this);
                this.movingToRight = !this.movingToRight;
                break;
            }
            if (this.collidesRightWith(block)) {
                block.onCollides(this);
                block.onCollidesLeft(this);
                this.movingToRight = false;
                this.setX(block.x - this.width);

            }
            if (this.collidesLeftWith(block)) {
                block.onCollides(this);
                block.onCollidesRight(this);
                this.movingToRight = true;
                this.setX(block.x + block.width);
            }
        }
        
        this.freefall();
        
        var mario = this.gameUI.mario;
        if (this.collidesWith(mario)) {
            this.state = MushroomState.None;
            if (this.type == MushroomType.Big && mario.type == MarioType.Small) {
                mario.changeType(MarioType.Big);
            }
        }
    }
});