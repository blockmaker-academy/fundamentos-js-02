// Ejercicio 2: Bucle Do...While

// Utiliza un bucle do...while para pedir al usuario que ingrese un número positivo. Continúa pidiendo hasta que ingrese un número positivo.
let numero

do {
    numero = parseInt(prompt('Introduce un número positivo: ')) // Asigna el valor desde el prompt del navegador
} while (numero <= 0)

document.write(numero) // Muestra en el navegador el numero

// Hay que introducir este código en una página HTML bajo etiqueta <script>

