class Pessoa {
    nome : string;
    idade : number;

    constructor (nome : string, idade : number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos de idade.`);
    }
}

let pessoa1 = new Pessoa("Vinícius", 28);
pessoa1.apresentar();

