// 1° o Jogador deve escolher entre : Pedra, Papel, Tesoura

// 2° Um segundo valor deve ser selecionado p/ que o jogo seja realizado (Um segundo valor de entrada ou um valor sorteado)

// 3° O sistema irá comparar os valores e determinar o vencedor

// 4° O sistema devera perguntar se o(s) jodador(es) querem jogar novamente. Se sim o jogo recomeça

const valores = ['Pedra', 'Papel', 'Tesoura']
let resposta 

do{

console.log("Vamos Jogar! Escolha sua arma\n[0] Pedra\n[1] Papel\n[2] Tesoura ")

let jogador = Number (prompt ('Faça sua escolha'))
jogador = valores[jogador]

let bot = Math.floor(Math.random() *3)
console.log(bot)
bot = valores[bot]

console.log("Você escolheu" + jogador + "\n Seu adversário escolheu" + bot)
alert(bot)


if (jogador === bot) {
    console.log("Empate!")
} else if ((jogador === 'Pedra' && bot === 'Tesoura') || (jogador === 'Papel' && bot ==='Pedra') || (jogador === 'Tesoura' && bot === 'Papel')){
    console.log("Você venceu!")
} else {
    console.log("Você perdeu!")
}

resposta = prompt ("Deseja jogar novamente? [S / N ]")
resposta = resposta.toUpperCase ()

} while (resposta === 'S')
