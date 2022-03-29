function guardar2() {
    if ( document.querySelector("#pass1").value == document.querySelector("#pass2").value) {
        localStorage.setItem ("pass", document.querySelector("#pass1").value);
        localStorage.setItem ("login", document.querySelector("#user").value);
    }else {
        alert ("Els paswords no coincideixen");
        }
}

function comprova() {
    if ( document.querySelector("#user").value == localStorage.getItem ("login")) {
        if (document.querySelector("#pass1").value == document.querySelector("#pass2").value) {
            if (document.querySelector("#pass1").value == localStorage.getItem ("pass")) {
                alert ("Pots entrar");
            }else {
                    alert ("Pasword invalid");
                }
        }else {
            alert ("Els paswords no coincideixen");
            }
    }else {
        alert ("Usuari incorrect");
        }
}
function guardarCookies() {
    localStorage.setItem ("nom", document.querySelector("#nom").value);
    localStorage.setItem ("cognom", document.querySelector("#cognom").value);
}
    
function recuperarCookies() {
    document.querySelector("#nom").value = localStorage.getItem("nom");
    document.querySelector("#cognom").value = localStorage.getItem("cognom");
}
    
function esborrarCookies() {
    document.querySelector("#nom").value = null;
    document.querySelector("#cognom").value = null;
    localStorage.setItem ("nom", "");
    localStorage.setItem ("cognom", "");
}