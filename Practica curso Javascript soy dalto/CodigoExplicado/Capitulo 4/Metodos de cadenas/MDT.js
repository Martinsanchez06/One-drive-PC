var cadena = 'Cadena de prueba'

// CONCAT()
/* Junta dos o mas cadenas y retorna una nueva */

let resultadoCocant = cadena.concat(' para concat()')

document.write(resultadoCocant + '<br>' + '<br>')

let otraParaConcat = ' para concat() con una variable'

let resultadoCocant2 = cadena.concat(otraParaConcat)

document.write(resultadoCocant2 + '<br>' + '<br>')

// STARTSWITH()
/* Comprueba si la cadena estrictamente empieza con lo que se ponga */

var paraStartsWith = 'Cadena' 

let resultadoStartsWith = cadena.startsWith(paraStartsWith)

document.write(resultadoStartsWith + ' - Resultado positivo' + '<br>' + '<br>')

var paraStartsWith2 = ' Cadena'

let resultadoStartsWith2 = cadena.startsWith(paraStartsWith2)

document.write(resultadoStartsWith2 + ' - Resultado falso' + '<br>' + '<br>')

// ENDSWITH()
/* Comprueba si la cadena estrictamente termina con lo que se ponga "funciona exactamente igual que startswith()" */

// INCLUDES()
/* Comprueba si lo que se le pasa esta en la cadena principal

cadena = Cadena principal

paraIncludes = lo que se comprueba si esta en la cadena 

*/

var cadenaIncludes = 'Vamos a coprovar Si esta cadena es includes'

let paraIncludes = 'Si esta'

let resultadoIncludes = cadenaIncludes.includes(paraIncludes)

document.write(resultadoIncludes +' - Resultado Includes()'  + '<br>' + '<br>')

// INDEXOF()
/*Busca el indice en el que se encuentra la primera letra de la cadena que se busca en el includes */

let paraIndexOf = 'na'

let resultadoIndexOf = cadena.indexOf(paraIndexOf)

document.write(resultadoIndexOf + ' - Resultado indexOf()'  + '<br>' + '<br>')

// LASTINDEXOF()
/* Funciona igual que indexOf solo que este devuelve la ultima posicion que coincida 
 */

let cadenaLastIndexOf = 'Tarado Tarado Tarado Tarado Tarado'

let resultadoLastIndexOf = cadenaLastIndexOf.lastIndexOf('Tarado')

document.write(resultadoLastIndexOf + ' - Resultado lastIndexOF()'  + '<br>' + '<br>')

// PADSTART()

/* Rellena la cadena al inicio con lo que se le pase y la cantidad de caracteres que le demos */

let cadenaPadStart = ' el que lo lea'

let resultadoPadStart = cadenaPadStart.padStart(98, "Tarado ")

document.write(resultadoPadStart + ' - Resultado PadStart()' + '<br>' + '<br>')

// PADEND()

/* Rellena la cadena al final con lo que se le pase y la cantidad de caracteres que le demos */

let cadenaPadEnd = ' el que lo lea '

let resultadoPadEnd = cadenaPadEnd.padEnd(98, "Tarado ")

document.write(resultadoPadEnd + ' - Resultado PadEnd()' + '<br>' + '<br>')

// REPEAT()

/* Repite la cadena las veces que queramos */

let cadenaRepeat = 'Vamos a repetir '

let resultadoCadenaRepeat = cadenaRepeat.repeat(3)

document.write(resultadoCadenaRepeat + ' - Resultado Repeat()' + '<br>' + '<br>')

// SPLIT()

/* Divide la cadena como le digamos */

let cadenaSplit = ' Hola perro se separo'

let resultadoCadenaSplit = cadenaSplit.split("perro")

document.write(resultadoCadenaSplit + ' - Resultado Split()' + '<br>' + '<br>')

// SUBSTRING()

/* LE pasamos dos parametros diciendole donde empieza y donde termoio, y muestra la primera posicion que le digamos pero no la ultima */

let cadenaSubstring = ' ABCDEFGHIJ '

let resultadoCadenaSubstring = cadenaSubstring.substring(0,5)

document.write(resultadoCadenaSubstring + ' - Resultado Substring()' + '<br>' + '<br>')
// TOLOWERCASE()

/* Transforma una cadena en minuscula */

let cadenaToLowerCase = ' ABCDEFGHIJ '

let resultadoCadenaToLowerCase = cadenaToLowerCase.toLowerCase()

document.write(resultadoCadenaToLowerCase + ' - Resultado toLowerCase()' + '<br>' + '<br>')

// TOUPERCASE()

/* Transforma una cadena en MAYUSCULA */

let cadenaToUpperCase = ' abcdefghi  '

let resultadoCadenaToUpperCase = cadenaToUpperCase.toUpperCase()

document.write(resultadoCadenaToUpperCase + ' - Resultado toUpperCase()' + '<br>' + '<br>')

// TOSTRING()

/* Convierte un dato en string */

let cadenaToString = 3456

let resultadoCadenaToString = cadenaToString.toString()

document.write(typeof(resultadoCadenaToString) + ' - Resultado toString()' + '<br>' + '<br>')

// TRIM()

/* Elimina los espacios en blanco */

let cadenaTrim = 'hola '

let resultadoCadenaTrim = cadenaTrim.trim()

document.write(resultadoCadenaTrim.length + ':Fue el resultado - Asi inicio: ' + cadenaTrim.length + ' - Resultado trim()' + '<br>' + '<br>')
// TRIMEND()

/* Elimina los espacios en blanco del final*/

let cadenaTrimEnd = 'hola     '

let resultadoCadenaTrimEnd = cadenaTrimEnd.trimEnd()

document.write(resultadoCadenaTrimEnd.length + ':Fue el resultado - Asi inicio: ' + cadenaTrimEnd.length + ' - Resultado trimEnd()' + '<br>' + '<br>')
// TRIMSTART()

/* Elimina los espacios en blanco del principio*/

let cadenaTrimStart = '               hola'

let resultadoCadenaTrimStart = cadenaTrimStart.trimStart()

document.write(resultadoCadenaTrimStart.length + ':Fue el resultado - Asi inicio: ' + cadenaTrimStart.length + ' - Resultado trimStart()' + '<br>' + '<br>')
// // ()

// /*  */

// let cadena = ' '

// let resultadoCadena = cadena()

// document.write(resultadoCadena + ' - Resultado ()' + '<br>' + '<br>')