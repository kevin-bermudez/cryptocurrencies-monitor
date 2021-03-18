const passwordIsValid = password => {
  return String(password).trim().length > 7
}

module.exports = passwordIsValid
