//3- Altere o código um(1) desse conteúdo para funcionar com números e ter duas colunas.
console.clear();
var teclado = require("Prompt-sync")();
var matriz = [];
var linha = 2;
var coluna = 2;
//z percorre as linhas 
for (var z = 0; z < linha; z++) {
    //Criar um array vazio para prencher a linha correspondente ao z
    matriz[z] = [];
    for (var x = 0; x < coluna; x++) {
        //Atribuição via entrada de dados manual na variavel número
        var numero = teclado("Digite o n\u00FAmero que vai estar no endere\u00E7o [".concat(z, ", ").concat(x, "] da matriz:  "));
        // atribui a variavel número a matriz do endereço dado por z e x 
        var matriz_1 = [z][x];
    }
}
// declara matriz 
console.log(matriz);
/*
console.clear();
let teclado = require(`Prompt-sync`)();
let minhaMatriz: number[][] = [];

let linha = 4;
let coluna = 2;

for (let z = 0; z < linha; z++) {
    minhaMatriz[z] = [];

    for (let x = 0; x < coluna; x++) {
        let nome: number = parseFloat(teclado(`Digite o nome que vai estar no
                                                 endereço [${z}, ${x}] da matriz: `));
        
        minhaMatriz[z][x] = nome;
    }
}
console.log(minhaMatriz);

*/ 
