/* 8- Crie uma matriz 4x4 com números aleatórios entre 0 e 20.
Em seguida, exiba a matriz na tela e encontre o maior
elemento da matriz e a posição em que ele se encontra.
 */
console.clear();
var teclado = require("Prompt-sync")();
var matriz = [];
var linha = 4;
var coluna = 4;
for (var l = 0; l < linha; l++) {
    matriz[l] = [];
    for (var c = 0; c < coluna; c++) {
        var numColuna = Math.floor(Math.random() * 21);
        matriz[l][c] = numColuna;
    }
}
console.log(matriz);
var maior = 0;
var l2 = 0;
var c2 = 0;
for (var l = 0; l < linha; l++) {
    for (var c = 0; c < coluna; c++) {
        if (matriz[l][c] > maior) {
            maior = matriz[l][c];
            l2 = l;
            c2 = c;
        }
    }
}
console.log("O maior n\u00FAmero na sua matriz \u00E9 ".concat(maior, ", ele esta na posi\u00E7\u00E3o [").concat(l2, ", ").concat(c2, "] da matriz."));
