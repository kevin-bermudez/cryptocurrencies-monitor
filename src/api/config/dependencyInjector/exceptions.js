const serviceExceptions = require('../../../exceptions/customError')
const codeErrors = require('../../../exceptions/codeErrors')

const exceptionsInjector = serviceLocator => {
  serviceLocator.register('exceptions.customError', serviceExceptions)
  serviceLocator.register('exceptions.codeErrors', codeErrors)
}

module.exports = exceptionsInjector
