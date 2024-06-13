/*Atividade 5 (10 pontos)

Faça um programa que armazene em um Array
somente número pares (6 números, é óbvio que temos que
verificar se o número é par antes de armazenar
no array), no final mostre o Array.
*/
var teclado = require("prompt-sync")();
var entrada = 0;
var numeros = new Array(6);
for (var x = 0; x <= 6; x++) {
    entrada = parseInt(teclado("Digite um n\u00FAmero para armazenar no Array ".concat(x, ": ")));
    var resto = entrada % 2;
    if (resto == 0) {
        numeros[x] = entrada;
    }
    else {
        x--;
    }
}
console.log("Os n\u00FAmeros pares armazenados no Array s\u00E3o: ".concat(numeros));
