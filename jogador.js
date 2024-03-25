var Jogador = /** @class */ (function () {
    function Jogador(forca, nivel, pontos_atuais) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontos_atuais = pontos_atuais;
    }
    Jogador.prototype.calcularAtaque = function () {
        return this.forca * this.nivel;
    };
    Jogador.prototype.atacar = function (atacado) {
        if (atacado.estaVivo()) {
            var dano = this.calcularAtaque();
            atacado.pontos_atuais -= dano;
            console.log("Ent\u00E3o, o jogador atacou com ".concat(dano, " de tantos danos."));
        }
        else {
            console.log("O jogador atacado está morto e não pode sofrer danos ou ser atacado novamente.");
        }
    };
    Jogador.prototype.estaVivo = function () {
        return this.pontos_atuais > 0;
    };
    Jogador.prototype.dialogo_do_jogo = function () {
        return "For\u00E7a: ".concat(this.forca, ", N\u00EDvel: ").concat(this.nivel, " e Pontos atuais: ").concat(this.pontos_atuais);
    };
    return Jogador;
}());
// Testando os jogadores
var jogador1 = new Jogador(5, 3, 100);
var jogador2 = new Jogador(4, 2, 120);
console.log("Jogador 1: ", jogador1.dialogo_do_jogo());
console.log("Jogador 2: ", jogador2.dialogo_do_jogo());
jogador1.atacar(jogador2);
console.log("Após o ataque do Jogador 1, o Jogador 2 terá o(s) seguintes resultados: ", jogador2.dialogo_do_jogo());
jogador2.atacar(jogador1);
console.log("Após o ataque do Jogador 2, o Jogador 1 terá o(s) seguintes resultados: ", jogador1.dialogo_do_jogo());
// Verificando qual jogador terá mais bônus de ataque ou/e mais pontos
if (jogador1.pontos_atuais > jogador2.pontos_atuais) {
    console.log("O Jogador 1 possui mais pontos!");
}
else if (jogador2.pontos_atuais > jogador1.pontos_atuais) {
    console.log("O Jogador 2 possui mais pontos!");
}
else {
    console.log("Ambos os jogadores 1 e 2 possuem o memso número de pontos!");
}
// Fim da 10ª questão.
