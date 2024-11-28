function calcularFatorial() {
    const numero = document.getElementById('numero').value;
    if (numero < 0) {
        document.getElementById("num").innerText = "Fatorial não é definido para números negativos.";
        return;
    }

    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    document.getElementById("num").innerText = `O fatorial de (${numero}) = ${fatorial}.`;
}
