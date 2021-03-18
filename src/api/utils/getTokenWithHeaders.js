const getTokenWithHeaders = req => {
  const authorization = req.headers.authorization
  let token = ''
  if (authorization) {
    token = authorization.replace('Bearer ', '')
  }

  return token
}

module.exports = getTokenWithHeaders
