const createUser = async (serviceLocator, { name, lastName, userName, password, favoriteCurrency }) => {
  const customError = serviceLocator.get('exceptions.customError')
  const userByUsername = await serviceLocator.get('filters.user')().and('username', userName).get()

  if (userByUsername.length) {
    throw new customError(serviceLocator.get('exceptions.codeErrors').PAYLOAD, '', {
      username: 'username already exists'
    })
  }

  if (!serviceLocator.get('services.passwordIsValid')(password)) {
    throw new customError(serviceLocator.get('exceptions.codeErrors').PAYLOAD, '', {
      password: 'the password must be longer than 8 characters'
    })
  }

  if (!serviceLocator.get('services.favoriteCurrencyIsValid')(favoriteCurrency)) {
    throw new customError(serviceLocator.get('exceptions.codeErrors').PAYLOAD, '', {
      favoriteCurrency: 'the selected currency is not valid'
    })
  }

  try {
    const newUser = {
      name,
      lastName,
      userName,
      password: serviceLocator.get('utils.handleCryptText').createHash(password),
      favoriteCurrency
    }

    await serviceLocator.get('repositories.user').createUser(newUser)
    return true
  } catch (error) {
    throw new customError(serviceLocator.get('exceptions.codeErrors').UNEXPECTED)
  }
}

module.exports = createUser
