const http = require('http')
const cursos = require('./cursos')

const servidor = http.createServer((req, res) => {
  const { method } = req

  switch(method) {
    case 'GET':
      return manejarSolicitudGET(req, res)
    case 'POST':
      return manejarSolicitudPOST(req, res)
    default:
      console.log(`El metodo no puede ser manejado por el servidor: ${method}`)
  }
})

function manejarSolicitudGET(req, res) {
  let path = req.url

  if(path === '/') {
    res.statusCode = 200
    return res.end('Bienvenidos a mi primer servidor y API creado con NodeJS')  
  } else if(path === '/cursos') {
    res.statusCode = 200
    return res.end(JSON.stringify(cursos.infoCursos))
  } else if(path === '/cursos/programacion') {
    res.statusCode = 200
    return res.end(JSON.stringify(cursos.infoCursos.programacion))
  }

  res.statusCode = 404
  return res.end('El recurso solicitado no existe')
}

function manejarSolicitudPOST(req, res) {
  let path = req.url

  if(path === '/cursos/programacion') {
    res.statusCode = 200
    return res.end('El servidor recibio una solicitud POST para /cursos/programacion')  
  } 

  res.statusCode = 404
  res.end('El recurso solicitado no existe')
}

const PUERTO = 3000

servidor.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}`)
})