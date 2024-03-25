class Conta {
    numero : string;
    saldo : number;

    constructor (numero : string, saldo : number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor : number) : void {
        this.saldo -= valor;
    }

    transferir(outraConta : Conta, valor : number) : void {
        this.sacar(valor);
        outraConta.depositar(valor);
    }

    depositar(valor : number) : void {
        this.saldo += valor;
    }

    consultarSaldo() : number {
        return this.saldo;
    }
}

// De acordo com a 5ª questão:
let c1 : Conta = new Conta("1", 100);
let c2 : Conta = new Conta("2", 100);
let c3 : Conta;
c1 = c2;
c3 = c1;

c1.sacar(10);
c1.transferir(c2, 50);

console.log(c1.consultarSaldo());  // Saída: 40
console.log(c2.consultarSaldo());  // Saída: 140
console.log(c3.consultarSaldo());  // Saída: 140

// Fim da 5ª questão.

