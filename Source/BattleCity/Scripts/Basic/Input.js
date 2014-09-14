/**
 * 按键常量
 * @enum {number}
 */
var InputAction =
{
    NO_REPEAT: 1e8,

    UP: 87,		    //W
    DOWN: 83,		//S
    LEFT: 65,		//A
    RIGHT: 68,		//D

    GAME_A: 74,		//J
    GAME_B: 75,		//K
    GAME_C: 85,		//U
    GAME_D: 73,		//I

    START: 13,		//Enter
    SELECT: 16		//Shift
};

Input = function () {
    var arrRepeat = [],
		arrQuery = [],
		arrPress = [];


    for (var i = 0; i < 128; ++i) {
        arrRepeat[i] = 1;
        arrQuery[i] = -1e8;
    }
    
    //
    // 默认按键延时
    //
    arrRepeat[InputAction.START] =
    arrRepeat[InputAction.SELECT] =
    arrRepeat[InputAction.GAME_A] =
    arrRepeat[InputAction.GAME_B] = InputAction.NO_REPEAT;

    function handleKeyDown(e) {
        e = e || event;
        Input.keyPress(e.keyCode);
    }

    function handleKeyUp(e) {
        e = e || event;
        Input.keyRelease(e.keyCode);
    }

    /**
	 * 键盘事件
	 */
    if (document.addEventListener) {
        document.addEventListener("keydown", handleKeyDown, false);
        document.addEventListener("keyup", handleKeyUp, false);
    }
    else {
        document.attachEvent("onkeydown", handleKeyDown);
        document.attachEvent("onkeyup", handleKeyUp);
    }

    return {
        /**
         * 指定键置于按下状态
         */
        keyPress: function(key) {
            arrPress[key] = true;
        },

        /**
         * 指定键置于提起状态
         */
        keyRelease: function(key) {
            arrPress[key] = false;
            arrQuery[key] = -1e8;
        },

        /**
         * 指定键最短触发事件
         */
        setKeyRepeat: function(key, repeat) {
            arrRepeat[key] = repeat;
        },

        /**
         * 检测指定的键是否按下
         */
        isPressed: function(key) {
            if (!arrPress[key]) {
                return false;
            }

            var iTime = +new Date();
            if (iTime - arrQuery[key] < arrRepeat[key]) {
                return false;
            }

            arrQuery[key] = iTime;
            return true;
        }
    };
}();