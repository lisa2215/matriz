/* 8- Crie uma matriz 4x4 com números aleatórios entre 0 e 20.
Em seguida, exiba a matriz na tela e encontre o maior
elemento da matriz e a posição em que ele se encontra.
 */

console.clear()
let teclado = require (`Prompt-sync`)();
let matriz: number[][] = [];

let linha = 4;
let coluna = 4;


for (let l = 0; l < linha; l++){
    matriz [l] = [];
    for (let c = 0; c < coluna; c++){ 
        let numColuna = Math.floor(Math.random() * 21);
        matriz[l][c] = numColuna;   
    }
}

console.log(matriz);

let maior: number = 0;
let l2: number = 0;
let c2: number = 0;

for (let l = 0; l < linha; l++){
    for (let c = 0; c < coluna; c++){
        if (matriz[l][c] > maior){
            maior = matriz[l][c];
            l2 = l;
            c2 = c;
        }
    }
}

console.log(`O maior número na sua matriz é ${maior}, ele esta na posição [${l2}, ${c2}] da matriz.`);