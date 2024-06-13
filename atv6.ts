/* 6-Crie uma matriz 3x3 com entrada manual de números
aceitando somente números de 0 a 9. Em seguida,
exiba a matriz na tela.
*/

console.clear();
let teclado = require (`prompt-sync`)();
let matriz: number[][] = new Array(3);

for (let l = 0; l < 3; l++){
    matriz[l] = new Array (3);
    for (let c = 0; c < 3; c++){
        let numero: number = parseInt(teclado(`Digite o nome que vai estar no endereço [${l},${c}] da matriz: `));
        if (numero >= 0 && numero <= 9){
         matriz[l][c] = numero;
        }
        else{
            c--;
        }
    }
}

console.log(matriz);