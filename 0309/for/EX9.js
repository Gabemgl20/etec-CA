let positivos = 0;

for (;;) {
    let num = Number(prompt("Digite um número (-1 para sair):"));

    if (num === -1) {
        break;
    }

    if (num > 0) {
        positivos++;
    }
}

console.log("Total de números positivos: " + positivos);

