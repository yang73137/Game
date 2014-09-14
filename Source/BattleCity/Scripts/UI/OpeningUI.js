OpeningUI = ClassFactory.createClass(UIBase, {
    init: function () {
        UIBase.init.call(this);

        this.setSize(Const.SCREEN_WIDTH, Const.SCREEN_HEIGHT);
        this.setBackground("#000000");
        this.setPosition(0, 0);

        // logo
        this.logo = new Layer();
        this.logo.setSize(376, 160);
        this.logo.setPosition((Const.SCREEN_WIDTH - 376) / 2, 80);
        this.logo.setBackground("url(" + Const.IMAGE_UI.src + ")");
        this.logo.show();
        this.append(this.logo);

        // 文字
        this.label = new Label("1  PLAYER\n2  PLAYERS\nCONSTRUCTION");
        this.label.setColor("#FFF");
        this.label.moveTo(160, 260);
        this.label.show();
        this.append(this.label);

        // 坦克
        this.sprite = new Sprite(Const.IMAGE_TANK, 32, 32, [28, 42]);
        this.sprite.setRepeat(0);
        this.sprite.setFrameCounter(4);
        this.sprite.moveTo(120, 260);
        this.append(this.sprite);

        this.setSize(Const.SCREEN_WIDTH, Const.SCREEN_HEIGHT);
        this.start = false;
    },
    onEnter: function () {
        this.sprite.start();
        this.sprite.hide();
        this.setPosition(0, 200);
        this.show();
    },
    onLevel: function() {
        this.hide();
    },
    onUpdate: function() {
        
        if (this.y != 0) {
            if (Input.isPressed(13)) {
                this.setY(0);
            }
        }
        else {
            this.sprite.show();
            this.sprite.moveToNextFrame();
            if (Input.isPressed(13)) {
                this.hide();
                return false;
            }
            else if (Input.isPressed(16)) {
                this.sprite.y += 30;
                this.sprite.y = this.sprite.y > 320 ? 260 : this.sprite.y;
                this.sprite.setY(this.sprite.y);
            }
        }

        if (this.y > 0) {
            this.y -= 2;
            this.y = this.y < 0 ? 0 : this.y;
            this.setY(this.y);
        }

        return true;
    }
});