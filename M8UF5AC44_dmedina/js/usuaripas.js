function comprova() {
    var x = document.form.x.value;
    var y = document.form.y.value;
    var pass = "1234";
    var z = document.form.login.value;
    var name = "Ibai";
    if (x == y) {
        if (x == pass) {
            if ( z == name) {
                alert ("Pots entrar");
                }else {
                alert ("Usuari incorrect");
                }
        }else {
            alert ("Pasword invalid");
        }
    }else {
        alert ("Els paswords no coincideixen");
        alert (x);
        alert (y);
        }
}
