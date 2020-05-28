const connection = require('../database/connection')

module.exports = {

    async signUp(req, res, next) {
        try {
            const { email, nome, senha } = req.body

            const [ id ] = await connection('usuarios')
            .insert({
                email,
                nome,
                senha
            })

            return res.status(201).send({ id })
        } catch (error) {
            next(error)
        }
    },

    async login(req, res, next) {
        try {
            const { email, senha } = req.body
            
            const user = await connection('usuarios').where('email',email).where('senha',senha)
            if(user) {
                return res.status(200).json(user)
            }
            else {
                return res.status(401)
            }

        } catch (error) {
            next(error)
        }
    }
}