
GameUI = ClassFactory.createClass(UIBase, {
    init: function () {
        UIBase.init.call(this);

        this.stage = 1;

        // 玩家
        this.player = new PlayerTank(0);

        // 块
        this.block32x32 = [];
        this.block16x16 = [];
        this.animateBlocks = [];

        // 坦克数组
        this.tanks = [];

        // 坦克类型数组
        this.tankTypes = [0, 0, 0, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 3, 1, 2, 0, 3, 1, 0];
        this.bonusArr = [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0];

        // 新建坦克索引
        this.birthIndex = 0;
        
        // 最大坦克数
        this.maxTank = 4;
        
        // 基地被摧毁
        this.baseDestoryed = false;
        
        // 基地闪烁
        this.baseFlash = true;

        // 基地炸弹
        this.baseBomb = new Bomb(true);
        
        // 奖励
        this.bonus = new Bonus();

        // 得分
        this.score = 0;
        
        // 计数器
        this.enemyBirthCounter = null;
        this.endCounter = new Counter(120, false, true);
        this.pauseCounter = new Counter(15, false, true);
        this.baseBombCounter = new Counter(30, false, false);
        this.baseProofCounter = new Counter(Const.TIME_WALL_IRON, false, true);
        this.stopCounter = new Counter(Const.TIME_STOP_BONUS, false, true);
        
        // 设置GameUI
        this.setSize(Const.SCREEN_WIDTH, Const.SCREEN_HEIGHT);
        this.setBackground("#7F7F7F");
        this.setPosition(0, 0);

        // 游戏区域
        this.gameArea = new Layer();
        this.gameArea.setSize(416, 416);
        this.gameArea.setPosition(30, (Const.SCREEN_HEIGHT - 416) / 2);
        this.gameArea.setBackground("#000000");
        this.gameArea.show();
        this.append(this.gameArea);

        // 暂停标签
        this.pauseLabel = new Label("PAUSE");
        this.pauseLabel.setColor("#E05000");
        this.pauseLabel.setZ(Const.Z_UI);
        this.pauseLabel.moveTo(196, 220);
        this.pauseLabel.hide();
        this.append(this.pauseLabel);
        
        // 状态区域
        this.statusArea = new Layer();
        this.statusArea.setSize(64, 448);
        this.statusArea.setPosition(450, 0);
        this.statusArea.show();
        this.append(this.statusArea);

        // 剩余坦克
        this.leftTankLayer = new Layer();
        this.leftTankLayer.setSize(32, 159);
        this.leftTankLayer.setPosition(15, 30);
        for (var i = 0; i < this.tankTypes.length; i++) {
            var layer = new Layer();
            layer.setBackground("url(" + Const.IMAGE_MISC.src + ") no-repeat 0px -16px");
            layer.setSize(16, 16);
            layer.setPosition(i % 2 * 16, parseInt(i / 2) * 16);
            layer.show();
            this.leftTankLayer.append(layer);
        }
        this.leftTankLayer.show();
        this.statusArea.append(this.leftTankLayer);

        // 玩家生命
        this.playerLabel = this.lifeLabel = new Label("IP");
        this.playerLabel.setColor("#000");
        this.playerLabel.setCSS({ "font-size": "22px" });
        this.playerLabel.setPosition(15, 240);
        this.playerLabel.show();
        this.statusArea.append(this.playerLabel);

        this.lifeLayer = new Layer();
        this.lifeLayer.setSize(18, 18);
        this.lifeLayer.setPosition(15, 270);
        this.lifeLayer.setBackground("url(" + Const.IMAGE_MISC.src + ") no-repeat -14px -18px");
        this.lifeLayer.show();
        this.statusArea.append(this.lifeLayer);

        this.lifeLabel = new Label("");
        this.lifeLabel.setColor("#000");
        this.lifeLabel.setCSS({ "font-size": "19px" });
        this.lifeLabel.setPosition(35, 263);
        this.lifeLabel.show();
        this.statusArea.append(this.lifeLabel);
        
        // 关数
        this.flagLayer = new Layer();
        this.flagLayer.setSize(32, 32);
        this.flagLayer.setPosition(15, 350);
        this.flagLayer.setBackground("url(" + Const.IMAGE_MISC.src + ") no-repeat -128px -0px");
        this.flagLayer.show();
        this.statusArea.append(this.flagLayer);

        this.stageLabel = new Label();
        this.stageLabel.setColor("#000");
        this.stageLabel.setCSS({ "font-size": "19px" });
        this.stageLabel.setPosition(25, 375);
        this.stageLabel.show();
        this.statusArea.append(this.stageLabel);

        // 结束标签
        this.gameOverLabel = new Label();
        this.gameOverLabel.setHTML("GAME<br/>OVER");
        this.gameOverLabel.setSize(72, this.height);
        this.gameOverLabel.setPosition(208, this.height);
        this.gameOverLabel.setZ(Const.Z_UI);
        this.gameOverLabel.setColor("#E05000");
        this.gameOverLabel.hide();
        this.append(this.gameOverLabel);
    },
    onEnter: function () {
        // 初始化
        if (this.isFailed()) {
            this.restart();
        }
        this.setStage(this.stage);
        this.birthIndex = 0;
        this.gameOverLabel.hide();
        this.player.bulletProofSprite.hide();
        
        this.enemyBirthCounter = new Counter(120, true, true);
        this.stopCounter.setEnabled(false);
        this.baseProofCounter.setEnabled(false);
        this.pauseCounter.setEnabled(false);

        this.gameArea.hide();
        this.gameArea.div.innerHTML = "";

        this.stageLabel.setText(this.stage);
        this.bonus.flashCounter.setEnabled(false);
        this.bonus.sprite.hide();
        this.bonus.addToGameUI(this);

        this.baseDestoryed = false;

        this.baseBomb.addToGameUI(this);

        this.player.state = TankState.RESET;
        this.player.birth(128, 384, this.player.type, Const.DIRECTION_UP);
        this.player.addToGameUI(this);

        this.tanks = [];
        this.tanks.push(this.player);

        for (var i = 0; i < this.tankTypes.length; i++) {
            this.leftTankLayer.div.childNodes[i].style.display = "block";
        }

        this.lifeLabel.setText(this.player.life - 1);

        this.updateLeftTank();

        this.createMap(this.stage);
        this.show();
    },
    onLevel: function () {
        this.hide();
    },
    onUpdate: function () {
        this.gameArea.show();
        this.bonus.update();

        if (this.stopCounter.enabled && !this.stopCounter.countdown()) {
            this.stopCounter.setEnabled(false);
        }

        for (var i = 0; i < this.animateBlocks.length; i++) {
            this.animateBlocks[i].update();
        }

        if (this.baseProofCounter.enabled) {
            if (!this.baseProofCounter.countdown()) {
                this.baseProofCounter.setEnabled(false);
                this.setBaseProof(false);
            } else {
                if (this.baseProofCounter.currentCount <= 240 && this.baseProofCounter.currentCount % 12 == 0) {
                    this.setBaseProof(this.baseFlash = !this.baseFlash);
                }
            }
        }

        if (Input.isPressed(17) && Input.isPressed(77)) {
            this.cheat();
        }

        var over = this.birthIndex == this.tankTypes.length;
        var liveTanks = 1;
        for (var i = 0; i < this.tanks.length; i++) {
            var tank = this.tanks[i];
            if (tank != this.player && tank.state != TankState.NONE) {
                over = false;
                liveTanks++;
            }
            if (!this.pauseCounter.enabled) {
                this.tanks[i].update();
            }
        }

        if (Input.isPressed(InputAction.START)) {
            this.pauseCounter.setEnabled(!this.pauseCounter.enabled);
        }

        if (over || this.isFailed()) {
            this.pauseCounter.setEnabled(false);
            this.pauseCounter.reset();
        }

        if (this.pauseCounter.enabled) {
            if (!this.pauseCounter.countdown()) {
                this.pauseLabel.setVisible(!this.pauseLabel.visible);
            }
            return true;
        }
        else {
            this.pauseLabel.hide();
        }

        if (this.player.state == TankState.NONE) {
            if (this.player.life > 1) {
                this.player.birth(128, 384, 0, Const.DIRECTION_UP);
            }

            this.player.life--;

            if (this.player.life >= 1) {
                this.lifeLabel.setText(this.player.life - 1);
            }
        }

        if (!over && liveTanks <= 4 && this.birthIndex < this.tankTypes.length) {
            var x = 192 * ((this.birthIndex + 1) % 3);
            if (!this.enemyBirthCounter.countdown()) {
                var newTank = new EnemyTank(1);
                newTank.setBonus(!!(this.bonusArr[this.birthIndex]));
                newTank.birth(x, 0, this.tankTypes[this.birthIndex], Const.DIRECTION_DOWN);
                newTank.addToGameUI(this);
                this.birthIndex++;
                this.tanks.push(newTank);
                this.updateLeftTank();
            }
        }

        if (this.baseDestoryed) {
            this.baseBomb.update();
        }

        if (this.isFailed()) {
            this.gameOverLabel.show();
            if (this.gameOverLabel.y > 180) {
                this.gameOverLabel.moveBy(0, -2);
                this.endCounter.reset();
            }
        }

        if ((over || this.isFailed()) && !this.endCounter.countdown()) {
            return false;
        }

        return true;
    },
    updateLeftTank: function () {
        for (var i = this.tankTypes.length; i > this.tankTypes.length - this.birthIndex; i--) {
            this.leftTankLayer.div.childNodes[i - 1].style.display = "none";
        }
    },
    createMap: function (stage) {

        this.clearBlock();

        var map = window["map" + stage];

        map += "6,12,6,15|";
        map += "5,11,1,8|";
        map += "5,12,1,10|";
        map += "6,11,1,12|";
        map += "7,11,1,4|";
        map += "7,12,1,5";

        var matrix = map.split("|");
        for (var i = 0; i < matrix.length; i++) {
            var arr = matrix[i].split(",");

            var x = +arr[0];
            var y = +arr[1];
            var typeId = +arr[2];
            var area = +arr[3];

            var block = new Block(typeId, 32 * x, 32 * y, area);

            block.addToGameUI(this);
            this.block32x32[x][y] = block;

            if ((area & 1) == 1) {
                this.block16x16[x * 2][y * 2] = { block: block, typeId: typeId, areaIndex: 0 };
            }
            if ((area & 2) == 2) {
                this.block16x16[x * 2 + 1][y * 2] = { block: block, typeId: typeId, areaIndex: 1 };
            }
            if ((area & 4) == 4) {
                this.block16x16[x * 2][y * 2 + 1] = { block: block, typeId: typeId, areaIndex: 2 };
            }
            if ((area & 8) == 8) {
                this.block16x16[x * 2 + 1][y * 2 + 1] = { block: block, typeId: typeId, areaIndex: 3 };
            }

            if (typeId == BlockTypeId.Water) {
                this.animateBlocks.push(block);
            }
        }
    },
    clearBlock: function () {

        this.animateBlocks = [];

        for (var x = 0; x < 13; x++) {
            this.block32x32[x] = [];
            for (var y = 0; y < 13; y++) {
                this.block32x32[x][y] = null;
            }
        }

        for (var x = 0; x < 26; x++) {
            this.block16x16[x] = [];
            for (var y = 0; y < 26; y++) {
                this.block16x16[x][y] = null;
            }
        }
    },
    activateBaseProof: function () {
        this.baseProofCounter.setEnabled(true);
        this.setBaseProof(true);
    },
    setBaseProof: function (isIron) {
        var type = isIron ? 2 : 1;
        var map = "";
        map += "5,11," + type + ",8|";
        map += "5,12," + type + ",10|";
        map += "6,11," + type + ",12|";
        map += "7,11," + type + ",4|";
        map += "7,12," + type + ",5";
        var matrix = map.split("|");
        for (var i = 0; i < matrix.length; i++) {
            var arr = matrix[i].split(",");
            var x = +arr[0];
            var y = +arr[1];
            var typeId = +arr[2];
            var area = +arr[3];
            this.block32x32[x][y].sprite.hide();
            var block = new Block(typeId, 32 * x, 32 * y, area);
            block.addToGameUI(this);
            this.block32x32[x][y] = block;

            if ((area & 1) == 1) {
                this.block16x16[x * 2][y * 2] = { block: block, typeId: typeId, areaIndex: 0 };
            }
            if ((area & 2) == 2) {
                this.block16x16[x * 2 + 1][y * 2] = { block: block, typeId: typeId, areaIndex: 1 };
            }
            if ((area & 4) == 4) {
                this.block16x16[x * 2][y * 2 + 1] = { block: block, typeId: typeId, areaIndex: 2 };
            }
            if ((area & 8) == 8) {
                this.block16x16[x * 2 + 1][y * 2 + 1] = { block: block, typeId: typeId, areaIndex: 3 };
            }
        }
    },
    cheat: function () {
        this.player.bulletProofTime = 99999999999;
        this.player.setType(3);

        var map = "";
        map += "5,11,2,8|";
        map += "5,12,2,10|";
        map += "6,11,2,12|";
        map += "7,11,2,4|";
        map += "7,12,2,5";
        var matrix = map.split("|");
        for (var i = 0; i < matrix.length; i++) {
            var arr = matrix[i].split(",");
            var x = +arr[0];
            var y = +arr[1];
            var typeId = +arr[2];
            var area = +arr[3];
            this.block32x32[x][y].sprite.hide();
            var block = new Block(typeId, 32 * x, 32 * y, area);
            block.addToGameUI(this);
            this.block32x32[x][y] = block;

            if ((area & 1) == 1) {
                this.block16x16[x * 2][y * 2] = { block: block, typeId: typeId, areaIndex: 0 };
            }
            if ((area & 2) == 2) {
                this.block16x16[x * 2 + 1][y * 2] = { block: block, typeId: typeId, areaIndex: 1 };
            }
            if ((area & 4) == 4) {
                this.block16x16[x * 2][y * 2 + 1] = { block: block, typeId: typeId, areaIndex: 2 };
            }
            if ((area & 8) == 8) {
                this.block16x16[x * 2 + 1][y * 2 + 1] = { block: block, typeId: typeId, areaIndex: 3 };
            }
        }
    },
    setStage: function (stage) {
        if (stage < 1) {
            stage = Const.maxStage;
        }
        else if (stage > Const.maxStage) {
            stage = 1;
        }
        this.stage = stage;
    },
    stop: function () {
        this.stopCounter.setEnabled(true);
    },
    isFailed: function () {
        return this.player.life <= 0 || this.baseDestoryed;
    },
    restart: function () {
        this.score = 0;
        this.player.life = 3;
        this.player.setType(0);
        this.gameOverLabel.setY(this.height);
    },
    addScore: function (score) {
        this.score += score;
    },
    getScoreData: function () {
        var scoreData = {
            stage: this.stage,
            player1Score: this.score,
            enemy1Number: 0,
            enemy2Number: 0,
            enemy3Number: 0,
            enemy4Number: 0,
        };
        for (var i = 0; i < this.birthIndex; i++) {
            var tank = this.tanks[i + 1];
            if (tank.state != TankState.LIVE && tank.state != TankState.BIRTH) {
                var type = this.tankTypes[i];
                scoreData["enemy" + (type + 1) + "Number"]++;
            }
        }
        return scoreData;
    }
});