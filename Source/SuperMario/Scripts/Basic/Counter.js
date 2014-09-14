
function Counter(defaultCount, workOnFirstTime, autoReset) {
    this.defaultCount = defaultCount;
    this.workOnFirstTime = !!workOnFirstTime;
    this.autoReset = !!autoReset;
    this.currentCount = workOnFirstTime ? 0 : defaultCount;
    this.enabled = true;
}

Counter.prototype.countdown = function () {

    if (this.currentCount > 0) {
        this.currentCount--;
        return true;
    }

    if (this.currentCount == 0) {
        if (this.autoReset) {
            this.currentCount = this.defaultCount;
        }
        return false;
    }

    return true;
};

Counter.prototype.setCount = function (newCount) {
    if (newCount >= 0) {
        if (this.workOnFirstTime) {
            this.defaultCount = newCount;
        } else {
            this.currentCount = this.defaultCount = newCount;
        }
    }
};

Counter.prototype.setEnabled = function (enabled) {
    this.enabled = enabled;
};

Counter.prototype.reset = function () {
    this.currentCount = this.defaultCount;
};