// Escribe tu código aquí:
let casa = {
    color: 'marrón',
    metros: 360,
    habitaciones: 6,
    baños: 4
}
for (const caracteristica in casa){
    console.log(caracteristica + ':' + casa[caracteristica])
}