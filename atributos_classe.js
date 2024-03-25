var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.apresentar = function () {
        console.log("Ol\u00E1, meu nome \u00E9 ".concat(this.nome, " e eu tenho ").concat(this.idade, " anos de idade."));
    };
    return Pessoa;
}());
var pessoa1 = new Pessoa("Vinícius", 28);
pessoa1.apresentar();
