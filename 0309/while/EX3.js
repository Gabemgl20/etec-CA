let num;
let soma = 0;

num = Number(prompt("Digite um número (0 para sair):"));

while (num !== 0) {
    soma += num;
    num = Number(prompt("Digite um número (0 para sair):"));
}

console.log("Soma total: " + soma);

