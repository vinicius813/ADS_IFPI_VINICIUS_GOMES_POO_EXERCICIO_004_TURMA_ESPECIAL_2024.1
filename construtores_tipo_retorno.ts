class Pessoa {
    nome : string;
    idade : number;

// Construtor sem parâmetros
    constructor() {
        this.nome = "";
        this.idade = 0;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos de idade.`);
    }
}

// Construindo um objeto da classe Pessoa sem parâmetros
let pessoa1 = new Pessoa();
pessoa1.apresentar();  // Saída, meu nome é Sem nome e eu tenho 0 anos de idade.

// Construtor com parâmetros
class Produto {
        constructor(public nome : string, public preco: number) {
            // Os parâmetros public nome e public preco já inicializam automaticamente as propriedades correspondentes
        }
    
    exibirDetalhes() {
        console.log(`Nome : ${this.nome}, Preço : R$${this.preco} `);
    }
}

// Construindo um objeto da classe Produto com parâmetros
let produto1 = new Produto("Notebook",4100);
produto1.exibirDetalhes();  // Saída: Nome : Notebook, Preço: R$4100.