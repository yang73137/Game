ScoreUI = ClassFactory.createClass(UIBase, {
    init: function () {
        UIBase.init.call(this);

        this.setSize(Const.SCREEN_WIDTH, Const.SCREEN_HEIGHT);
        this.setBackground("#000000");
        this.setPosition(0, 0);
        this.setZ(Const.Z_UI);

        this.highestScoreLabel = new Label("HI-SCORE");
        this.highestScoreLabel.setCSS({ "color": "#E05000" });
        this.highestScoreLabel.setPosition(132, 32);
        this.highestScoreLabel.show();
        this.append(this.highestScoreLabel);

        this.highestScoreNumberLabel = new Label("200000");
        this.highestScoreNumberLabel.setCSS({ "color": "#FFA000" });
        this.highestScoreNumberLabel.setPosition(308, 32);
        this.highestScoreNumberLabel.show();
        this.append(this.highestScoreNumberLabel);

        this.stageLabel = new Label("STAGE     " + this.stage);
        this.stageLabel.setCSS({ "color": "#ffffff" });
        this.stageLabel.setPosition(190, 64);
        this.stageLabel.show();
        this.append(this.stageLabel);

        this.player1Label = new Label("I-PLAYER");
        this.player1Label.setCSS({ "color": "#E05000" });
        this.player1Label.setSize(130, 32);
        this.player1Label.setAlign("right");
        this.player1Label.setPosition(50, 96);
        this.player1Label.show();
        this.append(this.player1Label);

        this.player1ScoreLabel = new Label("0");
        this.player1ScoreLabel.setCSS({ "color": "#FFA000" });
        this.player1ScoreLabel.setSize(130, 32);
        this.player1ScoreLabel.setAlign("right");
        this.player1ScoreLabel.setPosition(50, 128);
        this.player1ScoreLabel.show();
        this.append(this.player1ScoreLabel);

        this.enemy1ScoreLabel = new Label("0  PTS");
        this.enemy1ScoreLabel.setCSS({ "color": "#ffffff" });
        this.enemy1ScoreLabel.setSize(130, 32);
        this.enemy1ScoreLabel.setAlign("right");
        this.enemy1ScoreLabel.setPosition(50, 172);
        this.enemy1ScoreLabel.show();
        this.append(this.enemy1ScoreLabel);

        this.enemy1NumberLabel = new Label("0");
        this.enemy1NumberLabel.setCSS({ "color": "#ffffff" });
        this.enemy1NumberLabel.setSize(32, 32);
        this.enemy1NumberLabel.setAlign("right");
        this.enemy1NumberLabel.setPosition(190, 172);
        this.enemy1NumberLabel.show();
        this.append(this.enemy1NumberLabel);

        this.enemy1ArrowLayer = new Layer();
        this.enemy1ArrowLayer.setSize(16, 16);
        this.enemy1ArrowLayer.setBackground("url(" + Const.IMAGE_MISC.src + ") -96px 0px");
        this.enemy1ArrowLayer.setPosition(225, 180);
        this.enemy1ArrowLayer.show();
        this.append(this.enemy1ArrowLayer);

        this.enemy1Layer = new Layer();
        this.enemy1Layer.setSize(32, 32);
        this.enemy1Layer.setBackground("url(" + Const.IMAGE_TANK.src + ") -128px 0px");
        this.enemy1Layer.setPosition(242, 172);
        this.enemy1Layer.show();
        this.append(this.enemy1Layer);

        this.enemy2ScoreLabel = new Label("0  PTS");
        this.enemy2ScoreLabel.setCSS({ "color": "#ffffff" });
        this.enemy2ScoreLabel.setSize(130, 32);
        this.enemy2ScoreLabel.setAlign("right");
        this.enemy2ScoreLabel.setPosition(50, 220);
        this.enemy2ScoreLabel.show();
        this.append(this.enemy2ScoreLabel);

        this.enemy2NumberLabel = new Label("0");
        this.enemy2NumberLabel.setCSS({ "color": "#ffffff" });
        this.enemy2NumberLabel.setSize(32, 32);
        this.enemy2NumberLabel.setAlign("right");
        this.enemy2NumberLabel.setPosition(190, 220);
        this.enemy2NumberLabel.show();
        this.append(this.enemy2NumberLabel);

        this.enemy2ArrowLayer = new Layer();
        this.enemy2ArrowLayer.setSize(16, 16);
        this.enemy2ArrowLayer.setBackground("url(" + Const.IMAGE_MISC.src + ") -96px 0px");
        this.enemy2ArrowLayer.setPosition(225, 228);
        this.enemy2ArrowLayer.show();
        this.append(this.enemy2ArrowLayer);

        this.enemy2Layer = new Layer();
        this.enemy2Layer.setSize(32, 32);
        this.enemy2Layer.setBackground("url(" + Const.IMAGE_TANK.src + ") -192px 0px");
        this.enemy2Layer.setPosition(242, 220);
        this.enemy2Layer.show();
        this.append(this.enemy2Layer);

        this.enemy3ScoreLabel = new Label("0  PTS");
        this.enemy3ScoreLabel.setCSS({ "color": "#ffffff" });
        this.enemy3ScoreLabel.setSize(130, 32);
        this.enemy3ScoreLabel.setAlign("right");
        this.enemy3ScoreLabel.setPosition(50, 268);
        this.enemy3ScoreLabel.show();
        this.append(this.enemy3ScoreLabel);

        this.enemy3NumberLabel = new Label("0");
        this.enemy3NumberLabel.setCSS({ "color": "#ffffff" });
        this.enemy3NumberLabel.setSize(32, 32);
        this.enemy3NumberLabel.setAlign("right");
        this.enemy3NumberLabel.setPosition(190, 268);
        this.enemy3NumberLabel.show();
        this.append(this.enemy3NumberLabel);

        this.enemy3ArrowLayer = new Layer();
        this.enemy3ArrowLayer.setSize(16, 16);
        this.enemy3ArrowLayer.setBackground("url(" + Const.IMAGE_MISC.src + ") -96px 0px");
        this.enemy3ArrowLayer.setPosition(225, 276);
        this.enemy3ArrowLayer.show();
        this.append(this.enemy3ArrowLayer);

        this.enemy3Layer = new Layer();
        this.enemy3Layer.setSize(32, 32);
        this.enemy3Layer.setBackground("url(" + Const.IMAGE_TANK.src + ") -256px 0px");
        this.enemy3Layer.setPosition(242, 268);
        this.enemy3Layer.show();
        this.append(this.enemy3Layer);

        this.enemy4ScoreLabel = new Label("0  PTS");
        this.enemy4ScoreLabel.setCSS({ "color": "#ffffff" });
        this.enemy4ScoreLabel.setSize(130, 32);
        this.enemy4ScoreLabel.setAlign("right");
        this.enemy4ScoreLabel.setPosition(50, 316);
        this.enemy4ScoreLabel.show();
        this.append(this.enemy4ScoreLabel);

        this.enemy4NumberLabel = new Label("0");
        this.enemy4NumberLabel.setCSS({ "color": "#ffffff" });
        this.enemy4NumberLabel.setSize(32, 32);
        this.enemy4NumberLabel.setAlign("right");
        this.enemy4NumberLabel.setPosition(190, 316);
        this.enemy4NumberLabel.show();
        this.append(this.enemy4NumberLabel);

        this.enemy4ArrowLayer = new Layer();
        this.enemy4ArrowLayer.setSize(16, 16);
        this.enemy4ArrowLayer.setBackground("url(" + Const.IMAGE_MISC.src + ") -96px 0px");
        this.enemy4ArrowLayer.setPosition(225, 324);
        this.enemy4ArrowLayer.show();
        this.append(this.enemy4ArrowLayer);

        this.enemy4Layer = new Layer();
        this.enemy4Layer.setSize(32, 32);
        this.enemy4Layer.setBackground("url(" + Const.IMAGE_TANK.src + ") -320px 0px");
        this.enemy4Layer.setPosition(242, 316);
        this.enemy4Layer.show();
        this.append(this.enemy4Layer);

        this.underlineLayer = new Layer();
        this.underlineLayer.setSize(130, 3);
        this.underlineLayer.setBackground("#ffffff");
        this.underlineLayer.setPosition(190, 350);
        this.underlineLayer.show();
        this.append(this.underlineLayer);

        this.totalLabel = new Label("TOTAL");
        this.totalLabel.setCSS({ "color": "#ffffff" });
        this.totalLabel.setSize(130, 32);
        this.totalLabel.setAlign("right");
        this.totalLabel.setPosition(50, 352);
        this.totalLabel.show();
        this.append(this.totalLabel);

        this.totalNumberLabel = new Label("0");
        this.totalNumberLabel.setCSS({ "color": "#ffffff" });
        this.totalNumberLabel.setSize(32, 32);
        this.totalNumberLabel.setAlign("right");
        this.totalNumberLabel.setPosition(190, 352);
        this.totalNumberLabel.show();
        this.append(this.totalNumberLabel);

        // 计数器
        this.counter = new Counter(180, false, true);
        this.delayCounter = new Counter(12, false, true);

        this.highestScore = 0;
        this.player1Score = 0;
        this.stage = 0;
        this.enemy1Number = 0;
        this.enemy1NumberIndex = 0;
        this.enemy2Number = 0;
        this.enemy2NumberIndex = 0;
        this.enemy3Number = 0;
        this.enemy3NumberIndex = 0;
        this.enemy4Number = 0;
        this.enemy4NumberIndex = 0;
    },
    onEnter: function () {
        this.highestScoreNumberLabel.setText(this.highestScore);
        this.player1ScoreLabel.setText(this.player1Score);
        this.stageLabel.setText("STAGE     " + this.stage);
        this.enemy1NumberLabel.setText(0);
        this.enemy1NumberIndex = 0;
        
        this.enemy1ScoreLabel.setText("0  PTS");
        this.enemy2NumberLabel.setText(0);
        this.enemy2ScoreLabel.setText("0  PTS");
        this.enemy2NumberIndex = 0;

        this.enemy3NumberLabel.setText(0);
        this.enemy3ScoreLabel.setText("0  PTS");
        this.enemy3NumberIndex = 0;

        this.enemy4NumberLabel.setText(0);
        this.enemy4ScoreLabel.setText("0  PTS");
        this.totalNumberLabel.setText(0);
        this.enemy4NumberIndex = 0;


        this.show();
    },
    onLevel: function () {
        this.hide();
    },
    onUpdate: function () {
        if (this.enemy1NumberIndex <= this.enemy1Number) {
            if (!this.delayCounter.countdown()) {
                this.enemy1NumberLabel.setText(this.enemy1NumberIndex);
                this.enemy1ScoreLabel.setText(this.enemy1NumberIndex * 100 + "  PTS");

                this.enemy1NumberIndex++;
            }
            return true;
        }
        else if (this.enemy2NumberIndex <= this.enemy2Number) {
            if (!this.delayCounter.countdown()) {
                this.enemy2NumberLabel.setText(this.enemy2NumberIndex);
                this.enemy2ScoreLabel.setText(this.enemy2NumberIndex * 200 + "  PTS");

                this.enemy2NumberIndex++;
            }
            return true;
        }
        else if (this.enemy3NumberIndex <= this.enemy3Number) {
            if (!this.delayCounter.countdown()) {
                this.enemy3NumberLabel.setText(this.enemy3NumberIndex);
                this.enemy3ScoreLabel.setText(this.enemy3NumberIndex * 300 + "  PTS");

                this.enemy3NumberIndex++;
            }
            return true;
        }
        else if (this.enemy4NumberIndex <= this.enemy4Number) {
            if (!this.delayCounter.countdown()) {
                this.enemy4NumberLabel.setText(this.enemy4NumberIndex);
                this.enemy4ScoreLabel.setText(this.enemy4NumberIndex * 400 + "  PTS");

                this.enemy4NumberIndex++;
            }
            return true;
        }
        else if (!this.delayCounter.countdown()) {
            var total = this.enemy1Number + this.enemy2Number + this.enemy3Number + this.enemy4Number;
            this.totalNumberLabel.setText(total);
            return true;
        }
        if (!this.counter.countdown()) {
            return false;
        }
        return true;
    },
    setData: function (stage, player1Score, enemy1Number, enemy2Number, enemy3Number, enemy4Number) {
        this.highestScore = Math.max(Const.MAX_SCORE, player1Score);
        this.stage = stage;
        this.player1Score = player1Score;
        this.enemy1Number = enemy1Number;
        this.enemy2Number = enemy2Number;
        this.enemy3Number = enemy3Number;
        this.enemy4Number = enemy4Number;
    }
});