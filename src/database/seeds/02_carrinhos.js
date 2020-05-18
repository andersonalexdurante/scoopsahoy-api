
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('carrinhos').del()
    .then(function () {
      // Inserts seed entries
      return knex('carrinhos').insert([
        {
          id_sorvete: 1,
          preco: 10.20,
          quantidade: 2,
          entregue: true,
          sessao: "anderson"
        },
        {
          id_sorvete: 3,
          preco: 10.00,
          quantidade: 2,
          entregue: true,
          sessao: "anderson"
        },
        {
          id_sorvete: 4,
          preco: 5.50,
          quantidade: 1,
          entregue: false,
          sessao: "anderson"
        },
        
      ]);
    });
};
