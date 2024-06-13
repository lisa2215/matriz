//3- Altere o código um(1) desse conteúdo para funcionar com números e ter duas colunas.

console.clear()
let teclado = require (`Prompt-sync`)();
let matriz: number [][] = [];

let linha = 2;
let coluna = 2;

//z percorre as linhas 
for (let z = 0; z < linha; z++){
    //Criar um array vazio para prencher a linha correspondente ao z
    matriz[z] = []
    
    for (let x =0; x < coluna; x++ ){
        //Atribuição via entrada de dados manual na variavel número
        let numero: string = teclado(`Digite o número que vai estar no endereço [${z}, ${x}] da matriz:  `);

        // atribui a variavel número a matriz do endereço dado por z e x 
        let matriz : number = [z][x];
       

    }    
    
}

// declara matriz 
console.log(matriz);

/*
console.clear();
let teclado = require(`Prompt-sync`)();
let minhaMatriz: number[][] = [];

let linha = 4;
let coluna = 2;

for (let z = 0; z < linha; z++) {
    minhaMatriz[z] = [];

    for (let x = 0; x < coluna; x++) {
        let nome: number = parseFloat(teclado(`Digite o nome que vai estar no 
                                                 endereço [${z}, ${x}] da matriz: `));
        
        minhaMatriz[z][x] = nome;
    }
}
console.log(minhaMatriz);

*/