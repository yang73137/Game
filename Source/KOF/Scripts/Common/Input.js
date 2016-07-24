var GameKeys =
        {
            UP: 87,		    //W
            DOWN: 83,		//S
            LEFT: 65,		//A
            RIGHT: 68,		//D

            GAME_A: 74,		//J
            GAME_B: 75,		//K
            GAME_C: 76,		//L
            GAME_D: 186		//;
        };

function Key(keyCode, repeatable) {
    this.keyCode = keyCode;
    this.isPressed = false;
    this.repeatable = !!repeatable;
    this.isRepeat = false;
};

var Input = {
    keys: {
        "87": new Key(87, true),
        "83": new Key(83, true),
        "65": new Key(65, true),
        "68": new Key(68, true),
        "74": new Key(74, true),
        "75": new Key(75, false),
        "76": new Key(76, false),
        "186": new Key(186, false)
    },
    keyChanged: false,
    pressKey: function (keyCode) {
        var key = this.keys[keyCode];
        if (!key) {
            return;
        }
        if (!key.repeatable && key.isRepeat)
        {
            return false;
        }
        key.isPressed = true;
        this.keyChanged = true;
    },
    releaseKey: function (keyCode) {
        var key = this.keys[keyCode];
        if (!key) {
            return;
        }
        key.isPressed = false;
        key.isRepeat = false;
        this.keyChanged = true;
    },
    isKeyPressed: function (keyCode) {
        var key = this.keys[keyCode];
        if (!key || !key.isPressed) {
            return false;
        }

        return true;
    },
    isChanged: function () {
        return this.keyChanged;
    },
    setRepeat: function () {
        this.keyChanged = false;
        for (var keyCode in this.keys)
        {
            var key = this.keys[keyCode];
            if (!key.repeatable && key.isPressed)
            {
                key.isPressed = false;
                key.isRepeat = true;
            }
        }
    }
};

(function () {

    function handleKeyDown(e) {
        e = e || event;
        Input.pressKey(e.keyCode);
    }

    function handleKeyUp(e) {
        e = e || event;
        Input.releaseKey(e.keyCode);
    }

    if (document.addEventListener) {
        document.addEventListener("keydown", handleKeyDown, false);
        document.addEventListener("keyup", handleKeyUp, false);
    }
    else {
        document.attachEvent("onkeydown", handleKeyDown);
        document.attachEvent("onkeyup", handleKeyUp);
    }
})();