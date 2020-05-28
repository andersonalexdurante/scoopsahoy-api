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
    }
}