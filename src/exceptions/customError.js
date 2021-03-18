class customError extends Error {
  constructor(code, message = '', errors = {}) {
    super(message)
    this.errors = errors
    this.code = code

    Error.captureStackTrace(this, customError)
  }
}

module.exports = customError
