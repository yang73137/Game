QUnit.test("ClassFactoryTest", function(assert) {
    var Class1 = ClassFactory.createClass();

    var c1 = new Class1();
    assert.ok(c1 instanceof Class1);
    assert.equal(c1.constructor.base, Object);
    assert.equal(c1.base.constructor, Object);
    assert.equal(c1.constructor.init, ClassFactory._defaultConstructor);

    var Class2 = ClassFactory.createClass(Class1, {
        init: function(name) {
            this.name = name;
        },
        click: function() {
            console.log(this.name);
        }
    });

    var c2 = new Class2("c2");
    assert.ok(c2 instanceof Class2);
    assert.ok(c2 instanceof Class1);
    assert.equal(c2.name, "c2");
    assert.equal(c2.initBase, Class1.init);
    assert.equal(c2.init, Class2.init);

    var Class3 = ClassFactory.createClass(Class2, {
        init: function (name, age) {
            Class2.init.call(this, name);
            this.age = age;
        },
        click: function () {
            console.log(this.name);
            this.base.click.call(this);
            console.log(this.age);

        }
    });

    var c3 = new Class3("c3", 12);
    c3.click();
    assert.ok(c3 instanceof Class3);
    assert.ok(c3 instanceof Class2);
    assert.ok(c3 instanceof Class1);
    assert.equal(c3.name, "c3");
    assert.equal(c3.age, 12);
    assert.equal(c3.initBase, Class2.init);
    assert.equal(c3.init, Class3.init);

    assert.throws(function() {
        ClassFactory.createClass({}, {});
    });

    assert.throws(function () {
        ClassFactory.createClass(1, {});
    });

    assert.throws(function () {
        ClassFactory.createClass(1);
    });
});