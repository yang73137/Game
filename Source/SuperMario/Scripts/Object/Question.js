QuestionState = {
    None: 0,
    Normal: 1,
    Up: 2,
    Break: 3
};

Question = ClassFactory.createClass(GameObject, {
    init: function (x, y, type) {
        GameObject.init.call(this);
        
        this.setPosition(x, y);
        this.setSize(32, 32);

        this.sprite = new Sprite();
        this.sprite.setSize(32, 32);
        this.sprite.setPosition(x, y);
        this.sprite.setBackgroundImage("../Images/TileSet.png");
        this.sprite.setFrameSequence([{ x: 32 * 24, y: 0 }, { x: 32 * 25, y: 0 }, { x: 32 * 26, y: 0 }]);
        this.sprite.setZ(2);
        this.sprite.frameCounter.setCount(15);
        this.sprite.setRepeat(0);
        this.sprite.show();
        this.sprite.start();

        this.type = type;
        this.collideCount = 1;
        
        if (this.type == 2) {
            this.sprite.setFrameSequence([{ x: 32, y: 0 }]);
        }

        this.item = null;

        this.upCounter = new Counter(16, false, true);

        this.state = QuestionState.Normal;
    },
    addToGameUI: function (gameUI) {
        gameUI.append(this.sprite);
        gameUI.animateObjects.push(this);
        gameUI.staticObjects.push(this);
    },
    update: function () {
        switch (this.state) {
            case QuestionState.Normal:
                this.sprite.moveToNextFrame();
                break;
            case QuestionState.Up:
                if (this.upCounter.countdown()) {
                    if (this.upCounter.currentCount >= 8) {
                        this.setPosition(this.x, this.y - 2);
                    } else {
                        this.setPosition(this.x, this.y + 2);
                    }
                    this.sprite.setPosition(this.x, this.y);
                }
                else {
                    this.state = this.collideCount > 0 ? QuestionState.Normal : QuestionState.None;
                }
                break;
        }

        this.sprite.moveToNextFrame();
    },
    onCollidesDown: function (gameObject) {
        if (this.item == null) {
            this.setItem();
        }
        if (this.state == QuestionState.Normal) {
            this.collideCount--;
            if (this.collideCount == 0) {
                this.sprite.setBackgroundImage("../Images/TileSet.png");
                this.sprite.setFrameSequence([{ x: 32 * 27, y: 0 }]);
                this.sprite.moveToFrame(0);
            }
            this.state = QuestionState.Up;
            this.item.animate();
        }
    },
    hide: function() {
        this.sprite.setBackgroundImage("");
    },
    setItem: function () {
        if (this.type == 1) {
            this.item = new Gold(this.x, this.y - 48);
        }
        else if (this.type == 2) {
            this.item = new Gold(this.x, this.y - 48);
            this.collideCount = 5;
        }
        else if (this.type == 3) {
            if (mario.type == MarioType.Small) {
                this.item = new Mushroom(this.x, this.y, MushroomType.Big);
            } else {
                this.item = new Flower(this.x, this.y);
            }
        }
        else if (this.type == 4) {
            this.item = new Mushroom(this.x, this.y, MushroomType.Bonus);
        }
        this.item.sprite.hide();
        this.item.addToGameUI(gameUI);
    }
});