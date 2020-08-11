$(document).ready(function () {

    // create document objects
    $('<h1></h1>').html('Hello world!').css('color', 'coral').appendTo('body');

    $('<h2>Hello JavaScript!</h2>').css({
        background: 'palegreen',
        color: 'tomato'
    }).attr('item', true).appendTo('body');

    $('<img />').attr('src', '../milly.jpeg').attr({
        width: 130,
        height: 150
    }).appendTo('body');

    $('<img />', {
        src: '../sully01.jpeg',
        width: 240,
        height: 150
    }).appendTo('body');

    // insert DO onto another DO

    var h1 = '<h1>Hey1</h1>';
    var h2 = '<h2>hey2</h2>';
    $('body').append(h1, h2, h1, h2);

    var contents = [
        { name: 'milly', age: 9 },
        { name: 'yeon', age: 9 },
        { name: 'sully', age: 10 }
    ];
    $('div').append(index => {
        var item = contents[index];
        var output = '';
        output += `<h1>${item.name}</h1>`;
        output += `<h2>${item.age}</h2>`;

        return output;
    });

    setInterval(function () {
        $('img').first().appendTo('body');
    }, 2000);

    // clone()
    $('nav').append($('h4').clone());
})