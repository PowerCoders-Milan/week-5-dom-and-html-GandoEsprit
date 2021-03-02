function removecolor() {
    var parent = document.getElementById('colorSelect');
    var childs = parent.querySelector('option');
    parent.removeChild(childs);
}
