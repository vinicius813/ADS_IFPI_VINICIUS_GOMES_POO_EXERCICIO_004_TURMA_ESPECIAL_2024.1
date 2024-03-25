var Pessoa = /** @class */ (function () {
    // Construtor sem parâmetros
    function Pessoa() {
        this.nome = "";
        this.idade = 0;
    }
    Pessoa.prototype.apresentar = function () {
        console.log("Ol\u00E1, meu nome \u00E9 ".concat(this.nome, " e eu tenho ").concat(this.idade, " anos de idade."));
    };
    return Pessoa;
}());
// Construindo um objeto da classe Pessoa sem parâmetros
var pessoa1 = new Pessoa();
pessoa1.apresentar(); // Saída, meu nome é Sem nome e eu tenho 0 anos de idade.
// Construtor com parâmetros
var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this.nome = nome;
        this.preco = preco;
        // Os parâmetros public nome e public preco já inicializam automaticamente as propriedades correspondentes
    }
    Produto.prototype.exibirDetalhes = function () {
        console.log("Nome : ".concat(this.nome, ", Pre\u00E7o : R$").concat(this.preco, " "));
    };
    return Produto;
}());
// Construindo um objeto da classe Produto com parâmetros
var produto1 = new Produto("Notebook", 4100);
produto1.exibirDetalhes(); // Saída: Nome : Notebook, Preço: R$4100.
