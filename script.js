
class parquimetro {

    constructor(valorinserido) {
        this.valorInserido = valorinserido;
        this.tempoCalculado = null;
        this.troco = null;
    }

    calculartempo() {

        if (this.valorInserido >= 1 && this.valorInserido < 1.75) {

            this.tempoCalculado = "30 minutos";

        } else if (this.valorInserido >= 1.75 && this.valorInserido < 3) {

            this.tempoCalculado = "60 minutos";

        } else if (this.valorInserido >= 3) {

            this.tempoCalculado = "120 minutos";

        } else {

            this.tempoCalculado = "valor insuficiente";
        }
    }

    calculartroco() {

        if (this.tempoCalculado === "30 minutos") {

            this.troco = this.valorInserido - 1;

        } else if (this.tempoCalculado === "60 minutos") {

            this.troco = this.valorInserido - 1.75;

        } else if (this.tempoCalculado === "120 minutos") {

            this.troco = this.valorInserido - 3;

        } else {

            this.troco = 0;
        }
    }

    mostrarresultado() {

        if (this.tempoCalculado === "valor insuficiente") {

            document.getElementById("tempo").textContent = "Valor insuficiente!";

            document.getElementById("troco").textContent = "R$ 0,00";

        } else {

            document.getElementById("tempo").textContent = this.tempoCalculado;

            document.getElementById("troco").textContent =
                "R$ " + this.troco.toFixed(2).replace(".", ",");
        }
    }
}

function calcular() {

    const valor = parseFloat(document.getElementById("valor").value);

    if (isNaN(valor) || valor < 1) {

        document.getElementById("tempo").textContent = "Digite um valor válido!";

        document.getElementById("troco").textContent = "R$ 0,00";

        return;
    }

    const meuParquimetro = new parquimetro(valor);

    meuParquimetro.calculartempo();

    meuParquimetro.calculartroco();

    meuParquimetro.mostrarresultado();

    document.getElementById("valor").value = "";
}
