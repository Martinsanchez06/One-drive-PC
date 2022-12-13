
class casa {
    constructor( habitaciones, habitantes, metrosCuadrados ){
        this.habitaciones                = habitaciones
        this.habitantes                  = habitantes
        this.metrosCuadrados             = metrosCuadrados
        this.info                        = `La casa tiene ${this.metrosCuadrados} metros cuadrados, tiene ${this.habitaciones} habitaciones y viven ${this.habitantes} personas `
    }
    verInfo(){
        document.write(this.info  +  '<br>');
    }

}
const casaMartin = new casa( 3, 2, 'veinte')
const casaDos = new casa(8, 9, 'ocho')
const casaTres = new casa(6,89,'cuarenta')
document.write(' PARAMETROS' + '<br>');
document.write('<br>' + '---------------------------------' + '<br>' );
console.log(casaMartin);
document.write('<br>' + '-------------------------------------------------------------------' + '<br>');
document.write('LLAMAR A UN ATRUBUTO ESPECIFICO' + '<br>');
document.write('<br>' + '---------------------------------' + '<br>');
document.write(casaMartin.habitantes + '<br>');
document.write(casaMartin.habitaciones  + '<br>');
document.write(casaMartin.metrosCuadrados  + '<br>');
document.write('<br>' + '---------------------------------' + '<br>' );
casaMartin.verInfo()
casaDos.verInfo()
casaTres.verInfo()
