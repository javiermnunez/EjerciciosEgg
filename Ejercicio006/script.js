
function esImpar(){
    var entrada = document.getElementById("entrada").value;
    parseInt(entrada);
    var mensaje = "";
    if(entrada%2 == 0){
        mensaje = "Es par."
        
    }
    else{
        mensaje = "Es impar."
    }
    if(entrada == 0){
        mensaje =  "El número no es par ni impar";
    }
    console.log(mensaje);
    var salida = document.getElementById("salida");
    salida.innerHTML= mensaje;
}
function reiniciar(){
    var entrada = document.getElementById("entrada");
    entrada.value = null;
    var salida = document.getElementById("salida");
    salida.innerHTML= "";
}