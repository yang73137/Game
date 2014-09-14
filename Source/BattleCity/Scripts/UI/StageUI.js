StageUI = ClassFactory.createClass(UIBase, {
    init: function () {
        UIBase.init.call(this);

        this.stage = 1;
        this.stageChangedEnabled = true;
        this.counter = new Counter(120, false, true);
        
        this.setSize(Const.SCREEN_WIDTH, Const.SCREEN_HEIGHT);
        this.setPosition(0, 0);
        this.setZ(Const.Z_UI);
        this.setBackground("#7F7F7F");

        this.stageLabel = new Label("STAGE  " + this.stage);
        this.stageLabel.setColor("#000");
        this.stageLabel.setSize(150, 30);
        this.stageLabel.moveTo((this.width - this.stageLabel.width) / 2, (this.height - this.stageLabel.height) / 2);
        this.stageLabel.show();

        this.append(this.stageLabel);
    },
    onEnter: function () {
        this.show();
    },
    onLevel: function () {
        this.hide();
    },
    onUpdate: function () {
        if (this.stageChangedEnabled) {
            if (Input.isPressed(InputAction.GAME_A)) {
                this.setStage(++this.stage);
            }
            if (Input.isPressed(InputAction.GAME_B)) {
                this.setStage(--this.stage);
            }
            if (Input.isPressed(InputAction.START)) {
                this.stageChangedEnabled = false;
                return false;
            }
        }
        else {
            if (!this.counter.countdown()) {
                return false;
            }
        }

        return true;
    },
    setStageChangedEnabled: function(enabled) {
        this.stageChangedEnabled = enabled;
    },
    setStage: function (stage) {
        if (stage < 1) {
            stage = Const.MAX_STAGE;
        }
        else if (stage > Const.MAX_STAGE) {
            stage = 1;
        }
        this.stage = stage;
        this.stageLabel.setText("STAGE  " + this.stage);
    }
});