Enemy = ClassFactory.createClass({
    init: function () {

        this.x = 0;
        this.y = 0;

        this.speed = 1;

        this.sprite = new Sprite();
        this.sprite.setBackgroundImage("../Images/Enemies.png");
        this.sprite.setRepeat(0);
        this.sprite.setFrameCounter(5);
        this.sprite.setSize(32, 32);
        this.sprite.setFrameOffset(0, 32);
        this.sprite.setFrameSequence([0, 1]);
        this.sprite.show();

        world.append(this.sprite);
        this.sprite.start();
    },
    setPosition: function (x, y) {
        this.x = x;
        this.y = y;
        this.sprite.setX(x);
        this.sprite.setY(y);
    },
    update: function () {
        this.sprite.moveToNextFrame();

        this.x -= this.speed;
        this.sprite.setX(this.x);
        
        if (this.sprite.collidesWith(mario.currentSprite)) {
            console.log(1);
        }
    }    
});