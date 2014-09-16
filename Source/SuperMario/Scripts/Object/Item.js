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
        this.normalSprite.setFrameSequence([{ x: 0, y: 0 }, { x: 0, y: 32 }]);
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

        this.x -= this.speed;
        this.normalSprite.setX(this.x);
        if (this.normalSprite.collidesWith(mario.currentSprite)) {
            this.hit = true;
            this.normalSprite.hide();
            mario.state = MarioState.ChangingBig;
        }
    }
});