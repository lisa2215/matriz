console.clear();
let teclado = require (`Prompt-sync`)();
// declarando matriz usando o construtor array limitado a 3 linhas
let matrizDois: string[][] =  new Array(3);

for (let i = 0; i < 3; i++){
    //Cria um array vazio para preencher a linha de correspondente ao i limitado a 3 linhas 
    matrizDois[i] = new Array(3);

    for (let j = 0; j < 4; j++ ){
        //Atribuido via entrada de dados manual na variavel nome 
        let nome: string = teclado(`Digite o nome que vai estar no endereço [${i}, ${j}] da matriz: `);

        //Atribui na matriz do endereço dado por i e j

        matrizDois[i][j] = nome;
    }
}

// imprime a matriz
console.log(matrizDois);