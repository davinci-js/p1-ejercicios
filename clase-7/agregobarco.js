function agregarBarco () {

    let largo = parseInt(prompt("Cual es el largo del barco"));

    for(let i = 0; i < largo; i++){
        let fila = parseInt(prompt("En que fila va el barco"));
        let col = parseInt(prompt("En que columna va el barco"));
        tablero[fila][col] = "#";
    };
};