let vitorias = 100
let derrotas = 3
let calculo = pontos(vitorias, derrotas)
let rank = ""

function pontos(vitorias, derrotas){
    return vitorias - derrotas
}

switch(true){
    case (calculo < 10 ):
        rank = "Ferro"
            break;
    case (calculo >= 11 && calculo <= 20):
        rank = "Bronze"
            break;
    case (calculo >= 21 && calculo <= 50):
        rank = "Prata"
            break;
    case (calculo >= 51 && calculo <= 80):
        rank = "Ouro"
            break;
    case (calculo >= 81 && calculo <= 90):
        rank = "Diamante"
            break;  
    case (calculo >= 91 && calculo <= 100):
        rank = "Lendário"
            break;
    case (calculo >= 101):
        rank = "Imortal"
            break;
}

console.log(`O Herói tem de saldo de ${calculo} vitorias e está no nível de ${rank}`)