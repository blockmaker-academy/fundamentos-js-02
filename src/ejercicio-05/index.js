// Escribe tu código aquí:
// Bucle For...in: Crea un objeto con algunas propiedades y utiliza un bucle for...in para imprimir cada propiedad y su valor en la consola.

let objeto = {coche:'rojo', luna:'blanca', taladro:'roto'}

for (let clave in objeto){
    console.log('La propiedad es: '+clave+' el valor es: '+ objeto[clave])
}