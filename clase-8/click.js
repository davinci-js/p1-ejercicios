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
    /**
     * <h1>${alumno}</h1>
     * <h2>Materias<h2>
     * 5
     */
    //Traigo el primer elemento que sea de clase container
    const div = document.querySelector('.container');

    //limpio HTML
    div.innerHTML = "";
    // Recorro la lista de alumnos

    for(let alumno of alumnos){
        //Agrego h1 con nombre del alumno
        div.innerHTML += `<h1>${alumno.nombre}</h1>`;
        div.innerHTML += `<h2>Materias</h2>`;
        //div.innerHTML += `<ul class="list-group">`
        let str = `<ul class="list-group">`;
        //recorra las materias del alumno
        for(let materia of alumno.materias){
            // Armo el li
            str += `<li class="list-group-items">${materia.nombre} - ${materia.nota}</li>\n`
        }
    }
}