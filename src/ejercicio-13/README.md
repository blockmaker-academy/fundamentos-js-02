## Ejercicio 13: Closures

Crea una función llamada contadorClosures que retorne otra función. Esta función interna debe mantener un contador interno y cada vez que se llame, incrementa el contador y lo devuelve. Utiliza closures para lograr esto.

```javascript
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
```
