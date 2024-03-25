var Triangulo = /** @class */ (function () {
    function Triangulo(lado_a, lado_b, lado_c) {
        this.lado_a = lado_a;
        this.lado_b = lado_b;
        this.lado_c = lado_c;
    }
    Triangulo.prototype.formaTriangulo = function () {
        return Math.abs(this.lado_b - this.lado_c) < this.lado_a && this.lado_a < (this.lado_b + this.lado_c);
    };
    Triangulo.prototype.ehIsosceles = function () {
        if (!(this.formaTriangulo()))
            return false;
        return this.lado_a === this.lado_b || this.lado_a === this.lado_c || this.lado_b === this.lado_c;
    };
    Triangulo.prototype.ehEquilatero = function () {
        if (!(this.formaTriangulo()))
            return false;
        return this.lado_a === this.lado_b && this.lado_a === this.lado_c;
    };
    Triangulo.prototype.ehEscaleno = function () {
        if (!(this.formaTriangulo()))
            return false;
        return this.lado_a !== this.lado_b && this.lado_a !== this.lado_c && this.lado_b !== this.lado_c;
    };
    return Triangulo;
}());
/* Agora que eu supôs as equivalências para meus três tipos de triângulos, eu irei instanciar as classes Triangulo
de diferentes lados e diferentes métodos. */
var triangulo1 = new Triangulo(3, 4, 5);
console.log("O triângulo 1 é:");
console.log("É ISÓSCELES?", triangulo1.ehIsosceles());
console.log("É EQUILÁTERO?", triangulo1.ehEquilatero());
console.log("É ESCALENO?", triangulo1.ehEscaleno());
var triangulo2 = new Triangulo(2, 2, 3);
console.log("O triângulo 2 é:");
console.log("É ISÓSCELES?", triangulo2.ehIsosceles());
console.log("É EQUILÁTERO?", triangulo2.ehEquilatero());
console.log("É ESCALENO?", triangulo2.ehEscaleno());
var triangulo3 = new Triangulo(5, 5, 5);
console.log("O triângulo 3 é:");
console.log("É ISÓSCELES?", triangulo3.ehIsosceles());
console.log("É EQUILÁTERO?", triangulo3.ehEquilatero());
console.log("É ESCALENO?", triangulo3.ehEscaleno());
// Fim da 7ª questão.
