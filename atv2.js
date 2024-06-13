console.clear();
var teclado = require("Prompt-sync")();
// declarando matriz usando o construtor array limitado a 3 linhas
var matrizDois = new Array(3);
for (var i = 0; i < 3; i++) {
    //Cria um array vazio para preencher a linha de correspondente ao i limitado a 3 linhas 
    matrizDois[i] = new Array(3);
    for (var j = 0; j < 4; j++) {
        //Atribuido via entrada de dados manual na variavel nome 
        var nome = teclado("Digite o nome que vai estar no endere\u00E7o [".concat(i, ", ").concat(j, "] da matriz: "));
        //Atribui na matriz do endereço dado por i e j
        matrizDois[i][j] = nome;
    }
}
// imprime a matriz
console.log(matrizDois);
