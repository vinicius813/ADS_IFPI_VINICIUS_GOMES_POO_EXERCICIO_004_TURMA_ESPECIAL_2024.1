var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    Conta.prototype.sacar = function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true; // Saque realizado com sucesso.
        }
        else {
            console.log("Saldo insuficiente para o saque.");
        }
    };
    Conta.prototype.transferir = function (destino, valor) {
        if (this.sacar(valor)) {
            destino.depositar(valor);
            return true; // Transferência realizada com sucesso.
        }
        else {
            console.log("Transferência não realizada devido a saldo insuficiente."); // 
            return false; // Transferência não realizada devido a saldo insuficiente.
        }
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo += valor; // 
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    return Conta;
}());
// Testando as diferentes operações implementadas
var contaOrigem = new Conta("12345", 2000);
var contaDestino = new Conta("54321", 1000);
console.log("Qual será o saldo inicial da minha conta origem?", contaOrigem.consultarSaldo());
console.log("Qual será o saldo inicial da minha conta destino?", contaDestino.consultarSaldo());
console.log("\n Tentativa de transferir 70 reais da minha conta origem para minha conta destino:");
if (contaOrigem.transferir(contaDestino, 70)) {
    console.log("Transferência realizada com sucesso!");
}
else {
    console.log("Transferência não realizada!");
}
console.log("\n Tentativa de saque de 120 reais da minha conta origem:");
if (contaOrigem.sacar(120)) {
    console.log("Saque realizado com sucesso!");
}
else {
    console.log("Saque não realizado!");
}
console.log("\n Agora, eu consulto meu aplicativo e vejo o saldo atual de minha conta origem: ", contaOrigem.consultarSaldo());
console.log("\n E após verificar no aplicativo o anterior, eu vejo o saldo de minha conta destino: ", contaDestino.consultarSaldo());
// Fim da 9ª questão.
