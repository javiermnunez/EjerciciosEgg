function tomarEntrada(){
    let arrayPalabras = new Array();
    var entrada = document.getElementById("entrada").value;
    arrayPalabras = entrada.split(" ");
     let mayor = "";
    for(i = 0; i<arrayPalabras.length;i++){
        if(arrayPalabras[i].length > mayor.length){
            mayor = arrayPalabras[i];
        }
    }
    document.getElementById("salida").value = mayor;
}
