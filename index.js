// PRIMER EJERCICIO POO COMO GENERAR UNA CLASE METODOS E IMPRIMIR CON CONSOLE LOG
// OBJETOS LITERALES EJEMPLO (COMO HACEMOS LA ABSTRACCION)

// const EstudianteUno = {
//     nombre: "Eduardo",
//     apellido: "Perez",
//     califFinal: 8,
//     inscrito: true,
// }

// // DESESTRUCTURACIÓN
// const { nombre, apellido, califFinal, inscrito } = EstudianteUno;
// console.log(`Hola ${nombre} ${apellido} aprobaste la matería, calificación final: ${califFinal}`)

// PROGRAMACIÓN ORIENTADA A OBJETOS
// VAMOS A TENER UNA CLASE 1)ESTUDIANTES 
// CREAR NUESTRA PLANTILLA 
class Estudiantes {
      
    //CREAR NUESTRO CONSTRUCTOR
    //SOLO PODEMOS USAR UN CONSTRUCTOR POR CLASE
    constructor (nombre, apellido, califFinal, inscrito) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.califFinal = califFinal;
        this.inscrito = inscrito;
    }

    //LOS METODOS USUALMENTE NECESITAN HACER ALGO CON LO QUE FUE LLAMADO NUESTRO OBJETO
    //METODOS
    //VAMOS A SIMULAR UN PEQUEÑO SISTEMA PARA SABER SI ESTÁN APROBADOS O REPROBADOS LOS ALUMNOS
    Aprobado() {
        if(this.califFinal >= 7.6){
            return "\n Aprobado " + Math.round(this.califFinal)
        }else if (this.califFinal <= 7.5){
            return "\n Reprobado " + Math.round(this.califFinal)
        }else{
            return "ERROR EN EL SISTEMA CONSULTAR MÁS TARDE"
        }
    }

    Inscrito() {
      if(this.inscrito === true){
          return "\n EL ALUMNO SI ESTA INSCRITO EN EL SEMESTRE"
      }else if(this.inscrito === false) {
          return "\n EL ALUMNO NO ESTA INSCRITO EN EL SEMESTRE"
      }else {
          return "\n ERROR EN EL SISTEMA CONSULTAR MÁS TARDE"
      }
    }    
}

// CREACION DE NUESTROS OBJETOS (CUANDO OCUPAMOS NEW ESTAMOS CREANDO EL OBJETO Y LE PASAMOS LOS PARAMETROS)
const EstudianteUno = new Estudiantes("JUAN","GOMEZ", 8.2, true)
const EstudianteDos = new Estudiantes("ERICK","RODRIGUEZ", 7.2, false)
const EstudianteTres = new Estudiantes("CESAR","GARCIA", 7.6, true)

//CON CONSOLE.LOG VAMOS A IMPRIMIR EL RESULTADO
console.log(EstudianteUno.nombre, EstudianteUno.apellido, EstudianteUno.Aprobado(),  EstudianteUno.Inscrito())
console.log(EstudianteDos.nombre, EstudianteDos.apellido, EstudianteDos.Aprobado(),  EstudianteDos.Inscrito())
console.log(EstudianteTres.nombre, EstudianteTres.apellido, EstudianteTres.Aprobado(),  EstudianteTres.Inscrito())