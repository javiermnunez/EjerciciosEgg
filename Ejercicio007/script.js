var auxiliar = 0;

function tomarLimite(){
    var limite = document.getElementById("limite").value;
    parseInt(limite);
    return limite;
}
console.log(limite);
function tomarEntrada(){
    var entrada = document.getElementById("entrada").value;
    var corte = tomarLimite();
    if(parseInt(auxiliar) < corte){
        auxiliar = parseInt(auxiliar) + parseInt(entrada);
    }
    mostrarResultado();
    reset();
}
function mostrarResultado(){
    var resultado = document.getElementById("incremento");
    auxiliar = parseInt(auxiliar);
    resultado.value = auxiliar;
}
function reset(){
    var entrada = document.getElementById("entrada");
    entrada.value = null;
    mostrarResultado();
}

