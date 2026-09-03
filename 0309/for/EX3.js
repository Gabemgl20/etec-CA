let soma = 0;

for (;;) {
    let num = Number(prompt("Digite um número (0 para sair):"));

    if (num === 0) {
        break;
    }

    soma += num;
}

console.log("Soma total: " + soma);

