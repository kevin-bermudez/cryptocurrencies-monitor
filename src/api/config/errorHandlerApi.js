const errorHandler = serviceLocator => (error, req, res, next) => {
  let status = 500
  let message = ''
  if (error.code === serviceLocator.get('exceptions.codeErrors').PAYLOAD) {
    status = 400
    message = error.message
  }

  let formattedErrors = error.errors

  if (error.errors && error.errors.details) {
    formattedErrors = error.errors.details.map(error => {
      return {
        [error.context.key]: error.message
      }
    })
  }

  return serviceLocator.get('api.responseHttp')(res, status, message, formattedErrors)
}
module.exports = errorHandler
