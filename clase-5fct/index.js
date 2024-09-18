// Function
/**
 * Funciones son como blocos de codigos projetados pára la ejecución de una tarea especifica.
 * solo será ejecutado cuando algo se la solicita
 * es como tener una fabrica que te va plantear una estructura de un proyecto que luego despues de planteado te va entregar una salida 
 * Podemos pedir datos numericos, string entre otros y que adentro de la fuction validemos ellos.
 */


/*function saludar(){
    alert('Hola!')
}*/
/**Funcion que sale el alert
 * @param {String} nombre string con el nombre
 * de la persona a saludar
 */
//Acá pido en un EVENTO que solicite al usuario cuando clique en el botón su nombre que luego de armazenado ejecutará el nombre del usuario.
/*function saludarPorNombre(nombre){
    var nombre = prompt("Como te llamas")
    alert(`Hola ${nombre}`)
}*/
//Pedimos al usuario que ingrese datos de para una soma 

/*function suma (resultado){
var numero1 = parseInt(prompt('Ingrese um numero'))
var numero2 = parseInt(prompt('Ingrese otro numero'))
resultado = numero1 + numero2;
alert(resultado);
};*/

//Pasamos a algo de mas detalle

/*function saludarPorNombre (nombre = null){

    if(nombre === null){
        //alert('Hola!')
        saludar();
    }
    else{
        alert(`Hola ${nombre}`)
    }
}*/

//Paso parametro a la funcion
/*saludarPorNombre(nombre);
saludarPorNombre(otroNombre);
saludarPorNombre('Juan')*/

//variable globales
let numero1, numero2, suma;

function pedirNumero1(){
    //variable local para validar
    numero1 = validarNumero();
}

function pedirNumero2(){

    numero2 = validarNumero();
}

function sumar(){
    suma = numero1 + numero2
}

function resultado(){
    alert(`El resultado de la suma ${numero1} + ${numero2} es ${suma}`);
}

function validarNumero(){
    let numero;
    //validación si numero es numero.
    do{
        numero = parseInt(prompt('Ingrese el primer numero'));
        if(isNaN(numero)){
            alert('Debes ingresar un numero');
        }
    }while(isNaN(numero));
    
    //Retorno numero validado a quien lo llamo
    return numero; //te puede devolverlo localmento o sacarlo hacia afuera
    
}

/**erro
 * Fucncison declarada como variable
 */
restar(2, 4);
const restar = function(num1, num2){
    suma = num1 - num2
}

restar(2, 4);