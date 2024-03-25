class Pessoa {
    nome : string = "";
    idade : number = 0;

    constructor (nome : string, idade : number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos de idade.`);
    }
}