let idade = Number(prompt("Digite sua idade (0-120):"));

while (idade < 0 || idade > 120) {
    idade = Number(prompt("Digite sua idade (0-120):"));
}

console.log("Idade válida: " + idade);
