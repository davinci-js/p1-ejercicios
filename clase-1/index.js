//Pido dos extremos para comparar
const max = parseInt(prompt("Ingrese el maximo para la comparar"));
const min = parseInt(prompt("Ingrese el minimo para la comparar"));

//Pido el numero para comparar
const num = parseInt(prompt("Ingrese el numero a comparar"));

//Verificao si el numero esta en rango
if(num >= min && num <= max){
    // Entro aca solo si esta entre el maximo y el minimo - operador logico, donde el primer es verdadero y el segundo no.
    alert("El numero está en rango");
} else{
    alert("El numero no está en rango");
}

//Preguntar si es par o impar

if(num % 2 == 1){
    //Es impar por tener el resto 1
    alert("El numero es impar");
}
else{
    //Es par por tener el resto 0
    alert("El numero es par");
}
// Otra forma
//Preguntamos primero si es mayor al minimo
if(num <= min){
    // Si no es mayor al minimo, preguntamos si es menor al maximo
    if(num <=max){
        /*alert("El numero está en rango")*/
    }
    else{
        //No estas en el rango
    }
}
else{
    //No estas en el rango
}