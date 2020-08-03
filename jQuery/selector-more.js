// 자손 선택자
$(document).ready(function () {
    $('body > div > ul').css('color', 'dodgerblue');
});

// 후손 선택자
$(document).ready(function () {
    $('div li').css('border', '1px dotted tomato');
});

// 속성 선택자
$(document).ready(function () {
    $('input[type="text"]').val('Hello jquery');
})

// filter selector

function doit() {
    var selected = $('select > option:selected');
    var value = selected.val();
    selected.css('backgroundColor', 'dodgerblue');
    alert(value);
}

function doitit() {
    var box = $('input:text');
    var val = box.val();
    if (val !== '') {
        box.css('backgroundColor', 'dodgerblue');
    } else {
        box.css('backgroundColor', 'tomato');
    }
}

//// position filter selector
$(function () {
    $('tr:odd').css('background', 'dodgerblue');
    $('tr:even').css('background', 'tomato');
    $('th').css('background', 'black').css('color', 'white');
})

//// function filter selector
$(function () {
    $('td:nth-child(2n-1)').css('background', 'green').css('color', 'red');
})
