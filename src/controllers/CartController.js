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
            const { id_sorvete, preco, quantidade, entregue, sessao } = req.body
    
            const [ id ] = await connection('carrinhos')
            .insert({
                id_sorvete,
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
        
    }
}