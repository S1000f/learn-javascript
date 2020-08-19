window.onload = function () {
    // create XMLHttpRequest object
    var request = new XMLHttpRequest();

    request.onreadystatechange = event => {
        if (request.readyState === 4) {
            if (request.status === 200) {
                var json = eval('(' + request.responseText + ')');
                var orUsingJSON = JSON.parse(request.responseText);

                var out = '';
                for (var i = 0; i < json.length; i++) {
                    for (var key in json[i]) {
                        out += `<h2>${i} : ${json[i][key]}</h2>`;
                    }
                }
                document.body.innerHTML += out;
            }
        }
    };

    // initiate xmlHttpRequest object
    request.open('GET', '/data.json', true);
    // do Ajax
    request.send();
    // print response, when syncronous
    document.body.innerHTML += request.responseText;
}
