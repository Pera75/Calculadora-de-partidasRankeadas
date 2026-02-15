// PASSO 1: Definir a função (O "Manual de Instruções" para o computador)
function calcularRank(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retornamos o saldo e o nível para serem usados no console.log
    return "saldo de " + saldo + " e nível " + nivel;
}

// PASSO 2: A lista de jogadores (Seus Dados)
let jogadores = [
    { nome: "bijork", vitorias: 7, derrotas: 2 },   
    { nome: "Dankan", vitorias: 25, derrotas: 10 }, 
    { nome: "Viper", vitorias: 55, derrotas: 5 },  
    { nome: "Lea", vitorias: 105, derrotas: 20 } 
];

// PASSO 3: O Laço de Repetição (A Execução)
for (let i = 0; i < jogadores.length; i++) {
    let n = jogadores[i].nome;
    let v = jogadores[i].vitorias;
    let d = jogadores[i].derrotas;
    
    // Agora o computador sabe o que é calcularRank!
    let resultadoFinal = calcularRank(v, d);
    
    console.log("O herói " + n + " apresenta o seguinte resultado: " + resultadoFinal);
}