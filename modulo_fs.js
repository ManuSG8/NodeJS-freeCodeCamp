const fs = require('fs')

// Los metodos son asincronos, pero si quieres que sean sincronos, añade Sync al nombre de la funcion: readFileSync, renameSync, appendFileSync, ...

// Leer contenido de un archivo
fs.readFile('index.html', 'utf-8', (err, data) => {
  if(err) {
    console.log(err)
  } else {
    console.log(data)
  }
})

// Cambiar el nombre de un archivo
fs.rename('index.html', 'main.html', (err) => {
  if(err) {
    throw err
  }
  console.log('Nombre cambiado exitosamente')
})

// Agregar contenido al final de un archivo
fs.appendFile('index.html', '<p>Hola Mundo!</p>', (err) => {
    if(err) {
    throw err
  }
  console.log('Archivo actualizado exitosamente')
})

// Reemplazar o escribir todo el contenido del archivo
fs.writeFile('index.html', 'Contenido Nuevo', (err) => {
  if(err) {
    throw err
  }
  console.log('Contenido reemplazado exitosamente')
})

// Eliminar un archivo
fs.unlink('index2.html', (err) => {
  if(err) {
    throw err
  }
  console.log('Archivo eliminado exitosamente')
})