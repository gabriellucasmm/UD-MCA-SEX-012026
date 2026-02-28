// Criando um Objeto
let produto = {
    nome: 'Notebook',
    cor: 'Preto',
    preco: 3500,
    estoque: 50
};

// A. Como acessar o nome do objeto?
console.log("Nome do objeto:", produto.nome);

// B. Como acessar o preço usando colchetes?
console.log("Preço:", produto['preco']);

// C. Atualize o estoque para 80.
produto.estoque = 80;

// D. Imprima todas as propriedades no console.
console.log("Todas as propriedades:");
for (let chave in produto) {
    console.log(chave + ":", produto[chave]);
}