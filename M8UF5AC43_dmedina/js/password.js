function validapsw() {
    var a = document.form.a.value;
    var b = document.form.b.value;
    if (a == b) {
        alert ("La contrasenya coinsideix.");
    } else {
        alert ("La contrasenya no coincideix.");
    }
}