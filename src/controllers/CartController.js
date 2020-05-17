const connection = require('../database/connection')

module.exports = {

    async profile(req, res) {
        const carrinhos = await connection('carrinhos')
        .select('*')
        .where('entregue', false)

        return res.json(carrinhos)
    },

    async history(req, res) {
        const carrinhos = await connection('carrinhos')
        .select('*')
        .where('entregue', true)

        return res.json(carrinhos)
    },

    async create(req, res) {
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
    },

    async delivered(req, res) {
        const [id] = req.body.id

        id.map(id => await connection('carrinhos')
            .update('favorito', true)
            .where('id', id)
        )

        return res.status(204).send();
    }
}