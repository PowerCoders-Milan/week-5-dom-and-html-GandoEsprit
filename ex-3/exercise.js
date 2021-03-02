function insert_Row() {
    var table = document.getElementById('sampleTable');
    var tr = table.insertRow();
    var td1 = tr.insertCell();
    var txtCellul = document.createTextNode('New Cell1')
    td1.appendChild(txtCellul);
    var td2 = tr.insertCell();
    txtCellul = document.createTextNode('New Cell2');
    td2.appendChild(txtCellul);

}
