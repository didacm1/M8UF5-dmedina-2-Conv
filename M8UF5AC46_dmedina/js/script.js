function numero(num) {
    let inputDP = document.getElementById("display");
    inputDP.value = inputDP.value + num;
}
function calcular() {
    let inputDP = document.getElementById("display");
    inputDP.value = eval (inputDP.value);
}
function limpiar() {
    let inputDP = document.getElementById("display");
    inputDP.value = null;
}
function dellastnum() {
    let inputBF = document.getElementById("display");
    let inputAF = inputBF.value.slice(0,-1);
    inputBF.value = inputAF;
}