const express = require('express')
const responseHttp = require('../utils/responseHttp')
const cors = require('cors')

const app = express()

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    allowedHeaders:
      'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
  })
)
//middleware parser json requests
app.use(express.json())

//si no coincide con ninguna ruta definida pasa por acá
app.use((req, res, next) => {
  return responseHttp(res, 404)
})

module.exports = app
