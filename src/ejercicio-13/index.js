// Función closures. Es una función  que retorna otra función.

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
 //Llamada a función principal con un paréntesis, devuelve el contenido del primer return, es decir la función sin resolver. con dos paréntesis, devuelve el resultado de la función, es decir, el contenido del segundo return.  
 //Cuando se asigna una variable a una función, la llamada obtiene el resultado final o segundo return es decir, la variable con paréntesis, equivale a la llamada de la función principal con dos paréntesis, 