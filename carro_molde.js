var Carro = /** @class */ (function () {
    function Carro(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    Carro.prototype.acelerar = function () {
        console.log("O ".concat(this.marca, " ").concat(this.modelo, " est\u00E1 acelerando."));
    };
    Carro.prototype.frear = function () {
        console.log("O ".concat(this.marca, " ").concat(this.modelo, " est\u00E1 freando."));
    };
    return Carro;
}());
// Instanciando objetos da classe Carro
var carro1 = new Carro('Toyota', 'Japonês', 2022);
var carro2 = new Carro('Hyundai', "Sul-Coreano", 2024);
