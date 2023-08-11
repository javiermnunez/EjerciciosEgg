
function tomarEntrada(){
    const arrayPalabra = new Array();
    var entrada = document.getElementById("entrada").value;
    for(i=0;i<entrada.length;i++){
        arrayPalabra.push(entrada[i]);
    }
    console.log(arrayPalabra.reverse());
    var alrrevez = "";
    arrayPalabra.forEach(element => {
        alrrevez = alrrevez+element;
    });
    document.getElementById("salida").innerHTML = alrrevez;
}
function reset(){
    var entrada = document.getElementById("entrada");
    entrada.value = null;
    document.getElementById("salida").innerHTML = "";
    
}