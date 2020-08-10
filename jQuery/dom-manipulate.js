$(document).ready(function () {

    // addClass() and removeClass()
    $('h1').addClass('item');
    $('.item').css('background', 'palegreen');

    $('h1').addClass(index => {
        return 'class' + index;
    });

    $('h1').removeClass(index => {
        return 'class' + index;
    });

    // attr()
    var src = $('img').attr('src');
    console.log(src);

    //// add attribute to dom
    $('img').attr('width', 200);

    $('img').attr('height', index => {
        return (index + 1) * 100;
    });

    $('img').attr({
        width: function (index) {
            return (index + 1) * 100;
        },
        height: 100
    });

    // removeAttr()
    $('img').removeAttr('width');

    // css()
    var color = $('h2').css('color');
    console.log(color);

    $('h2').css('background', 'palegreen');

    var colors = ['dodgerblue', 'coral', 'tomato'];
    $('h2').css('background', index => {
        return colors[index];
    });

    $('h2').css({
        color: index => {
            return colors[index];
        },
        backgroundColor: 'cornflowerblue'
    });

    // html() and text()
    var html = $('h1').html();
    console.log(html);

    var text = $('h1').text();
    console.log(text);

    $('div').html('<h1>$().html() Method</h1>');
    $('div').text('<h1>$().html() Method</h1>');

    $('div').html(index => {
        return '<h1>Heading!-' + index + '</h1>';
    });

    $('div').html((index, html) => {
        return '{{' + html + '}}';
    });

    $('h1').first().remove();
    $('div').empty();

});

