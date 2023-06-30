// Este modulo devuelve una clase (EventEmitter)
const EventEmitter = require('events')

// Instancia
const emisorProductos = new EventEmitter()

// Le asociamos el evento 'compra'
emisorProductos.on('compra', (total, numProductos) => {
  console.log(`Se realizo una compra por un total de ${total}$ y ${numProductos} productos`)
})
emisorProductos.on('devolucion', () => {
  console.log('Se realizo una devolucion')
})

// Llamamos al evento 'compra'
emisorProductos.emit('compra', 500, 8)
emisorProductos.emit('devolucion')
