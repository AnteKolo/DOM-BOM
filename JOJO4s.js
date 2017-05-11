function funk() {
    document.getElementById("p").innerHTML = "";
    if (document.getElementById("cb1").checked){
        document.getElementById("p").innerHTML += window.innerHeight + "<br>";
    }
    if (document.getElementById("cb2").checked){
        document.getElementById("p").innerHTML += window.innerWidth;
    }
}

function otvori() {
    prozorcic = window.open("", "PROZOR", "width=200, height=200");
}

function zatvori() {
    prozorcic.close();
}

function info() {
    document.getElementById("infop").innerHTML = "";
    if (document.getElementById("cbh").checked){
        document.getElementById("infop").innerHTML += screen.height + "<br>";
    }
    if (document.getElementById("cbw").checked){
        document.getElementById("infop").innerHTML += screen.width + "<br>";
    }
    if (document.getElementById("cbah").checked){
        document.getElementById("infop").innerHTML += screen.availHeight + "<br>";
    }
    if (document.getElementById("cbaw").checked){
        document.getElementById("infop").innerHTML += screen.availWidth + "<br>";
    }
}

function infobj() {
    var s = "";
    s += window.location.protocol + "<br>";
    s += window.location.host + "<br>";
    s += window.location.hostname + "<br>";
    s += navigator.appName + "<br>";
    s += navigator.appCodeName + "<br>";
    s += navigator.product + "<br>";
    s += navigator.platform;
    document.getElementById("infoar").innerHTML = s;
}