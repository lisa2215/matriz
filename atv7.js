/* 7-Crie uma matriz 3x3 com números aleatórios de 0 a 9.
Em seguida, exiba a matriz na tela.
 */
console.clear();
var teclado = require("Prompt-sync")();
var matriz = [];
var linha = 3;
var coluna = 3;
for (var l = 0; l < linha; l++) {
    matriz[l] = [];
    for (var c = 0; c < coluna; c++) {
        var numColuna = Math.floor(Math.random() * 10);
        matriz[l][c] = numColuna;
    }
}
console.log(matriz);
