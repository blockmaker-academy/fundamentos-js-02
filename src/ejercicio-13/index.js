// Escribe tu código aquí:
// Closures: Crea una función llamada contadorClosures que retorne otra función. Esta función interna debe mantener un contador interno y cada vez que se llame, incrementa el contador y lo devuelve. Utiliza closures para lograr esto.


function contadorClosures() {
    let contador=0
    return function () {
        contador++
        return contador
    }
}
const contar = contadorClosures() // Es necesario declarar una variable

console.log(contar())
console.log(contar())

// No puedo usar directamente la funcion contadorClosures() console.log(contadorClosures()) me da función anonima, necesito declarar una variable
// probar rama