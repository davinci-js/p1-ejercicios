//podemos poner
let foo = [];
const bir = [];

//Agregando elementos

//Otra manera de agregar elemento
bir.push(0);
bir.push(1);
bir.push(2);
bir.push(3);

// Intento copiar todos los elementos de bar en baz

let baz = bir;

baz.push('euuuuuuuuuuu');

//pido el nombre del alumno
const alumno = ValidarString("ingrese el nombre del alumno")


//validación
do{
    let materia = validarString();


    let nota = validarNumero();


}while(confirm("Otra materia y nota para cargar"))

function validarString(){
    let foo
    do{
        // Pido y valido el nombre de la materia
        foo = prompt(msg);

        // Valido que no sea un numero
        if (!isNaN(foo)) {
            console.log("Error, no se puede ingresar un número");
            datoValido = false;
        }
        else if(foo === null){
            alert("Porfavor, complete el campo");
            datoValido = false;
        }
        else if(foo.trim() === ""){
            alert("Porfavor, complete el campo, no lo deje vacio");
            datoValido = false;
        }
        else{
            datoValido = true;
        }

    }while(!datoValido);
};

/**
 * @oaram {String} msg
 * @returns un string valid
 */

function validarNota(){
    let datoValido;
    let foo;
    do{
        // Pido y valido la nota
        foo = parseInt(prompt(`Ingrese la nota final de ${materia}`));

        //Validaciones
        if (isNaN(foo)) {
            console.log("Error, no se puede ingresar un número");
            datoValido = false;
        }
        else if(foo < 4 || foo > 10){
            alert("La nota debe ser entre 4 y 10");
            datoValido = false;
        }
        else{
            datoValido = true;
        }

    }while(!datoValido);
}