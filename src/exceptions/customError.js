class serviceError extends Error {
  constructor(code, message = '', errors = {}) {
    super(message)
    this.errors = errors
    this.code = code

    Error.captureStackTrace(this, serviceError)
  }
}

module.exports = serviceError
