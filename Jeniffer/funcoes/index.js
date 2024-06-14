//FUNÇÕES 
/* é um bloco de cod. que executa */
console.log("FUNÇÕES:")

console.log("1.")
function imprimirOlaMundo() {  //Criando a função / declara o nome / parametros
    console.log("Olá Mundo!")  //corpo da função
}

imprimirOlaMundo()  // Chamando a função

////////////////////////////////////////////////////////////////////////////////////
console.log("")
console.log("2.")

function calcularArea(altura, largura) {
    const area = altura * largura
    console.log(area)
}

calcularArea(5,6)
calcularArea(50,60)
calcularArea(20,14)


//ESCOPO
// escopo global e local
console.log("")
console.log("ESCOPO:")

const num = 10

function funci1() {
    const num2 = 5

    function funci2() {
        console.log(num2)
        const num3 = 3
    }
}


//RETORNO
console.log("")
console.log("RETORNO:")

function calcularArea1(altura, largura) {
    const area = altura * largura
        return area      //Todo codigo apos o return será ignorado
}

const area = calcularArea1 (2, 3)

