Enemy = ClassFactory.createClass({
    init: function () {

        this.x = 0;
        this.y = 0;

        this.speed = 1;
        
        this.normalSprite = new Sprite();
        this.normalSprite.setBackgroundImage("../Images/Enemies.png");
        this.normalSprite.setRepeat(0);
        this.normalSprite.setFrameCounter(5);
        this.normalSprite.setSize(32, 32);
        this.normalSprite.setFrameOffset(0, 32);
        this.normalSprite.setFrameSequence([0, 1]);
        this.normalSprite.show();

        this.deadSprite = new Sprite();
        this.deadSprite.setBackgroundImage("../Images/Enemies.png");
        this.deadSprite.setRepeat(0);
        this.deadSprite.setSize(32, 16);
        this.deadSprite.setFrameOffset(64, 48);
        this.deadSprite.setFrameSequence([0]);
        this.deadSprite.show();

        world.append(this.normalSprite);
        world.append(this.deadSprite);

        this.currentSprite = this.normalSprite;

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

        if (this.deadCounter.enabled && !this.deadCounter.countdown()) {
            return;
        }

        this.currentSprite.show();

        this.currentSprite.setPosition(this.x, this.y);
        this.currentSprite.moveToNextFrame();

        if (world.scrolling) {
            this.onScroll();
        }

        if (this.currentSprite == this.normalSprite) {
            this.x -= 1;
            this.normalSprite.setX(this.x);
            if (this.normalSprite.collidesWith(mario.currentSprite)) {
                this.currentSprite = this.deadSprite;
                this.setPosition(this.x, this.y + 16);
                this.deadCounter.setEnabled(true);
            }
        }
    },
    onScroll: function() {
        this.x -= mario.speed;
        this.currentSprite.setX(this.x);
    }
});