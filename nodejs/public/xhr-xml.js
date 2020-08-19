window.onload = function () {
    // create XMLHttpRequest object
    var request = new XMLHttpRequest();

    request.onreadystatechange = event => {
        if (request.readyState === 4) {
            if (request.status === 200) {
                var xml = request.responseXML;
                
                var names = xml.querySelectorAll('name');
                var prices = xml.getElementsByTagName('price');
                for (var i = 0; i < names.length; i++) {
                    var name = names[i].childNodes[0].nodeValue;
                    var price = prices[i].childNodes[0].nodeValue;
                    document.body.innerHTML += `<h1>${name}</h1>`;
                    document.body.innerHTML += `<h2>${price}</h2>`;
                }
                document.body.innerHTML += `<p>ajax XML</p>`;
            }
        }
    };

    // initiate xmlHttpRequest object
    request.open('GET', '/data.xml', true);
    // do Ajax
    request.send();
};

