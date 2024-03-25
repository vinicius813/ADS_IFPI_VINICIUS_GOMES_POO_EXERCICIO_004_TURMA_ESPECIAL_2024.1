class Equipamento {
    ligado : boolean;

    constructor () {
        this.ligado = false;  // Logicamente, o equipamento inicia desligado.
    }

    liga() : void {
        if (!this.ligado) {
            this.ligado = true;
            console.log("Equipamento ligado.");
        } else {
            console.log("O equipamento já consta ligado.");
        }
    }

    desliga() : void {
        if (this.ligado) {
            this.ligado = false;
            console.log("Equipamento desligado.");
        } else {
            console.log("O equipamento já consta desligado.");
        }
    }

    inversao() : void {
        this.ligado = !this.ligado;
        console.log("Status invertido.");
    }

    estaLigado() : boolean {
        return this.ligado;
    }
}

/* Agora irei fazer o teste final da minha classe Equipamento, instanciando 
uma classe Equipamento e testando todos os métodos aceitáveis. */
let equipamento : Equipamento = new Equipamento();

console.log("O equipamento está ligado?", equipamento.estaLigado());  // Saída: Deve ser falso.

equipamento.liga();  // Deve ligar o equipamento.
console.log("Novamente eu pergunto: o equipamento está ligado?", equipamento.estaLigado());  // Saída: Deve ser verdadeiro.

equipamento.liga(); // Saída: Não deve ligar novamente, pois já consta ligado o equipamento.

equipamento.desliga(); // Saída: Deve desligar o equipamento.
console.log("O equipamento está ligado?", equipamento.estaLigado());  // Deve ser falso.

equipamento.desliga();  // Saída: Não deve desligar novamente, pois já consta desligado.

equipamento.inversao();  // Saída: Deve ligar o equipamento.
console.log("Novamente, agora no método inverte, o equipamento está ligado?", equipamento.estaLigado());  // Saída: Deve ser verdadeiro.

equipamento.inversao(); // Saída: Deve desligar o equipamento.
console.log("Por último eu retomo a perguntar: o equipamento está ligado?", equipamento.estaLigado());  // Saída: Deve ser falso.



