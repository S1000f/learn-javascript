
window.onload = function () {
    // GET
    document.querySelector('#get').onclick = function () {
        var request = new XMLHttpRequest();
        request.open('GET', '/products', true);
        request.send();
        request.onreadystatechange = event => {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    document.querySelector('#output').value = request.responseText;
                }
            }
        };
    };

    // POST
    document.querySelector('#post').onclick = function () {
        // set variable
        var name = document.querySelector('#name').value;
        var price = document.querySelector('#price').value;
        // do Ajax
        var request = new XMLHttpRequest();
        request.open('POST', '/products', true);
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        request.send(`name=${name}&price=${price}`);
        request.onreadystatechange = event => {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    document.querySelector('#output').value = request.responseText;
                }
            }
        };
    };

    





}