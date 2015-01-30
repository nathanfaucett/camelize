var reInflect = require("re_inflect"),
    capitalizeString = require("capitalize_string");


module.exports = function camelize(string, lowFirstLetter) {
    var parts = string.match(reInflect),
        i = lowFirstLetter !== false ? 0 : -1,
        il = parts.length - 1;

    while (i++ < il) {
        parts[i] = capitalizeString(parts[i]);
    }

    return parts.join("");
};
