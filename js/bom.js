// window
var child = window.open('http://49.50.173.224:8080/violetSky/', 'child', 'width=600, height=400', true);
setTimeout(function () {
    child.close();
}, 1000);

var children = window.open('', '', 'width=300, height=200');
children.document.write('<h2>From Parent window');
children.moveTo(0, 400);
children.moveBy(30, 30);

// screen

var dude = window.open('', '', 'width=300, height=200');
var width = screen.width;
var height = screen.height;

dude.moveTo(0, 0);
dude.resizeTo(width, height);
dude.resizeBy(-100, -100);

// location
location = 'https://google.com';
location.href = 'https://naver.com';

location.assign('http://hanbit.co.kr');
location.replace('https://github.com/S1000f');
