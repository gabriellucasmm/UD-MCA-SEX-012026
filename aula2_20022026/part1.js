// Criando array com 21 elementos (índice vai de 0 até 20)
let frutas = [
    'Maçã', 'Banana', 'Uva', 'Morango', 'Abacaxi',
    'Manga', 'Laranja', 'Pera', 'Kiwi', 'Melancia',
    'Limão', 'Cereja', 'Ameixa', 'Goiaba', 'Caju',
    'Mamão', 'Maracujá', 'Figo', 'Caqui', 'Framboesa',
    'Pitaya'
];

// A. Qual elemento está na posição 0, 7, 11, 15, 18 e 20?
console.log("Posição 0:", frutas[0]);
console.log("Posição 7:", frutas[7]);
console.log("Posição 11:", frutas[11]);
console.log("Posição 15:", frutas[15]);
console.log("Posição 18:", frutas[18]);
console.log("Posição 20:", frutas[20]);

// B. Qual elemento está na penúltima e última posição?
console.log("Penúltima posição:", frutas[frutas.length - 2]);
console.log("Última posição:", frutas[frutas.length - 1]);

// C. Quantos elementos existem no array?
console.log("Quantidade de elementos:", frutas.length);

// D. Adicione um novo elemento ao final do array.
frutas.push("Carambola");

// E. Imprima todos os elementos usando um for.
for (let i = 0; i < frutas.length; i++) {
    console.log("Elemento:", frutas[i]);
}