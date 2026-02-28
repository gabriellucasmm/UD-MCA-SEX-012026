// Criando um Array contendo 10 objetos
let produtos = [
    { nome: 'Mouse', preco: 50, estoque: 100 },
    { nome: 'Teclado', preco: 120, estoque: 60 },
    { nome: 'Monitor', preco: 900, estoque: 30 },
    { nome: 'Notebook', preco: 3500, estoque: 15 },
    { nome: 'Celular', preco: 2500, estoque: 40 },
    { nome: 'Headset', preco: 200, estoque: 80 },
    { nome: 'Webcam', preco: 150, estoque: 55 },
    { nome: 'Impressora', preco: 700, estoque: 20 },
    { nome: 'HD Externo', preco: 400, estoque: 25 },
    { nome: 'SSD', preco: 600, estoque: 70 }
];

// A. Qual é o preço do segundo objeto?
console.log("Preço do segundo objeto:", produtos[1].preco);

// B. Qual é o nome do terceiro objeto?
console.log("Nome do terceiro objeto:", produtos[2].nome);

// C. Quantos itens existem no array?
console.log("Quantidade de itens:", produtos.length);

// D. Imprima o nome de todos os objetos.
for (let i = 0; i < produtos.length; i++) {
    console.log("Nome:", produtos[i].nome);
}

// E. Some o total de estoque de todos os objetos.
let totalEstoque = 0;
for (let i = 0; i < produtos.length; i++) {
    totalEstoque += produtos[i].estoque;
}
console.log("Total de estoque:", totalEstoque);

// F. Qual objeto possui maior estoque?
let maiorEstoque = produtos[0];

for (let i = 1; i < produtos.length; i++) {
    if (produtos[i].estoque > maiorEstoque.estoque) {
        maiorEstoque = produtos[i];
    }
}

console.log("Produto com maior estoque:", maiorEstoque);