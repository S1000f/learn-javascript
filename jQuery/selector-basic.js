// select all
$(document).ready(function () {
    $('*').css('color', 'tomato');
})

// tag select
$(document).ready(function () {
    $('h1, p').css('color', 'dodgerblue');
})

// id select
$(document).ready(function () {
    $('#target').css('color', 'orange');
})

// class select
$(document).ready(function () {
    $('.item').css('color', 'red');
    $('.item.select').css('border', '1px solid tomato');
})

