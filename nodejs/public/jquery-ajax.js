$(document).ready(function () {
    $.ajax('/data.html', {
        success: data => {
            $('body').append(data);
        }
    });

    $.ajax({
        url: '/parameter',
        type: 'GET',
        data: {
            name: 'test',
            region: 'test region'
        },
        success: (data, status, xhr) => {
            $('body').append(data);
            $('body').append(status);
        }
    });

    $.get('/data.html', data => {
        $('body').append(data);
    });
    // $('body').load('/data.html'); // you can use it for the same result with former one

    $.getJSON('/data.json', data => {
        $.each(data, (index, value) => {
            $('body').append(`<h4>${value.name} : ${value.price} by $.each</h4>`);
        });
        data.forEach(element => {
            $('body').append(`<h4>${element.name} : ${element.price} by forEach</h4>`);
        });
    });

    $.ajax({
        url: '/data.xml',
        success: data => {
            $(data).find('product').each(function () {
                var name = $(this).find('name').text();
                var price = $(this).find('price').text();
                $('<h1></h1>').text(name + ' : ' + price + ' from data.xml').appendTo('body');
            });
        }
    });

    $('#get').click(() => {
        $.ajax({
            url: '/products',
            type: 'GET',
            dataType: 'text',
            success: data => {
                $('#output').val(data);
            }
        })
    });

    $('#post').click(function () {
        $.ajax({
            url: '/products',
            type: 'POST',
            dataType: 'text',
            data: {
                name: $('#name').val(),
                price: $('#price').val()
            },
            success: data => {
                $('#output').val(data);
            }
        })
    });

    // create request parameter from object
    var data = {
        name: 'Milly',
        class: 'cat'
    };
    $('<h1></h1>').text($.param(data)).appendTo('body');

    // create request parameter in various ways
    //// 1
    $('#my-form').submit(function (event) {
        var name = $('#name1').val();
        var region = $('#region1').val();

        var url = '/parameter?name=' + name + '&region=' + region;
        $('#wrap').load(url);

        event.preventDefault();
    });
    //// 2
    $('#my-form').submit(function (event) {
        var name = $('#name1').val();
        var region = $('#region1').val();

        var url = '/parameter';
        var data = {
            name: name,
            region: region
        };
        var param = $.param(data);
        $('#wrap').load(url, param);

        event.preventDefault();
    });
    //// 3
    $('#my-form').submit(function (event) {
        var name = $('#name1').val();
        var region = $('#region1').val();

        var url = '/parameter';
        var data = {
            name: name,
            region: region
        };
        $('#wrap').load(url, data);

        event.preventDefault();
    });
    //// 4
    $('#my-form').submit(function (event) {
        $('#wrap').load('/parameter',$(this).serialize());

        event.preventDefault();
    });
    //// 5
    $('#my-form').submit(function (event) {
        $('#wrap').load('/parameter',$(this).serializeArray());

        event.preventDefault();
    });
})