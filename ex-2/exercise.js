function getAttributes() {
    var a = document.getElementById('pwcdr');
    var href = a.getAttribute('href');
    var type = a.getAttribute('type');
    var hreflang = a.getAttribute('hreflang');
    var rel = a.getAttribute('rel');
    var target = a.getAttribute('target');
    
    var p1 = document.createElement('p');
    var href = document.createTextNode('The value of the href attribute of the link is : ' + href);
    p1.appendChild(href);
    var curentP = document.getElementsByName('p')[0];
    document.body.insertBefore(p1, curentP);


    var p2 = document.createElement('p');
    type = document.createTextNode('The value of the type attribute of the link is : ' + type);
    p2.appendChild(type);
    currentP = document.getElementsByName('p')[1];
    document.body.insertBefore(p2, currentP);

    var p3 = document.createElement('p');
    hreflang = document.createTextNode('The value of the hreflang attribute of the link is : ' + hreflang);
    p3.appendChild(hreflang);
    curentP = document.getElementsByName('p')[2];
    document.body.insertBefore(p3, currentP);

    var p4 = document.createElement('p');
    rel = document.createTextNode('The value of the rel attribute of the link is : ' + rel);
    p4.appendChild(rel);
    currentP = document.getElementsByName('p')[3];
    document.body.insertBefore(p4, currentP);

    var p5 = document.createElement('p');
    target = document.createTextNode('The value of the target attribute of the link is : ' + target);
    p5.appendChild(target);
    currentP = document.getElementsByName('p')[4];
    document.body.insertBefore(p5, currentP);
}
