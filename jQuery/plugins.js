$.fn.myPlugin = function () {
    $(this).css('color', 'tomato');
    $(this).css('background', 'dodgerblue');
};

$(document).ready(function () {
    $('a[rel="lightbox"]').eq(1)
        .attr('title', 'a horse and a girl')
        .end()
        .colorbox({
            transition: 'fade',
            opacity: 0.5,
            onOpen: () => {
                alert('lightbox run');
            },
            onClosed: () => {
                alert('closed');
            }
        });

    $('a#colorbox').colorbox({
        inline: true,
        width: 500
    })

    $('a#colorbox2').colorbox({
        inline: true
    }).click(function () {
        setTimeout(function () {
            $.colorbox.close();
        }, 3000);
    }).trigger('click');

    $('.myplugin').myPlugin();
})
