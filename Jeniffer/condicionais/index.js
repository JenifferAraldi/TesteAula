//IF

const condicao = true
console.log("(IF)")
if (condicao) {
    console.log(`Entrei dentro do bloco IF`)
  /*tudo que esta dentro das {}
  pertence ao bloco IF */  
}


//IF/ELSE
console.log("")
console.log("(IF / ELSE)")

if (condicao) {
  console.log(`condição verdadeira!`)
} else {
  console.log(`Condição falsa!`)
}


//ELSE IF

const condicao1 = false
const condicao2 = true 

console.log("")
console.log("(ELSE IF)")

if (condicao1) {
       console.log(`Estou no bloco "IF"`)  
}else if (condicao2) {
      console.log(`Estou no bloco "ELSE IF"`)
} else {
  console.log(`Estou no bloco "ELSE"`)
} 

// EX: PROF

const saborDoSuco = "pessego"

console.log("")
console.log("(sabor do suco)")
if (saborDoSuco === "pessego") {
  console.log(`OK! Suco de pessego é bom!`)  
}else if (saborDoSuco === "goiaba") {
 console.log(`Muito obrigada, mas não vou querer o suco hoje!`)
}else if (saborDoSuco === "morango") {
  console.log(`Nem sabia que existia esse sabor...`)
}else {
console.log(`Otimo, finalmente um sabor diferente.`)
} 
