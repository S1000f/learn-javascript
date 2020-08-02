function registerEventListener(node, event, listener) {
    try {
        // for W3C DOM 2
        node.addEventListener(event, listener, false);
    } catch (exception) {
        // for old version IE
        node.attachEvent('on' + event, listener);
    }
};
window.onload = function () {
    var header = document.getElementById('header4');
    registerEventListener(header, 'click', function () {
        alert('click');
    });
};

// 예외 객체와 속성
try {
    var array = new Array(999999999999);
} catch (e) {
    alert(e);
    alert(e.name + e.message + e.description);
}

// throw Keyword
function divide(x, y) {
    if (y === 0) {
        throw 'DivideByZeroException';
    } else {
        return x / y;
    }
}

try {
    console.log(divide(5, 0));
} catch (e) {
    if (e === 'DivideByZeroException') {
        console.log('divide(x, y) and then y > 0');
    }
}
