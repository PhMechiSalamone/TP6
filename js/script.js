class Puntuacion {
    constructor(nombre, apellido, dni, casa, puntosindiv, puntoscasa) {
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.casa = casa
        this.puntosindiv = puntosindiv
        this.puntoscasa = puntoscasa
    }
    puntuacionesactualizadas() {
        if (this.puntosindiv >= 100) {
            let puntostotales = this.puntosindiv + this.puntoscasa
            console.log('A ' + this.nombre + ' '+ this.apellido + ' '+ 'dni numero ' + this.dni + ' '+ 'realizo un total de puntos individuales de ' + this.puntosindiv + ' '+ 'los cuales se suman a la casa de ' + this.casa + 'con un total de ' + puntostotales)
        }
        else {
            console.log('A '+ this.nombre + ' '+ this.apellido + ' '+ 'dni numero ' + this.dni + ' '+ 'realizo un total de puntos individuales de ' + this.puntosindiv + ' '+ 'no alcanzo el mínimo individual para sumar puntos')
        }
    }
}
const estudiante1 = new Puntuacion('Paz', 'López', 33155542, 'Gryffyndor', 124, 2351)
const estudiante2 = new Puntuacion('Juan', 'García', 40152542, 'Huperpuff', 97, 1543)
const estudiante3 = new Puntuacion('María', 'Rodríguez', 39199542, 'Slytherin', 98, 758)

estudiante1.puntuacionesactualizadas()
estudiante2.puntuacionesactualizadas()
estudiante3.puntuacionesactualizadas()