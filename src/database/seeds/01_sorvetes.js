
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sorvetes').del()
    .then(function () {
      // Inserts seed entries
      return knex('sorvetes').insert([
        {
          nome: "Morango",
          descricao: "Um sorvete fresco de morango sempre cai bem em dias quentes, não é mesmo?",
          preco: 4.60,
          imagem: 'https://halderramos.com.br/wp-content/uploads/2019/06/2-strawberry-ice-cream-IMG_1274.png',
          favoritos: 3
        },
        {
          nome: "Napolitano",
          descricao: "o sorvete napolitano apresenta os blocos de sorvete de morango, de chocolate e de baunilha, colados lado a lado no mesmo recipiente, sem nenhuma divisória entre eles.",
          preco: 6.20,
          imagem: 'https://i.pinimg.com/originals/cc/cb/ae/cccbaeffb2219b7f9817ef74aceebc85.jpg',
          favoritos: 2
        },
        {
          nome: "Flocos",
          descricao: "Esse sabor é uma adaptação brasileira de um sorvete muito famoso nos EUA, o “chocolate chips”, feito com gotas de chocolate.",
          preco: 5.00,
          imagem: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-sorvete-de-flocos.jpg',
          favoritos: 0
        },
        {
          nome: "Maracujá",
          descricao: "Conhecida como a fruta da paixão de cristo por sua coroa de espinhos, uma simbologia dada pelos jesuítas ao se encantarem por sua flor, o sorvete de maracujá é uma ótima escolha!",
          preco: 5.50,
          imagem: 'https://2.bp.blogspot.com/-DIVmIyUlfVE/WBk7zUsoXUI/AAAAAAAARPo/CCBxuuc5CGUYF0tntRfP7_o_Q3znyJA8ACLcB/s1600/DSC_4738.jpg',
          favoritos: 1
        },
        {
          nome: "Coco",
          descricao: "Acredita-se que o sorvete de coco tenha sido inventado no Rio de Janeiro, onde se misturava a base de leite de vaca batido com a água e os flocos de coco.",
          preco: 4.00,
          imagem: 'https://img.imirante.com.br/2019/10/07/1570449341-410999009-810x471.jpg',
          favoritos: 0
        },
        
      ]);
    });
};
