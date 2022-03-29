function guardar() {
    localStorage.setItem ("nom", document.querySelector("#nom").value);
    localStorage.setItem ("cognom", document.querySelector("#cognom").value);
    localStorage.setItem("usu", document.querySelector("#user").value);
    localStorage.setItem("passwd1", document.querySelector("#pass1").value);
    localStorage.setItem("passwd2", document.querySelector("#pass2").value);
    }
    
    function recuperar() {
    document.querySelector("#nom").value = localStorage.getItem("nom");
    document.querySelector("#cognom").value = localStorage.getItem("cognom");
    document.querySelector("#user").value = localStorage.getItem("usu");
    document.querySelector("#pass1").value = localStorage.getItem("passwd1");
    document.querySelector("#pass2").value = localStorage.getItem("passwd2");
    }
    
    function esborrar() {
    document.querySelector("#nom").value = null;
    document.querySelector("#cognom").value = null;
    document.querySelector("#user").value = null;
    document.querySelector("#pass1").value = null;
    document.querySelector("#pass2").value = null;
    localStorage.setItem("nom", "");
    localStorage.setItem("cognom", "");
    localStorage.setItem("usu","");
    localStorage.setItem("passwd1","");
    localStorage.setItem("passwd2","");
    }