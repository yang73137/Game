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
        this.setPosition(x, y);
        this.setSize(32, 32);

        this.speed = 2;

        this.sprite = new Sprite();
        this.sprite.setBackgroundImage("../Images/Items.png");
        this.sprite.setRepeat(0);
        this.sprite.setFrameCounter(5);
        this.sprite.setSize(32, 32);
        this.sprite.setPosition(x, y);
        if (type == 1) {
            this.sprite.setFrameSequence([{ x: 0, y: 0 }, { x: 0, y: 32 }]);
        } else {
            this.sprite.setFrameSequence([{ x: 32, y: 0 }, { x: 32, y: 32 }]);
        }
        this.sprite.hide();
        this.sprite.start();

        this.delayCounter = new Counter(16, false, true);
        this.delayCounter.setEnabled(false);
        this.upCounter = new Counter(1, true, true);

        this.originalX = x;
        this.originalY = y;

        this.gameUI = null;

        this.movingToRight = true;
        this.changeMovingCounter = new Counter(10, true, true);
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
        gameUI.append(this.sprite);
        gameUI.addGameObject(this);
        this.gameUI = gameUI;
    },
    onCollides: function(gameObject) {
        if (gameObject == mario) {
            this.state = MushroomState.None;
            if (this.type == MushroomType.Big && mario.type == MarioType.Small) {
                mario.state = MarioState.ChangingBig;
            }
        }
    },
    animate: function () {
        this.state = MushroomState.Birth;
        this.delayCounter.setEnabled(true);
    },
    onBirth: function () {
        if (this.delayCounter.enabled) {
            if (this.delayCounter.countdown()) {
                return;
            } else {
                this.delayCounter.setEnabled(false);
            }
        }
        if (this.y > this.originalY - this.height) {
            if (!this.upCounter.countdown()) {
                this.y--;
                this.sprite.setY(this.y);
                this.sprite.moveToNextFrame();
            }
        } else {
            this.state = MushroomState.Move;
        }
    },
    onMove: function () {
        
        this.sprite.setPosition(this.x, this.y);
        this.sprite.moveToNextFrame();

        if (this.movingToRight) {
            this.x += this.speed;
        }
        else {
            this.x -= this.speed;
        }

        for (var blockIndex = 0; blockIndex < this.gameUI.staticObjects.length; blockIndex++) {
            var block = this.gameUI.staticObjects[blockIndex];
            if (this.collidesDownWith(block) && block != mario && !this.changeMovingCounter.countdown()) {
                block.onCollides(this);
                block.onCollidesLeft(this);
                this.movingToRight = !this.movingToRight;
                break;
            }
            if (this.collidesRightWith(block)) {
                block.onCollides(this);
                block.onCollidesLeft(this);
                this.movingToRight = false;
                this.x = block.x - this.width;

            }
            if (this.collidesLeftWith(block)) {
                block.onCollides(this);
                block.onCollidesRight(this);
                this.movingToRight = true;
                this.x = block.x + block.width;
            }
        }

        this.fallDown();

        if (this.collidesWith(mario)) {
            this.state = MushroomState.None;
            this.sprite.hide();
            if (this.type == MushroomType.Big && mario.type == MarioType.Small) {
                mario.state = MarioState.ChangingBig;
            }
        }
    }
});