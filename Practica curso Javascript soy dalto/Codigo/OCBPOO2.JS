class casa {
    constructor(habitaciones, habitantes, metrosCuadrados) {
        this.habitaciones = habitaciones
        this.habitantes = habitantes
        this.metrosCuadrados = metrosCuadrados
        this.info = `La casa tiene ${this.metrosCuadrados} metros cuadrados, tiene ${this.habitaciones} habitaciones y viven ${this.habitantes} personas `
    }
    verInfo() {
        document.write(this.info + '<br>');
    }

}

class apartacho extends casa {
    constructor(habitaciones, habitantes, metrosCuadrados, conjunto) {
        super(habitaciones, habitantes, metrosCuadrados)
        this.conjunto = '';
    }
    set setConjunto(nombre) {
        this.conjunto = nombre
    }
    get getConjunto(){
        return this.conjunto
    }
}
const casaMartin = new casa(3, 2, 'veinte')
const casaDos = new casa(8, 9, 'ocho')
const casaTres = new casa(6, 88, 'cuarenta')
const casaCuatro = new apartacho(9, 6, 'veintinueve', 'magnolios ')

casaCuatro.setConjunto = 'Magnolia'

document.write('Resultado setter: ' + casaCuatro.conjunto + '<br>' + '<br>')

document.write('Resultado getter: ' + casaCuatro.getConjunto)