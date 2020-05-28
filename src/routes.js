const express = require('express')
const routes = express.Router()

const IceCreamController = require('./controllers/IceCreamController')
const CartController = require('./controllers/CartController')
const UserController = require('./controllers/UserController')

routes.get('/sorvetes', IceCreamController.index)
routes.post('/sorvetes', IceCreamController.create)
routes.delete('/sorvetes/:id', IceCreamController.delete)

routes.post('/carrinho', CartController.create)
routes.get('/profile', CartController.profile)
routes.get('/history', CartController.history)

routes.post('/cadastrar', UserController.signUp)

module.exports = routes