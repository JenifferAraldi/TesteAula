//TEMPLATE STRINGS

const nome = "Jeniffer"
const idade = 25
/* Const frase = "Olá meu nome $ (nome) é e tenho $ (idade) anos." */
console.log("")
console.log("TAMPLETE")
console.log(`Olá meu nome é ${nome} e tenho ${idade} anos`)


//PROTÓTIPOS DE STRINGS 

/* Propriedades*/
console.log("")
console.log("PROPRIEDADES")
console.log(nome.length)
const propriedade = nome.length

/* Métodos */
console.log("")
console.log("METODOS")
console.log(nome.toLocaleUpperCase())
const metodo = nome.toLocaleUpperCase()


//LENGTH
/*quantidade de caracteres no ''nome''*/
console.log("")
console.log("LENGTH")
console.log(nome.length)
console.log(`A varialvel nome tem ${nome.length} caracteres`)


//TOLOWERCASE
/*deixa tudo ''nome'' minusculo*/
console.log("")
console.log("TOLOWERCASE")
console.log(nome.toLocaleLowerCase())


//TOUPPERCASE
/*deixa maisculo*/
const palavra = "OoIEeeEi"
console.log("")
console.log("TOUPPERCASE")
console.log(palavra.toUpperCase())


//TRIM
/* exclui espaços*/
let email = "     araldijeniffer@gmail.com     "
email = email.trim() 

console.log("")
console.log("TRIM")
console.log(email.trim())
console.log(email.length)


//INCLUDES
/*retorna em booleano - diz se tem ou não tem palavra no texto*/
const frase = "Hoje eu comi batata"

console.log("")
console.log("INCLUDES")
console.log(frase.includes("batata"))

const palavra2 = "mamão"
console.log(`Na frase a palavra ${palavra2} foi encontrada? ${frase.includes("mamão")}`)


//REPLACEALL
/* troca caracteres por palavras*/
const texto = "Hoje comi cenoura, adoro cenoura"
const novoTexto = texto.replaceAll ("cenoura" , "batata")

console.log("")
console.log("REPLACEALL")
console.log(novoTexto)

