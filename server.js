var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');

app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

var port = process.env.PORT || 5000;

app.listen(port);

console.log('server started ' + port);