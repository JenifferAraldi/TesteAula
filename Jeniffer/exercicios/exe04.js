// 1-> "A cor favorita de FULANO é COR"   em String e Concatenação
console.log("1->")

const nome = "Jeniffer"
const cor = "Azul"

console.log(`A cor favorita de ${nome} é ${cor}.`)

// 2-> Todas letras maiusculas; na lingua do i (substituindo "o" por "i"); o tamanho da frase.
console.log("")
console.log("2->")

console.log("Todas letras maiusculas:")
const frase1 = "Hello,World!"
console.log(frase1.toUpperCase())

console.log("")
console.log("Lingua do I:")
const novoTexto = frase1.replaceAll ("o" , "i")
console.log(novoTexto)

console.log("")
console.log("Tamanho da frase:")
let frase2 = "     Hello, World!       "
tamanho = frase2.trim() 
console.log(tamanho.trim())
console.log(tamanho.length)

//Professor 
console.log("")
console.log("2-> conforme Prof.")

const frasi = "É tri programar!"

console.log(frasi.toLocaleUpperCase())
console.log(frasi.replaceAll("o","i"))
console.log(`A frase possui ${frasi.length} caracteres.`)
