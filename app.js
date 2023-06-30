const saludos = require('./saludos')

console.log(saludos.saludar('Manu'))
console.log(saludos.saludarHolaMundo())

// Desestructuracion
const { saludarHolaMundo } = require('./saludos')
console.log(saludarHolaMundo())