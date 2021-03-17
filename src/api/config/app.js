const express = require('express')
const responseHttp = require('../utils/responseHttp')
const corsApi = require('./corsApi')
const docsApi = require('./docsApi')
const serviceLocator = require('./dependencyInjector')
const routes = require('../routes')

const app = express()
corsApi(app)
docsApi(app)

app.use(express.json())
app.set('serviceLocator', serviceLocator())

//routes
routes(app)

//si no coincide con ninguna ruta definida pasa por acá
app.use((req, res, next) => {
  return responseHttp(res, 404)
})

module.exports = app
