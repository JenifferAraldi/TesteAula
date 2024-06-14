//LOOPS OU LAÇOS
/* laços são efeitos que se repetem*/


//WHILE
/* Condição do () se torna falsa  / while = enquanto */

/* while (condition) {
    
}   */


/*1 ok*/ 
console.log("while 1->")

let i = 0   //começo

while (i <= 10) {  //condição de continuação
    console.log(i)   //ação repetida
i++  //i = i + 1     // incremento
}


/*2 ok*/
console.log("")
console.log("while 2->")

let estomago = 0 ;

while (estomago < 100) {
console.log("Quero comer mais coxinhas");
estomago = estomago + 10;
}


//FOR
/* Relacionado a numeros e a um incremento fixo */

/*  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}  */

/*1 ok*/
console.log("")
console.log("For 1->")

for (let i = 0; i <= 10; i++){  //tudo que estiver dentro do () pertence a esse escopo 
    console.log(i)
}

/*2 ok*/

console.log("")
console.log("For 2->")

const array = [4, 5, 6, 7, 1]
for (let i = 0; i <= (array.length - 1); i++){  //tudo que estiver dentro do () pertence a esse escopo 
    console.log(array[i])
}


/*3*/
console.log("")
console.log("For 3->")

const numeros = [14, 67, 89, 15, 23]
for (let i = 0; i<5; i++){
    const elemento = numeros [i]
    console.log(elemento)
}


//FOR...OF...
/* Percorrer os elementos do array de uma forma bem mais simples de ler */
/*1 ok */
console.log("")
console.log("For...Of 1->")

const numeros1 = [14, 67, 89, 15, 23]
for (let numero of numeros ){  //Só funciona em array: De:numero     Para:numeros
     console.log(numero)
}

