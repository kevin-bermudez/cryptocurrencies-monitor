const validateSchemas = (schema, serviceLocator) => (req, res, next) => {
  let payload
  const config = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true
  }
  const customError = serviceLocator.get('exceptions.customError')

  if (String(req.method).toLowerCase() === 'get') {
    payload = req.query
  } else {
    payload = req.body
  }

  const { error } = schema.validate(payload, config)
  if (error) {
    return next(new customError(serviceLocator.get('exceptions.codeErrors').PAYLOAD, 'Errors in payload', error))
  }
  return next()
}

module.exports = validateSchemas
