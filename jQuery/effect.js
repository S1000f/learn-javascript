$(document).ready(function () {

    // show, hide, fadeIn, fadeOut, slideDown, slideUp, Toggle()
    $('button').click(function () {
        $('div.page').fadeToggle('fast');
    });

    // animate()
    var originWidth = $('.animate').css('width');
    $('.animate').hover(function () {
        $(this).animate({
            left: 500,
            top: 130,
            opacity: 0.3,
            width: '80px' // it's ok either 80 or '80px'
        }, 'slow');
    }, function () {
        $(this).animate({
            left: 0,
            top: 0,
            opacity: 1,
            width: originWidth
        }, 'fast');
    });

    // animate() -relative value for animation
    $('div.rel').click(function () {
        var width = $(this).css('width');
        var height = $(this).css('height');

        //// find origin value manually
        $(this).animate({
            width: parseInt(width) + 50,
            height: parseInt(height) + 50
        }, 'slow');

        //// by using '+=' and '-='
        $(this).animate({
            left: '+=30'
        }, 'slow');
    })

    var test = '30px';
    console.log(parseInt(test));
    var test2 = '30aaa';
    console.log(parseInt(test2));
    var test3 = 'aaa50';
    console.log(parseInt(test3));
    var test4 = '20px40';
    console.log(parseInt(test4));

    // clearQueue()
    var target = $('.clearqueue');
    target.animate({ left: '+=80' }, 2000);
    target.animate({ width: '+=60' }, 2000);
    target.animate({ height: '+=30' }, 2000);

    setInterval(function () {
        target.clearQueue();
        // target.hide();
        // target.show();
    }, 3000);

    // stop()
    $('button#stop').click(function () {
        var html = $(this).html();
        var evalText = "$('div#stop')." + html;

        eval(evalText);
    });

    setInterval(function () {
        $('div#stop').animate({
            left: 500
        }, 1000).animate({
            left: 0
        }, 1000);
    }, 2000);

    // delay()
    $('.delay').each(function (index) {
        $(this).delay(index * 500).animate({
            left: 500
        }, 'slow');
    });


})