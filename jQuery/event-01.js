$(document).ready(function () {
    $('h1').on('click', function () {
        $(this).html(function (index, html) {
            return html + '+';
        });
    });

    $('h1').on({
        mouseenter: function () {
            $(this).addClass('reverse');
        },
        mouseleave: function () {
            $(this).removeClass('reverse');
        }
    });

    // hover()
    $('h1').hover(function () {
        var changeText = 'here';
        if ($(this).html() !== changeText) {
            $(this).attr('origin', $(this).text());
        }
        $(this).text(changeText);
    }, function () {
        $(this).text($(this).attr('origin'));
    });

    // off()
    $('h2').click(function () {
        $(this).html('CLICK');
        $(this).off();
    });

    // context parameter
    $('div').click(function () {
        var header = $('h3', this).text();
        var para = $('p', this).text() + '!!!';

        alert(header + '\n' + para);
    });

    // trigger()
    $('h4').click(function () {
        $(this).html(function (index, html) {
            return html + '*';
        });
    });

    setInterval(function () {
        $('h4').last().trigger('click');
    }, 1000);
    
    setInterval(function () {
        $('h4').first().click();
    }, 1000);

    $('h2').click(function (event, data1, data2) {
        alert(data1 + ' : ' + data2);
    });

    $('h2').eq(1).trigger('click', [43, 554]);

})