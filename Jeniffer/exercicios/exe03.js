// OPERAÇÕES
const num1 = 3
const num2 = 4
const num3 = 5
const num4 = 2
const num5 = -1
const num6 = 234

/* (1) Somar 3 com 4*/

const resultadoSoma = num1 + num2
console.log("(1)")
console.log(num1,"+",num2,"=",resultadoSoma)
console.log("")

/* (2) Multiplicar 3 com 5 e dividir o resultado por 2*/

console.log("(2)")
const resultado = (num1 * num3)/2 
console.log(num1,"x",num3,"=",resultado)

const result = (num1 * num3)/ num4 
console.log(num1,"x",num3,"/",num4,"=",result)
console.log("")


/* (3) Subtrair 5 de 4 e multiplicar o resultado por -1*/

console.log("(3)")
const res1 = (num3 - num2)*(-1) 
console.log(num3,"-",num2,"=",res1)

const res2 = (num3 - num2)*(num5) 
console.log(num3,"-",num2,"x",num5,"=",res2)
console.log("")


/* (4) Determinar o resto da divisão de 234 por 5*/

console.log("(4)")
const resto = num6 % num3
console.log(num6,"%",num3,"=",resto)

console.log("")

//conforme professor
// 1 ->   3+4= x           *************************************************************************
const valor1A = 3
const valor1B = 4
const result1 = valor1A + valor1B 

console.log("1->",valor1A,"+",valor1B,"=",result1)

// 2 -> (3x5)/2= x        ************************************************************************
const valor2A = 3
const valor2B = 5
const valor2C = 2
const result2 = (valor2A * valor2B) / valor2C 

console.log("2->(",valor2A,"x",valor2B,") /", valor2C, "=", result2)

// 3 -> (4-5) x-1= x  ************************************************************************

const valor3A = 4
const valor3B = 5
const valor3C = -1
const result3 = (valor3A - valor3B) * valor3C 

console.log("3->(",valor3A,"-",valor3B,") * ", valor3C, "=", result3)

// 4 -> 234%5= x ************************************************************************

const valor4A = 234
const valor4B = 5
const result4 = valor4A % valor4B 

console.log("4->", valor4A , "%" , valor4B, "=", result4 )