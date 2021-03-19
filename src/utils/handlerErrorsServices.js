const customError = require('../exceptions/customError')
const codeErrors = require('../exceptions/codeErrors')

const handleErrorsServices = error => {
  console.log(error)
  if (error instanceof customError) {
    throw error
  }

  throw new customError(codeErrors.UNEXPECTED)
}

module.exports = handleErrorsServices
