
BullState =
{
    NONE: 0,
    FIRE: 1,
    BOOM: 2,
    RESET: 3
};

HitState =
{
    NONE: 0,
    HIT: 1,
    MISS: 2
};

Bullet = ClassFactory.createClass(GameObject, {
    init: function (team) {

        GameObject.init.call(this);

        // 状态机
        this.state = BullState.NONE;

        // 子弹所属的队伍
        this.team = team;

        // 子弹精灵
        this.sprite = new Sprite(Const.IMAGE_MISC, 8, 8, [Const.DIRECTION_UP, Const.DIRECTION_RIGHT, Const.DIRECTION_DOWN, Const.DIRECTION_LEFT]);
        this.sprite.setZ(Const.Z_BULL);

        // 爆炸
        this.baseBomb = new Bomb(false);

        // 速度
        this.speed = 2;
        // 是否为加强型子弹
        this.power = false;
        // 子弹方向
        this.direction = Const.DIRECTION_UP;
    },
    isIdle: function () {
        return this.state == BullState.NONE;
    },
    shot: function (x, y, dir) {
        // 调整子弹到坦克前方的位置
        switch (dir) {
            case Const.DIRECTION_UP:		//上
                x += 12;
                y -= 8;
                break;
            case Const.DIRECTION_RIGHT:		//右
                x += 32;
                y += 12;
                break;
            case Const.DIRECTION_DOWN:		//下
                x += 12;
                y += 32;
                break;
            case Const.DIRECTION_LEFT:		//左
                x -= 8;
                y += 12;
                break;
        }

        this.sprite.moveTo(x, y);
        this.sprite.moveToFrame(dir);
        this.sprite.show();

        this.direction = dir;
        this.state = BullState.FIRE;
    },
    reset: function () {
        this.sprite.hide();
        this.state = BullState.NONE;
    },
    update: function () {
        switch (this.state) {
            case BullState.NONE:
                break;
            case BullState.FIRE:
                switch (this.move()) {
                    case HitState.HIT:
                        this.sprite.hide();
                        this.baseBomb.boom(this.sprite.x - 32, this.sprite.y - 32);
                        this.state = BullState.BOOM;
                        break;
                    case HitState.MISS:
                        this.state = BullState.RESET;
                        return;
                }
                break;
            case BullState.BOOM:
                if (!this.baseBomb.update()) {
                    this.state = BullState.RESET;
                }
                break;
            case BullState.RESET:
                this.reset();
                break;
        }
    },
    move: function () {
        for (var i = 0; i < this.speed; i++) {
            switch (this.direction) {
                case Const.DIRECTION_UP:
                    this.sprite.y -= 1;
                    if (this.sprite.y <= 0) {
                        this.baseBomb.boom(this.sprite.x - 28, -32);
                        return HitState.HIT;
                    }
                    break;
                case Const.DIRECTION_RIGHT:
                    this.sprite.x += 1;
                    if (this.sprite.x + this.sprite.width >= this.gameUI.gameArea.width) {
                        this.baseBomb.boom(416 - 32, this.sprite.y - 28);
                        return HitState.HIT;
                    }
                    break;
                case Const.DIRECTION_DOWN:
                    this.sprite.y += 1;
                    if (this.sprite.y + this.sprite.height >= 416) {
                        this.baseBomb.boom(this.sprite.x - 28, this.gameUI.gameArea.height - 32);
                        return HitState.HIT;
                    }
                    break;
                case Const.DIRECTION_LEFT:
                    this.sprite.x -= 1;
                    if (this.sprite.x <= 0) {
                        this.baseBomb.boom(-32, this.sprite.y - 28);
                        return HitState.HIT;
                    }
                    break;
            }

            //检测和坦克碰撞
            for (var j = 0; j < this.gameUI.tanks.length; j++) {
                var tank = this.gameUI.tanks[j];

                if (this.team == tank.team || tank.state != TankState.LIVE) {
                    continue;
                }

                if (this.sprite.collidesWith(tank.sprite)) {
                    tank.hit();
                    return HitState.MISS;
                }

                for (var k = 0; k < tank.bulletMax; k++) {
                    var bullet = tank.bullets[k];

                    if (bullet.state == BullState.FIRE) {
                        if (bullet.sprite.collidesWith(this.sprite)) {
                            // 对家的子弹也消失
                            bullet.state = BullState.RESET;
                            return HitState.MISS;
                        }
                    }
                }
            }

            // 检测和静态block的碰撞
            var x1 = -1;
            var x2 = -1;
            var y1 = -1;
            var y2 = -1;

            if (this.direction == Const.DIRECTION_UP) {
                x1 = Math.floor(this.sprite.x / 16);
                x2 = Math.floor((this.sprite.x + this.sprite.width) / 16);
                y1 = Math.floor(this.sprite.y / 16);
                y2 = y1;
            }
            else if (this.direction == Const.DIRECTION_RIGHT) {
                x1 = Math.floor((this.sprite.x + this.sprite.width) / 16);
                x2 = x1;
                y1 = Math.floor(this.sprite.y / 16);
                y2 = Math.floor((this.sprite.y + this.sprite.height) / 16);
            }
            else if (this.direction == Const.DIRECTION_DOWN) {
                x1 = Math.floor(this.sprite.x / 16);
                x2 = Math.floor((this.sprite.x + this.sprite.width) / 16);
                y1 = Math.floor((this.sprite.y + this.sprite.height) / 16);
                y2 = y1;
            }
            else if (this.direction == Const.DIRECTION_LEFT) {
                x1 = Math.floor(this.sprite.x / 16);
                x2 = x1;
                y1 = Math.floor(this.sprite.y / 16);
                y2 = Math.floor((this.sprite.y + this.sprite.height) / 16);
            }

            var block1 = (x1 < 26 && y1 < 26) ? this.gameUI.block16x16[x1][y1] : null;
            var block2 = (x2 < 26 && y2 < 26) ? this.gameUI.block16x16[x2][y2] : null;

            var hit = false;

            if (block1 && (block1.typeId == BlockTypeId.Brick || block1.typeId == BlockTypeId.Iron || block1.typeId == BlockTypeId.Base1)) {
                if (block1.typeId == BlockTypeId.Iron && !this.power) {
                    hit = true;
                }
                else {
                    block1.block.hit(block1.areaIndex);
                    this.gameUI.block16x16[x1][y1] = null;
                    hit = true;
                }
            }
            if (block2 && (block2.typeId == BlockTypeId.Brick || block2.typeId == BlockTypeId.Iron || block2.typeId == BlockTypeId.Base1)) {
                if (block2.typeId == BlockTypeId.Iron && !this.power) {
                    hit = true;
                } else {
                    block2.block.hit(block2.areaIndex);
                    this.gameUI.block16x16[x2][y2] = null;
                    hit = true;
                }
            }

            if (hit) {
                return HitState.HIT;
            }

            // 更新子弹位置
            this.sprite.moveTo(this.sprite.x, this.sprite.y);
        }
    },
    addToGameUI: function (gameUI) {
        GameObject.prototype.addToGameUI.call(this, gameUI);
        gameUI.gameArea.append(this.sprite);
        this.baseBomb.addToGameUI(gameUI);
    }
});