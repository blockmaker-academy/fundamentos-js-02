const persona = {
  nombre: 'Luis',
  edad: 30,
  ciudad: 'Madrid'
}

for (const propiedad in persona) {
  console.log(propiedad + ': ' + persona[propiedad])
}
