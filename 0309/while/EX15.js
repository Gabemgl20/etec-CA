let num = Number(prompt("Digite um número para calcular o fatorial:"));

let fatorial = 1;

while (num > 1) {
    fatorial *= num;
    num--;
}

console.log("Fatorial: " + fatorial);

