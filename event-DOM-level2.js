window.onload = () => {
    var header = document.getElementById('header4');

    header.addEventListener('click', function () {
        this.innerHTML += '+';
    });
}

// 다양한 이벤트모델 함께 사용하기
window.onload = () => {
    var header = document.getElementById('header4');

    // 인터넷 익스플로러 경우
    if (header.attachEvent) {
        var handler = function () {
            window.event.srcElement.style.color = 'tomato';
            window.event.srcElement.dispatchEvent('onclick', handler);
        };
        header.attachEvent('onclick', handler);
    } else {
        // 그 외의 브라우저
        var handler = function () {
            this.style.color = 'dodgerblue';
            this.removeEventListener('click', handler);
        };
        var handler2 = function () {
            this.innerHTML += '+';
        }
        header.addEventListener('click', handler);
        header.addEventListener('click', handler2);
    }
};
