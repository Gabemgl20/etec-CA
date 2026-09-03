let num;
let positivos = 0;

num = Number(prompt("Digite um número (-1 para sair):"));

while (num !== -1) {
    if (num > 0) {
        positivos++;
    }

    num = Number(prompt("Digite um número (-1 para sair):"));
}

console.log("Total de números positivos: " + positivos);
