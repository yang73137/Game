
// 技能匹配状态
SkillState = {
    None: 0,
    Matching: 1,
    Matched: 2
}

// 技能动作
function SkillAction(keyCodes, duration, isRelease) {
    this.keyCodes = keyCodes || [];
    this.duration = duration;
    this.isRelease = !!isRelease;
}

// 技能
function Skill(sprite, actions) {
    this.actions = actions || [];
    this.actionIndex = 0;
    this.counter = 0;
    this.state = SkillState.None;
    this.sprite = sprite;
}

// 技能匹配
Skill.prototype.match = function (input) {

    if (this.counter >= 0) {

        // 没有任何按键
        if (!input.keyChanged) {
            this.counter--;
            if (this.counter < 0) {
                this.actionIndex = 0;
                this.counter = 0;
                this.state = SkillState.None;
            }
            return this.state;
        }

        var nextAction = this.actions[this.actionIndex];
        var isRelease = nextAction.isRelease;
        var keyCodeIndex = 0;

        for (keyCodeIndex = 0; keyCodeIndex < nextAction.keyCodes.length; keyCodeIndex++) {
            var keyCode = nextAction.keyCodes[keyCodeIndex];
            if ((input.isKeyPressed(keyCode) == isRelease)) {
                break;
            }
        }

        var actionMatched = keyCodeIndex == nextAction.keyCodes.length;

        if (actionMatched) {
            if (this.actionIndex == this.actions.length - 1) {
                this.actionIndex = 0;
                this.counter = 0;
                this.state = SkillState.Matched;
            }
            else {
                this.counter = nextAction.duration;
                this.state = SkillState.Matching;
                this.actionIndex++;
            }
        }
        else {
            this.actionIndex = 0;
            this.counter = 0;
            this.state = SkillState.None;
        }
    }
    else {
        this.actionIndex = 0;
        this.counter = 0;
        this.state = SkillState.None;
    }
    return this.state;
};