'use stric'
//Se recogen los siguientes datos para una encuesta: ciudad, sexo (H o M) y edad (0 a 110)

//Calcule e informe los siguientes datos:

//Promedio de edad general
//Promedio de edad de las mujeres
//Promedio de edad de los hombres
//Porcentaje de mujeres menores a 21 años
//Porcentaje de hombres mayores a 21 años
//La mayor edad ingresada de las mujeres
//La menor edad ingresada de los hombres
//Los tres valores ingresados deben ser validados según corresponda

let sexo, ciudad, edad;
let datoValido = true;
let minEdad = 1, maxEdad = 110;

let promedioEdadGeneral = 0; promedioEdadM = 0; promedioEdadH = 0;
let mujeresMenores21 = 0; hombresMayores21 = 0;
let mayorEdadMujer = 0; menorEdadHombre = 110;
let contMujeres = 0; contHombres = 0;

do {
    ciudad = prompt("Ingrese la ciudad: ");
    
    if(!isNaN(ciudad)){
        alert("ingrese texto, no númericos")
        datoValido = false;
    }
    else if(ciudad === null){
        alert("Por favor, complete el campo")
    }
    else if(ciudad.trim() === " "){
        alert("No dejar vacio!!")
        datoValido = false;
    }
    else{
        datoValido = true;
    }

}while(!datoValido);


// Validamos el sexo

do {
    sexo = prompt("Ingrese el sexo (H, M, X)");
    if(!isNaN(sexo)){
        alert("ingrese texto, no númericos")
        datoValido = false;
    }
    else if(sexo === null){
        alert("Por favor, complete el campo")
        datoValido = false;
    }
    else if(sexo.trim() === " "){
        alert("No dejar vacio!!")
        datoValido = false;
    }
    else if(sexo.toLowerCase() !== "h" && sexo.toLowerCase() !== "m" && sexo.toLowerCase() !== "x"){
        alert("No dejar vacio!!")
        datoValido = false;
    }
    else{
        datoValido = true;
    }
}while(!datoValido);

// Validamos la edad
do {
    edad = parseInt(prompt("Ingrese la edad: "));
    if(isNaN(edad)){
        alert("ingrese texto, númericos")
        datoValido = false;
    }
    else if(nota <0){
        alert("Ingrese una nota mayor a 0");
        notaValida = false;
    }
    else if(nota > 110){
        alert("Ingrese una nota que no sea mayor a 110");
        notaValida = false;
    }
    else{
        notaValida = true;
    }
}while(!datoValido);