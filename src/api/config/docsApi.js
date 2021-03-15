const express = require('express')
const path = require('path')

const docsApi = app => {
  app.use('/docs', express.static(path.resolve(__dirname, '..', 'docs')))
}

module.exports = docsApi
