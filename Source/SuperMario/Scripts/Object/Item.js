Item = ClassFactory.createClass(GameObject, {
    init: function () {

        this.x = 0;
        this.y = 0;

        this.speed = 2;

        this.normalSprite = new Sprite();
        this.normalSprite.setBackgroundImage("../Images/Items.png");
        this.normalSprite.setRepeat(0);
        this.normalSprite.setFrameCounter(5);
        this.normalSprite.setSize(32, 32);
        this.normalSprite.setFrameOffset(0, 32);
        this.normalSprite.setFrameSequence([0, 36]);
        this.normalSprite.show();

        world.append(this.normalSprite);

        this.normalSprite.start();

        this.hit = false;
    },
    setPosition: function (x, y) {
        this.x = x;
        this.y = y;
    },
    update: function () {
        if (this.hit) {
            return;
        }

        this.normalSprite.setPosition(this.x, this.y);
        this.normalSprite.moveToNextFrame();

        if (world.scrolling) {
            this.onScroll();
        }

        this.x -= this.speed;
        this.normalSprite.setX(this.x);
        if (this.normalSprite.collidesWith(mario.currentSprite)) {
            this.hit = true;
            this.normalSprite.hide();
            mario.state = MarioState.ChangingBig;
            
        }
    },
    onScroll: function () {
        this.x -= mario.speed;
        this.normalSprite.setX(this.x);
    }
});