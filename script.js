class NaveEspacial {
    constructor(nome, capacidadDeCarga, Velocidadmaxima) {
        this.nome = nome;
        this.capacidadDeCarga = capacidadDeCarga;
        this.Velocidadmaxima = Velocidadmaxima;
    }
}

const nave1 = new NaveEspacial('Nave1', 1000, 5000);
const nave2 = new NaveEspacial('Nave2', 8000, 6000);
const nave3 = new NaveEspacial('Nave3', 12000, 4500);
const nave4 = new NaveEspacial('Nave4', 2000, 3000);

const ArrayNaves = [nave1, nave2, nave3, nave4];

function PesoTotalFlota() {
    let pesoTotal = 0;
    for (let i = 0; i < ArrayNaves.length; i++) {
        pesoTotal += ArrayNaves[i].capacidadDeCarga;
    }
    return pesoTotal;

}

console.log(PesoTotalFlota());

function VelocidadMaxima() {
    let velocidadMaxima = 0;
    for (let i = 0; i < ArrayNaves.length; i++) {
        if (ArrayNaves[i].Velocidadmaxima > velocidadMaxima) {
            velocidadMaxima = ArrayNaves[i].Velocidadmaxima;
        }
    }
    return velocidadMaxima;

}

console.log(VelocidadMaxima());