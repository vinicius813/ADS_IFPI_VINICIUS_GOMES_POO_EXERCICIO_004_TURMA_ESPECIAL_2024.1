var Hotel = /** @class */ (function () {
    function Hotel(quantReservasInicial) {
        this.quantReservas = quantReservasInicial; // Inicializando o atributo quantReervas com o valor fornecido.
    }
    Hotel.prototype.adicionarReserva = function () {
        this.quantReservas++; // Incrementando o número de reservas
    };
    return Hotel;
}());
var hotel = new Hotel(3);
console.log(hotel.quantReservas); // Saída: 3
