class Hotel {
    quantReservas : number;

    constructor(quantReservasInicial : number) {
        this.quantReservas = quantReservasInicial;  // Inicializando o atributo quantReervas com o valor fornecido.
    }

    adicionarReserva() : void {
        this.quantReservas++;  // Incrementando o número de reservas
    }
}

let hotel : Hotel = new Hotel(3);
console.log(hotel.quantReservas);  // Saída: 3
