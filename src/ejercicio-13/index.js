// Escribe tu código aquí:

function contadorClosures() {
    let contador = 0

    return function () {
        contador++
        return contador
    }
}

const incrementar = contadorClosures()
console.log(incrementar())
console.log(incrementar())

    

