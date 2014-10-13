BrickState = {
    None: 0,
    Normal: 1,
    Up: 2,
    Break: 3
};

BrickType = {
    Red: 1,
    Blue: 2
}


Brick = ClassFactory.createClass(GameObject, {
    init: function (x, y, type) {
        GameObject.init.call(this);

        this.stoppable = true;
        this.state = BrickState.Normal;
        
        this.sprite = new Sprite();
        this.sprite.setBackgroundImage("../Images/TileSet.png");
        this.sprite.setBackgroundPosition(32, 0);
        this.sprite.show();
        
        this.setPosition(x, y);
        this.setSize(32, 32);

        this.upCounter = new Counter(16, false, true);
        this.breakCounter = new Counter(70, false, true);

        this.fragment1 = new Sprite();
        this.fragment1.setSize(16, 16);
        this.fragment1.setPosition(this.x, this.y, 200);
        this.fragment1.setBackgroundImage("../Images/TileSet.png");
        
        this.fragment2 = new Sprite();
        this.fragment2.setSize(16, 16);
        this.fragment2.setPosition(this.x + 16, this.y, 200);
        this.fragment2.setBackgroundImage("../Images/TileSet.png");
        
        this.fragment3 = new Sprite();
        this.fragment3.setSize(16, 16);
        this.fragment3.setPosition(this.x, this.y + 16, 200);
        this.fragment3.setBackgroundImage("../Images/TileSet.png");
        
        this.fragment4 = new Sprite();
        this.fragment4.setSize(16, 16);
        this.fragment4.setPosition(this.x + 16, this.y + 16, 200);
        this.fragment4.setBackgroundImage("../Images/TileSet.png");

        this.setType(type);
    },
    onCollidesDown: function (gameObject) {
        if (gameObject instanceof MarioBors) {
            if (gameObject.type == MarioType.Small) {
                this.state = BrickState.Up;
            }
            else {
                this.sprite.setBackground("");
                this.setY(this.y - 1);
                
                this.fragment1.show();
                this.fragment2.show();
                this.fragment3.show();
                this.fragment4.show();
                this.state = BrickState.Break;
            }
        }
    },
    addToGameUI: function (gameUI) {

        GameObject.prototype.addToGameUI.call(this, gameUI);

        gameUI.append(this.fragment1);
        gameUI.append(this.fragment2);
        gameUI.append(this.fragment3);
        gameUI.append(this.fragment4);

        gameUI.addAnimateObject(this);
        gameUI.addStaticObject(this);
    },
    update: function () {
        switch (this.state) {
            case BrickState.None:
                break;
            case BrickState.Up:
                this.onUp();
                break;
            case BrickState.Break:
                this.onBreak();
                break;
        }
    },
    onUp: function() {
        if (this.upCounter.countdown()) {
            if (this.upCounter.currentCount >= 8) {
                this.setPosition(this.x, this.y - 2);
            } else {
                this.setPosition(this.x, this.y + 2);
            }
            this.sprite.setPosition(this.x, this.y);
        } else {
            this.state = BrickState.Normal;
        }
    },
    onBreak: function () {
        this.sprite.hide();
        this.setCollidable(false, false, false, false);
        if (this.breakCounter.countdown()) {
            if (this.breakCounter.currentCount >= 58) {
                this.fragment1.moveBy(-3, -8);
                this.fragment2.moveBy(3, -8);
                this.fragment3.moveBy(-4, 0);
                this.fragment4.moveBy(4, 0);
            }
            else if (this.breakCounter.currentCount <= 30) {
                this.fragment1.moveBy(0, 9);
                this.fragment2.moveBy(0, 9);
                this.fragment3.moveBy(0, 9);
                this.fragment4.moveBy(0, 9);
            }
            else {
                this.fragment1.moveBy(0, 8);
                this.fragment2.moveBy(0, 8);
                this.fragment3.moveBy(0, 8);
                this.fragment4.moveBy(0, 8);
            }
        } else {
            this.state = BrickState.None;
        }
    },
    setType: function (type) {
        switch (type) {
        case 1:
            this.sprite.setBackgroundPosition(32, 0);
            this.fragment1.setBackgroundPosition(32, 0);
            this.fragment2.setBackgroundPosition(48, 0);
            this.fragment3.setBackgroundPosition(32, 16);
            this.fragment4.setBackgroundPosition(48, 16);
            break;
        case 2:
            this.sprite.setBackgroundPosition(64, 64);
            this.fragment1.setBackgroundPosition(64, 64);
            this.fragment2.setBackgroundPosition(80, 64);
            this.fragment3.setBackgroundPosition(64, 80);
            this.fragment4.setBackgroundPosition(80, 80);
            break;
        }
    }
});