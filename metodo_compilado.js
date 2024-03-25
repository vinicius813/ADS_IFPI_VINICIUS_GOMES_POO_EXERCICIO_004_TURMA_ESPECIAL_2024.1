var Exemplo = /** @class */ (function () {
    function Exemplo() {
    }
    Exemplo.prototype.metodo = function () {
        var numero;
        console.log(numero); // Neste momento, número é undefined.
        numero = 10; // Agora eu estou inicializando "numero" a partir de 10, criando uma instância.
        console.log(numero); // Deste modo, "numero" é 10.
    };
    return Exemplo;
}());
