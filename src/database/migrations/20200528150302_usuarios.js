
exports.up = function(knex) {
    return knex.schema.createTable('usuarios', function(table) {
        table.increments()
        table.string(email).notNullable().unique()
        table.string(nome).notNullable().unique()
        table.string(password).notNullable()
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('usuarios')
};
