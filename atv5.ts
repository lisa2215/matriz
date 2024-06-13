/*Atividade 5 (10 pontos)

Faça um programa que armazene em um Array
somente número pares (6 números, é óbvio que temos que 
verificar se o número é par antes de armazenar 
no array), no final mostre o Array. 
*/

const teclado = require(`prompt-sync`)();
let entrada: number = 0;
let numeros = new Array(6);

for ( let x = 0; x <= 6; x++){
    entrada = parseInt(teclado(`Digite um número para armazenar no Array ${x}: `));
    
    let resto = entrada % 2;
    if(resto == 0){
        numeros[x] = entrada;
    }
    else{
        x--;
    }
}

console.log(`Os números pares armazenados no Array são: ${numeros}`);