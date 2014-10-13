QuestionState = {
    None: 0,
    Normal: 1,
    Up: 2,
    Break: 3
};

QuestionItemType = {
    Gold: 1,
    MultiGold: 2,
    BigMushroom: 3,
    LifeMushroom: 4,
    Star: 5
};

QuestionIconType = {
    None: 0,
    Question: 1,
    RedBrick: 2,
    BlueBrick: 3
};

Question = ClassFactory.createClass(GameObject, {
    init: function (x, y, itemType, iconType) {
        GameObject.init.call(this);
        
        if (itemType == undefined || iconType == undefined) {
            console.log(x, y);
        }

        this.stoppable = true;
        this.itemType = itemType;
        this.iconType = iconType;
        this.collideCount = 1;
        this.item = null;
        this.upCounter = new Counter(16, false, true);
        this.state = QuestionState.Normal;

        this.sprite = new Sprite();
        this.sprite.setBackgroundImage("../Images/TileSet.png");
        this.sprite.setZ(2);
        this.sprite.frameCounter.setCount(12);
        this.sprite.setRepeat(0);
        this.sprite.show();
        this.sprite.start();
        
        this.setPosition(x, y);
        this.setSize(32, 32);

        this.setIconType(iconType);
        this.stoppedable = false;
    },
    addToGameUI: function(gameUI) {
        GameObject.prototype.addToGameUI.call(this, gameUI);
        gameUI.addAnimateObject(this);
        gameUI.addStaticObject(this);
    },
    update: function () {
        switch (this.state) {
            case QuestionState.Normal:
                if (this.iconType != QuestionIconType.None) {
                    this.sprite.moveToNextFrame();
                }
                break;
            case QuestionState.Up:
                if (this.upCounter.countdown()) {
                    if (this.upCounter.currentCount >= 8) {
                        this.moveUp(2);
                    } else {
                        this.moveDown(2);
                    }
                }
                else {
                    this.state = this.collideCount > 0 ? QuestionState.Normal : QuestionState.None;
                    if (!(this.item instanceof Gold)) {
                        this.item.animate();
                    }
                }
                this.sprite.moveToNextFrame();
                break;
        }
    },
    onCollidesDown: function (gameObject) {
        
        if (!(gameObject instanceof MarioBors)) {
            return;
        }

        if (this.item == null) {
            this.setItem();
        }

        this.sprite.show();
        this.setCollidable(true, true, true, true);

        if (this.state == QuestionState.Normal) {
            this.collideCount--;
            if (this.collideCount == 0) {
                this.sprite.setBackgroundImage("../Images/TileSet.png");
                this.sprite.setFrameSequence([{ x: 32 * 27, y: 0 }]);
                this.sprite.moveToFrame(0);
            }
            this.state = QuestionState.Up;
            if (this.item instanceof Gold) {
                this.item.animate();
            }
        }
    },
    hide: function() {
        this.sprite.setBackgroundImage("");
    },
    setItem: function () {
        var mario = this.gameUI.mario;
        switch (this.itemType) {
        case QuestionItemType.Gold:
            this.item = new Gold(this.x, this.y - 48);
            break;
        case QuestionItemType.MultiGold:
            this.item = new Gold(this.x, this.y - 48);
            this.collideCount = 5;
            break;
        case QuestionItemType.BigMushroom:
            if (mario.type == MarioType.Small) {
                this.item = new Mushroom(this.x, this.y, MushroomType.Big);
            } else {
                this.item = new Flower(this.x, this.y);
            }
            break;
        case QuestionItemType.LifeMushroom:
            this.item = new Mushroom(this.x, this.y, MushroomType.Bonus);
            break;
        case QuestionItemType.Star:
            this.item = new Star(this.x, this.y);
            break;
        }

        this.item.sprite.hide();
        this.item.addToGameUI(this.gameUI);
    },
    setIconType: function (iconType) {
        switch (iconType) {
            case QuestionIconType.None:
                this.setCollidable(false, true, false, false);
                this.sprite.hide();
                break;
            case QuestionIconType.Question:
                this.sprite.setFrameSequence([{ x: 32 * 24, y: 0 }, { x: 32 * 25, y: 0 }, { x: 32 * 26, y: 0 }]);
                break;
            case QuestionIconType.RedBrick:
                this.sprite.setFrameSequence([{ x: 32, y: 0 }]);
                break;
            case QuestionIconType.BlueBrick:
                this.sprite.setFrameSequence([{ x: 64, y: 64 }]);
                break;
        }
    }
});