const express = require('express')
const routes = express.Router()

const IceCreamController = require('./controllers/IceCreamController')
const CartController = require('./controllers/CartController')

routes.get('/sorvetes', IceCreamController.index)
routes.post('/sorvetes', IceCreamController.create)
routes.delete('/sorvetes/:id', IceCreamController.delete)

routes.post('/carrinho', CartController.create)
routes.get('/profile', CartController.profile)
routes.get('/history', CartController.history)

module.exports = routes