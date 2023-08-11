function evaluarEntrada(){
    var mensaje = "";
    var entrada = document.getElementById("entrada").value;
    console.log(entrada);
    if (entrada == 'S' || entrada == 'N'){
        var mensaje = "CORRECTO";
    }else if(entrada == ""){
        var mensaje = "";
    }
    else{
        var mensaje = "INCORRECTO";
    }
    
    return mensaje;
}
function mostrarRespuesta(){
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = evaluarEntrada();
    
}
function resetear(){
    var elemento = document.getElementById("resultado");
    elemento.innerHTML = "";
    evaluarEntrada();
    document.getElementById("entrada").value = null;
}