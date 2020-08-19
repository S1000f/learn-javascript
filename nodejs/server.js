// module
var express = require('express');
var bodyParser = require('body-parser');

// variables
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

// initiate server
var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: false
}));

// routing
// --------
//// request HTTP methods
//// GET
app.get('/products', (req, res) => {
    res.send(items);
});
app.get('/products/:id', (req, res) => {
    var id = req.params.id;

    if (isNaN(Number(id))) {
        res.send({
            error: 'input only integer number'
        })
    } else if (items[id]) {
        res.send(items[id]);
    } else {
        res.send({
            error: 'item indexed does not exists'
        })
    };
});
//// POST
app.post('/products', (req, res) => {
    var name = req.body.name;
    var price = req.body.price;
    var newItem = {
        name: name,
        price: price
    };
    items.push(newItem);
    res.send({
        message: 'data inputted successfully',
        data: newItem
    });
});
//// PUT
app.put('/products/:id', (req, res) => {
    var id = req.params.id;
    var name = req.body.name;
    var price = req.body.price;

    if (items[id]) {
        if (name) {
            items[id].name = name;
        }
        if (price) {
            items[id].price = price;
        }
        res.send({
            message: 'data updated',
            data: items[id]
        });
    } else {
        res.send({
            error: 'item indexed doesnt exists or key name you input is wrong'
        });
    }
});

//// using request parameter
app.all('/parameter', (req, res) => {
    var name = req.param('name');
    var region = req.param('region');

    res.send('<h1>' + name + ' ::: ' + region + '</h1>');
});
app.all('/dynamic/:id', (req, res) => {
    var id = req.params.id;
    res.send('<h2>' + id + '</h2>');
});

//// response data type
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
});
app.all('/data.html', (req, res) => {
    var out = '';
    out += '<!DOCTYPE html>';
    out += '<html>';
    out += '<head>';
    out += '    <title>data HTML response</title>';
    out += '</head>';
    out += '<body>';
    items.forEach(item => {
        out += '<div>';
        out += `    <h2>${item.name}</h2>`;
        out += `    <h3>${item.price}</h3>`;
        out += '</div>';
    });
    out += '</body>';
    out += '</html>';
    res.send(out);
});

app.use(function (req, res, next) {
    req.test = 'request.test~';
    res.test = 'response.test!';
    next();
});
app.use(function (request, response, next) {
    response.send('<h1>' + request.test + ' : ' + response.test + '</h1>');
});

// start the server
app.listen(54242, function () {
    console.log('Server running at http://localhost:54242');
});