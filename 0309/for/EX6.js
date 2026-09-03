let secreto = 7;

for (;;) {
    let palpite = Number(prompt("Adivinhe o número (entre 1 e 10):"));

    if (palpite === secreto) {
        break;
    }
}

console.log("Você acertou!");
