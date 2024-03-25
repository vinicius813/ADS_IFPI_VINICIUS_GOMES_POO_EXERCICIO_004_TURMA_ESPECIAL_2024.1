var Saudacao = /** @class */ (function () {
    function Saudacao(texto, destinatario) {
        this.texto = texto;
        this.destinatario = destinatario;
    }
    Saudacao.prototype.obterSaudacao = function () {
        return "".concat(this.texto, ", ").concat(this.destinatario, "!");
    };
    return Saudacao;
}());
// Instanciando a classe Saudacao e testando o método obterSaudacao()
var saudacao = new Saudacao("Bom dia", "Vinícius");
console.log(saudacao.obterSaudacao()); // Saída: Bom dia, Vinícius!
