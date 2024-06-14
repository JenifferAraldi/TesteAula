//Questão 1: 
/* - Crie um algoritmo que receba 3 numeros em variaveis e a partir deles crie uma estrutura 
condicional que retorne uma mensagem informando que existem dois ou mais numeros identicos 
ou no caso de todos os nº serem diferentes retorne uma msg informando que não há nº identicos.*/

const num1 = 1
const num2 = 2
const num3 = 3

const condicional1 = (num1 === num2) || (num1 === num3) || (num2 === num3)  

console.log("QUESTÃO 1")

if (condicional1) {
    console.log(`UM OU MAIS numeros são identicos!`)
  } else {
    console.log(`NÃO há numeros identicos!`)
  }

//Questão 2: 
  /* - Crie uma algor. que receba uma idade em variavel e a partir dela crie uma estrutura
  condicional que retorne  uma msg informando se é maior ou menor de idade. */
    
  let idade = 25
     
  const condicional2 = idade >= 18 

console.log("")
console.log("QUESTÃO 2")
  if (condicional2) {
      console.log(`MAIOR de idade!`)
    } else {
      console.log(`MENOR de idade!`)
    }

     
//Questão 3:   
 /* - Crie um algo. que receba 1 nº em uma variavel e a partir dele crie uma estrutura condicional 
que retorne uma msg inform. se ele é par ou impar. */

const num4 = 7

const resto = num4 % 2 
const condicional3 = resto === 0

console.log("")
console.log("QUESTÃO 3")
  if (condicional3) {
      console.log(`PAR`)
    } else {
      console.log(`IMPAR`)
    }
  