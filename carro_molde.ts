class Carro {
    marca : string;
    modelo : string;
    ano : number;

    constructor (marca : string, modelo : string, ano : number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    acelerar() {
        console.log(`O ${this.marca} ${this.modelo} está acelerando.`);
    }

    frear() {
        console.log(`O ${this.marca} ${this.modelo} está freando.`);
    }
}

// Instanciando objetos da classe Carro
let carro1 = new Carro('Toyota', 'Japonês', 2022);
let carro2 = new Carro('Hyundai', "Sul-Coreano", 2024);
