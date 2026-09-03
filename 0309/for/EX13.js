for (;;) {
    console.log("1 - Olá");
    console.log("2 - Tchau");
    console.log("3 - Sair");

    let opcao = Number(prompt("Escolha uma opção:"));

    if (opcao === 1) {
        console.log("Olá!");
    } else if (opcao === 2) {
        console.log("Tchau!");
    } else if (opcao === 3) {
        break;
    }
}

