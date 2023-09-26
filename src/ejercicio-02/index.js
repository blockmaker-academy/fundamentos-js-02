// Bucle Do...While: Utiliza un bucle do...while para pedir al usuario que ingrese un número positivo. Continúa pidiendo hasta que ingrese un número positivo.
let numero
do {
  numero = parseInt(prompt('Introduce un numero'))
} while (numero <=0)
console.log(numero)
