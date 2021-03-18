const createUser = async (serviceLocator, { userName, password }) => {
  const customError = serviceLocator.get('exceptions.customError')
  let userByUsername
  try {
    userByUsername = await serviceLocator.get('filters.user')().and('username', userName).get()
  } catch (error) {
    throw new customError(serviceLocator.get('exceptions.codeErrors').UNEXPECTED)
  }

  if (
    userByUsername.length &&
    serviceLocator.get('utils.handleCryptText').compareHash(password, userByUsername[0].password)
  ) {
    return { token: serviceLocator.get('utils.createToken')({ id: userByUsername[0].id }) }
  }
  throw new customError(serviceLocator.get('exceptions.codeErrors').PAYLOAD, 'User not found')
}

module.exports = createUser
