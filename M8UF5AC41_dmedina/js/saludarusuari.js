function enviarSalutacio() {
    var nom = document.getElementById("nom");
    var cognom = document.getElementById("cognom");
    var username = nom.value + " " + cognom.value
    document.getElementById("salutacio").innerHTML = "Hola "+username + ", gràcies per omplir el formulari!"
}