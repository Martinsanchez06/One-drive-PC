class casa {
    constructor(habitaciones, habitantes, metrosCuadrados ){
        this.habitaciones                = habitaciones
        this.habitantes                  = habitantes
        this.metrosCuadrados             = metrosCuadrados
        this.info                        = `La casa tiene ${this.metrosCuadrados} metros cuadrados, tiene ${this.habitaciones} habitaciones y viven ${this.habitantes} personas `
    }
    verInfo(){
        document.write(this.info  +  '<br>');
    }

}
class apartacho extends casa {
    constructor(habitaciones, habitantes, metrosCuadrados, conjunto){
    super(habitaciones, habitantes, metrosCuadrados)
    this.conjunto = conjunto   
    }
    static torre(){
        alert('9 apto 301')
    }
}
const casaMartin = new casa( 3, 2, 'veinte')
const casaDos = new casa(8, 9, 'ocho')
const casaTres = new casa(6,89,'cuarenta')
const casaCuatro = new apartacho(9, 6, 'veintinueve', 'magnolios ')
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
apartacho.torre()
casaCuatro.torre()
casaCuatro.verInfo() 
