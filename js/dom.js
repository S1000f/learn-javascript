window.onload = () => {
    var header = document.createElement('h4');
    var textnode = document.createTextNode('Hello DOM');

    header.appendChild(textnode);
    document.body.appendChild(header);

    // innerHTML
    var output = '';
    output += '<ul>';
    output +=   '<li>JavaScript</li>';
    output +=   '<li>JQuery</li>';
    output += '</ul>';
    
    document.body.innerHTML = output;
    document.body.innerHTML += '<h3>Document Object Model</h3>';
    // document.body.textContent += '<h3>Document Object Model</h3>';

    //
    var img = document.createElement('img');
    img.src = 'milly.jpeg';
    img.width = 350;
    img.height = 400;

    // setAttribute 사용하여 노드 만들기
    var sully = document.createElement('img');
    sully.setAttribute('src', 'sully01.jpeg');
    sully.setAttribute('width', 400);
    sully.setAttribute('height', 230);
    sully.setAttribute('anything', 330);

    document.body.appendChild(img);
    document.body.appendChild(sully);
    
    
};

// get document objects
window.onload = () => {
    var header1 = document.getElementById('header-1');
    var header2 = document.getElementById('header-2');

    header1.innerHTML = 'hey';
    header2.innerHTML = 'what\'s up?';

    var headers = document.getElementsByTagName('h1');
    headers[0].innerHTML = 'anything?';
    headers[1].innerHTML = 'nothing...';

    for (var i = 0; i < headers.length; i++) {
        headers[i].innerHTML = `loop var i = ${i}`;
    }

    var header11 = document.querySelector('#header-1');
    header11.innerHTML = 'css selector';

    // style manipulating
    header11.style.border = '2px solid black';
    header11.style.color = 'dodgerblue';
    header11.style.fontFamily = 'helvetica';
    header11.style['background-color'] = 'tomato';

    document.body.removeChild(header2);
    header11.parentNode.removeChild(header11);
}