/* 7-Crie uma matriz 3x3 com números aleatórios de 0 a 9.
Em seguida, exiba a matriz na tela.
 */

console.clear()
let teclado = require (`Prompt-sync`)();
let matriz: number[][] = [];

let linha = 3;
let coluna = 3;

for (let l = 0; l < linha; l++){
    matriz [l] = [];
    for (let c = 0; c < coluna; c++){
        let numColuna = Math.floor(Math.random() * 10);
        matriz[l][c] = numColuna;
    }
}

console.log(matriz);