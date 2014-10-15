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

QuestionDisplayType = {
    Hidden: 0,
    Question: 1,
    Brick: 2,
};

Question = ClassFactory.createClass(GameObject, {
    init: function (x, y, itemType, displayType, iconType) {
        GameObject.init.call(this);

        this.stoppable = true;
        this.itemType = itemType;
        this.iconType = iconType;
        this.collideCount = 1;
        this.item = null;
        this.upCounter = new Counter(16, false, true);
        this.state = QuestionState.Normal;

        this.sprite = new Sprite();
        this.sprite.setBackgroundImage(Const.IMAGE_TILESET);
        this.sprite.setZ(2);
        this.sprite.frameCounter.setCount(12);
        this.sprite.setRepeat(0);
        this.sprite.show();
        this.sprite.start();
        
        this.setPosition(x, y);
        this.setSize(32, 32);

        this.stoppedable = false;
        this.displayType = displayType;

        this.setIconType(iconType);
        this.setDisplayType(displayType, iconType);
    },
    addToGameUI: function(gameUI) {
        GameObject.prototype.addToGameUI.call(this, gameUI);
        gameUI.addAnimateObject(this);
        gameUI.addStaticObject(this);
    },
    update: function () {

        switch (this.state) {
            case QuestionState.Normal:
                if (this.displayType != QuestionDisplayType.Hidden) {
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
                this.sprite.setBackgroundImage(Const.IMAGE_TILESET);
                if (this.iconType == GameObjectIconType.Ground) {
                    this.sprite.setFrameSequence([{ x: 32 * 27, y: 0 }]);
                }
                else if (this.iconType == GameObjectIconType.Underground) {
                    this.sprite.setFrameSequence([{ x: 32 * 27, y: 64 }]);
                }
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
            this.item = new Gold(this.x, this.y - 48, this.iconType);
            break;
        case QuestionItemType.MultiGold:
            this.item = new Gold(this.x, this.y - 48, this.iconType);
            this.collideCount = 5;
            break;
        case QuestionItemType.BigMushroom:
            if (mario.type == MarioType.Small) {
                this.item = new Mushroom(this.x, this.y, MushroomType.Big, this.iconType);
            } else {
                this.item = new Flower(this.x, this.y, this.iconType);
            }
            break;
        case QuestionItemType.LifeMushroom:
            this.item = new Mushroom(this.x, this.y, MushroomType.Bonus, this.iconType);
            break;
        case QuestionItemType.Star:
            this.item = new Star(this.x, this.y, this.iconType);
            break;
        }

        this.item.sprite.hide();
        this.item.addToGameUI(this.gameUI);
    },
    setDisplayType: function (displayType, iconType) {
        switch (displayType) {
        case QuestionDisplayType.Hidden:
            this.setCollidable(false, true, false, false);
            this.sprite.hide();
            break;
        case QuestionDisplayType.Question:
            if (iconType == GameObjectIconType.Ground) {
                this.sprite.setFrameSequence([{ x: 32 * 24, y: 0 }, { x: 32 * 25, y: 0 }, { x: 32 * 26, y: 0 }]);
            } else if (iconType == GameObjectIconType.Underground) {
                this.sprite.setFrameSequence([{ x: 32 * 24, y: 32 * 2 }, { x: 32 * 25, y: 32 * 2 }, { x: 32 * 26, y: 32 * 2 }]);
            }
            break;
        case QuestionDisplayType.Brick:
            if (iconType == GameObjectIconType.Ground) {
                this.sprite.setFrameSequence([{ x: 32, y: 0 }]);
            } else if (iconType == GameObjectIconType.Underground) {
                this.sprite.setFrameSequence([{ x: 64, y: 64 }]);
            }
            break;
        }
    }
});