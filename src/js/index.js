function fatorial(numero) {
    var numero = get.elementById("numero").value;
    if (numero <= 0) {
        alert("O número deve ser maior que 0");
    } else {
        while(numero > 0) {
            var somaFatorial = numero * (numero - 1);
            numero--;
        }
    }
}