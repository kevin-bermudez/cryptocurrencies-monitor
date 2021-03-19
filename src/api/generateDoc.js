const path = require('path')
const apisPath = path.resolve(__dirname)
const { generateFileSwaggerUiFromJsDoc } = require('swagger-ui-generator')
generateFileSwaggerUiFromJsDoc(
  {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Crypto currencies monitor',
        version: '1.0.0'
      },
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
          }
        }
      }
    },
    apis: [`${apisPath}/routes/*.js`, `${apisPath}/routes/**/*.js`]
  },
  path.resolve(__dirname, 'docs')
)
