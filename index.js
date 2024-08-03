let nome = "Stitch";

let xpValor = 20000;

let nivel = ""

for (let i = 2024; i < xpValor; i++) {
    xpValor = i;

    if (xpValor <= 1000) {
        nivel = "Ferro";
    } else if (xpValor > 1000 && xpValor <= 2000) {
        nivel = "Bronze";
    } else if (xpValor > 2000 && xpValor <= 5000) {
        nivel = "Prata";
    } else if (xpValor > 5000 && xpValor <= 7000) {
        nivel = "Ouro";
    } else if (xpValor > 7000 && xpValor <= 8000) {
        nivel = "Platina";
    } else if (xpValor > 8000 && xpValor <= 9000) {
        nivel = "Ascendente";
    } else if (xpValor > 9000 && xpValor <= 10000) {
        nivel = "Imortal";
    } else if (xpValor > 10000) {
        nivel = "Radiante";
    }
}

console.log("O Herói de nome " + nome + " está no nível de " + nivel)