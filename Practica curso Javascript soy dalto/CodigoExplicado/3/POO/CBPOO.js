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
console.log(' PARAMETROS');
console.log('---------------------------------');
console.log(casaMartin);
console.log('-------------------------------------------------------------------');
/* PARA LLAMAR A UN ATRUBUTO ESPECIFICO SE HACE ASI */
console.log('LLAMAR A UN ATRUBUTO ESPECIFICO');
console.log('---------------------------------');
console.log(casaMartin.habitantes);
console.log(casaMartin.habitaciones);
console.log(casaMartin.metrosCuadrados);
console.log('---------------------------------');
console.log(casaMartin.info);
console.log(casaDos.info);
console.log(casaTres.info);



