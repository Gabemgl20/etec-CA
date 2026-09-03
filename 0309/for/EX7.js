let idade;

for (;;) {
    idade = Number(prompt("Digite sua idade (0-120):"));

    if (idade >= 0 && idade <= 120) {
        break;
    }
}

console.log("Idade válida: " + idade);
