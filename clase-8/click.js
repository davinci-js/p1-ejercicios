function cargarNombre(){
    //Pido y valido un string
    const nombre = validarString("Ingrese el nombre del alumnos:");
    //Guardamos el dato
    alumno.nombre = nombre;
}

function cargarMateria(){
    //pido y valido string
    const nombre = validarString("Ingrese el nombre de la materia:")
    //pido la nota
    const nota = validarNota();
    const materia = {
        "nombre": nombre,
        "nota": nota
    };
    // Agrego Materia a la lista
    alumno.materia.push(materia);
}

function cargarAlumno(){
    //Subo al alumno a la lista
    alumnos.push(alumno);
    //inicializar un objeto nuevo
    alumno = {
        materia: []
    }
}

function mostrarLista(){

}