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
        "OverworldTheme": path_prefix + "./Sound/Background/mp3/Overworld.mp3",
        "UnderGroundTheme": path_prefix + "./Sound/Background/mp3/Underworld.mp3",
        "UnderWaterTheme": path_prefix + "./Sound/Background/mp3/Underwater.mp3",
        "CastleTheme": path_prefix + "./Sound/Background/mp3/Castle.mp3",
        "Sky": path_prefix + "./Sound/Background/mp3/Sky.mp3",
        "Star": path_prefix + "./Sound/Background/mp3/Star.mp3"
    },
    Effects: {
        "BrickBreak": path_prefix + "./Sound/Effect/mp3/Break Block.mp3",
        "Squish": path_prefix + "./Sound/Effect/mp3/Squish.mp3",
        "Coin": path_prefix + "./Sound/Effect/mp3/Coin.mp3",
        "Sprout": path_prefix + "./Sound/Effect/mp3/Powerup Appears.mp3",
        "Death": path_prefix + "./Sound/Effect/mp3/Player Dies.mp3",
        "Bump": path_prefix + "./Sound/Effect/mp3/Bump.mp3",
        "Fireball": path_prefix + "./Sound/Effect/mp3/Fireball.mp3",
        "LifeUp": path_prefix + "./Sound/Effect/mp3/Gain Life.mp3",
        "JumpBig": path_prefix + "./Sound/Effect/mp3/Jump Super.mp3",
        "JumpSmall": path_prefix + "./Sound/Effect/mp3/Jump Small.mp3",
        "ChangeType": path_prefix + "./Sound/Effect/mp3/Powerup.mp3",
        "BowserFire": path_prefix + "./Sound/Effect/mp3/Bowser Fires.mp3",
        "Hurt": path_prefix + "./Sound/Effect/mp3/Pipe.mp3",
        "Flagpole": path_prefix + "./Sound/Effect/mp3/Flagpole.mp3",
        "LevelClear": path_prefix + "./Sound/Effect/mp3/Stage Clear.mp3",
        "WorldClear": path_prefix + "./Sound/Effect/mp3/World Clear.mp3",
        "Kick": path_prefix + "./Sound/Effect/mp3/Kick.mp3",
        "BowserFalls": path_prefix + "./Sound/Effect/mp3/Bowser Falls.mp3"
    }
};

