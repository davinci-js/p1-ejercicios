/**Matrices
 *  son arrays pero con arrays adentro o sea, doble corchete
 * Variable para el tablero de batalla naval (matrices)
 */
let tablero = [];

for(let i = 0; i < 10; i++){

    //nueva fila vacia
    let fila = [];

    //lleno la fila con las diez columnas
    for(let j = 0; j < 10; j++){
    
        fila.push(" ");
    
    }
    // agrego las filas en los tableros
    tablero.push(fila)
}





