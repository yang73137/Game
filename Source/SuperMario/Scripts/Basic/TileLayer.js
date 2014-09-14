TileLayer = ClassFactory.createClass(Layer, {
    init: function (columns, rows, image, tileWidth, tileHeight) {
        Layer.init.call(this);

        this.tileArr = [];
        this.animateTileArr = [];

        this.cols = columns;
        this.rows = rows;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;

        var fragment = document.createDocumentFragment();

        /*
		 * 创建砖块数据
		 */
        for (var i = 0; i < rows; i++) {
            this.tileArr[i] = [];

            for (var j = 0; j < columns; ++j) {
                var div = document.createElement("div");
                var style = div.style;

                style.position = "absolute";
                style.backgroundRepeat = "no-repeat";

                fragment.appendChild(div);

                this.tileArr[i][j] =
				{
				    id: 0,				// 砖块ID（动态砖为负数）
				    staticID: 0,		// 静态ID（实际显示的序列）
				    style: style
				};
            }
        }

        this.div.appendChild(fragment);
        this.setStaticTileSet(image, tileWidth, tileHeight);
    },
    /**************************************************
	 * setStaticTileSet
	 *   指定砖块层源图像
	 **************************************************/
    setStaticTileSet: function (image, tileWidth, tileHeight) {
        // 检验尺寸是否合法
        if (tileWidth < 1 || tileHeight < 1) {
            throw Error("Invalid argument");
        }


        if (this.imageWidth % tileWidth || this.imageHeight % tileHeight) {
            throw Error("Image: " + image +
							" (" + this._iImgW + "*" + this._iImgH + ") size must be an integral multiple of (" +
							tileWidth + "*" + tileHeight + ")");
        }

        // 计算帧的纵横个数
        this.setSize(this.imageWidth / tileWidth * tileWidth, this.imageHeight / tileHeight * tileHeight);

        // 创建地砖元素
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.cols; j++) {
                //
                // 更新砖块图片
                //
                var style = this.tileArr[i][j].style;

                style.backgroundImage = "url(" + image + ")";
                style.backgroundPosition = "0 -9999px";

                style.left = j * tileWidth + "px";
                style.top = i * tileHeight + "px";
                style.width = tileWidth + "px";
                style.height = tileHeight + "px";
            }
        }
    },
    /**************************************************
	 * createAniTile
	 *   创建一个动态砖块，并返回砖块ID
	 *   staticTileIndex:
	 *     必须为0，或者存在的静态砖块ID
	 * 返回值从-1开始逐次递减。
	 **************************************************/
    createAnimateTile: function (staticTileIndex) {
        if (staticTileIndex < 0 || staticTileIndex > this.cols * this.rows) {
            throw Error("Invalid tile index");
        }

        var n = this.animateTileArr.length;

        this.animateTileArr[n] =
		{
		    id: staticTileIndex,
		    ref: {}
		};

        return ~n;
    },
    /**************************************************
	 * setAniTile
	 *   批量设置动态砖块图像序列
	 **************************************************/
    setAnimateTile: function (animateTileIndex, staticTileIndex) {
        var aniTileInfo = this.animateTileArr[~animateTileIndex];
        if (!aniTileInfo) {
            throw Error("Invalid animated tile index");
        }


        if (aniTileInfo.id == staticTileIndex) {
            return;
        }
        aniTileInfo.id = staticTileIndex;


        // 
        // 枚举并修改设置了此砖块的格子
        // p = row * 1e5 + col
        //
        var p, col, row;

        for (p in aniTileInfo.ref) {
            if (p > 0) {
                col = (p % 1e5);
                row = (p / 1e5) >> 0;

                this.tileArr[row][col].staticID = staticTileIndex;
                this.drawTileImg(col, row);
            }
        }
    },
    /**************************************************
	 * GetAniTile
	 *   返回动态砖块当前对应的图像序列
	 **************************************************/
    getAnimateTile: function (animateTileIndex) {
        var aniTileInfo = this.animateTileArr[~animateTileIndex];
        if (!aniTileInfo) {
            throw Error("Invalid animated tile index");
        }

        return aniTileInfo.id;
    },

    /**************************************************
	 * FillCells
	 *   填充指定范围内的砖格
	 **************************************************/
    fillCells: function (col, row, numCols, numRows, tileIndex) {
        var r, r2 = row + numRows;
        var c, c2 = col + numCols;

        for (r = row; r < r2; ++r)
            for (c = col; c < c2; ++c)
                this.setCell(c, r, tileIndex);
    },


    /**************************************************
	 * GetCell
	 *   返回指定砖格的砖块序列
	 **************************************************/
    getCell: function (col, row) {
        return this.tileArr[row][col].id;
    },


    /**************************************************
	 * SetCell
	 *   设置指定砖格的图片序列
	 **************************************************/
    setCell: function (col, row, tileIndex) {
        var tile = this.tileArr[row][col];
        var staticId = tileIndex;

        /*
		 * 之前是动态砖，取消此引用
		 */
        if (tile.id < 0)
            delete this.animateTileArr[~tile.id].ref[row * 1e5 + col];

        /*
		 * 当前是动态砖，添加引用
		 */
        if (tileIndex < 0) {
            var aniTileInfo = this.animateTileArr[~tileIndex];

            aniTileInfo.ref[row * 1e5 + col] = true;
            staticId = aniTileInfo.id;
        }

        tile.id = tileIndex;
        tile.staticID = staticId;

        this.drawTileImg(col, row);
    },
    /**
	 * 更新砖块层图片
	 */
    drawTileImg: function (col, row) {
        var tile = this.tileArr[row][col];
        var id = tile.staticID - 1;

        var c = (id % this.cols);
        var r = (id / this.cols) >> 0;
        var left = -c * this.tileWidth;
        var top = -r * this.tileHeight;

        tile.style.backgroundPosition = left + "px " + top + "px";
    }
});