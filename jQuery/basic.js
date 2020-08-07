// $.each(object, function(i,e) {})
$(document).ready(function () {
    var array = [
        { name: 'milly', link: 'http://github.com/s1000f' },
        { name: 'yeon', link: 'http://github.com' },
        { name: 'sully', link: 'http://naver.com' }
    ];

    $.each(array, function(index, e) {
        var output = '';

        output += `<a href="${e.link}">`;
        output += `  <h1>${e.name}</h1>`;
        output += `</a>`;

        document.body.innerHTML += output;
    })
})

// $(selector).each(function(i, e) {})
$(document).ready(function () {
    $('h2').addClass(function (i) {
        return `high-light-${i}`;
    })

    $('h2').each(function (index, item) {
        $(this).addClass('add-' + index);
    })
});

// $.extend()
$(document).ready(function () {
    var object = { name: 'milly' };

    $.extend(object, {
        region : 'deagu',
        part: 'hoooolay'
    });

    $.each(object, function (k, e) {
        console.log(`${k} : ${e}`);
    });
});

// $.extend and option object
var ob = $.extend({ a:10 }, { a:20, b: 30 }, { c:50 });
console.log(JSON.stringify(ob));

function test(option) {
    option = $.extend({
        valueA: 10,
        valueB: 20,
        valueC: 30
    }, option);

    console.log(`${option.valueA} : ${option.valueB} : ${option.valueC}`);
};

test({
    valueA: 152,
    valueC: 104
});

