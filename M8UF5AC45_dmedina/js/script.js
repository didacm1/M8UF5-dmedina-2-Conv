

function comprova() {
    if ( document.querySelector("#pass1").value == document.querySelector("#pass2").value) {
        localStorage.setItem ("passwd1", document.querySelector("#pass1").value);
        localStorage.setItem ("usu", document.querySelector("#user").value);
    }else {
        alert ("Els paswords no coincideixen");}
    if ( document.querySelector("#user").value == localStorage.getItem ("usu")) {
        if (document.querySelector("#pass1").value == document.querySelector("#pass2").value) {
            if (document.querySelector("#pass1").value == localStorage.getItem ("passwd1")) {
                alert ("Pots entrar");
            }else {
                    alert ("Pasword invalid");
                }
        }else {
            }
    }else {
        alert ("Usuari incorrect");
        }
}
