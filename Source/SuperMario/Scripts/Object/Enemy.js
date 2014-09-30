EnemyState = {
    None: 0,
    Live: 1,
    Dead: 2
};

Enemy = ClassFactory.createClass(GameObject, {
    init: function (x, y) {

        GameObject.init.call(this);

        this.setPosition(x, y);
        this.setSize(32, 32);

        this.speed = 1;
        
        this.sprite = new Sprite();
        this.sprite.setBackgroundImage("../Images/Enemies.png");
        this.sprite.setRepeat(0);
        this.sprite.setFrameCounter(5);
        this.sprite.setPosition(x, y);
        this.sprite.setSize(32, 32);
        this.sprite.setFrameSequence([{ x: 0, y: 32 }, { x: 32, y: 32 }]);
        this.sprite.show();
        this.sprite.start();

        this.deadCounter = new Counter(40, false, true);
        this.state = EnemyState.Live;

        this.movingToRight = false;
    },
    update: function () {
        switch (this.state) {
            case EnemyState.Live:
                this.onLive();
                break;
            case EnemyState.Dead:
                this.onDead();
                break;
        }
    },
    addToGameUI: function(gameUI) {
        gameUI.append(this.sprite);
        gameUI.animateObjects.push(this);
        this.gameUI = gameUI;
    },
    onLive: function () {

        if (this.x + this.width < Math.abs(gameUI.x) || this.x >= (Math.abs(gameUI.x) + 512)) {
            return;
        }

        this.x += this.movingToRight ? 1 : -1;
        this.sprite.setX(this.x);
        
        for (var blockIndex = 0; blockIndex < this.gameUI.animateObjects.length; blockIndex++) {
            var block = this.gameUI.animateObjects[blockIndex];

            if (this.collidesRightWith(block) && (block.x + block.width >= Math.abs(this.gameUI.x))) {
                block.onCollides(this);
                block.onCollidesLeft(this);
                this.movingToRight = false;
                break;
            }
            if (this.collidesLeftWith(block) && (block.x + block.width >= Math.abs(this.gameUI.x))) {
                block.onCollides(this);
                block.onCollidesRight(this);
                this.movingToRight = true;
                break;
            }
        }

        for (var blockIndex = 0; blockIndex < this.gameUI.staticObjects.length; blockIndex++) {
            var block = this.gameUI.staticObjects[blockIndex];

            if (this.collidesDownWith(block) && block != mario) {
                this.dead();
                return;
            }

            if (this.collidesRightWith(block) && (block.x + block.width >= Math.abs(this.gameUI.x))) {
                block.onCollides(this);
                block.onCollidesLeft(this);
                this.movingToRight = false;
                break;
            }
            if (this.collidesLeftWith(block) && (block.x + block.width >= Math.abs(this.gameUI.x))) {
                block.onCollides(this);
                block.onCollidesRight(this);
                this.movingToRight = true;
                break;
            }
        }
        this.fallDown();
        this.sprite.setPosition(this.x, this.y);
        this.sprite.moveToNextFrame();
        
        if (mario.state == MarioState.Live && this.collidesWith(mario)) {
            if ((mario.y + mario.height < this.y + this.height / 2)) {
                this.dead();
            } else {
                mario.hurt();
            }
        }
    },
    onDead: function() {
        if (!this.deadCounter.countdown()) {
            this.sprite.hide();
            this.state = EnemyState.None;
        }
    },
    dead: function () {
        this.y += 16;
        this.setSize(32, 16);
        this.sprite.setSize(this.width, 16);
        this.sprite.setPosition(this.x, this.y);
        this.sprite.setFrameSequence([{ x: 32 * 2, y: 48 }]);
        this.sprite.moveToFrame(0);
        this.collideble = false;
        this.state = EnemyState.Dead;
    }
});