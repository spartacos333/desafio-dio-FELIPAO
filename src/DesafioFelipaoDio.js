// Definindo o nome do herói e a variável de rank
let nomeDoHeroi = "Spartacos333";
let rankDoHeroi;

// Loop para simular a aquisição de experiência em incrementos de XP
for (let XP = 0; XP <= 10000; XP = XP + 500) {
    console.log("Possui " + XP + " XPs");
    
    // Verifica o nível do herói com base na quantidade de XP acumulada
    if (XP <= 1000) {
        rankDoHeroi = "Ferro";
    } else if (XP <= 2000) {
        rankDoHeroi = "Bronze";
    } else if (XP <= 5000) {
        rankDoHeroi = "Prata";
    } else if (XP <= 6000) {
        rankDoHeroi = "Ouro";
    } else if (XP <= 7000) {
        rankDoHeroi = "Platina";
    } else if (XP <= 8000) {
        rankDoHeroi = "Ascendente";
    } else if (XP <= 9000) {
        rankDoHeroi = "Imortal";
    } else {
        rankDoHeroi = "Radiante";
    }
    
    // Exibe o nível do herói com base no XP atual
    console.log("O Herói " + nomeDoHeroi + " está no nível " + rankDoHeroi);
}

// Verifica se o herói atingiu o nível "Radiante" e tem o nome "Spartacos333"
console.log("Temos um heroi capaz de desafiar o chefao? ", (rankDoHeroi === "Radiante") && (nomeDoHeroi === "Spartacos333"));

