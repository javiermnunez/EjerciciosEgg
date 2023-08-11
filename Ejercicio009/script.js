var auxiliar = 0;
var contador = 0;
const arrayNumeros = [];
function evaluar(){
    acumular();
    if(promedio()){
        document.getElementById("promedio").innerHTML=promedio();
    }
    if(mayor() != "-Infinity"){
        document.getElementById("mayor").innerHTML = mayor();
    }
    if(menor()!= "Infinity"){
        document.getElementById("menor").innerHTML = menor();
    }
    if(arrayNumeros.length >= 1){
        document.getElementById("array").innerHTML = arrayNumeros;
    }
}
function acumular(){
    
    var entrada = parseInt(document.getElementById("entrada").value);
    if(entrada != 0){
        auxiliar = auxiliar + entrada;
        contador = contador + 1;
        arrayNumeros.push(entrada);
    }
    else{
        document.getElementById("entrada").setAttribute('disabled', '');
        alert("Fin del programa.");
    }
    
    
    console.log(arrayNumeros);
    
}
function limpiarEntrada(){
    document.getElementById("entrada").value = 0;
}
function promedio(){
    var resultado = auxiliar/contador;
    return resultado;
}
function mayor(){
    var resultado = Math.max(...arrayNumeros);
    return resultado;
}
function menor(){
    var resultado = Math.min(...arrayNumeros);
    return resultado;
}

