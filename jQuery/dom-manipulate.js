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

});

