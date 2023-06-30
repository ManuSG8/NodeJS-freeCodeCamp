function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`)
}

function sumar(a, b) {
  console.log(a + b)
}

// setTimeout espera un cierto intervalo de tiempo para ejecutar la funcion solo una vez
// mostrarTema('NodeJS')
// setTimeout(mostrarTema, 3000, 'NodeJS')
// setTimeout(sumar, 2000, 5, 6)

// Con la funcion setImmediate se ejecuta justo despues de todo el codigo sincrono
// console.log('Antes')
// setImmediate(mostrarTema, 'Node.js')
// console.log('Despues')

// setInterval repite la funcion indefinidamente cada cierto intervalo de tiempo
setInterval(mostrarTema, 1000, 'NodeJS')
setInterval(sumar, 1500, 4, 3)