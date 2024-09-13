function validarString(msg){


    let str;
    let datoValido = true;
    
    do{
        str = prompt(msg)

        if(str === null || str.trim() === " "){
            alert("complete el campo")
            datoValido = false;
        }
        else if(!isNaN(str)){
            alert("No debe ser números!!!!")
            atoValido = false;
        }
        else{
            datoValido = true;
        }
    }while(!datoValido);
    
    return str
}

function validarNota(){

    let nota, datoValido = true;
    do{
        nota = parseInt(prompt("Ingrese la nota de aprobado"));

        if(isNaN(nota)){
            alert("La nota debe ser numérica");
            datoValido = false;
        }
        else if (nota < 4 || nota > 10){
            alert("Se aprueba entre 4 y 10");
            datoValido = false;
        }
        else {
            datoValido = true;
        }
    }while(!datoValido)
    return nota
};