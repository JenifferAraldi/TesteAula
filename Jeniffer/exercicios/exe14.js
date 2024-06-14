//Questão 1
console.log("QUESTÃO 1")

/*1. Crie um laço de repetição que escreva os nº de 1 a 100 */
console.log("")
console.log("1.")

for (i= 1; i <= 100; i++ ){
    console.log(i)
}


/*2. Crie um laço que imprima os nº PARES 1 a 200 */
console.log("")
console.log("2.")

for (let i = 1; i <= 200; i++){
       
    if (i % 2 === 0) {   //resto da divisão: de (i-5) (%- por) 2 (=== - =) 1 (seria o resto) - então ele
                         // pula pois é impar e eu quero par (que seria o valor 0) 
        console.log (i)
    }
}
     

/*3. Crie um laço que imprima a tabuada do nº 5 */
console.log("")
console.log("3.")

const tabuada = 5

for (let i = 1; i <= 10; i++){

console.log(`${i} x ${tabuada} = ${i * tabuada}`)
}


/*4. Faça uma array com 6 nº e a partir dele crie um laço que imprima cada nº do array*/
console.log("")
console.log("4.")

const numeros = [1, 6, 17, 4, 95, 98]

for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}


