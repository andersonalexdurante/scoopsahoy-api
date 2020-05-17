const connection = require('../database/connection')

module.exports = {

    async list(req, res) {
        const type = req.headers.type

        //Mais recentes
        if(type === 1) {
            const sorvetes = await connection('sorvetes')
            .select('*').orderByRaw('id DESC').limit(20)

            return res.json(sorvetes)
        }
        
        //Mais populares
        if(type === 2) {
            const sorvetes = await connection('sorvetes')
            .select('*').orderByRaw('favoritos DESC').limit(10)

            return res.json(sorvetes)
        }

        //Aleatório
        const sorvetes = await connection('sorvetes')
        .select('*')
        .orderByRaw('RANDOM()')
        .limit(5)

        sorvetes.sort(() => Math.random() - 0.5)

        return res.json(sorvetes)
    },

    async create(req, res) {
        const { nome, descricao, preco, favoritos } = req.body

        const [ id ] = await connection('sorvetes')
        .insert({
            nome, 
            descricao,
            preco,
            favoritos,
        })

        return res.json({ id })
    },

    async delete(req, res) {
        const { id } = req.params

        await connection('sorvetes').where('id', id).delete()

        return res.status(204).send();
    }

}