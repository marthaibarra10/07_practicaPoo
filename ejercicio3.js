// NUESTROS AMIGOS DE XBOX NOS SOLICITAN AYUDA URGENTE CON LA CREACIÓN DE NUEVOS CATALOGOS
// PARA CREARLOS NOS COMPARTE LA SIGUIENTE INFORMACIÓN
// CONSOLA: XBOX ONE, XBOX SERIES S, XBOX SERIES X, 3 VIDEOGUEJOS PARA CADA CONSOLA (DEPORTES, 
// SHOOTER, AVENTURA, ETC.) DISPONIBILIDAD Y PRECIO DE CADA CONSOLA.

//OBJETO LITERAL DE EJEMPLO -> NOS SIRVE PARA HACER LA ABSTRACCION DE COMO VA A FUNCIONAR
// const catalogo = {
//     nombre: "Xbox one",
//     juegos: ["Shooter","Deportes","Aventura"],
//     disponibilidad: true,
//     precio: 5000,
// }

//CREAR NUESTRO CONSTRUCTOR
//SOLO PODEMOS USAR UN CONSTRUCTOR POR CLASE
class Catalogo {
    constructor (nombre, juegos,disponibilidad,precio) {
    this.nombre = nombre;
    this.juegos = juegos;
    this.disponibilidad = disponibilidad;
    this.precio = precio;
    }

    //METODO
    Revisar(){
        if(this.disponibilidad === true){
            return "\n SI HAY JUEGOS DISPONIBLES"
        }else if(disponibilidad === false){
            return " \n NO HAY JUEGOS DISPONIBLES"
        }else {
            return " \n OPPSSSSS!"
        }
    }    
}

// CREACION DE NUESTROS OBJETOS AQUÍ UTILIZAMOS UN ARREGLO PARA PODER TENER 3 JUEGOS Y MOSTRARLOS
const xboxOne = new Catalogo("Xbox One", ["Shooter","Deportes","Eventura"],true,5000)

//IMPRESION DEL OBJETO
//EN  ${xboxOne.juegos} ESTAMOS LLAMANDO A UN ARREGLO
console.log(`EL NOMBRE DEL EQUIPO ES : ${xboxOne.nombre} \n LOS JUEGOS QUE TIENE SON : ${xboxOne.juegos} \n LA DISPONIBILIDAD ES : ` + xboxOne.Revisar() + `\n EL PRECIO ES : ${xboxOne.precio}`)