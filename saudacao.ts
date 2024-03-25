class Saudacao {
    texto : string;
    destinatario : string;

    constructor (texto : string, destinatario : string) {
        this.texto = texto;
        this.destinatario = destinatario;
    }

    obterSaudacao() : string {
        return `${this.texto}, ${this.destinatario}!`;
    }
}

// Instanciando a classe Saudacao e testando o método obterSaudacao()
let saudacao : Saudacao = new Saudacao("Bom dia", "Vinícius");
console.log(saudacao.obterSaudacao());  // Saída: Bom dia, Vinícius!