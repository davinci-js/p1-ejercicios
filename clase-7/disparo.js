function disparar(){

    let fila = parseInt(prompt("A que fila queres disparar?"));

    let col = parseInt(prompt("A que columna desea desparar"));

    if(tablero[fila][col] === "#"){
        tablero[fila][col] = "0";
        alert("Le diste!");
    }
    else if (tablero[fila][col] = " "){
        tablero[fila][col] = "0";
        alert("No se diste");
    }
    else{
        alert("ya disparaste acá");
    };
};