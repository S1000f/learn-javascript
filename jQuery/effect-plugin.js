$(document).ready(function () {
    $('div.cl').hover(function () {
        $(this).addClass('reverse', 1000);
    }, function () {
        $(this).removeClass('reverse', 1000);
        $(this).stop(false, true);
    });

    // easing
    $('button').click(function () {
        var easing = $('select > option:selected').html();

        $('div#ease').animate({
            left: 400
        }, 2000, easing).animate({
            left: 0
        }, 1000, easing);
    });

    // css basic
    $('.inner-box').each(function (index, item) {
        $(this).css({
            left: index * 90,
            top: index * 90
        });
    })

    // image slider
    function moveSlider(index) {
        var willMoveLeft = -(index * 600);
        $('.slider-panel').animate({
            left: willMoveLeft
        }, 'slow');

        $('.control-button[data-index=' + index + ']').addClass('active');
        $('.control-button[data-index!=' + index + ']').removeClass('active');

        $('.slider-text[data-index=' + index + ']').show().animate({
            left: 0
        }, 'slow');

        $('.slider-text[data-index!=' + index + ']').hide('slow', function () {
            $(this).css('left', -300);
        })
    }



    $('.slider-text').css('left', -300).each(function (index) {
        $(this).attr('data-index', index);
    });

    $('.control-button').each(function (index) {
        $(this).attr('data-index', index);
    }).click(function () {
        var index = $(this).attr('data-index');
        moveSlider(index);
    });

    var randomNum = Math.round(Math.random() * 4);
    moveSlider(randomNum);

})