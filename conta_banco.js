var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    Conta.prototype.sacar = function (valor) {
        this.saldo -= valor;
    };
    Conta.prototype.transferir = function (outraConta, valor) {
        this.sacar(valor);
        outraConta.depositar(valor);
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    return Conta;
}());
// De acordo com a 5ª questão:
var c1 = new Conta("1", 100);
var c2 = new Conta("2", 100);
var c3;
c1 = c2;
c3 = c1;
c1.sacar(10);
c1.transferir(c2, 50);
console.log(c1.consultarSaldo()); // Saída: 40
console.log(c2.consultarSaldo()); // Saída: 140
console.log(c3.consultarSaldo()); // Saída: 140

// Fim da 5ª questão.
