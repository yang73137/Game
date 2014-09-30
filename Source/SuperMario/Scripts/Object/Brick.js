BrickState = {
    None: 0,
    Static: 1,
    Up: 2,
    Break: 3
};


Brick = ClassFactory.createClass(GameObject, {
    init: function (x, y) {
        GameObject.init.call(this);

        this.setPosition(x, y);
        this.setSize(32, 32);

        this.sprite = new Sprite();
        this.sprite.setSize(32, 32);
        this.sprite.setPosition(x, y);
        this.sprite.setBackgroundImage("../Images/TileSet.png");
        this.sprite.setBackgroundPosition(32, 0);
        this.sprite.show();

        this.state = BrickState.Static;

        this.upCounter = new Counter(16, false, true);
        this.breakCounter = new Counter(70, false, true);

        this.fragment1 = new Sprite();
        this.fragment1.setSize(16, 16);
        this.fragment1.setPosition(this.x, this.y, 200);
        this.fragment1.setBackgroundImage("../Images/TileSet.png");
        this.fragment1.setBackgroundPosition(32, 0);
        
        this.fragment2 = new Sprite();
        this.fragment2.setSize(16, 16);
        this.fragment2.setPosition(this.x + 16, this.y, 200);
        this.fragment2.setBackgroundImage("../Images/TileSet.png");
        this.fragment2.setBackgroundPosition(32, 0);
        
        this.fragment3 = new Sprite();
        this.fragment3.setSize(16, 16);
        this.fragment3.setPosition(this.x, this.y + 16, 200);
        this.fragment3.setBackgroundImage("../Images/TileSet.png");
        this.fragment3.setBackgroundPosition(32, 0);
        
        this.fragment4 = new Sprite();
        this.fragment4.setSize(16, 16);
        this.fragment4.setPosition(this.x + 16, this.y + 16, 200);
        this.fragment4.setBackgroundImage("../Images/TileSet.png");
        this.fragment4.setBackgroundPosition(32, 0);
    },
    onCollidesDown: function (gameObject) {
        if (gameObject == mario) {
            if (mario.type == MarioType.Small) {
                this.state = BrickState.Up;
            }
            else {
                this.fragment1.show();
                this.fragment2.show();
                this.fragment3.show();
                this.fragment4.show();
                this.state = BrickState.Break;
            }
        }
    },
    addToGameUI: function (gameUI) {
        gameUI.append(this.fragment1);
        gameUI.append(this.fragment2);
        gameUI.append(this.fragment3);
        gameUI.append(this.fragment4);

        gameUI.append(this.sprite);
        gameUI.animateObjects.push(this);
        gameUI.staticObjects.push(this);
    },
    update: function () {
        switch (this.state) {
            case BrickState.Up:
                if (this.upCounter.countdown()) {
                    if (this.upCounter.currentCount >= 8) {
                        this.setPosition(this.x, this.y - 2);
                    } else {
                        this.setPosition(this.x, this.y + 2);
                    }
                    this.sprite.setPosition(this.x, this.y);
                }
                else {
                    this.state = BrickState.Static;
                }
                break;
            case BrickState.Break:
                //this.sprite.hide();
                this.sprite.setBackground("");
                this.y -= 10;
                this.sprite.setY(this.y);

                if (this.breakCounter.countdown()) {
                    if (this.breakCounter.currentCount >= 60) {
                        this.fragment1.moveBy(-2, -6);
                        this.fragment2.moveBy(2, -6);
                        this.fragment3.moveBy(-3, -2);
                        this.fragment4.moveBy(3, -2);
                    }
                    else {
                        this.fragment1.moveBy(-1, 7);
                        this.fragment2.moveBy(1, 7);
                        this.fragment3.moveBy(-1, 7);
                        this.fragment4.moveBy(1, 7);
                    }
                } else {
                    this.state = BrickState.None;
                }
                break;
        }
    }
});