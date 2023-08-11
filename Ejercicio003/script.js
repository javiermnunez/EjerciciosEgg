function mostrarResultado(){
    var resultadoE = document.getElementById("resultado");
    var selectorLista = document.getElementById("edad");
    console.log(selectorLista);
    var mostrarResultado = esMayor();
    
    resultadoE.innerText= mostrarResultado;
}
function esMayor(){
    let edad = document.getElementById("edad").value;
    var laEdad = parseInt(edad);
    console.log(laEdad);
    var resultado = "";
    if(laEdad >= 18){

        resultado = "Sos mayor.";
        
    }
    else{
        resultado = "No, sos menor";
    }
    
    return resultado;
}
