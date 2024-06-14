//Questão 1 
/*Crie uma função que receba um nome, imprima o nome com uma mensagem de bom dia */
/* Chame / Invoque a função*/
console.log("1->")

function imprimeBomDia(nome) {  
        console.log(`Bom dia ${nome}!`)  
}

imprimeBomDia("Jeniffer") 




//Questão 2
/* Crie uma função que receba por parametro nome, sobrenome, idade e imprima no console a mensagem:
`O cliente fulano de tal  tem x anos` */
/*Invoque esta função 3 vezes passando 3 argumentos (diferentes) */
console.log("")
console.log("2->")

function imprimeCliente(nome, sobrenome, idade) {  
        console.log(`A cliente ${nome} ${sobrenome}, tem ${idade} anos!`)  
}

imprimeCliente("Jeniffer", "Araldi Hendges", 25)
imprimeCliente("Rodrigo", "Hendges Araldi", 29)
imprimeCliente("Bianca", "Araldi", 25)


