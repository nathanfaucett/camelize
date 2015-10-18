var tape = require("tape"),
    camelize = require("..");


tape("camelize(string : String[, lowFirstLetter : Boolean])", function(assert) {
    assert.equal(camelize("string-string", false), "StringString");
    assert.equal(camelize("string-string", true), "stringString");
    assert.equal(camelize("string-string"), "stringString");
    assert.equal(camelize("string.string"), "string.string");
    assert.end();
});
