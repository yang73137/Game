GoombaState = {
    None: 0,
    Live: 1,
    Dead: 2,
    Dead2: 3
};

GoombaIconType = {
    Red: 1,
    Blue: 2
};

GoombaSpriteType = {
    MoveLeft: 1,
    MoveRight: 2,
    Dead: 3
};

Goomba = ClassFactory.createClass(Enemy, {
    init: function (x, y, iconType) {
        Enemy.init.call(this);

        this.speed = 1;
        this.state = GoombaState.Live;
        this.movingToRight = false;
        this.deadCounter = new Counter(40, false, true);

        this.sprite = new Sprite();
        this.sprite.setBackgroundImage("../Images/Enemies.png");
        this.sprite.setRepeat(0);
        this.sprite.setFrameCounter(5);

        this.moveLeftSpriteSequence = [];
        this.moveRightSpriteSequence = [];
        this.deadSpriteSequence = [];
        
        this.sprite.show();
        this.sprite.start();

        this.setPosition(x, y);
        this.setSize(32, 32);

        this.iconType = iconType;
        this.iconType = iconType;

        this.changeSprite(GoombaSpriteType.MoveLeft);
    },
    update: function () {
        switch (this.state) {
            case GoombaState.Live:
                this.onLive();
                break;
            case GoombaState.Dead:
                this.onDead();
                break;
        }
    },
    onLive: function () {

        if (this.x + this.width < Math.abs(this.gameUI.x) || this.x >= (Math.abs(this.gameUI.x) + 512)) {
            return;
        }

        this.movingToRight ? this.moveRight(this.speed) : this.moveLeft(this.speed);

        this.freefall();
        this.sprite.moveToNextFrame();
    },
    onDead: function () {
        if (!this.deadCounter.countdown()) {
            this.sprite.hide();
            this.state = GoombaState.None;
        }
    },
    onDead2: function () {

    },
    dead: function () {
        this.state = GoombaState.Dead;
        this.setSize(32, 16);
        this.setY(this.y += 16);
        this.changeSprite(GoombaSpriteType.Dead);
        this.setCollidable(false, false, false, false);
    },
    onCollidesUp: function (gameObject) {
        if (gameObject instanceof MarioBors) {
            this.dead();
            gameObject.reJump();
        }
    },
    onCollidesDown: function (gameObject) {
        if (gameObject instanceof MarioBors) {
            gameObject.invincible ? this.dead() : gameObject.hurt();
        }
        else if (gameObject instanceof Brick) {
            if (gameObject.state == BrickState.Up || gameObject.state == BrickState.Break) {
                this.dead();
            }
        }
        else if (gameObject instanceof Question) {
            if (gameObject.state == QuestionState.Up) {
                this.dead();
            }
        }
    },
    onCollidesLeft: function (gameObject) {
        if (gameObject.stoppable || gameObject instanceof Enemy) {
            this.movingToRight = true;
        }
        if (gameObject instanceof MarioBors) {
            gameObject.invincible ? this.dead() : gameObject.hurt();
        }
    },
    onCollidesRight: function (gameObject) {
        if (gameObject.stoppable || gameObject instanceof Enemy) {
            this.movingToRight = false;
        }
        if (gameObject instanceof MarioBors) {
            gameObject.invincible ? this.dead() : gameObject.hurt();
        }
    },
    changeSprite: function (spriteType) {
        if (this.iconType == GoombaIconType.Red) {
            switch (spriteType) {
            case GoombaSpriteType.MoveLeft:
                this.sprite.setFrameSequence([{ x: 0, y: 32 }, { x: 32, y: 32 }]);
                break;
            case GoombaSpriteType.MoveRight:
                this.sprite.setFrameSequence([{ x: 0, y: 32 }, { x: 32, y: 32 }]);
                break;
            case GoombaSpriteType.Dead:
                this.sprite.setFrameSequence([{ x: 32 * 2, y: 48 }]);
                break;
            }
        }
        else if (this.iconType == GoombaIconType.Blue) {
            switch (spriteType) {
                case GoombaSpriteType.MoveLeft:
                    this.sprite.setFrameSequence([{ x: 0, y: 96 }, { x: 32, y: 96 }]);
                    break;
                case GoombaSpriteType.MoveRight:
                    this.sprite.setFrameSequence([{ x: 0, y: 96 }, { x: 32, y: 96 }]);
                    break;
                case GoombaSpriteType.Dead:
                    this.sprite.setFrameSequence([{ x: 32 * 2, y: 110 }]);
                    break;
            }
        }
        
        this.sprite.moveToFrame(0);
    }
});