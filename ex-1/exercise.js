// Use this function that is linked to the button to change the background

function set_background() {
    var elem = document.querySelectorAll('p');
    elem.forEach(function(el){
        el.style.backgroundColor = "blue";
    })
}
