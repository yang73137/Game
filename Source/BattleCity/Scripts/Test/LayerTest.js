QUnit.test("LayerTest", function (assert) {
    var layer = new Layer();

    assert.ok(layer instanceof Layer);

    layer.setX(10);
    assert.equal(layer.x, 10, "setX is ok");

    layer.setY(15);
    assert.equal(layer.y, 15, "setY is ok");

    layer.setZ(1);
    assert.equal(layer.z, 1, "setZ is ok");

    layer.setWidth(100);
    assert.equal(layer.width, 100, "setWidth is ok");

    layer.setHeight(150);
    assert.equal(layer.height, 150, "setWidth is ok");

    layer.setSize(10, 20);
    assert.equal(layer.width, 10, "setSize is ok");
    assert.equal(layer.height, 20, "setSize is ok");

    layer.move(10, 20);
    assert.equal(layer.x, 10, "move is ok");
    assert.equal(layer.y, 20, "move is ok");

    layer.move(100, 100);
    layer.moveBy(10, 20);
    assert.equal(layer.x, 110, "moveBy is ok");
    assert.equal(layer.y, 120, "moveBy is ok");

    layer.setVisible(true);
    assert.ok(layer.visible, "setVisible is ok");

    layer.hide();
    assert.ok(!layer.visible, "setVisible is ok");

    layer.show();
    assert.ok(layer.visible, "setVisible is ok");

    layer.setBackground("none");
    assert.ok(layer.style.background == "none", "setBackground is ok");

    var layer2 = new Layer();
    layer.append(layer2);
    assert.ok(layer.div == layer2.div.parentNode, "append is ok");

    assert.throws(layer.append({}), "append is ok");

    var dom = document.createElement("div");
    layer.appendTo(dom);
    assert.equal(layer.div.parentNode, dom, "append is ok");
});