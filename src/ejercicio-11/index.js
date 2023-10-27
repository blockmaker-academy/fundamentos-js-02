// Ejercicio 11: Scope Global y Local

// Declara una variable global llamada contador con valor 0. Luego, crea una función que incremente el contador en 1 cada vez que se llama. Imprime el valor del contador después de llamar a la función varias veces.
let contador = 0

function incrementarContador () {
    contador++
}

incrementarContador()
incrementarContador()
incrementarContador()

console.log('Contador: ' + contador)
// Debería mostrar 3 