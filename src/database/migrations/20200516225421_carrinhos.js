
exports.up = function(knex) {
    return knex.schema.createTable('carrinhos', function (table) {
        table.increments()
        table.string('nome').notNullable()
        table.decimal('preco').notNullable()
        table.integer('quantidade').notNullable()
        table.boolean('entregue').notNullable()
        table.string('sessao').notNullable()
    })
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('carrinhos')
};
  