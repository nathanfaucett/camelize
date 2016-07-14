var reInflect = require("@nathanfaucett/re_inflect"),
    capitalizeString = require("@nathanfaucett/capitalize_string");


module.exports = camelize;


function camelize(string, lowFirstLetter) {
    var parts, part, i, il;

    lowFirstLetter = lowFirstLetter !== false;
    parts = string.match(reInflect);
    i = lowFirstLetter ? 0 : -1;
    il = parts.length - 1;

    while (i++ < il) {
        parts[i] = capitalizeString(parts[i]);
    }

    if (lowFirstLetter && (part = parts[0])) {
        parts[0] = part.charAt(0).toLowerCase() + part.slice(1);
    }

    return parts.join("");
}
