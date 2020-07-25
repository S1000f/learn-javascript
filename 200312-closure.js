
function outter() {
    var title = 'coding everyone';
    function inner() {
        console.log(title);
    }
    inner();
}
outter();

// Closure outter2의 지역변수 title2를 사용하는 내부함수 inner2가 소멸하기 전까지는 외부함수도 살아있다.
function outter2() {
    var title2 = 'hey';
    return function() {
        console.log(title2);
    }
}
var inner2 = outter2();
inner2();

function factory_movie(title) {
    return {
        get_title : function() {
            return title;
        },
        set_title : function(_title) {
            title = _title
        }
    }
}
var ghost = factory_movie('Ghost in the shell');
var matrix = factory_movie('Matrix');

console.log(ghost.get_title());
console.log(matrix.get_title());

ghost.set_title("매트릭스");
console.log(ghost.get_title());

var arr = [];
for(var i = 0; i < 5; i++) {
    arr[i] = function(idx) {
        return function() {
            return idx;
        }
    }(i);
}

var arr2 = [];
for(var i = 0; i < 5; i++) {
    arr2[i] = function(id) {
        return id;
    }(i);
}

for(var index in arr) {
    console.log(arr[index]());
}

for(var index in arr2) {
    console.log(arr2[index]);
}
