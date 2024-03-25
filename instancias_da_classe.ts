class Carro {
    marca : string;
    modelo : string;

    constructor (marca : string, modelo : string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    acelerar() {
        console.log(`O ${this.marca} da ${this.modelo} está acelerando.`);
    }
}

// Criando instâncias da classe Carro
let carro1 = new Carro("Ferrari", "Chevrolet");
let carro2 = new Carro("Honda", "HSUV");

// Chamando métodos a partir das instâncias
carro1.acelerar();  // Saída: O Ferrari da Chevrolet está acelerando. 
carro2.acelerar();  // Saída: O Honda da HSUV está acelerando.

// Fim.