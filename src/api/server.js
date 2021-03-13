const { API } = require('../config/keys')
const app = require('./config/app')

app.listen(API.SERVER_PORT, () => {
  console.log(`server listening on port ${API.SERVER_PORT}`)
})
