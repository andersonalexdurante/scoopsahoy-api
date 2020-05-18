const connection = require('../database/connection')

module.exports = {

    async index(req, res, next) {
        try {
            const type = req.headers.type

            //Mais recentes
            if(type == 1) {
                console.log("recentes")
                const sorvetes = await connection('sorvetes')
                .select('*').orderByRaw('id DESC').limit(20)

                return res.json(sorvetes)
            }
            
            //Mais populares
            else if(type == 2) {
                console.log("populares")
                const sorvetes = await connection('sorvetes')
                .select('*').orderByRaw('favoritos DESC').limit(10)

                return res.json(sorvetes)
            }

            else {
                console.log("aleatório")
                //Aleatório
                const sorvetes = await connection('sorvetes')
                .select('*')
                .orderByRaw('RANDOM()')
                .limit(5)

                sorvetes.sort(() => Math.random() - 0.5)

                return res.json(sorvetes)
            }
        } catch (error) {
            next(error)
        }
        
    },

    async create(req, res, next) {
        try {
            const { nome, descricao, preco, favoritos } = req.body

            const [ id ] = await connection('sorvetes')
            .insert({
                nome, 
                descricao,
                preco,
                favoritos,
            })
    
            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params

            await connection('sorvetes').where('id', id).delete()

            return res.status(200).send();
        } catch (error) {
            next(error)
        }
    }

}