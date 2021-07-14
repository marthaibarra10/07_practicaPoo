// NUESTROS AMIGOS DE CINEPOLIS, NOS HAN PEDIDO AYUDA CON LA GESTIÓN DEL CÁTALOGO DE PELICULAS 
// DEBEMOS ESPECIFIAR NOMBRE DE LA PELICULA, LA SALA, SU CLASIFICACIÓN Y SI HAY BOLETOS
// DISPONIBLES PARA LA FUNCION 

//Objeto literal de ejemplo

// const Peliculas {
//     nombrePeli: "Snoopy",
//     sala: "A"
//     clasificacion: "AAA"
//     boletosDisp: true,
// }

//CREAR NUESTRO CONSTRUCTOR
//SOLO PODEMOS USAR UN CONSTRUCTOR POR CLASE
class Pelis {
    constructor (nombrePeli,sala,clasificacion,boletosDisp) {
        this.nombrePeli = nombrePeli;
        this.sala = sala;
        this.clasificacion = clasificacion;
        this.boletosDisp = boletosDisp;
    }

//LOS METODOS USUALMENTE NECESITAN HACER ALGO CON LO QUE FUE LLAMADO NUESTRO OBJETO
//METODO

Disponibles() {
    if(this.boletosDisp === true){
        return "\n Aún hay boletos para la función! :) "
    } else if(this.boletosDisp === false){
        return "\n Ya no hay boletos para la función :( "
    } else {
        return "\n Opppsss!!! algo no funciona bien aquí"
    }
}
}

// CREACION DE NUESTROS OBJETOS
const nombrePeliUno = new Pelis("UN LUGAR EN SILECIO",1,"B",true)
const nombrePeliDos = new Pelis("JHON WICK",2, "C+", false)

//IMPRESION DEL OBJETO CON TEMPLATE LITERALS (ES LA FORMA DE PODER IMPRIMIR VARIABLES CON TEXTO)
console.log(`EN LA CARTELERA DE HOY: ${nombrePeliUno.nombrePeli} \n SALA ${nombrePeliUno.sala} \n CLASIFICACION ${nombrePeliUno.clasificacion}` + nombrePeliUno.Disponibles())
console.log(`EN LA CARTELERA DE HOY: ${nombrePeliDos.nombrePeli} \n SALA ${nombrePeliDos.sala} \n CLASIFICACION ${nombrePeliDos.clasificacion}` + nombrePeliDos.Disponibles())