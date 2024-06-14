// QUESTÃO 1   utilizando op.logico com comparadores 
console.log("QUESTÃO 1")
/*Criar 3 variaveis que guardem numeros.*/
const num1 = 1  
const num2 = 2
const num3 = 3

/*Imprimir na tela as seguintes mensagens:*/
/* 1-> O primeiro numero é identico ao segundo e o primeiro numero é maior que o terceiro? True/False*/
const condicao1 = (num1 === num2) && (num1 > num3)
console.log(`1-> O ${num1} é identico ao ${num2} e o ${num1} é maior que o ${num3}?  ${condicao1}`)


/* 2-> O primeiro numero é diferente do segundo ou o primeiro numero é menor igual do que o terceiro? True/False*/
const condicao2 = (num1 !== num2) || (num1 <= num3)
console.log(`2-> O ${num1} é diferente do ${num2} ou ${num1} é menor igual do que o ${num3}?  ${condicao2}`)


/* 3-> O terceiro numero é maior que o segundo, e o terceiro numero é menor que o primeiro? True/False*/
const condicao3 = (num3 > num2) && (num3 < num1)
console.log(`3-> O ${num3} é maior que ${num2}, e o ${num3} é menor que o ${num1}?  ${condicao3}`)

