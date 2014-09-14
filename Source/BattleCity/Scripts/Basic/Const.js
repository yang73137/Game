/**
 * 游戏常量声明
 * @enum
 */
var Const =
{
	//
	// 游戏常量
	//
	MAX_STAGE: 35,				// 总关数
	MAX_TANK: 5,				// 最大坦克数
	MAX_SCORE: 20000,

	TIME_BULPRF_DEF: 180,		// 出生防弹时间
	TIME_BULPRF_BONUS: 720,	// 奖励防弹时间
	TIME_WALL_IRON: 960,		// 总部铁墙保护时间
	TIME_STOP_BONUS: 300,


	//
	// 带奖励的红坦克（默认：4号，11号，18号）
	//
	// ------- 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20
	BONUS_MAP: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],


	//
	// 场景位置
	//
	POS_X: 34,
	POS_Y: 18,


	//
	// 场景图层深度
	//
	Z_MAP:		0,		// 地图
	Z_FRAG:		1,		// 碎片砖
	Z_BULL:		2,		// 子弹
	Z_TANK:		3,		// 坦克
	Z_GRASS:	4,		// 草
	Z_SCORE:	5,		// 分数（与坦克共用一个层）
	Z_BONUS:	6,		// 奖励图标
	Z_BOOM:		7,		// 爆炸
	Z_UI:		8,		// 相关界面

	//
	// block障碍值
	//
	BLOCK_NONE: 0,
	BLOCK_TILE: 15,
	BLOCK_ICE: 16,
	BLOCK_IRON: 32,
	BLOCK_WATER: 64,
	BLOCK_BASE1: 128,
	BLOCK_BASE2: 256,


	//
	// 精灵帧序列基值
	//
	FR_BIRTH: 112,
	FR_SCORE: 116,
	FR_BONUS: 121,
	FR_BULPRF: 11,

    //方向
	DIRECTION_NONE: -1,
	DIRECTION_UP: 0,
	DIRECTION_RIGHT: 1,
	DIRECTION_DOWN: 2,
	DIRECTION_LEFT: 3,

	IMAGE_TANK: { src: (window.release ? "" : ".") + "./Images/Tank.png", width: 4064, height: 32 },
	IMAGE_BOOM: { src: (window.release ? "" : ".") + "./Images/Boom.png", width: 320, height: 64 },
	IMAGE_MISC: { src: (window.release ? "" : ".") + "./Images/Misc.png", width: 160, height: 32 },
	IMAGE_UI: { src: (window.release ? "" : ".") + "./Images/UI.png", width: 376, height: 320 },
	IMAGE_TERR: { src: (window.release ? "" : ".") + "./Images/Terr.png", width: 1152, height: 32 },


    SCREEN_WIDTH: 512,
    SCREEN_HEIGHT: 448
};