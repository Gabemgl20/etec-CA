const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, resolve);
    });
}

function calcular(numero1, numero2, operador) {

    if (operador === "+") {
        return numero1 + numero2;

    } else if (operador === "-") {
        return numero1 - numero2;

    } else if (operador === "*") {
        return numero1 * numero2;

    } else if (operador === "/") {

        if (numero2 === 0) {
            return "Não é possível dividir por zero!";
        }

        return numero1 / numero2;

    } else if (operador === "%") {
        return numero1 % numero2;

    } else {
        return "Operador inválido!";
    }
}


async function calculadora() {

    let continuar = true;

    while (continuar) {

        console.log("\n===== CALCULADORA =====");
        console.log("+  Adição");
        console.log("-  Subtração");
        console.log("*  Multiplicação");
        console.log("/  Divisão");
        console.log("%  Resto da divisão");
        console.log("=======================\n");

        let numero1 = Number(
            await perguntar("Digite o primeiro número: ")
        );

        let operador = await perguntar(
            "Digite o operador (+, -, *, /, %): "
        );

        let numero2 = Number(
            await perguntar("Digite o segundo número: ")
        );

        let resultado = calcular(
            numero1,
            numero2,
            operador
        );

        console.log("\nResultado:", resultado);

        let resposta = await perguntar(
            "\nDeseja fazer outra conta? (s/n): "
        );

        if (resposta.toLowerCase() !== "s") {
            continuar = false;
        }
    }

    console.log("\nCalculadora encerrada!");

    rl.close();
}

calculadora();