function contadorClosures() {
  let contador = 0

  return function () {
    contador++
    return contador
  }
}

const incrementar = contadorClosures()

console.log(incrementar()) // 1
console.log(incrementar()) // 2
