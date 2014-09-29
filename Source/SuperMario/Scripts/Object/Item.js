Item = ClassFactory.createClass(GameObject, {
    init: function (x, y) {

        GameObject.init.call(this);

        this.setPosition(x, y);
        this.setSize(32, 32);

        this.speed = 2;

        this.sprite = new Sprite();
        this.sprite.setBackgroundImage("../Images/Items.png");
        this.sprite.setRepeat(0);
        this.sprite.setFrameCounter(5);
        this.sprite.setSize(32, 32);
        this.sprite.setFrameSequence([{ x: 0, y: 0 }, { x: 0, y: 32 }]);

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
                this.movingToRight = false;
                this.x = block.x - this.width;
                block.onCollides(this);
                block.onCollidesLeft(this);
            }
            if (this.collidesLeftWith(block)) {
                this.movingToRight = true;
                this.x = block.x + this.width;
                block.onCollides(this);
                block.onCollidesRight(this);
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
    fallDown: function () {
        for (var i = 0; i < 7; i++) {
            this.y += 1;
            this.sprite.y = this.y;
            for (var blockIndex = 0; blockIndex < this.gameUI.animateObjects.length; blockIndex++) {
                var block = this.gameUI.animateObjects[blockIndex];
                if (block != this && this.collidesDownWith(block)) {
                    this.y = block.y - this.sprite.height;
                    this.sprite.y = this.y;
                    return;
                }
            }
        }
        for (var blockIndex = 0; blockIndex < this.gameUI.staticObjects.length; blockIndex++) {
            var block = this.gameUI.staticObjects[blockIndex];
            if (this.collidesDownWith(block)) {
                this.y = block.y - this.sprite.height;
                this.sprite.y = this.y;
                this.falling = false;
                return;
            }
        }
    },
    onCollides: function(gameObject) {
        if (gameObject == mario) {
            this.enabled = false;
            this.sprite.hide();
            mario.state = MarioState.ChangingBig;
        }
    },
    animate: function () {
        this.enabled = true;
        this.sprite.show();
        this.sprite.start();
    }
});