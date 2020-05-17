const express = require('express')
const routes = express.Router()

const IceCreamController = require('./controllers/IceCreamController')

routes.get('/sorvetes', IceCreamController.index)

module.exports = routes