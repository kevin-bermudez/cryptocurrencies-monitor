const getUser = async (serviceLocator, { id = null, userName = null }) => {
  try {
    let userFilter = serviceLocator.get('filters.user')()
    if (userName) {
      userFilter = userFilter.and('username', userName)
    } else {
      userFilter = userFilter.and('id', id)
    }

    const result = await userFilter.get()
    return result
  } catch (error) {
    serviceLocator.get('utils.handleErrorsServices')(error)
  }
}

module.exports = getUser
