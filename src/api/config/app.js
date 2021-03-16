const express = require('express')
const responseHttp = require('../utils/responseHttp')
const corsApi = require('./corsApi')
const docsApi = require('./docsApi')
const serviceLocator = require('./dependencyInjector')
const exampleRoute = require('../routes/example')

const app = express()
corsApi(app)
docsApi(app)

app.use(express.json())
app.set('serviceLocator', serviceLocator())

//routes
exampleRoute(app)

//si no coincide con ninguna ruta definida pasa por acá
app.use((req, res, next) => {
  return responseHttp(res, 404)
})

module.exports = app
