/**
 * Object ----------------
 * Son distinto de Arrays, tiene una sintaxi distinta y con maneras de busqueada diferente también
 * Son nomenclaturada todos los elementos que se tiene (datos)
 * por ejemplo var pok = {nome: "Jose", edad: 23, sexo: "masc"....}
 * Asi son armazenados, guardados en {} con su nomenclatura y su valor.
 * Son dinamicos como los arrays
 */

let alumno = {
    "nombre": " ",
    "matricula": 111,
    "materias_aprobadas": [],
    "materias_cursando": []
};

//agregar propiedad
alumno.fecha_de_nacimiento = "DD/MM/AAAA";
alumno["dni"] = 44444444;
alumno["es_regular"] = true;

//No puede hacer:
//alumno.materias cursando;
//se hace asi
//alumno["materias cursando"]
