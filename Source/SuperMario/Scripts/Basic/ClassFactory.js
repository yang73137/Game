ClassFactory = {
    _defaultConstructor: function () { },
    createClass: function (base, methods) {

        if (arguments.length >= 2) {
            if (typeof base != "function") {
                throw Error("base must be a function");
            }
        }
        else {
            methods = base;
            base = Object;
        }

        methods = !methods ? {} : methods;

        if (typeof methods != "object") {
            throw Error("methods must be an object");
        }

        var newClass = function () {
            if (!this.constructor._createPrototypeMode) {
                this.constructor.init.apply(this, arguments);
            }
            return this;
        };

        newClass.init = methods.init;
        if (!newClass.init || typeof (newClass.init) != "function") {
            newClass.init = this._defaultConstructor;
        }

        newClass.base = base;

        base._createPrototypeMode = true;
        newClass.prototype = new base();
        base._createPrototypeMode = false;
        newClass.prototype.constructor = newClass;

        for (var key in methods) {
            if (methods.hasOwnProperty(key) && typeof methods[key] == "function") {
                newClass.prototype[key] = methods[key];
            }
        }

        return newClass;
    }
};