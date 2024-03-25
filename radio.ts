class Radio {
    volume : number;

    constructor (volume : number = 0) {  // Definindo um valor padrão para o parâmetro volume.
        this.volume = volume;
    }
}

let r : Radio = new Radio();
r.volume = 10;
