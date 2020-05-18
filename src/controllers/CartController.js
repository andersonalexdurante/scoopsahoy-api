const connection = require('../database/connection')

module.exports = {

    async profile(req, res, next) {
        try {
            const carrinhos = await connection('carrinhos')
            .select('*')
            .where('entregue', false)

            return res.json(carrinhos)
        } catch (error) {
            next(error)
        }
    },

    async history(req, res, next) {
        try {
            const carrinhos = await connection('carrinhos')
            .select('*')
            .where('entregue', true)
    
            return res.json(carrinhos)   
        } catch (error) {
            next(error)
        }
    },

    async create(req, res, next) {
        try {
            const { preco, quantidade, sessao } = req.body
            const entregue = false
    
            const [ id ] = await connection('carrinhos')
            .insert({
                preco,
                quantidade,
                entregue,
                sessao
            })
    
            return res.json({ id })   
        } catch (error) {
            next(error)
        }
    },

    async delivered(req, res, next) {
        try {
            const [id] = req.body.id

            id.map(id => await connection('carrinhos')
                .update('favorito', true)
                .where('id', id)
            )
    
            return res.status(204).send();   
        } catch (error) {
            next(error)
        }
    }
}