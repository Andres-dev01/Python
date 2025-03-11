readline.question("Ingrese el monto a retirar: ", monto => {
    let saldo = 2500000;
    let retiro = parseInt(monto);
    if (retiro <= saldo) {
        saldo -= retiro;
        console.log("Retiro exitoso. Saldo restante:", saldo);
    } else {
        console.log("Saldo insuficiente");
    }
    readline.close();
});