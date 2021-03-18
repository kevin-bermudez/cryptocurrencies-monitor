const createUser = async (serviceLocator, { userName, password }) => {
  try {
    const customError = serviceLocator.get('exceptions.customError')
    const userByUsername = await serviceLocator.get('services.getUser')(serviceLocator, { userName })

    if (
      userByUsername.length &&
      serviceLocator.get('utils.handleCryptText').compareHash(password, userByUsername[0].password)
    ) {
      return { token: serviceLocator.get('utils.manageToken').createToken({ id: userByUsername[0].id }) }
    }
    throw new customError(serviceLocator.get('exceptions.codeErrors').PAYLOAD, 'User not found')
  } catch (error) {
    serviceLocator.get('utils.handleErrorsServices')(error)
  }
}

module.exports = createUser
