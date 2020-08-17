// module
var express = require('express');

// initiate server
var app = express();
app.use(express.static('public'));

// routing
app.all('/a', (request, response) => {
    response.send('<h1>page A</h1>');
});

// response data type
app.all('/data.json', (req, res) => {
    res.send(items);
});
app.all('/data.xml', (req, res) => {
    var output = '';
    output += '<?xml version="1.0" encoding="UTF-8" ?>';
    output += '<products>';
    items.forEach(item => {
        output += '<product>';
        output += '  <name>' + item.name + '</name>';
        output += '  <price>' + item.price + '</price>';
        output += '</product>';
    });
    output += '</products>';
    res.type('text/xml');
    res.send(output);
})

var items = [
    {
        name: 'milk',
        price: '4000'
    },
    {
        name: 'coffee',
        price: '3000'
    }
];

app.use(function (req, res, next) {
    req.test = 'request.test~';
    res.test = 'response.test!';
    next();
})
app.use(function (request, response, next) {
    response.send('<h1>' + request.test + ' : ' + response.test + '</h1>');
})

// start the server
app.listen(54242, function () {
    console.log('Server running at http://localhost:54242');
})