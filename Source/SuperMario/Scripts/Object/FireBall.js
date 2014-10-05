
FireBallState = {
    None: 0,
    Firing: 1,
    Bomb: 2
};

FireBall = ClassFactory.createClass(GameObject, {
    init: function () {
        GameObject.init.call(this);
        
        this.setSize(16, 16);

        this.sprite = new Sprite();
        this.sprite.setSize(16, 16);
        this.sprite.setBackgroundImage("../Images/Items.png");
        this.sprite.setFrameSequence([{ x: 32 * 6, y: 32 * 9 }, { x: 32 * 6 + 16, y: 32 * 9 }, { x: 32 * 6, y: 32 * 9 + 16 }, { x: 32 * 6 + 16, y: 32 * 9 + 16 }]);
        this.sprite.setRepeat(0);

        this.sprite.show();
        this.sprite.start();

        this.movingToRight = true;
        this.movingToDown = true;
        this.state = FireBallState.None;
        this.movingUpTime = 0;
        this.bombCounter = new Counter(5, false, true);
    },
    addToGameUI: function(gameUI) {
        this.gameUI = gameUI;
        gameUI.append(this.sprite);
        gameUI.animateObjects.push(this);
    },
    update: function () {
        
        switch (this.state) {
        case FireBallState.None:
            this.sprite.hide();
            break;
        case FireBallState.Firing:
            this.onFiring();
            break;
        case FireBallState.Bomb:
            this.onBomb();
            break;
        }
    },
    fire: function(x, y, movingToRight) {
        this.setPosition(x, y);
        this.sprite.setPosition(x, y);
        this.movingToRight = movingToRight;
        this.movingToDown = true;
        this.sprite.setFrameSequence([{ x: 32 * 6, y: 32 * 9 }, { x: 32 * 6 + 16, y: 32 * 9 }, { x: 32 * 6, y: 32 * 9 + 16 }, { x: 32 * 6 + 16, y: 32 * 9 + 16 }]);
        this.state = FireBallState.Firing;
    },
    onFiring: function () {
        for (var i = 0; i < 2; i++) {
            this.x += this.movingToRight ? 4 : -4;
            this.y += this.movingToDown ? 2 : -2;
            if (!this.movingToDown) {
                this.movingUpTime++;
            }
            
            if (this.movingUpTime == 16) {
                this.movingUpTime = 0;
                this.movingToDown = true;
            }
            this.sprite.setPosition(this.x, this.y);

            var bomb = false;
            
            for (var index = 0; index < this.gameUI.staticObjects.length; index++) {
                var block = this.gameUI.staticObjects[index];

                if (this.collidesDownWith(block) || this.collidesUpWith(block)) {
                    this.movingToDown = !this.movingToDown;
                    this.y += this.movingToDown ? 2 : -2;
                    this.sprite.setY(this.y);
                }
                if (this.collidesLeftWith(block) || this.collidesRightWith(block)) {
                    bomb = true;
                    break;
               }  
            }
            
            for (var index = 0; index < this.gameUI.animateObjects.length; index++) {
                var block = this.gameUI.animateObjects[index];

                if ((block instanceof Enemy) && block.collidesWith(this)) {
                    bomb = true;
                    block.dead();
                    break;
                }

            }

            if (bomb) {
                this.bomb();
                break;
            }
            
            if (this.x + 32 < Math.abs(this.gameUI.x) || this.x > Math.abs(this.gameUI.x) + Const.SCREEN_WIDTH) {
                this.state = FireBallState.None;
                break;
            }
            
            
        }
        this.sprite.moveToNextFrame();
    },
    onBomb: function () {
        if (!this.bombCounter.countdown()) {
            this.sprite.setSize(16, 16);
            this.state = FireBallState.None;
        }
    },
    bomb: function () {
        this.sprite.setSize(32, 32);
        this.sprite.setFrameSequence([{ x: 32 * 7, y: 32 * 10 }]);
        this.sprite.moveToFrame(0);
        this.state = FireBallState.Bomb;
    }
});