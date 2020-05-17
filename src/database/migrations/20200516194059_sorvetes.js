
exports.up = function(knex) {
    return knex.schema.createTable('sorvetes', function (table) {
        table.increments()
        table.string('nome').notNullable()
        table.string('descricao').notNullable()
        table.decimal('preco').notNullable()
        table.integer('favorito').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('sorvetes')
};
