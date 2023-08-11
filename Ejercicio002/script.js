function calcularTodo(){
    var areaEtiqueta = document.getElementById("resultadoA");
    var perimetroEtiqueta = document.getElementById("resultadoP");
    areaEtiqueta.innerHTML =  calcularArea();
    perimetroEtiqueta.innerHTML =  calcularPerimetro();
}
let pi = Math.PI;
function calcularArea(){
    var radio = document.getElementById("input").value;
    var area = pi*(Math.pow(radio,2));
    return area.toFixed(2);
}
function calcularPerimetro(){
    var radio = document.getElementById("input").value;
    var perimetro = 2*pi*radio;
    return perimetro.toFixed(2);
}