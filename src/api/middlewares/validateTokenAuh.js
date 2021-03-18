const validateAuth = serviceLocator => (req, res, next) => {
  const customError = serviceLocator.get('exceptions.customError')

  try {
    const token = serviceLocator.get('utils.getTokenWithHeaders')(req)

    const { id } = serviceLocator.get('utils.manageToken').decodeToken(token)
    req.userId = id
  } catch (error) {
    return next(new customError(serviceLocator.get('exceptions.codeErrors').ACCESS))
  }
  return next()
}

module.exports = validateAuth
