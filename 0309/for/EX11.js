let soma = 0;

for (;;) {
    let num = Number(prompt("Digite um número:"));
    soma += num;

    if (soma > 100) {
        break;
    }
}

console.log("Soma final: " + soma);
