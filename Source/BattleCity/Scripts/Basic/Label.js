Label = ClassFactory.createClass(Layer, {
    init: function (text) {
        Layer.init.call(this);
        this.style.font = "22px 'Meiryo'";
        this.setText(text);
    },
    setColor: function (color) {
        this.style.color = color;
    },
    setText: function (s) {
        s = "" + s;
        s = s.replace(/&/g, "&amp;")
				.replace(/</g, "&lt;")
				.replace(/>/g, "&gt;")
				.replace(/\n/g, "<br/>")
				.replace(/ /g, "&nbsp;");
        this.setHTML(s);
    },
    setHTML: function (s) {
        s = "" + s;
        this.div.innerHTML = s;
    },
    setAlign: function (v) {
        this.style.textAlign = v;
    },
    setCSS: function (v) {
        for (var p in v) {
            if (v.hasOwnProperty(p)) {
                this.style[p] = v[p];
            }
        }
    }
});