/**
 * 游戏常量声明
 * @enum
 */


var Const =
{
    //方向
	DIRECTION_UP: 0,
	DIRECTION_RIGHT: 1,
	DIRECTION_DOWN: 2,
	DIRECTION_LEFT: 3,

	IMAGE_MARIOBROS: (window.release ? "" : ".") + "./Images/MarioBros.png",
	IMAGE_ENEMIES: (window.release ? "" : ".") + "./Images/Enemies.png",
	IMAGE_ITEMS: (window.release ? "" : ".") + "./Images/Items.png",
	IMAGE_TILESET:(window.release ? "" : ".") + "./Images/TileSet.png" ,

    SCREEN_WIDTH: 512,
    SCREEN_HEIGHT: 448
};

for (var i = 1; i <= 8; i++) {
    for (var j = 1; j <= 4; j++) {
        Const["IMAGE_WORLD_" + i + "_" + j] = (window.release ? "" : ".") + "./Images/World_" + +i + "_" + j + ".png";
    }
}console.log(Const.IMAGE_MARIOBROS);