const createUser = async (serviceLocator, { name, lastName, username, password, favoriteCurrency }) => {
  const serviceError = serviceLocator.get('exceptions.serviceError')
  const userByUsername = serviceLocator.get('filters.user').get()

  if (userByUsername.length) {
    throw new serviceError(serviceLocator.get('exceptions.codeErrors').PAYLOAD, '', {
      username: 'username already exists'
    })
  }

  if (!serviceLocator.get('services.passwordIsValid')(password)) {
    throw new serviceError(serviceLocator.get('exceptions.codeErrors').PAYLOAD, '', {
      password: 'the password must be longer than 8 characters'
    })
  }

  if (!serviceLocator.get('services.favoriteCurrencyIsValid')(favoriteCurrency)) {
    throw new serviceError(serviceLocator.get('exceptions.codeErrors').PAYLOAD, '', {
      favoriteCurrency: 'the selected currency is not valid'
    })
  }

  try {
    const newUser = {
      name,
      lastName,
      username,
      password: serviceLocator.get('utils.handleCryptText').createHash(password),
      favoriteCurrency
    }

    await serviceLocator.get('userRepository.createUser')(newUser)
    return true
  } catch (error) {
    console.log('error is', error)
    throw new serviceError(serviceLocator.get('exceptions.codeErrors').UNEXPECTED)
  }
}

module.exports = createUser
