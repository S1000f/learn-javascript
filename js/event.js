window.onload = () => {
    var header = document.getElementById('header');

    header.onclick = () => {
        alert('click...');

        header.onclick = null;
    };
};

window.onload = () => {
    document.getElementById('header').onclick = function (e) {
        this.style.color = 'tomato';
        this.style.backgroundColor = 'dodgerblue';
        this.innerHTML = 'clicked...';

        var event = e || window.event;

        document.body.innerHTML = '';
        for (var key in event) {
            document.body.innerHTML += `<p>${key} : ${event[key]}</p>`;
        }
    };
};

window.onload = () => {
    var buttonA = document.getElementById('button-a');
    var buttonB = document.getElementById('button-b');
    var counterA = document.getElementById('counter-a');
    var counterB = document.getElementById('counter-b');

    buttonA.onclick = () => {
        counterA.innerHTML = Number(counterA.innerHTML) + 1;
    };
    buttonB.onclick = () => {
        counterB.innerHTML = Number(counterB.innerHTML) + 1;
        buttonA.onclick();
    };
};

function whenClick() {
    var a = 202;
    alert(a);
}