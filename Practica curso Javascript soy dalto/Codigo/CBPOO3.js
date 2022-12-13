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

class apartacho extends casa {
    constructor(habitaciones, habitantes, metrosCuadrados, conjunto){
    /* AQUI LO HEREDA */
    super(habitaciones, habitantes, metrosCuadrados)
    this.conjunto = conjunto   
    }
    torre(){
        alert('9 apto 301')
    }
}
const casaMartin = new casa(/* AQUI COMO EN CUALQUIER FUNCION LE PASAMOS LOS PARAMETROS*/ 3, 2, 'veinte')
const casaDos = new casa(8, 9, 'ocho')
const casaTres = new casa(6,89,'cuarenta')
/* PARA TRABAJAR CON LAS HERENCIAS */
const casaCuatro = new apartacho(9, 6, 'veintinueve', 'magnolios ')
document.write(' PARAMETROS' + '<br>');
document.write('<br>' + '---------------------------------' + '<br>' );
console.log(casaMartin);
document.write('<br>' + '-------------------------------------------------------------------' + '<br>');
/* PARA LLAMAR A UN ATRUBUTO ESPECIFICO SE HACE ASI */
document.write('LLAMAR A UN ATRUBUTO ESPECIFICO' + '<br>');
document.write('<br>' + '---------------------------------' + '<br>');
document.write(casaMartin.habitantes + '<br>');
document.write(casaMartin.habitaciones  + '<br>');
document.write(casaMartin.metrosCuadrados  + '<br>');
document.write('<br>' + '---------------------------------' + '<br>' );
// document.write(casaMartin.info);
// document.write(casaDos.info);
// document.write(casaTres.info);
/* PARA HACER LO ANTERIOR PERO CON METODOS */
casaMartin.verInfo()
casaDos.verInfo()
casaTres.verInfo()
casaCuatro.torre()
casaCuatro.verInfo() 
