/*Atividade 4 (10 pontos)
 Encontre os 5 erros
 - Se inserir erros -2 pontos por erro
 - indique as linhas que estão com problemas no código

Aplicação abaixo recebe 10 números, armazena em um vetor 
e ordene esses 10 números crescente utilizando for
*/

console.clear();
let teclado = require (`Prompt-sync`)();
let numeros = new Array();

for (let x = 0; x <= 9; x++){
    numeros[x] = parseInt(teclado(`Digite o número do índice ${x} do Array: `)); //não havia o (teclado)
}

for (let z =0; z <= 9; z++){
    for (let y = z+1; y <= 9; y++){ //estava subtraindo(z-1) mas é soma(z+1), estava decrementando(y--) é incremento(y++)
        if (numeros[z] > numeros[y]){ //estava comparando o [z] com ele mesmo
            let temporario = numeros[z];
            numeros[z] = numeros[y]; //estava novamente comparando o [z] com ele mesmo
            numeros[y] = temporario;
        }
    }
}

console.log(`O Array em ordem crescente ${numeros}`);