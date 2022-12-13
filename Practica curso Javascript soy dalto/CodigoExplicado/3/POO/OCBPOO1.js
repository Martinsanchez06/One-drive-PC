 // PARADIGMA QUE INTENTA ACTUALIZAR LA FORMA QUE PROGRAMAGMOS PARA PROGRAMAR OBJETOS COMO EN LA VIDA REAL 

// CLASES : son como las variables pero en objetos 
// // CREAN OBJETOS 
// ATRIBUTO: CARRACTERISTICAS DEL OBJETO 
// METODO: lo que puede hacer dicho objeto 
// contructor:  una funcion obligatoria que contruye las propiedades del objeto 
// instanciacion: cuando ya esta terminada el objeto 

class casa {
    constructor(/* AQUI PASAMOS LAS PROPIEDADES DEL OBJETO */ habitaciones, habitantes, metrosCuadrados ){
        /* ESTOS SON LOS ATRIBUTOS
        QUE LE ESTAMOS CREANDO AL 
        OBJETO
        */                                /* ESTOS SON LAS PROPIEDADES QUE NOSOTRSO LE DIMOS */
        this.habitaciones                = habitaciones
        this.habitantes                  = habitantes
        this.metrosCuadrados             = metrosCuadrados
        this.info                        = `La casa tiene ${this.metrosCuadrados} metros cuadrados, tiene ${this.habitaciones} habitaciones y viven ${this.habitantes} personas `
        /* LOS ATRIBUTOS NO NECESARIAMENTE VAN A LLAMRSE IGUAL QUE LAS PROPIEDADES */
    }
    /* ESTO ES UN METODO */
    verInfo(){
        document.write(this.info  +  '<br>');
    }

}

/* PARA TRABAJAR CON HERENCIA */

// HERENCIA 
// MANTIENE LO DE LA CLASE QUE SE LLAME LUEGO DEL EXTENDS PERO AHORA SE LE AGREGAN ALGUNAS COSAS

class apartacho extends casa {
    constructor(habitaciones, habitantes, metrosCuadrados, conjunto){
    /* AQUI LO HEREDA */
    super(habitaciones, habitantes, metrosCuadrados)
    this.conjunto = conjunto   
    }
    /* EL METODO SIEMPRE VA FUERA DEL CONTRUCTOR */
    /* LOS ESTATICOS SIEMPRE SE VAN A PODER USAR AUNQUE NO NINGUNO DE LOS PARAMETROS DE CONSTRUCTOR  */
    static torre(){
        alert('9 apto 301')
    }
}


            /* AQUI DECIMOS 
            QUE ES UN NUEVO
            OBJETO QUE SE
            LE DA A LA
            PROPIEDAD CASA 
                    !
                  (new)
            */
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
apartacho.torre()
// casaCuatro.torre()
casaCuatro.verInfo() 
