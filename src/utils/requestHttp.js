const axios = require('axios')

const requestHttp = (url, method, options = {}) => {
  return axios({
    url,
    method,
    ...options
  })
}

module.exports = requestHttp
