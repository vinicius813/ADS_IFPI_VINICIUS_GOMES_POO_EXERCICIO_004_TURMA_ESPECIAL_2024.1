class Exemplo {
    metodo() {
        let numero : number = 0;  // Agora, eu inicializo "numero" no momento da declaração.
        console.log(numero);  // Neste momento, número não será undefined, e sim, terá um valor inicializado.
        numero = 10;  // Agora que eu inicializei "numero" a partir de 10, criei uma instanciação, eu printo na tela um valor.
        console.log(numero);  // Deste modo, "numero" será 10 conforme proposto.
    }
}