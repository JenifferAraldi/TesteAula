//Questão 1 
/* Crie um algoritmo que receba 3 numeros em variaveis e a partir deles crie uma condicional que retorne true 
caso 2 desses numeros sejam identicos.*/
const num1 = 1  
const num2 = 2
const num3 = 3

console.log("QUESTÃO 1")
const condicao1 = (num1 === num2) || (num1 === num3) || (num2 === num3)
console.log(`Entre esses numeros ${num1}, ${num2} e ${num3}: dois deles são identicos? ${condicao1}`)


//Questão 2 
/* Crie um algoritimo que receba 3 numeros em variaveis e a partir deles crie uma condicional que retorne true 
caso o primeiro numero seja o maior dos 3.*/
const num4 = 1  
const num5 = 2
const num6 = 3 

console.log("")
console.log("QUESTÃO 2")
const condicao2 = (num4 > num5) && (num4 > num6)
console.log(`O ${num4} é maior que ${num5} e ${num6}? ${condicao2}`)


//Questão 3 
/* Crie um algoritimo que receba uma idade em variaveis e a partir dela crie uma condicional que retorne
true caso seja maior de idade.*/

const maiorIdade = 18
let idade = 25

const condicao3 = idade >= maiorIdade  
                    
console.log("")
console.log("QUESTÃO 3")
console.log(`${idade} anos é maior de idade? ${condicao3}`)


//Questão 4 
/* Crie um algoritimo que receba 1 numero em uma variavel e a partir deles crie uma condicional que retorne
true caso seja par. */

const num7 = 21  
const num8 = 7  


console.log("")
console.log("QUESTÃO 4")
const condicao4 = num7 % num8
const resto = condicao4 === 0

console.log(`O valor é par no resto da divisão? ${resto}`)


//4 profxxxxxxxxxx

const num9 = 10
const resto2 = num9 % 2 
const condicional = resto2 === 0
/* const condicional = (num9 % 2) === 0 */

console.log(`4-> O numero é par? ${condicional}`)

