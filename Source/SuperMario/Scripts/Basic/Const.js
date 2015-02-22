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
        "OverworldTheme": path_prefix + "./Sound/Background/ogg/Overworld.ogg",
        "UnderGroundTheme": path_prefix + "./Sound/Background/ogg/Underworld.ogg",
        "UnderWaterTheme": path_prefix + "./Sound/Background/ogg/Underwater.ogg",
        "CastleTheme": path_prefix + "./Sound/Background/ogg/Castle.ogg"
    },
    Effects: {
        "BrickBreak": path_prefix + "./Sound/Effect/ogg/Break Block.ogg",
        "Squish": path_prefix + "./Sound/Effect/Squish.wav",
        "Coin": path_prefix + "./Sound/Effect/ogg/Coin.ogg",
        "Sprout": path_prefix + "./Sound/Effect/ogg/Powerup Appears.ogg",
        "Death": path_prefix + "./Sound/Effect/ogg/Player Dies.ogg",
        "Bump": path_prefix + "./Sound/Effect/ogg/Bump.ogg",
        "Fireball": path_prefix + "./Sound/Effect/ogg/Fireball.ogg",
        "LifeUp": path_prefix + "./Sound/Effect/ogg/Gain Life.ogg",
        "JumpBig": path_prefix + "./Sound/Effect/ogg/Jump Super.ogg",
        "JumpSmall": path_prefix + "./Sound/Effect/ogg/Jump Small.ogg",
        "ChangeType": path_prefix + "./Sound/Effect/ogg/Powerup.ogg",
        "BowserFire": path_prefix + "./Sound/Effect/ogg/Bowser Fires.ogg",
        "Hurt": path_prefix + "./Sound/Effect/ogg/Pipe.ogg",
        "Flagpole": path_prefix + "./Sound/Effect/ogg/Flagpole.ogg",
        "LevelClear": path_prefix + "./Sound/Effect/ogg/Stage Clear.ogg",
        "WorldClear": path_prefix + "./Sound/Effect/ogg/World Clear.ogg",
        "Kick": path_prefix + "./Sound/Effect/ogg/Kick.ogg"
    }
};

