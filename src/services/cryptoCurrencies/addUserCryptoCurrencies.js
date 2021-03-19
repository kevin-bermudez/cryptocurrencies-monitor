const addUserCryptoCurrencies = async (serviceLocator, { user, cryptoCurrency }) => {
  try {
    const customError = serviceLocator.get('exceptions.customError')
    const userCryptoCurrency = await serviceLocator.get('services.getUserCryptocurrencies')(serviceLocator, {
      user,
      cryptoCurrency
    })

    if (userCryptoCurrency.length) {
      throw new customError(serviceLocator.get('exceptions.codeErrors').PAYLOAD, '', {
        username: 'this user already has this cryptocurrency associated'
      })
    }

    const newAssociation = {
      user,
      cryptoCurrency
    }

    await serviceLocator.get('repositories.user').addCryptoCurrency(newAssociation)
    return true
  } catch (error) {
    serviceLocator.get('utils.handleErrorsServices')(error)
  }
}

module.exports = addUserCryptoCurrencies
