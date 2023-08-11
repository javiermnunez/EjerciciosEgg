function calcular() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var operacion = document.getElementById("op");
    var resultado = 0;
    console.log(operacion.value);
    switch (operacion.value) {
        case "s":

            resultado = n1 + n2;
            break;
        case "r":
            resultado = n1 - n2;
            break;
        case "m":
            resultado = n1 * n2;
            break;
        case "d":
            resultado = n1 / n2;
            break;
    }
    return resultado;
}
function mostrarResultado() {
    var r = document.getElementById("resultado");
    r.innerHTML = calcular();
}

