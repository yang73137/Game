
BlurpState = {
    None: 0,
    Live: 1,
    Dead: 2
};

BlurpSpriteType = {
    Live: 1,
    Dead: 2
};


Blurp = ClassFactory.createClass(Enemy, {
    init: function (x, y, iconType) {
        Enemy.init.call(this);

        this.sprite = new Sprite();
        this.sprite.setBackgroundImage(Const.IMAGE_ENEMIES);
        this.sprite.setRepeat(0);
        this.sprite.setFrameCounter(5);
        

        this.sprite.show();
        this.sprite.start();

        this.setPosition(x, y);
        this.setSize(32, 32);

        this.iconType = iconType;
        this.setSpriteFrames(BlurpSpriteType.Live);

        this.originX = x;
        this.originY = y;

        this.movingUp = true;
        this.stoppedable = false;

        this.state = BlurpState.Live;
    },
    update: function () {
        switch (this.state) {
            case BlurpState.Live:
                this.onLive();
                break;
            case BlurpState.Dead:
                this.onDead();
                break;
        }
    },
    onLive: function () {
        if (this.waitForScreen()) {
            return;
        }

        this.moveLeft(1);
        this.sprite.moveToNextFrame();
    },
    onDead: function () {
        this.setY(this.y + 3);
        if (this.y > this.gameUI.height) {
            this.state = BlurpState.None;
        }
    },
    dead: function () {
        this.setCollidable(false, false, false, false);
        this.setSpriteFrames(BlurpSpriteType.Dead);
        this.sprite.moveToFrame(0);
        this.state = BlurpState.Dead;
        SoundManager.play(Const.Sound.Effects.Squish);
    },
    onCollides: function (gameObject) {
        if (gameObject instanceof FireBall) {
            this.dead();
        }
        else if (gameObject instanceof MarioBors) {
            gameObject.invincible ? this.dead() : gameObject.hurt();
        }
    },
    onOffScreen: function () {
        this.sprite.hide();
        this.setCollidable(false, false, false, false);
        this.state = BlurpState.None;
    },
    onCollidesUp: function () {
        this.onCollides();
    },
    setSpriteFrames: function (spriteType) {
        if (this.iconType == GameObjectIconType.Ground) {
            switch (spriteType) {
                case BlurpSpriteType.Live:
                    this.sprite.setFrameSequence([{ x: 32 * 39, y: 32 }, { x: 32 * 40, y: 32 }]);
                    break;
                case BlurpSpriteType.Dead:
                    this.sprite.setFrameSequence([{ x: 32 * 39, y: 448 }]);
                    break;
            }
        }
        else if (this.iconType == GameObjectIconType.Underground) {
            switch (spriteType) {
                case BlurpSpriteType.Live:
                    this.sprite.setFrameSequence([{ x: 32 * 39, y: 32 + 32 * 2 }, { x: 32 * 40, y: 32 + 32 * 2 }]);
                    break;
                case BlurpSpriteType.Dead:
                    this.sprite.setFrameSequence([{ x: 32 * 39, y: 448 - 32 * 2 }]);
                    break;
            }
        }
        else if (this.iconType == GameObjectIconType.Sky) {
            switch (spriteType) {
                case BlurpSpriteType.Live:
                    this.sprite.setFrameSequence([{ x: 32 * 39, y: 32 + 32 * 4 }, { x: 32 * 40, y: 32 + 32 * 4 }]);
                    break;
                case BlurpSpriteType.Dead:
                    this.sprite.setFrameSequence([{ x: 32 * 39, y: 448 - 32 * 4 }]);
                    break;
            }
        }
        else if (this.iconType == GameObjectIconType.Castle) {
            switch (spriteType) {
                case BlurpSpriteType.Live:
                    this.sprite.setFrameSequence([{ x: 32 * 39, y: 32 + 32 * 6 }, { x: 32 * 40, y: 32 + 32 * 6 }]);
                    break;
                case BlurpSpriteType.Dead:
                    this.sprite.setFrameSequence([{ x: 32 * 39, y: 448 - 32 * 6 }]);
                    break;
            }
        }

        this.sprite.moveToFrame(0);
    },
});
