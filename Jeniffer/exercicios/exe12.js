//QUESTÃO 1 
/*Crie um array com pelo menos 5 raças de cachorro*/
/*Imprima no console a raça correspondente na terceira posição do array*/
console.log("QUESTÃO 1")

const listaRacas = ["Shitzu","Guaipeca","Pug","Labrador","Ruski"]

console.log(listaRacas[2])

//QUESTÃO 2 
/* Crie um array com os valores [1,2,3,4,5 e 6] e exiba no terminal quando necessario */
/* Determine o tamanho do array / Remova o ultimo elemento do array /  Adicione o numero 7 */
/* Verifique se o array possui um elemento com valor 6 / Remova os numeros [4 e 5] */
/* Determine o novo tamanho do array */ 

console.log("")
console.log("QUESTÃO 2")

const valores = [1, 2, 3, 4, 5, 6]

console.log(`1-> O tamanho do array é de ${valores.length} elementos.`)

valores.pop()
console.log("2-> O array sem o ultimo elemento fica", valores) 

valores.push(7)
console.log("3-> O array com o novo elemento fica:", valores)

console.log("4->O array possui elemento de valor 6?", valores.includes(6))

valores.splice(3,2)
console.log("5-> O array sem os elementos removidos fica:", valores)

console.log(`6-> O novo tamanho do array é de ${valores.length} elementos.`)

