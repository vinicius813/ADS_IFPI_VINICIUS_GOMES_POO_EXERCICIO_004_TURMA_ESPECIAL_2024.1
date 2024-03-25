var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = "";
        this.idade = 0;
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.apresentar = function () {
        console.log("Ol\u00E1, meu nome \u00E9 ".concat(this.nome, " e eu tenho ").concat(this.idade, " anos de idade."));
    };
    return Pessoa;
}());
