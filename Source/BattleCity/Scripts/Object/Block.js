
BlockType = [
    null,
    {
        frameSequence: [21],
        z: Const.Z_MAP
    },
    {
        frameSequence: [6],
        z: Const.Z_MAP
    },
    {
        frameSequence: [0],
        z: Const.Z_GRASS
    },
    {
        frameSequence: [5],
        z: Const.Z_MAP
    },
    {
        frameSequence: [3, 4],
        z: Const.Z_MAP
    },
    {
        frameSequence: [1],
        z: Const.Z_MAP
    },
    {
        frameSequence: [2],
        z: Const.Z_MAP
    }
];

BlockTypeId = {
    None: 0,
    Brick: 1,
    Iron: 2,
    Grass: 3,
    Ice: 4,
    Water: 5,
    Base1: 6,
    Base2: 7,
};

// 0 | 2
// 4 | 8
Block = ClassFactory.createClass(GameObject, {
    init: function (typeId, x, y, area) {

        GameObject.init.call(this);

        var type = BlockType[typeId];

        this.typeId = typeId;
        this.area = [(area & 1) == 1, (area & 2) == 2, (area & 4) == 4, (area & 8) == 8];

        var frameSequence = type.frameSequence.concat();

        if (typeId == BlockTypeId.Brick || typeId == BlockTypeId.Iron) {
            frameSequence[0] = type.frameSequence[0] + area - 1;
        }

        this.sprite = new Sprite(Const.IMAGE_TERR, 32, 32, frameSequence);
        this.sprite.setZ(type.z);
        this.sprite.setPosition(x, y);

        this.sprite.setRepeat(0);
        this.sprite.setFrameCounter(60);

        this.sprite.show();
        this.sprite.start();
    },
    addToGameUI: function (gameUI) {
        GameObject.prototype.addToGameUI.call(this, gameUI);
        gameUI.gameArea.append(this.sprite);
        gameUI.gameArea.append(this.baseBomb);

        this.sprite.moveToFrame(0);
    },
    hit: function (areaIndex) {
        
        this.area[areaIndex] = false;

        if (this.typeId == BlockTypeId.Base1 && !this.gameUI.baseDestoryed) {
            this.typeId = BlockTypeId.Base2;
            this.sprite.setFrameSequence(BlockType[BlockTypeId.Base2].frameSequence);
            this.sprite.moveToFrame(0);
            this.gameUI.baseDestoryed = true;
            this.gameUI.baseBomb.boom(5 * 32 + 16, 11 * 32 + 16);
            return;
        }

        if (this.typeId == BlockTypeId.Base2) {
            return;
        }

        if (!this.area[0] && !this.area[1] && !this.area[2] && !this.area[3]) {
            this.sprite.hide();
            return;
        }

        if (this.typeId == BlockTypeId.Brick || this.typeId == BlockTypeId.Iron) {
            var index = BlockType[this.typeId].frameSequence[0] + this.area[0] * 1 + this.area[1] * 2 + this.area[2] * 4 + this.area[3] * 8 - 1;
            this.sprite.setFrameSequence([index]);
            this.sprite.moveToFrame(0);
        }
    },
    update: function () {
        this.sprite.moveToNextFrame();
    }
});