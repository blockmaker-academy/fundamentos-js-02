// Escribe tu código aquí:
var persona = {
    nombre: "Cristina", edad:27, ciudad:"Marsella"
// Propiedad es la clave. Nombre del objeto[propiedad entre llaves], equivale al valor.
}
for (const propiedad in persona) {
    console.log(propiedad + ': ' + persona[propiedad])
  }