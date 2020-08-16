
var express = require('express');

var app = express();

app.listen(54242, function () {
    console.log('Server running at http://localhost:54242');
})

app.use(function (request, response, next) {
    console.log('first');
    next();
})
app.use(function (req, res, next) {
    console.log('second');
    next();
})
app.use(function (req, res, next) {
    req.test = 'request.test~';
    res.test = 'response.test!';
    next();
})
app.use(function (request, response, next) {
    response.send('<h1>' + request.test + ' : ' + response.test + '</h1>');
})
