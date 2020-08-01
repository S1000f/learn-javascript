// 보조함수
// ---------

// 랜덤한 정수 생성
function nextRandomInteger(limit) {
    return Math.floor(Math.random() * limit);
}

// 랜덤한 알파벳 리턴
var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYG';
function randomAlphabet() {
    return alphabet.charAt(nextRandomInteger(25));
}

// 음수와 양수로 랜덤한 속도를 생성하는 함수
function randomSpeed(maxSpeed) {
    return Math.random() * maxSpeed - maxSpeed / 2;
}

// 생성자함수
// ----------

var canvasWidth = 700;
var canvasHeight = 400;

function movingText() {
    // 위치와 속도
    this.x = nextRandomInteger(canvasWidth);
    this.y = nextRandomInteger(canvasHeight);
    this.vx = randomSpeed(10);
    this.vy = randomSpeed(10);
    this.ax = 0.1;
    this.ay = 0;

    // 문서객체 생성
    this.body = document.createElement('h1');
    this.body.innerHTML = randomAlphabet();
    this.body.style.position = 'absolute';

    // 문서객체를 바디에 추가
    document.body.appendChild(this.body);
}

movingText.prototype.move = function () {
    // 범위 검사
    if (this.x < 0 || this.x > canvasWidth) {
        this.vx *= -1;
    }
    if (this.y < 0 || this.y > canvasHeight) {
        this.vx *= -1;
    }

    // 이동
    this.vx += this.ax;
    this.vy += this.ay;
    this.x += this.vx;
    this.y += this.vy;
    

    // 화면에 이동표시
    this.body.style.left = this.x +'px';
    this.body.style.top = this.y + 'px';
}

// window.onload

window.onload = () => {
    var movingTexts = [];

    for (var i = 0; i < 100; i++) {
        movingTexts.push(new movingText());
    }

    // 움직임 작동
    setInterval(() => {
        for (var i in movingTexts) {
            movingTexts[i].move();
        }
    }, 1000 / 30);
};
