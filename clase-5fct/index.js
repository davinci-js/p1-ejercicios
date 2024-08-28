// Function
/**
 * Funciones son como blocos de codigos projetados pára la ejecución de una tarea especifica.
 * solo será ejecutado cuando algo se la solicita
 * es como tener una fabrica que te va plantear una estructura de un proyecto que luego despues de planteado te va entregar una salida 
 * Podemos pedir datos numericos, string entre otros y que adentro de la fuction validemos ellos.
 */




//Acá pido en un EVENTO que solicite al usuario cuando clique en el botón su nombre que luego de armazenado ejecutará el nombre del usuario.
function saludarPorNombre(nombre){
    var nombre = prompt("Como te llamas")
    alert(`Hola ${nombre}`)
}
//Pedimos al usuario que ingrese datos de para una soma 

function suma (resultado){
    var numero1 = parseInt(prompt('Ingrese um numero'))
    var numero2 = parseInt(prompt('Ingrese otro numero'))
    resultado = numero1 + numero2;
    alert(resultado);
};

//Pasamos a algo de mas detalle


