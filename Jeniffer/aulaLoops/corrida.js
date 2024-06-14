//WHILE

//O ciclista, no começo da corrida, não deu volta nenhuma.
/*ENQUANTO voltas for menor que 10, ele executa o codigo, ou seja, enquanto o ciclista não atingir a 10º volta, ele continua pedalando.*/

let voltas = 0 //variavel de inicialização

while (voltas < 10) {  //condição
    console.log(`Pedale, pois você deu ${voltas} voltas!`)
    voltas++  //incremento
}



//FOR
console.log("")
console.log("For")

for (let voltas2 = 0; voltas2 < 10; voltas2++)  {
    console.log(`Pedale, pois você deu ${voltas2} voltas!`)
}


//Questão 1
/* Faça uma contagem REGRESSIVA de 10 ate 0.*/
console.log("")
console.log("Questão 1")

let contar = 10

while (contar >= 0 ) {
    console.log(`Contagem regressiva: ${contar}`)
    contar--
}


console.log("")
console.log("Q1 - PROF.")
console.log("")
 /* Enquanto segundos for maior ou igual a 0, ele executa a contagem*/
 //Add: 
/*Para cada segundo que for PAR, mostra a palavra "TIC"*/
/*Para cada segundo que for IMPPAR, mostra a palavra "TAC"*/
/*Quando o segundo for 0, mostra a palavra "BOOOOOOM"*/

 let bomba = 10
/* resto:  bomba % 2 === 0  é TIC, quando sobra 1 fica "TAC"  */

 while (bomba >= 0 ) {

    if (bomba === 0) {
        console.log(`${bomba}   BOOOOOOM!`)  
    }else if (bomba % 2 === 0) {
       console.log(`${bomba}    "TIC"`)
    } else {
    console.log(`${bomba}   "TAC"`)
    } 
    bomba--
}

