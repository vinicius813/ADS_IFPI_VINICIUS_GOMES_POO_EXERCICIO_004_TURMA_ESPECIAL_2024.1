var Carro = /** @class */ (function () {
    function Carro(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    Carro.prototype.acelerar = function () {
        console.log("O ".concat(this.marca, " da ").concat(this.modelo, " est\u00E1 acelerando."));
    };
    return Carro;
}());
// Criando instâncias da classe Carro
var carro1 = new Carro("Ferrari", "Chevrolet");
var carro2 = new Carro("Honda", "HSUV");
// Chamando métodos a partir das instâncias
carro1.acelerar(); // Saída: O Ferrari da Chevrolet está acelerando. 
carro2.acelerar(); // Saída: O Honda da HSUV está acelerando.
// Fim.
