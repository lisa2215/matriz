/* 6-Crie uma matriz 3x3 com entrada manual de números
aceitando somente números de 0 a 9. Em seguida,
exiba a matriz na tela.
*/
console.clear();
var teclado = require("prompt-sync")();
var matriz = new Array(3);
for (var l = 0; l < 3; l++) {
    matriz[l] = new Array(3);
    for (var c = 0; c < 3; c++) {
        var numero = parseInt(teclado("Digite o nome que vai estar no endere\u00E7o [".concat(l, ",").concat(c, "] da matriz: ")));
        if (numero >= 0 && numero <= 9) {
            matriz[l][c] = numero;
        }
        else {
            c--;
        }
    }
}
console.log(matriz);
