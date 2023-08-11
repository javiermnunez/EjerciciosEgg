function traerValor(){
    var unaOpcion = document.getElementById("opcion").value;
    
    return unaOpcion;
}
function mostrarValor(){
    return alert("El día de hoy está ..."+traerValor());
}

