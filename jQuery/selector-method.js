// select methods
// --------------
// filter()
$(document).ready(function () {
    $('h3:odd').css({
        backgroundColor: 'dodgerblue',
        color: 'tomato'
    });

    $('h3').filter(':even').css({
        backgroundColor: 'black',
        color: 'white'
    });

    $('h3').filter(i => {
        return i % 3 === 0;
    }).css({
        backgroundColor: 'palegreen',
        color: 'green'
    });
});

// end()
$(function () {
    $('h1').css('background', 'orange').filter(':even').css('color', 'tomato');

    //// without end()
    $('h1').css('background', 'orange');
    $('h1:even').css('color', 'tomato');
    $('h1:odd').css('color', 'dodgerblue');

    //// with end()
    $('h1').css('background', 'tomato')
        .filter(':even').css('color', 'palegreen').end()
        .filter(':odd').css('color', 'dodgerblue');

});

// eq(), first() and last()
$(document).ready(function () {
    $('h2').eq(1).css('background', 'palegreen').end()
        .eq(-1).css('background', 'lightblue').end()
        .first().css('color', 'coral');
})

// add()
$(document).ready(function () {
    $('h4').css('background', 'gray').add('h5').css('float', 'left');
})

