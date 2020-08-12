$(document).ready(function () {
    $('a').click(function (event) {
        $(this).css('background-color', 'tomato');
        // event.stopPropagation();
        // event.preventDefault();
        // or by using this
        return false;
    });

    $('h5').click(function () {
        $(this).css('backgroundColor', 'dodgerblue');
    });

    // $('h1#h1').on('click', function () {
    //     var len = $('h1#h1 ~ h1').length;
    //     var target = $(this).html();

    //     $('#wrap').append('<h1>' + len + ' - ' + target + '</h1>');
    // })

    $('#wrap').on('click', 'h1#h1', function () {
        var length = $('h1#h1').length;
        var target = $(this).html();
        $('#wrap').append('<h1 id="h1">' + length + ' - ' + target + '</h1>');
    })

    // mouse event
    $('.outer').mouseover(function () {
        $(this).append('<h5>MOUSEOVER</h5>');
    }).mouseenter(function () {
        $(this).append('<h5>MOUSEENTER</h5>');
    });

    // keyboard event
    $('textarea').keyup(function () {
        var js = this.value.length;
        var inputLen = $(this).val().length;
        var remain = 150 - inputLen;

        $('h3.key').html(remain);

        if (remain >= 0) {
            $('h3.key').css('color', 'dodgerblue');
        } else {
            $('h3.key').css('color', 'tomato');
        }
    })

    // window event
    $(window).scroll(function () {
        var scrollHeight = $(window).scrollTop() + $(window).height();
        var documentHeight = $(document).height();

        if (scrollHeight === documentHeight) {
            for (var i = 0; i < 5; i++) {
                $('body').append('<h2>' + documentHeight + '</h2>', '<h2>Unlimited Power!!!</h2>');
            }
        }
    })

    // input form event
    $('#my-form').submit(function (event) {
        event.preventDefault();

        var name = $('#name').val();
        var password = $('#password').val();

        alert(name + ' : ' + password);
    });

    $('#all-check').change(function () {
        if (this.checked) {
            $('#check-item > input:checkbox').prop('checked', true);
        } else {
            $('#check-item').children().prop('checked', false);
        }
    })
})