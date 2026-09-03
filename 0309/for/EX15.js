let num = Number(prompt("Digite um número para calcular o fatorial:"));

let fatorial = 1;

for (let i = num; i > 1; i--) {
    fatorial *= i;
}

console.log("Fatorial: " + fatorial);

