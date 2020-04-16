const express = require('express');
var path = require('path');
const app = express();

console.log("Dirname = " + __dirname);
app.use('/', express.static(__dirname));
app.listen(8000);