const serviceExceptions = require('../../../exceptions/service')
const codeErrors = require('../../../exceptions/codeErrors')

const exceptionsInjector = serviceLocator => {
  serviceLocator.register('exceptions.serviceError', serviceExceptions)
  serviceLocator.register('exceptions.codeErrors', codeErrors)
}

module.exports = exceptionsInjector
