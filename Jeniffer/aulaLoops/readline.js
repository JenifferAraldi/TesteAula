//npm install readline-sync

console.log("Readline")
const readlineSync = require('readline-sync');

const nome = readlineSync.question('Qual o seu nome?');
const idade = readlineSync.question('Qual a sua idade?');

console.log(`Olá, ${nome}, tudo bem? Você tem ${idade} anos.`);



//Q1- Para cada n/ do seu array de numeros, imprima o valor do n°

console.log("")
console.log("Q1")

const arrayDeNumeros = [10, 20, 30, 40, 50]

for(numero of arrayDeNumeros){
    console.log(numero)
}


//Q2 - Crie um array com alguns numeros
/*Abaixo dele, crie uma variavel  chamada soma e atribua a ela o valor 0 
Agora, crie um loop for of para ler este array e, usando a variavel soma, some todos os valores que estão dentro do array.*/

console.log("")
console.log("Q2")

const meusNumeros = [1, 6, 17, 4, 95, 98]
const soma = 0

for( numeros of meusNumeros){

    soma = soma + numeros
}

console.log( soma) 

