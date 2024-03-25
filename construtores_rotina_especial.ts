class Pessoa {
    nome : string;
    idade : number;

    constructor(nome : string, idade : number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos de idade.`);
    }
}
// Criando um objeto a partir da classe Pessoa
let pessoa1 = new Pessoa("Vinicius", 28);

// Chamando o método apresentar() do Objeto
pessoa1.apresentar();

