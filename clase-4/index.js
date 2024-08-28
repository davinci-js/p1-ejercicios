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

//variable de promedio
let contadorMujeres = 0, contadorGeneral = 0, contadorHombres = 0, contadorNoBinario = 0;
let acumuladorEdadMujeres = 0, acumuladorEdadGeneral = 0, acumuladoEdadHombre = 0, acumuladorEdadNoBinario = 0;
//Variablepara porcentaje
let contadorHombresMayor21 = 0, contadorMujeresMayor21 = 0, contadorNoBinarioMayor21 = 0;
let edadHombresMin = 110, edadMujerMax = 0;

do{
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
            alert("Ingrese una edad que no sea mayor a 110");
            notaValida = false;
        }
        else{
            notaValida = true;
        }
    }while(!datoValido);

    contadorGeneral ++;
    acumuladorEdadGeneral += edad;
    if(sexo.toLowerCase() == "h"){
        //edad de los hombres
        contadorHombres ++;
        acumuladoEdadHombre += edad;
        if(edad >21){
            //Hombres mayores a 21
            contadorHombresMayor21++;
        }
        if(edad < edadHombresMin){
            //Edad minima de los hombres
            edadHombresMin = edad;
        }
    }
    else if(sexo.toLowerCase() == "m"){
        //Edad mujeres
        contadorMujeres ++;
        acumuladorEdadMujeres += edad;
        if(edad > 21){
            //Mujeres mayor a 21
            contadorMujeresMayor21++;
        }
        if(edad > edadMujerMax){
            //Edad maxima de mujeres
            edadMujerMax = edad;
        }
    }
    else{
        //No binarios
        contadorNoBinario++;
        acumuladorEdadNoBinario += edad;
        if(edad > 21){
            contadorNoBinarioMayor21++;
        }
    }

}while(confirm("Otro dato?"));

console.log(`promedio general: ${acumuladorEdadGeneral / contadorGeneral}`);
console.log(`promedio general: ${acumuladoEdadHombre / contadorHombres}`);
console.log(`promedio general: ${acumuladorEdadMujeres / contadorMujeres}`);
console.log(`promedio general: ${acumuladorEdadNoBinario / contadorNo}`);

console.log(`Un %${100 * contadorHombresMayor21 / contadorGeneral} de persona son hombres mayores de edad`);
console.log(`Un %${100 * contadorMujeresMayor21 / contadorGeneral} de persona son mujer mayores de edad`);

console.log(`La mujer de mas edad tiene${edadMujerMax}`);
console.log(`El hombre de menor edad tiene ${edadHombresMin}`)