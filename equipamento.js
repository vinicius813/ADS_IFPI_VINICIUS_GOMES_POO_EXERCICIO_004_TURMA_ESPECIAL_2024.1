var Equipamento = /** @class */ (function () {
    function Equipamento() {
        this.ligado = false; // Logicamente, o equipamento inicia desligado.
    }
    Equipamento.prototype.liga = function () {
        if (!this.ligado) {
            this.ligado = true;
            console.log("Equipamento ligado.");
        }
        else {
            console.log("O equipamento já consta ligado.");
        }
    };
    Equipamento.prototype.desliga = function () {
        if (this.ligado) {
            this.ligado = false;
            console.log("Equipamento desligado.");
        }
        else {
            console.log("O equipamento já consta desligado.");
        }
    };
    Equipamento.prototype.inversao = function () {
        this.ligado = !this.ligado;
        console.log("Status invertido.");
    };
    Equipamento.prototype.estaLigado = function () {
        return this.ligado;
    };
    return Equipamento;
}());
/* Agora irei fazer o teste final da minha classe Equipamento, instanciando
uma classe Equipamento e testando todos os métodos aceitáveis. */
var equipamento = new Equipamento();
console.log("O equipamento está ligado?", equipamento.estaLigado()); // Saída: Deve ser falso.
equipamento.liga(); // Deve ligar o equipamento.
console.log("Novamente eu pergunto: o equipamento está ligado?", equipamento.estaLigado()); // Saída: Deve ser verdadeiro.
equipamento.liga(); // Saída: Não deve ligar novamente, pois já consta ligado o equipamento.
equipamento.desliga(); // Saída: Deve desligar o equipamento.
console.log("O equipamento está ligado?", equipamento.estaLigado()); // Deve ser falso.
equipamento.desliga(); // Saída: Não deve desligar novamente, pois já consta desligado.
equipamento.inversao(); // Saída: Deve ligar o equipamento.
console.log("Novamente, agora no método inverte, o equipamento está ligado?", equipamento.estaLigado()); // Saída: Deve ser verdadeiro.
equipamento.inversao(); // Saída: Deve desligar o equipamento.
console.log("Por último eu retomo a perguntar: o equipamento está ligado?", equipamento.estaLigado()); // Saída: Deve ser falso.
