let secreto = 7;
let palpite = Number(prompt("Adivinhe o número (entre 1 e 10):"));

while (palpite !== secreto) {
    palpite = Number(prompt("Adivinhe o número (entre 1 e 10):"));
}

console.log("Você acertou!");

