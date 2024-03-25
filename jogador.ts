class Jogador {
    forca : number;
    nivel : number;
    pontos_atuais : number;

    constructor (forca : number, nivel : number, pontos_atuais : number) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontos_atuais = pontos_atuais;
    }

    calcularAtaque() : number {
        return this.forca * this.nivel;
    }

    atacar(atacado : Jogador) : void {
        if (atacado.estaVivo()) {
            const dano = this.calcularAtaque();
            atacado.pontos_atuais -= dano;
            console.log(`Então, o jogador atacou com ${dano} de tantos danos.`);
        } else {
            console.log("O jogador atacado está morto e não pode sofrer danos ou ser atacado novamente.");
        }
    }

    estaVivo() : boolean {
        return this.pontos_atuais > 0;
    }

    dialogo_do_jogo() : string {
        return `Força: ${this.forca}, Nível: ${this.nivel} e Pontos atuais: ${this.pontos_atuais}`;
    }
}

// Testando os jogadores
let jogador1 : Jogador = new Jogador(5, 3, 100);
let jogador2 : Jogador = new Jogador(4, 2, 120);

console.log("Jogador 1: ", jogador1.dialogo_do_jogo());
console.log("Jogador 2: ", jogador2.dialogo_do_jogo());

jogador1.atacar(jogador2);
console.log("Após o ataque do Jogador 1, o Jogador 2 terá o(s) seguintes resultados: ", jogador2.dialogo_do_jogo());

jogador2.atacar(jogador1);
console.log("Após o ataque do Jogador 2, o Jogador 1 terá o(s) seguintes resultados: ", jogador1.dialogo_do_jogo());

// Verificando qual jogador terá mais bônus de ataque ou/e mais pontos
    if (jogador1.pontos_atuais > jogador2.pontos_atuais) {
        console.log("O Jogador 1 possui mais pontos!");
    } else if (jogador2.pontos_atuais > jogador1.pontos_atuais) {
        console.log("O Jogador 2 possui mais pontos!");
    } else {
        console.log("Ambos os jogadores 1 e 2 possuem o memso número de pontos!"); 
    }

// Fim da 10ª questão.





