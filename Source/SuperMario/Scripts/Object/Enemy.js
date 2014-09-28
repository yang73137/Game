Enemy = ClassFactory.createClass(GameObject, {
    init: function () {

        this.x = 0;
        this.y = 0;

        this.speed = 1;
        
        this.normalSprite = new Sprite();
        this.normalSprite.setBackgroundImage("../Images/Enemies.png");
        this.normalSprite.setRepeat(0);
        this.normalSprite.setFrameCounter(5);
        this.normalSprite.setSize(32, 32);
        this.normalSprite.setFrameSequence([{ x: 0, y: 32 }, { x: 32, y: 32 }]);
        this.normalSprite.show();

        this.deadSprite = new Sprite();
        this.deadSprite.setBackgroundImage("../Images/Enemies.png");
        this.deadSprite.setRepeat(0);
        this.deadSprite.setSize(32, 16);
        this.deadSprite.setFrameSequence([{x:64, y: 48}]);
        this.deadSprite.show();

        world.append(this.normalSprite);
        world.append(this.deadSprite);

        this.sprite = this.normalSprite;

        this.normalSprite.start();
        this.deadSprite.start();

        this.deadCounter = new Counter(40, false, false);
        this.deadCounter.setEnabled(false);
    },
    setPosition: function (x, y) {
        this.x = x;
        this.y = y;
    },
    update: function () {
        this.normalSprite.hide();
        this.deadSprite.hide();

        if (this.x < Math.abs(world.x) || this.x >= (Math.abs(world.x) + 512)) {
            return;
        }

        if (this.deadCounter.enabled && !this.deadCounter.countdown()) {
            return;
        }

        this.sprite.show();

        this.sprite.setPosition(this.x, this.y);
        this.sprite.moveToNextFrame();


        if (this.sprite == this.normalSprite) {
            this.x -= 1;
            this.normalSprite.setX(this.x);
            if (this.normalSprite.collidesWith(mario.sprite)) {
                if ((mario.y + mario.sprite.height < this.y + this.sprite.height / 2)) {
                    this.sprite = this.deadSprite;
                    this.setPosition(this.x, this.y + 16);
                    this.deadCounter.setEnabled(true);
                } else {
                    if (mario.type != MarioType.Small) {
                        mario.state = MarioState.ChangingSmall;
                    }
                }
            }
        }
    }
});