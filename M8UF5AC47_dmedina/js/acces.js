
function validar() {
    if (document.getElementById("nombres").value == localStorage.getItem("nom"))
        if (document.getElementById("apellidos").value == localStorage.getItem("cognom"))
            if (document.getElementById("edad").value == localStorage.getItem("edad")) 
                /*Pongo esto porque si no va*/alert("3")
                if (document.getElementById("edad").value >= 18) {
                    window.open("web/trivial-api.htm");
                }
                else {
                    alert("No entras tonto");
                }
    }
console.log("cognom")