
TankState = {
    NONE: 0,
    BIRTH: 1,
    LIVE: 2,
    BOOM: 3,
    SCORE: 4,
    RESET: 5
};

Tank = ClassFactory.createClass(GameObject, {
    init: function (team) {

        GameObject.init.call(this);

        // 队伍
        this.team = team;

        // 状态机
        this.state = TankState.NONE;

        // 坦克图标
        this.icon = 0;

        // 轮子状态 (0 -> 1 -> 0)
        this.wheel = 0;

        // 类型
        this.type = 0;

        // 生命值
        this.health = 1;

        // 移动速度				
        this.speed = 0;

        // 当前方向				
        this.direction = -1;

        // 子弹数组
        this.bullets = [];

        // 最大子弹数	
        this.bulletMax = 1;

        // 坦克精灵
        this.sprite = new Sprite(Const.IMAGE_TANK, 32, 32);
        this.sprite.setZ(Const.Z_TANK);

        // 被击中爆炸
        this.baseBomb = new Bomb(true);

        // 开火计时器
        this.fireCounter = new Counter(30, false, true);
        this.fireCounter.setEnabled(false);
        
        // 得分计数器
        this.scoreCounter = new Counter(30, false, true);

        this.onIce = false;
        this.iceCounter = new Counter(15, false, true);
        this.moving = false;
    },
    setType: function (type) {
        this.type = type;
    },
    setBullets: function (max, speed, power) {
        for (var i = 0; i < max; i++) {
            var bullet = this.bullets[i];

            if (!bullet) {
                bullet = this.bullets[i] = new Bullet(this.team);
                if (this.gameUI) {
                    bullet.addToGameUI(this.gameUI);
                }
            }

            bullet.speed = speed;
            bullet.power = power;
        }

        this.bulletMax = max;
    },
    birth: function (x, y, type, direction) {
        this.sprite.hide();
        this.setType(type);
        this.state = TankState.BIRTH;
        this.sprite.setRepeat(1);
        this.sprite.setFrameCounter(3);
        this.sprite.setFrameSequence([112, 113, 114, 115, 114, 113, 112, 113, 114, 115, 112, 113, 114, 115]);
        this.sprite.moveTo(x, y);
        this.direction = direction;
        this.sprite.start();
    },
    fire: function () {
        for (var i = 0; i < this.bulletMax; i++) {
            if (this.bullets[i].isIdle()) {
                this.bullets[i].shot(this.sprite.x, this.sprite.y, this.direction);
                break;
            }
        }
    },
    move: function () {
        this.onIce = false;
        
        var oldX = this.sprite.x;
        var oldY = this.sprite.y;
        
        if (this.direction == Const.DIRECTION_UP) {
            this.sprite.setY(Math.max(this.sprite.y - this.speed, 0));
        }
        else if (this.direction == Const.DIRECTION_RIGHT) {
            if (this.sprite.x + this.sprite.width + this.speed <= this.gameUI.gameArea.width) {
                this.sprite.setX(this.sprite.x + this.speed);
            }
            else {
                this.sprite.setX(416 - this.sprite.width);
            }
        }
        else if (this.direction == Const.DIRECTION_DOWN) {
            if (this.sprite.y + this.sprite.height + this.speed <= this.gameUI.gameArea.height) {
                this.sprite.setY(this.sprite.y + this.speed);
            } else {
                this.sprite.setY(416 - this.sprite.height);
            }
        }
        else if (this.direction == Const.DIRECTION_LEFT) {
            this.sprite.setX(Math.max(this.sprite.x - this.speed, 0));
        }

        this.wheel = +!this.wheel;
        
        
        //检测和其他坦克碰撞
        for (var j = 0; j < this.gameUI.tanks.length; j++) {
            var tank = this.gameUI.tanks[j];

            if (this == tank || tank.state != TankState.LIVE) {
                continue;
            }
            if (this.sprite.collidesWith(tank.sprite)) {
                if (this.direction == Const.DIRECTION_UP && this.sprite.y - tank.sprite.y >= (this.sprite.height - this.speed)) {
                    this.sprite.setY(tank.sprite.y + tank.sprite.height);
                } else if (this.direction == Const.DIRECTION_RIGHT && tank.sprite.x - this.sprite.x >= (this.sprite.width - this.speed)) {
                    this.sprite.setX(tank.sprite.x - this.sprite.width);
                } else if (this.direction == Const.DIRECTION_DOWN && tank.sprite.y - this.sprite.y >= (this.sprite.height - this.speed)) {
                    this.sprite.setY(tank.sprite.y - this.sprite.height);
                } else if (this.direction == Const.DIRECTION_LEFT && this.sprite.x - tank.sprite.x >= (this.sprite.width - this.speed)) {
                    this.sprite.setX(tank.sprite.x + tank.sprite.width);
                }
                
                break;
            }
        }

        // 检测和静态block的碰撞
        var x1 = -1;
        var x2 = -1;
        var x3 = -1;
        var y1 = -1;
        var y2 = -1;
        var y3 = -1;

        if (this.direction == Const.DIRECTION_UP) {
            x1 = Math.floor(this.sprite.x / 16);
            y1 = Math.floor(this.sprite.y / 16);
            x2 = x1 + 1;
            y2 = y1;

            if (this.sprite.x % 16 != 0) {
                x3 = x2 + 1;
                y3 = y2;
            }
        }
        else if (this.direction == Const.DIRECTION_RIGHT) {
            x1 = Math.floor((this.sprite.x + this.sprite.width) / 16);
            y1 = Math.floor(this.sprite.y / 16);
            x2 = x1;
            y2 = y1 + 1;

            if (this.sprite.y % 16 != 0) {
                x3 = x2;
                y3 = y2 + 1;
            }
        }
        else if (this.direction == Const.DIRECTION_DOWN) {
            x1 = Math.floor(this.sprite.x / 16);
            y1 = Math.floor((this.sprite.y + this.sprite.height) / 16);
            x2 = x1 + 1;
            y2 = y1;

            if (this.sprite.x % 16 != 0) {
                x3 = x2 + 1;
                y3 = y2;
            }
        }
        else if (this.direction == Const.DIRECTION_LEFT) {
            x1 = Math.floor(this.sprite.x / 16);
            y1 = Math.floor(this.sprite.y / 16);
            x2 = x1;
            y2 = y1 + 1;

            if (this.sprite.y % 16 != 0) {
                x3 = x2;
                y3 = y2 + 1;
            }
        }

        var block1 = (x1 >= 0 && y1 >= 0 && x1 < 26 && y1 < 26) ? this.gameUI.block16x16[x1][y1] : null;
        var block2 = (x2 >= 0 && y2 >= 0 && x2 < 26 && y2 < 26) ? this.gameUI.block16x16[x2][y2] : null;
        var block3 = (x3 >= 0 && y3 >= 0 && x3 < 26 && y3 < 26) ? this.gameUI.block16x16[x3][y3] : null;
        
        if (block1 && block1.typeId == BlockTypeId.Ice || block2 && block2.typeId == BlockTypeId.Ice || block3 && block3.typeId == BlockTypeId.Ice) {
            this.onIce = true;
        }

        if ((block1 && block1.typeId != BlockTypeId.Grass && block1.typeId != BlockTypeId.Ice) || (block2 && block2.typeId != BlockTypeId.Grass && block2.typeId != BlockTypeId.Ice) || (block3 && block3.typeId != BlockTypeId.Grass && block3.typeId != BlockTypeId.Ice)) {
            //检测和其他坦克碰撞
            this.sprite.setX(Math.round(oldX / 16) * 16);
            this.sprite.setY(Math.round(oldY / 16) * 16);
            for (var j = 0; j < this.gameUI.tanks.length; j++) {
                var tank = this.gameUI.tanks[j];

                if (this == tank || tank.state != TankState.LIVE) {
                    continue;
                }
                if (this.sprite.collidesWith(tank.sprite)) {
                    this.sprite.setX(oldX);
                    this.sprite.setY(oldY);
                    break;
                }
            }
        }

        // 检测Bonus
        if (this.team == 0 && this.sprite.collidesWith(this.gameUI.bonus.sprite) && this.gameUI.bonus.flashCounter.enabled) {
            this.gameUI.bonus.take();
        }
    },
    hit: function () {
    },
    boom: function () {
        this.sprite.hide();
        this.baseBomb.boom(this.sprite.x - 16, this.sprite.y - 16);
        this.state = TankState.BOOM;
        if (this.team == 1) {
            this.gameUI.addScore((this.type + 1) * 100);
        }
    },
    onBirth: function () {
        this.sprite.setFrameCounter(0);
    },
    onLive: function () { },
    update: function () {
        for (var i = 0; i < this.bullets.length; i++) {
            var bullet = this.bullets[i];
            if (!bullet.isIdle()) {
                bullet.update();
            }
            this.bullets[i].update();
        }

        switch (this.state) {
            case TankState.NONE:
                break;
            case TankState.BIRTH:

                if (this.sprite.moveToNextFrame()) {
                    return;
                }
                this.sprite.restoreFrameSequence();
                this.sprite.setVisible(true);
                this.state = TankState.LIVE;
                
                this.onBirth();
                break;
            case TankState.LIVE:
                this.onLive();

                break;
            case TankState.BOOM:
                if (!this.baseBomb.update()) {
                    if (this.team == 0) {
                        this.state = TankState.NONE;
                    } else {
                        this.state = TankState.SCORE;
                        this.sprite.moveToFrame(116 + this.type);
                        this.sprite.setZ(Const.Z_SCORE);
                        this.sprite.show();
                    }
                }
                break;
            case TankState.SCORE:
                if (this.scoreCounter.enabled && !this.scoreCounter.countdown()) {
                    this.sprite.hide();
                    this.state = TankState.RESET;
                }
                break;
            case TankState.RESET:
                this.sprite.hide();
                this.sprite.setZ(Const.Z_TANK);
                this.state = TankState.NONE;
                break;
        }
    },
    addToGameUI: function (gameUI) {
        GameObject.prototype.addToGameUI.call(this, gameUI);
        gameUI.gameArea.append(this.sprite);
        gameUI.gameArea.append(this.bulletProofSprite);
        for (var i = 0; i < this.bulletMax; i++) {
            var bullet = this.bullets[i];
            if (bullet) {
                bullet.addToGameUI(gameUI);
            }
        }
        this.baseBomb.addToGameUI(gameUI);
    }
});

PlayerTank = ClassFactory.createClass(Tank, {
    init: function (team) {
        Tank.init.call(this, team);
        // 生命数
        this.life = 0;
        
        // 防弹效果
        this.bulletProofSprite = new Sprite(Const.IMAGE_MISC, 32, 32, [11, 12]);
        this.bulletProofSprite.setRepeat(0);
        this.bulletProofTime = 0;
        
        this.scoreCounter.setEnabled(false);
    },
    setType: function (type) {

        Tank.prototype.setType.call(this, type);

        this.icon = 0;
        this.speed = 1.5;

        switch (type) {
            case 0: // 普通
                this.health = 1;
                this.fireCounter.setCount(13);
                this.setBullets(1, 2, false);
                break;

            case 1: // 快速
                this.health = 2;
                this.fireCounter.setCount(11);
                this.setBullets(1, 3, false);
                break;

            case 2: // 连发
                this.health = 3;
                this.fireCounter.setCount(7);
                this.setBullets(2, 3, false);
                break;

            case 3: // 威力
                this.health = 4;
                this.fireCounter.setCount(7);
                this.setBullets(2, 3, true);
                break;
        }
    },
    setBulletProofTime: function (time) {
        this.bulletProofTime = time;
    },
    onBirth: function () {
        this.setBulletProofTime(Const.TIME_BULPRF_DEF);
        this.bulletProofSprite.start();
    },
    onLive: function () {

        Tank.prototype.onLive.call(this);

        if (this.bulletProofTime-- > 0) {
            this.bulletProofSprite.moveTo(this.sprite.x, this.sprite.y);
            if (!this.bulletProofSprite.moveToNextFrame()) {
                this.bulletProofSprite.start();
            }
        }
        else {
            this.bulletProofSprite.reset();
        }

        this.sprite.moveToFrame(this.direction * 28 + this.wheel * 14 + this.icon + this.health - 1);

        if (this.gameUI.baseDestoryed) {
            return;
        }

        if (this.fireCounter.enabled && !this.fireCounter.countdown()) {
            this.fireCounter.setEnabled(false);
        }

        if (Input.isPressed(InputAction.GAME_A) || Input.isPressed(InputAction.GAME_C)) {
            if (!this.fireCounter.enabled) {
                this.fireCounter.setEnabled(true);
                this.fire();
            }
        }

        if (this.onIce && this.moving) {
            if (this.iceCounter.countdown()) {
                this.move();
                return;
            } else {
                this.move();
                this.moving = false;
            }
        }
        
        if (Input.isPressed(InputAction.UP)) {
            this.direction = Const.DIRECTION_UP;
            this.moving = true;
            this.move();
        }
        else if (Input.isPressed(InputAction.RIGHT)) {
            this.direction = Const.DIRECTION_RIGHT;
            this.moving = true;
            this.move();
        }
        else if (Input.isPressed(InputAction.DOWN)) {
            this.direction = Const.DIRECTION_DOWN;
            this.moving = true;
            this.move();
        }
        else if (Input.isPressed(InputAction.LEFT)) {
            this.direction = Const.DIRECTION_LEFT;
            this.moving = true;
            this.move();
        }
        else {
            this.moving = false;
        }
    },
    levelUp: function () {
        var type = Math.min(3, this.gameUI.player.type + 1);
        this.setType(type);
    },
    hit: function () {
        if (this.state == TankState.LIVE) {
            if (this.bulletProofTime > 0) {
                return;
            }

            if (--this.health == 0) {
                this.boom();
            }
            else {
                this.setType(this.health - 1);
            }
        }
    }
});

EnemyTank = ClassFactory.createClass(Tank, {
    init: function (team) {
        Tank.init.call(this, team);
        this.hasBonus = false;
        this.birthCounter = new Counter(30, false, true);
        this.birthCounter.setEnabled(false);
        this.moveCounter = new Counter(40, true, true);
        this.flashRedCounter = new Counter(8, false, true);
        this.flashRed = false;
    },
    setBonus: function (value) {
        this.hasBonus = value;
    },
    setType: function (type) {
        Tank.prototype.setType.call(this, type);
        this.speed = 1;
        switch (type) {
            case 0:		// 普通型
                this.icon = 4;
                this.health = 1;
                this.setBullets(1, 2, false);
                break;

            case 1:		// 灵活型
                this.icon = 6;
                this.speed = 2;
                this.health = 1;
                this.setBullets(1, 2, false);
                break;

            case 2:		// 威力型
                this.icon = 8;
                this.health = 1;
                this.setBullets(1, 3, false);
                break;

            case 3:		// 加强型
                this.icon = 10;
                this.health = 4;
                this.setBullets(1, 2, false);
                break;
        }

    },
    onBirth: function () {
        this.birthCounter.setEnabled(true);
    },
    onLive: function () {

        Tank.prototype.onLive.call(this);

        if (this.hasBonus && !this.flashRedCounter.countdown()) {
            this.flashRed = !this.flashRed;
        }
        
        if (this.type == 3) {
            switch (this.health) {
                case 1:
                    this.icon = (this.hasBonus && this.flashRed) ? 11 : 10;
                    break;
                case 2:
                    this.icon = (this.hasBonus && this.flashRed) ? 11 : 13;
                    break;
                case 3:
                    this.icon = (this.hasBonus && this.flashRed) ? 11 : 13;
                    break;
                case 4:
                    this.icon = (this.hasBonus && this.flashRed) ? 11 : 12;
                    break;
            }
            this.sprite.moveToFrame(this.direction * 28 + this.wheel * 14 + this.icon);
        }
        else {
            this.sprite.moveToFrame(this.direction * 28 + this.wheel * 14 + this.icon + this.health - 1 + ((this.hasBonus && this.flashRed) ? 1 : 0));
        }

        // 出生后停止一段时间
        if (this.birthCounter.enabled && this.birthCounter.countdown()) {
            return;
        }
        else {
            this.birthCounter.setEnabled(false); 
        }
        
        // 停止活动一段时间
        var stopCounter = this.gameUI.stopCounter;
        
        if (stopCounter.enabled) {
            if (stopCounter.currentCount <= 120 && stopCounter.currentCount % 8 == 0) {
                this.sprite.style.display = this.sprite.style.display == "block" ? "none" : "block";
            }
            return;
        }
        else {
            this.sprite.setVisible(true);
        }

        // 一段时间后改变移动方向
        if (!this.moveCounter.countdown()) {
            var direction = Math.round(Math.random() * 3);
            this.direction = direction;
        }

        this.move();

        // 随机发射一枚子弹
        if (!(this.fireCounter.enabled && this.fireCounter.countdown())) {
            var flag = Math.round(Math.random());
            if (flag) {
                this.fire();
                this.fireCounter.setEnabled(true);
            }
        }
    },
    hit: function () {
        if (this.state == TankState.LIVE) {
            if (this.hasBonus) {
                this.gameUI.bonus.random();
                this.setBonus(false);
            }
            if (--this.health == 0) {
                this.boom();
            }
        }
    }
});