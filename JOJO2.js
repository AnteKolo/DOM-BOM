var boja = "color:#0000FF";

function divp() {
    var x = document.getElementById('div');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        document.getElementById("bt1").innerHTML = "Sakri!"
    } else {
        x.style.display = 'none';
        document.getElementById("bt1").innerHTML = "Pokazi!"
    }
}
function gumbp() {
    var cust = document.getElementById("inp").value;
    var para = document.createElement("p");
    var tkst = document.createTextNode(cust);
    para.appendChild(tkst);
    var elem = document.getElementById("div2");
    elem.appendChild(para);
}

function gumbp2() {
    var cust2 = document.getElementById("boj").value;
    var div23 = document.getElementById("div2");
    div23.style.backgroundColor = cust2;
}


