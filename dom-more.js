window.onload = () => {
    var clock = document.getElementById('clock');

    setInterval(() => {
        clock.innerHTML = new Date().toString();
    }, 1000);
}

window.onload = () => {
    var sun = document.getElementById('sun');
    var earth = document.getElementById('earth');
    var moon = document.getElementById('moon');

    sun.style.position = 'absolute';
    earth.style.position = 'absolute';
    moon.style.position = 'absolute';
    sun.style.left = 250 + 'px';
    sun.style.top = 200 + 'px';

    var earthAngle = 0;
    var moonAngle = 0;

    setInterval(() => {
        var earthLeft = 250 + 150 * Math.cos(earthAngle);
        var earthTop = 200 + 150 * Math.sin(earthAngle);
        var moonLeft = earthLeft + 50 * Math.cos(moonAngle);
        var moonTop = earthTop + 50 * Math.sin(moonAngle);

        earth.style.left = earthLeft + 'px';
        earth.style.top = earthTop + 'px';
        moon.style.left = moonLeft + 'px';
        moon.style.top = moonTop + 'px';

        earthAngle += 0.1;
        moonAngle += 0.3;
    }, 1000 / 24);


}