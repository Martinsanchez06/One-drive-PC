class casa {
    constructor( habitaciones, habitantes, metrosCuadrados ){

        this.habitaciones                = habitaciones
        this.habitantes                  = habitantes
        this.metrosCuadrados             = metrosCuadrados
        this.info                        = `La casa tiene ${this.metrosCuadrados} metros cuadrados, tiene ${this.habitaciones} habitaciones y viven ${this.habitantes} personas `
    }
}
const casaMartin = new casa(3, 2, 'veinte')
const casaDos = new casa(8, 9, 'ocho')
const casaTres = new casa(6,89,'cuarenta')
console.log(' PARAMETROS');
console.log('---------------------------------');
console.log(casaMartin);
console.log('-------------------------------------------------------------------');
console.log('LLAMAR A UN ATRUBUTO ESPECIFICO');
console.log('---------------------------------');
console.log(casaMartin.habitantes);
console.log(casaMartin.habitaciones);
console.log(casaMartin.metrosCuadrados);
console.log('---------------------------------');
console.log(casaMartin.info);
console.log(casaDos.info);
console.log(casaTres.info);



