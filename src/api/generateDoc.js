const path = require('path')
const apisPath = path.resolve(__dirname)
const { generateFileSwaggerUiFromJsDoc } = require('swagger-ui-generator')
generateFileSwaggerUiFromJsDoc(
  {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Test Docs',
        version: '1.0.0'
      }
    },
    apis: [`${apisPath}/routes/*.js`]
  },
  path.resolve(__dirname, 'docs')
)
