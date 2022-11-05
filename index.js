let operandoa;
let operandob;
let operandon;
function init() {
    let visualizacion = document.getElementById('visualizacion');
    let reiniciar = document.getElementById("reinicio");
    let borrar = document.getElementById("borrar");
    let suma = document.getElementById("suma");
    let resta = document.getElementById("resta");
    let multi = document.getElementById("multi");
    let division = document.getElementById("division");
    let igual = document.getElementById("igual");
    let punto = document.ggetElementById("punto");
    let nocturno = document.getElementById("nocturno");
    let cero = document.getElementById("cero");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");
}
uno.onclick = function (e) {
    visualizacion.textContent = visualizacion.textContent + "1";
}
dos.onclick = function (e) {
    visualizacion.textContent = visualizacion.textContent + "2";
}
tres.onclick = function (e) {
    visualizacion.textContent = visualizacion.textContent + "3";
}
cuatro.onclick = function (e) {
    visualizacion.textContent = visualizacion.textContent + "4";
}
cinco.onclick = function (e) {
    visualizacion.textContent = visualizacion.textContent + "5";
}
seis.onclick = function (e) {
    visualizacion.textContent = visualizacion.textContent + "6";
}
siete.onclick = function (e) {
    visualizacion.textContent = visualizacion.textContent + "7";
}
ocho.onclick = function (e) {
    visualizacion.textContent = visualizacion.textContent + "8";
}
nueve.onclick = function (e) {
    visualizacion.textContent = visualizacion.textContent + "9";
}
cero.onclick = function (e) {
    visualizacion.textContent = visualizacion.textContent + "0";
}
reiniciar.onclick = function (e) {
    resetear();
}
borrar.onclick = function (e) {
    limpiar();
}
suma.onclick = function (e) {
    operandoa = visualizacion.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function (e) {
    operandoa = visualizacion.textContent;
    operacion = "-";
    limpiar();
}
multi.onclick = function (e) {
    operandoa = visualizacion.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function (e) {
    operandoa = visualizacion.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function (e) {
    operandob = visualizacion.textContent;
    resolver();
}
function limpiar() {
    visualizacion.textContent = "";
}
function resetear() {
    visualizacion.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}
function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();
    visualizacion.textContent = res;
}