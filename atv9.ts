/* 9- Crie uma matriz 6x6 com entrada manual. Em seguida,
calcule e exiba a soma dos elementos das colunas pares da
matriz.
*/

console.clear()
let teclado = require (`Prompt-sync`)();
let matriz: number[][] = [];

let linha = 6;
let coluna = 6;
let l: number = 0;
let c: number = 0;

for (l = 0; l < linha; l++){
    matriz [l] = [];
    for (c = 0; c < coluna; c++){
        let numColuna: number = parseInt(teclado(`Digite o número para ser armazenado no endereço [${l}, ${c}]: `));
        matriz[l][c] = numColuna;
    }   
}

let somaElementos: number = 0;
for(l = 0; l < linha; l++){
    for (c = 0; c < coluna; c++){
        if ((c % 2) == 0){
            somaElementos = somaElementos + matriz[l][c];
        }
    }   
}

console.log(matriz);
console.log(`A soma dos elementos nas colunas pares da matriz é igual a: ${somaElementos}`);