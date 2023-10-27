// Ejercicio 5: Bucle For...in

// Crea un objeto con algunas propiedades y utiliza un bucle for...in para imprimir cada propiedad y su valor en la consola.
const jugador = {
    nombre: 'Fermin',
    posicion: 'Medio',
    edad: 30,
    club: 'FC Barcelona'
}

for (const propiedad in jugador) {
    console.log(propiedad + ': ' + jugador[propiedad])
}
