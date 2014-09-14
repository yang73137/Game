var Layer = ClassFactory.createClass({
    init: function () {
        this.x = 0;
        this.y = 0;
        this.z = -1;

        this.backgroundX = 0;
        this.backgroundY = 0;
        this.backgroundImage = "";

        this.width = 0;
        this.height = 0;
        this.visible = false;

        this.div = document.createElement("div");
        this.style = this.div.style;
        this.style.position = "absolute";
        this.style.overflow = "hidden";
        this.setVisible(false);
    },
    setX: function (value) {
        this.style.left = (this.x = value) + "px";
    },
    setY: function (value) {
        this.style.top = (this.y = value) + "px";
    },
    setZ: function (value) {
        this.style.zIndex = this.z = value;
    },
    setPosition: function (x, y) {
        this.setX(x);
        this.setY(y);
    },
    setWidth: function (value) {
        this.style.width = (this.width = value) + "px";
    },
    setHeight: function (value) {
        this.style.height = (this.height = value) + "px";
    },
    setSize: function (width, height) {
        this.setWidth(width);
        this.setHeight(height);
    },
    moveTo: function (x, y) {
        this.setX(x);
        this.setY(y);
    },
    moveBy: function (dx, dy) {
        this.setX(dx + this.x);
        this.setY(dy + this.y);
    },
    setVisible: function (value) {
        this.visible = value;
        this.style.display = value ? "block" : "none";
    },
    show: function () {
        this.setVisible(true);
    },
    hide: function () {
        this.setVisible(false);
    },
    setBackgroundX: function (x) {
        this.backgroundX = x;
        this.style.backgroundPositionX = -x + "px";
    },
    setBackgroundY: function (y) {
        this.backgroundY = y;
        this.style.backgroundPositionY = -y + "px";
    },
    setBackgroundPosition: function (x, y) {
        this.setBackgroundX(x);
        this.setBackgroundX(y);
    },
    setBackgroundImage: function (src) {
        this.style.backgroundImage = "url(" + src + ")";
    },
    setBackground: function (value) {
        this.style.background = value;
    },
    setClass: function (value) {
        this.style.className = value;
    },
    append: function (layer) {
        if (layer instanceof Layer) {
            this.div.appendChild(layer.div);
            return this;
        }
        return Error("Argument must be a Layer type");
    },
    appendTo: function (dom) {
        dom.appendChild(this.div);
    }
});