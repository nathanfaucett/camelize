var reInflect = require("re_inflect"),
    capitalizeString = require("capitalize_string");


module.exports = camelize;


function camelize(string, lowFirstLetter) {
    var parts = string.match(reInflect),
        i = parts.length;

    while (i--) {
        parts[i] = capitalizeString(parts[i]);
    }
    string = parts.join("");

    return lowFirstLetter !== false ? string.charAt(0).toLowerCase() + string.slice(1) : string;
}
