//QUESTÃO 1

/*Escreva um laço que imprima a tabuada de um numero*/
console.log("QUESTÃO 1")

let tabuada = 10 
let contador = 1

while (tabuada <= 100) {
console.log(tabuada)
contador ++
tabuada = 10 * contador
}


//QUESTÃO 2
/* Escreva um laço que percorre um array com numeros e devolva qual o maior dentro dele*/
/* Ex: Para o array [11,15,18,14,12,13], a saida deve ser: "O maior numero é 18" */

console.log("")
console.log("QUESTÃO 2")

const numeros = [11, 15, 18, 14, 12, 13]

    let maiorNumero = 0

    for(let i = 0; i < numeros.length; i++)
    {
        let numeroAtual = numeros[i]
        console.log(numeroAtual)
        if(numeroAtual >= maiorNumero){
            maiorNumero = numeroAtual
        }
    }
    console.log(`O maior numero do array é ${maiorNumero}`)


 //QUESTÃO 3
/* Considere que voce tem um array com varias palavras. Nossa tarefa é criar um laço para imprimi-las 
em uma só mensagem colocando um espaço entre elas*/
/*Ex: Para este array ["Oi","sumido","tudo","bem","saudades"], Dar a mensagem  "Oi sumido tudo bem? Saudades*/
console.log("")
console.log("QUESTÃO 3")


const frases = ["Oi","sumido","tudo","bem?","Saudades!"]
let resultado = ""
for (let palavra of frases ){
    resultado = resultado + " " + palavra
   }

console.log(resultado)
