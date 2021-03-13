const responseHttp = (res, statusCode, message = '', data = {}) => {
  let genericMessage = ''
  switch (statusCode) {
    case 200:
      genericMessage = 'OK'
      break
    case 201:
      genericMessage = 'Created'
      break
    case 400:
      genericMessage = 'Bad Request'
      break
    case 401:
      genericMessage = 'Unauthorized'
      break
    case 403:
      genericMessage = 'Forbidden'
      break
    case 404:
      genericMessage = 'Not Found'
      break
    case 500:
      genericMessage = 'Internal Server Error'
      break
    default:
      genericMessage = ''
      break
  }

  let response = {
    message: message !== '' ? message : genericMessage
  }

  if (Object.keys(data).length) {
    response.data = data
  }

  return res.status(statusCode).json(response)
}

module.exports = responseHttp
