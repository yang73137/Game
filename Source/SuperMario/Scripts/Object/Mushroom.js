MushroomType = {
    Big: 1,
    Bonus: 2
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
        if (type == 1) {
            this.sprite.setFrameSequence([{ x: 0, y: 0 }, { x: 0, y: 32 }]);
        } else {
            this.sprite.setFrameSequence([{ x: 32, y: 0 }, { x: 32, y: 32 }]);
        }

        this.enabled = false;
        this.gameUI = null;

        this.movingToRight = true;
    },
    update: function () {

        if (!this.enabled) {
            return;
        }

        this.sprite.setPosition(this.x, this.y);
        this.sprite.moveToNextFrame();

        this.fallDown();

        if (this.movingToRight) {
            this.x += this.speed;
        }
        else {
            this.x -= this.speed;
        }
        
        for (var blockIndex = 0; blockIndex < this.gameUI.staticObjects.length; blockIndex++) {
            var block = this.gameUI.staticObjects[blockIndex];
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
        
        if (this.collidesWith(mario)) {
            this.enabled = false;
            this.sprite.hide();
            mario.state = MarioState.ChangingBig;
        }   
    },
    addToGameUI: function (gameUI) {
        gameUI.append(this.sprite);
        gameUI.addGameObject(this);
        this.gameUI = gameUI;
    },
    onFallDown: function () {
        for (var blockIndex = 0; blockIndex < this.gameUI.animateObjects.length; blockIndex++) {
            var block = this.gameUI.animateObjects[blockIndex];
            if (this.collidesDownWith(block)) {
                block.onCollides(this);
                block.onCollidesUp(this);
                this.y = block.y - this.sprite.height;
                this.sprite.y = this.y;
                this.falling = false;
                return false;
            }
        }
        return true;
    },
    onCollides: function(gameObject) {
        if (gameObject == mario) {
            this.enabled = false;
            this.sprite.hide();
            if (this.type == MushroomType.Big) {
                mario.state = MarioState.ChangingBig;
            }
        }
    },
    animate: function () {
        this.enabled = true;
        this.sprite.show();
        this.sprite.start();
    },
});