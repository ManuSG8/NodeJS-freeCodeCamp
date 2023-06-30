const http = require('http')

const servidor = http.createServer((req, res) => { // req = request, res = response
  console.log('Solicitud nueva')
  res.end('Hola Mundo!')
})

const puerto = 3000

servidor.listen(puerto, () => {
  console.log(`El servidor esta escuchando en el puerto ${puerto}`)
})