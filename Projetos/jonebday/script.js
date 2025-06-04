let key = false;

function abrir(){
    key = true;
    if (key == true) {
        alert(key);
        document.getElementById("menu").style.display="block";
    } else {
        document.getElementById("menu").style.display="none";
    }
}