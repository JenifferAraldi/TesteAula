 /*Q1: CONTAR: 1 ao 100 ( de 10 em 10) */

console.log("Q1")

 let contar = 0

while (contar <= 100 ) {
    console.log(contar)
    contar+=10
}


// i++    incrementa em 1

// i = i + "numero"      incrementa i somando algum numero
 /* Ex: i = i + 1, ou i = i + 2, ou i = i +3  */

 // i += i + "numero"    incrementa i somando algum numero,de maneira abreviada
 /* Ex: i += 1, ou i += 2, ou i += 3  */





 // 23.04.2024 Array + FOR (o FOR pode ser usado para percorrer arrays e fazer algo / mostra todos os n° que estão no array)

console.log("")
console.log("Q2")
const numeros = [1, 8, 12 ,20, 35, 99,777]

for(let i = 0; i < numeros.length; i ++){
    console.log(numeros[i])
}

////////////////////////////////////////////////////////////// 23/04/24

//(materia que foi passada pelos outros Prof.º)

//Q1 - For - 23/04/24
console.log("")
console.log("Q1-FOR")

for (let bomba = 10; bomba >= 0; bomba-- ) {
    
    console.log(`A bomba vai explodir em ${bomba} segundos`)

    if (bomba === 0) {
        console.log("BOOOOOOM!")  
    }else if (bomba % 2 === 0) {
       console.log("TIC")
    } else {
    console.log("TAC")
    } 
}


//QUESTÃO 2 - Crie uma contagem regressiva usando for. A diferença é que o numero vai ser fornecido pelo usuario atraves do comando readline.

console.log("")
console.log("Q2- For/Readline")


const readlineSync = require('readline-sync');

for(let i2 = readlineSync.question('Insira um numero: '); i2 >= 0; i2 --){
    console.log(i2)
}





