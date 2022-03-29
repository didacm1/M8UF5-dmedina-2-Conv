function comp1() {
    var pr = document.getElementById("resp1")
    var a = "2020";
    var res1 = document.getElementById("res1")

    if (pr.value == a) {
        res1.innerHTML = "Correcte";
    } else {
        res1.innerHTML = "Incorrecte"
    }
}
function comp2() {
    var pr = document.getElementById("resp2")
    var a = "Tenz";
    var res2 = document.getElementById("res2")

    if (pr.value == a) {
        res2.innerHTML = "Correcte";
    } else {
        res2.innerHTML = "Incorrecte"
    }
}
function comp3() {
    var pr = document.getElementById("resp3")
    var a = "Fracture";
    var res3 = document.getElementById("res3")

    if (pr.value == a) {
        res3.innerHTML = "Correcte";
    } else {
        res3.innerHTML = "Incorrecte"
    }
}
function comp4() {
    var pr = document.getElementById("resp4")
    var a = "Totes";
    var res4 = document.getElementById("res4")

    if (pr.value == a) {
        res4.innerHTML = "Correcte";
    } else {
        res4.innerHTML = "Incorrecte"
    }
}
function comp5() {
    var pr = document.getElementById("resp5")
    var a = "Kyedae";
    var res5 = document.getElementById("res5")

    if (pr.value == a) {
        res5.innerHTML = "Correcte";
    } else {
        res5.innerHTML = "Incorrecte"
    }
}
var contingut = document.querySelector("#contingut");
function agafar() {
    fetch("https://randomuser.me/api/")
        .then((res) => res.json())
        .then((data) => {
            console.log(data.results["0"]);
            contingut.innerHTML = `
<img src="${data.results["0"].picture.large}"
width="100px" class="img-fluid rounded-circle">
<p id="nomss">Nom: ${localStorage.getItem("nom")}</p>
<p id="cognoms">Cognom: ${localStorage.getItem("cognom")}</p>
<p id="edad">Edad: ${localStorage.getItem("edad")}</p>
`;
        });
        //Pongo getitem en porque si pongo setItem no se ve nada
}