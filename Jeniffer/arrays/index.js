//ARRAYS

console.log("ARRAYS")

const listaDeCompras = ["batata", "cenoura", "tomate"]
const listaDaLoteria = [2, 4, 11, 22, 35, 67]
const listaBolleans = [true, false, false]
const listaVariada = [5, "cinco", true]

console.log(listaDeCompras[2])

console.log(listaVariada[1])

console.log(listaVariada[0]+1)


//LENGTH
/*Conta quantos indices tem*/

console.log("")
console.log("LENGTH")

console.log(listaDeCompras.length)


//INCLUDES
/*Verifica em bolleano*/

console.log("")
console.log("INCLUDES")

const seriesBoas = ["GreysAnatomy","The Office"] 

seriesBoas.includes("The Officie") //True
seriesBoas.includes("TWD") // False

console.log(listaDaLoteria.includes(4))


//PUSH 
/*Adiciona elemento*/

console.log("")
console.log("PUSH")

const numeros = [1, 2, 3]

/* console.log(numeros) */
numeros.push(4)

/* console.log(numeros) // [1,2,3,4] */
numeros.push(5, 6, 7)
console.log(numeros) // [1,2,3,4,5,6,7]


//POP
/*Apaga ultimo elemento */

console.log("")
console.log("POP")
const meusPeixes = ["Telescopio", "Rei", "Lambari"]

meusPeixes.pop()
console.log(meusPeixes) //["Telescopio", "Rei"]

listaDeCompras.pop()
console.log(listaDeCompras) 


//SPLICE
/*Remove o elemento, mas manetem o indice */
/*Primeiro remove o indice, apos a virgula o nº referencia qtd apagar*/

console.log("")
console.log("SPLICE")

const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]
/*Indices (i) =  0    1    2    3    4    5    6    7 */

letras.splice(2, 1)
console.log(letras)
/*     letras = ["A", "B", "D", "E", "F", "G", "H"]
/*Indices (i) =   0    1    2    3    4    5    6 */

letras.splice(3, 2) // letras = ["A", "B", "D", "G", "H"]
console.log(letras)

listaDaLoteria.splice(1,2)
console.log(listaDaLoteria)

