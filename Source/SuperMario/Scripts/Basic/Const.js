/**
 * 游戏常量声明
 * @enum
 */

var path_prefix = (window.release ? "" : ".");

var Const =
{
    //方向
	DIRECTION_UP: 0,
	DIRECTION_RIGHT: 1,
	DIRECTION_DOWN: 2,
	DIRECTION_LEFT: 3,

	IMAGE_MARIOBROS: path_prefix + "./Images/MarioBros.png",
	IMAGE_ENEMIES: path_prefix + "./Images/Enemies.png",
	IMAGE_ITEMS: path_prefix + "./Images/Items.png",
	IMAGE_TILESET: path_prefix + "./Images/TileSet.png",

    SCREEN_WIDTH: 512,
    SCREEN_HEIGHT: 448
};

for (var i = 1; i <= 8; i++) {
    for (var j = 1; j <= 4; j++) {
        Const["IMAGE_WORLD_" + i + "_" + j] = path_prefix + "./Images/World_" + +i + "_" + j + ".png";
    }
}

for (var i = 1; i <= 8; i++) {
    for (var j = 1; j <= 4; j++) {
        Const["SCRIPT_WORLD_" + i + "_" + j] = path_prefix + "./Scripts/World/World_" + +i + "_" + j + ".js";
    }
}

Const.Sound = {
    Backgrounds: {
        "OverworldTheme": path_prefix + "./Sound/Background/Overworld Theme.ogg",
        "UnderGroundTheme": path_prefix + "./Sound/Background/Under Ground Theme.ogg",
        "UnderWaterTheme": path_prefix + "./Sound/Background/Under Water Theme.ogg",
        "CastleTheme": path_prefix + "./Sound/Background/Castle Theme.ogg"
    },
    Effects: {
        "BrickBreak": path_prefix + "./Sound/Effect/Break.wav",
        "Squish": path_prefix + "./Sound/Effect/Squish.wav",
        "Coin": path_prefix + "./Sound/Effect/Coin.wav",
        "Sprout": path_prefix + "./Sound/Effect/Sprout.wav",
        "Death": path_prefix + "./Sound/Effect/Death.wav",
        "Bump": path_prefix + "./Sound/Effect/Bump.wav",
        "Fireball": path_prefix + "./Sound/Effect/Fireball.wav",
        "LifeUp": path_prefix + "./Sound/Effect/1-UP.wav",
        "JumpBig": path_prefix + "./Sound/Effect/Jump_Big.wav",
        "JumpSmall": path_prefix + "./Sound/Effect/Jump_Small.wav",
        "ChangeType": path_prefix + "./Sound/Effect/ChangeType.wav",
        "BowserFire": path_prefix + "./Sound/Effect/Bowser's Fire.wav",
        "Hurt": path_prefix + "./Sound/Effect/Pipe-Power Down.wav",
        "Flagpole": path_prefix + "./Sound/Effect/Flagpole.wav",
        "LevelClear": path_prefix + "./Sound/Effect/Level Clear.wav",
        "WorldClear": path_prefix + "./Sound/Effect/World Clear.wav",
        "Kick": path_prefix + "./Sound/Effect/Kick.wav"
    }
};

