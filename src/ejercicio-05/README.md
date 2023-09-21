## Ejercicio 5: Bucle For...in

Crea un objeto con algunas propiedades y utiliza un bucle `for...in` para imprimir cada propiedad y su valor en la consola.

```javascript
const persona = {
  nombre: 'Luis',
  edad: 30,
  ciudad: 'Madrid'
}

for (const propiedad in persona) {
  console.log(propiedad + ': ' + persona[propiedad])
}
```
