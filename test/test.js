var assert = require("assert"),
    camelize = require("../src/index");


describe("camelize(string : String[, lowFirstLetter : Boolean])", function() {
    it("should capitalize string", function() {
        assert.equal(camelize("string-string", false), "StringString");
        assert.equal(camelize("string-string", true), "stringString");
        assert.equal(camelize("string-string"), "stringString");
    });
});
