camelize
=======

camelize string

```javascript
var camelize = require("@nathanfaucett/camelize");


camelize("String-string", false) === "StringString";
camelize("string-string", false) === "StringString";
camelize("string-string", true) === "stringString";
camelize("string-string") === "stringString";
camelize("string.string") === "string.string";
```
