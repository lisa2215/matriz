/* 9- Crie uma matriz 6x6 com entrada manual. Em seguida,
calcule e exiba a soma dos elementos das colunas pares da
matriz.
*/
console.clear();
var teclado = require("Prompt-sync")();
var matriz = [];
var linha = 6;
var coluna = 6;
var l = 0;
var c = 0;
for (l = 0; l < linha; l++) {
    matriz[l] = [];
    for (c = 0; c < coluna; c++) {
        var numColuna = parseInt(teclado("Digite o n\u00FAmero para ser armazenado no endere\u00E7o [".concat(l, ", ").concat(c, "]: ")));
        matriz[l][c] = numColuna;
    }
}
var somaElementos = 0;
for (l = 0; l < linha; l++) {
    for (c = 0; c < coluna; c++) {
        if ((c % 2) == 0) {
            somaElementos = somaElementos + matriz[l][c];
        }
    }
}
console.log(matriz);
console.log("A soma dos elementos nas colunas pares da matriz \u00E9 igual a: ".concat(somaElementos));
