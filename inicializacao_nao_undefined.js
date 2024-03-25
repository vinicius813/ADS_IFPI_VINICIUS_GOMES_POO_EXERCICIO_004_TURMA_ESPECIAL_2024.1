var Exemplo = /** @class */ (function () {
    function Exemplo() {
    }
    Exemplo.prototype.metodo = function () {
        var objeto = new MinhaClasse(); // Inicialização com uma instância de MinhaClasse.
        console.log(objeto); // Saída: [object Object]
    };
    return Exemplo;
}());
var MinhaClasse = /** @class */ (function () {
    function MinhaClasse() {
    }
    return MinhaClasse;
}());
