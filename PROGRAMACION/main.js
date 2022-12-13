// INICIO PRÁCTICO DE JAVASCRIPT 

//VARIABLES 

//para instanciar una variabe universal (osea que este en toodo el archivo) se escribe únicamente el nombre de la variable 
var nombre = "martin andrey";

//para instanciar una variable que se mantenga en un solo bloque (osea en un espacio especifico)
let apellido = "Sánchez cárdenas"
   // con la variable let se puede inicializar y ya luego, se le da un valor o varios
   //  let persona;

   ` persona= pedro
      persona= pepito`

//tambien hay otro parecido a let pero se llama const pero la diferencia es que solo pueden tdner un valor y no se va a cambiar en ningún momento 
const edad = "16 años"

//TIPOS DE DATOS 
/*estos son de tipo texto*/
Stríng = "texto"
/*estos son de tipo numerico*/
number = 3
/*estos son de tipo boleano*/
boleano = false; o; true
   // existe algo llamado scope, que es el alcance que tienen las variables como let var o const

   //OTROS TIPOS DE DATOS 


   //UNDEFINED

   significa que no fue definido el valor

   //NULL

   significa que el valor va a ser vacio, y ese valor se lo estamos dando nosotros

   //NaN

   significa que hicimos una operación pero el resultado no es un número(not a number)

//PROMPT
prompt("esto se usa para hacerle alguna pregunta al usuario")

let respuesta1 = prompt("aqui se usa para guardar tu respuesta del prompt, con uns variable")

alert("tu respuesta fue " + respuesta1)

//OPERADORES ARITMÉTICOS

/*TOMAN VALORES NUMERICOS(YA SEAN LITERALES O VARIABLES) COMO SUS OPERANDOS Y RETORNAN UN VALOR UNICO*/

//OPERADORES DE ASIGNACION

/* UN OPERADOR DE ASIGNACION ASIGNA UN VALOR EL OPERANDO DE LA IZQUIERDA BASADO EN EL VALOR DEL OPERANDOO DE LA DERECHA */
let variablee = "valor asignado a la variable por medio del ="
x + y= z
x - y=z
x * y=z
x / y=z
x % y=z(este operador se encarga de mostrar el residuo de una divicion)



//CONCATENACIÓN 

frase1 = esta es una prueba
frase2 = de concatenación < br >

   resultado = frase1 + frase2;

document.write(resultado)

//otra forma de concatenar (.concat)

frase3 = 598
frase4 = 4

resultado1 = frase3.concat(frase4) + <br>;

   document.write(resultado1)

   //para que funcione esta forma de concatenación con el (.concat) si o si debe haber por lo menos un String para que funcione

   //otra forma de concatenación (${ })

   frase5 = esta es una prueba


   resultado2 = okey ${frase5} de concatenación <br>;

      document.write(resultado2)

      //para poder lograr que esta forma de concatenación funcione se debe usar (``) (backticks) de lo contrario no servira


      number1 = 5
      number2 = 8

      resultadonum = number1 + number2 + <br>

         document.write(resultadonum)

         //si al resultadonum se le agregan ("") se convierte en cadena de texto y el resultado ya seria 13 sino 58

         //OPERADORES DE COMPARACIÓN 

         // en estos operadores comparan dos expresiones y devuelven un valor boleano que representa la relación de sus valores 

         == (los datos son iguales)
         != (los datos son diferentes)
         === (los datos son exactamente igual)
         !=== (los datos son exactamente diferentes )
      </> (los datos son mayores o menores)

      //OPERADORES LOGICOS 

      //solo funciona con valores boleanos

      `&& = y (and)
      f && f=f
      f && v=f
      v && v=v
      v && f=f`
      `|| = ó (or)
      f && f=f
      f && v=v
      v && f=v
      v && v=v`
      /* para cambiar uno mismo el resultado se usa (!)*/

      //CAMEL CASE 

      parseInt /* indica que la primera letra inicia en minúsculas, y las siguientes en mayúsculas */

      //CONDICIONALES
      if (si aquí se da verdadero se ejecuta. Si no, entonces no lo ejecuta)  /* este solo se ejecuta una vez*/
      else if (este es exactamente igual a if) /* la diferencia es que se puede ejecutar infinitamente*/
      else (este es exactamente igual a if)  /* la diferencia es que se usa cuando ya ninguna de las condiciones se cumplio*/
      //se escribe asi
      if (99999 == 99999) {
         alert('la condición se cumplio')
      }

   //ARRAY

      /* son como variables, pero aquí caben mas de un solo dato*/

      variable = ["dato1", 1, "dato2", 2]

      /* para seleccionar un dato de la variable, las posiciones inician desde 0. Es decir la posición "0" seria "dato1"*/

      document.write(variable[0])

      //ARRAY ASOCIATIVO 

      /* para hacer un array asociativo se cambia el número de la posición por un nombre. Asi*/

      let pc1 = {
         nombre: "DaltoPC",
      procesador: "Intel Core 17",
      ran: "16GB",
      espacio: "1TU"
   }

      let nombre = pc1["nombre"];
      let procesador = pc1["procesador"];
      let ram = pc1["ram"];
      let espacio = pc1["espacio"];

      frase = `el nombre de mi PC es: <b>${nombre}</br>
   el procesador es: <b>${procesador}</br>
            la memoria ram es: <b>${ram}</br>
            el espacio en disco es de < b > ${ espacio }</b > `;

   document.write(frase);


   //BUCLES E ITERACIÓN 

//WHILE

   /* el while es como un if, la diferencia es que este se repite hasta que la condición sea falsa, pero si siempre es verdadera, se va a trabar el programa en un bucle infinito */

   let número = 0;

   while (numero < 6) {
      document.write(numero)
   }

   /* si hacemos esto, se va crear un bucle infinito porque la condición siempre sera verdadera */

   let número = 0;

   while (numero < 6) {
      número++;
      document.write(numero)
   }

   /* si hacemos esto, el bucle termina en 6, porque la condicion es verdadera hasta que la suma da 6. Y 6 no es menor a 6, osea la condición queda falsa y el bucle termina */

   //DO WHILE   

   /* aqui primero se pregunta y luego se ejecuta */

   do {

      document.write(numero)
      número++;
   }

   while (numero <= 6)

   /* aquí entonces el resultado termina en 6 porque inicia contando desde 0 y para cuando 6 es igual a 6, ya no lo pregunta más */

   //BREAK

   /* el break se usa para finalizar un bucle en un momento específico */

   while (numero < 1000) {
      número++;
      document.write(numero + "<br>");
      if (numero == 10) {
         break;
      }
   }

   document.write("fin");

   //CONTINUE

   /* es parecido a break, la diferencia es que este salta, no termina*/

   while (numero < 1000) {
      número++;
      document.write(numero + "<br>");
      if (numero == 10) {
         continue;
      }
   }

   /* aquí  quedaria 9, 11. Osea no mostraría el 10, lo salta*/


   //FOR

   /* tiene 3 partes
   DECLARACIÓN  E INICIALIZACION
   CONDICIÓN 
   ITERACIÓN */

   for (let i = 0; i < 6; i++) {

   }

   /* el (let i=0) fue la DECLARACIÓN  E INICIALIZACION */
   /* el (i < 6) fue la CONDICIÓN */
   /* el (i++) fue la ITERACIÓN osea lo que hace por cada vuelta, en este caso el aumento */

   //FOR IN

   /* este for lo que hace es, primero la variable (let i=0) ya la creamos y es (la primer variable antes del in) y esta va a ser igual en cada vuelta a cada valor del array de la variable posterior al in*/

   colores: { "azul", "rojo", "verde" }

   for (color in colores) {
      document.write(color + "<br>")
   }

   /* aquí lo que nos va a mostrar es 
   0
   1
   2
   
    porque nos muestra la posición en el array*/


   /* para que si nos muestre lo que está en el array desde el in*/

   for (color in colores) {
      document.write(colores[color] + "<br>")
   }

   /* ó */

   for (color in colores) {
      document.write(colores[1] + "<br>")
   }

   /* este nos mostraría el nombre de un valor específico */


   //FOR OF

   for (color of colores) {
      document.write(colores + "<br>")
   }
   /* aquí lo que nos va a mostrar es 
       azul
       rojo
       verde
            
       porque nos muestra lo que esta en el array*/

   //SENTENCIA LEVEL

   /* esta sentencia nos indica que dentro de un array, va a haber otro array*/

   array1 = ["martha", "juana", "pepita"]
   array2 = ["pedro", "marcelo", array1]

   for (let array in array2) {
      if (array == 2) {
         for (let array of array1) {
            document.write(array + "<br>")
         }

      }
      else {
         document.write(array2[array] + "<br>")
      }
   }


   // FUNCIONES 

   /* una función se utiliza para guardar un bloque de código que se va a usar despues en varias ocasiones */

   /* se declara asi */

   function nombredefuncion() {

   }

   /* también se puede declarar dentro de una variable */

   nombredefuncion = function() {

   }


   /* se ejecuta asi*/

   nombredefuncion()

   /* se puede ejecutar dentro de una función */
   let namefunction = nombredefuncion()

   //RETURN

   /* se utiliza para devolver un resultado cuando la función ya se ejecuta */

   function nombredefuncion() {
      alert("hola")
      return "la función se ejecuto correctamente"
   }

   /* después del return ya se termina la función */
   function nombredefuncion() {
      return "la función se ejecuto correctamente"
      alert("hola")
   }
   /* en lo anterior el hola no se mostraria porque el return ya finalizó la función */


   // PARÁMETROS 

   /* se usa mayormente para hacer un tipo de concatenación, o asignarle valores a las variables de los paréntesis al lado de la función nombredefuncion (AQUI. A ESTOS ) estos valores sólo existen dentro de la función */

   function nombredefuncion(num1, num2) {
      let res = num1 + num2
      document.write(res)
   }

   nombredefuncion(33, 5) /* 38 */

   nombredefuncion(66, 98) /*164*/

   //FUNCIONES FLECHA 

   const Saludar = (nombre) => {
      document.write("hola como estas " + nombre)
   }

   Saludar("pedro")


   
//PROGRAMACIÓN ORIENTADA A OBJETOS (POO) 

   /* las clases son la base, el lugar en donde se instancia por primera vez el objeto, en este caso (lapicero)*/
   class lapicero
   /* lo que crean las clases son objetos (los objetos son los this.), osea toodo lo que esta dentro de la clase, estos objetos tienen atributos*/
   {
      constructor(color, tamaño, marca)
      /* los atributos (o parámetros ) son las particularidades de las clases, en este caso lo que está dentro del constructor, los atributos deben ir en el orden en el que nosotros queramos que aparezcan*/
      {
         this.color = color;
         this.tamaño = tamaño;
         this.marca = marca;
         this.lapiz = mi lapiz es color ${this.color}, y mide  ${this.tamaño} y su marca es ${this.marca}
      }

      /* METODO
      
      aquí le agregamos una función para ahorrar el document.write y solo poner como cuando se muestra una función 
      
      
      */

      verLapiz() {
         document.write(this.lapiz + "<br>");
      }
   }
   /*aquí se heredan propiedades de la clase anterior, pero no hay necesidad de escribirlas porque ya estan en (super) y ahi quedan guardadas las propiedades de la clase anterior, se debe usar el (extends) para que si se puedan heredar*/
   class Big extends lapicero {
      constructor(color, tamaño, marca, tinta) {
         super(color, tamaño, marca, tinta);
         this.tinta = tinta
         this.lapiz = mi lapiz es color ${this.color}, y mide  ${this.tamaño} y su marca es ${this.marca} y mi tinte es ${this.tinta}
         /* aquí si nos puso el tipo tinte porque ese texto lo pusimos en la clase heredada*/
      }
      /* static se usa para ejecutar una función antes de instanciar el objeto */
      static verLapiz() {
         alert("el static funciona");
      }
      /* existen cosas llamadas setters (set) que lo que hacen es cambiar el valor de una propiedad de la clase */

      set setTinta(otraTinta) {
         this.tinta = otraTinta;

      }

      /* hay otro que es para obtener valores que es el getter (get) este lo que hace es tomar valores de las propiedades de la clase */

      get getTinta() {
         return this.tinta
      }

   }

   /* aqui es donde finalmente estamos instanciando el objeto, osea lo estamos completando para que se muestre*/
   const big = new Big("rojo", "pequeño", "big", "azul")
   const offis = new lapicero("naranja", "grande", "offis")
   const gel = new lapicero("negro", "mediano", "gel")


   /*(forma de llamar la clase como si fuera función ) */
   big.verLapiz();
   offis.verLapiz();
   gel.verLapiz(); 

   /* para llamar el set cambiado se usa*/

   big.setTinta = "negra"

   document.write(big.tinta + "<br>")

   /* para llamar el get se usa */

   document.write(big.getTinta)


   //METODOS DE CADENAS

   //CONCAT()

   /* esta es una forma de concatenar*/

   let fraseuno = "esta es la primera parte de la frase."

   let frasedos = fraseuno.concat("Esta es la segunda")

   document.write(frasedos + "<br>");

   /* esta es otra forma de concatenar con concat*/

   let frasetres = new String("esta es la tercera parte de la frase. ")

   let fraseCuatro = "Esta es la última parde de la frase"

   resultado = frasetres.concat(fraseCuatro)

   document.write(resultado)

   //STARTWITH()

   /* lo que hace esto es comprobar que la primera palabra de las dos string sean las mismas*/

   let fraseuno = "esta es la frase"

   let frasedos = "esta "

   let frase2 = fraseuno.startsWith(frase2)

   document.write(frase2 + "<br>");


   //ENDSWITH()

   /* lo que hace esto es comprobar que la primera palabra de las dos string sean las mismas*/

   let fraseuno = "esta es la frase"

   let frasedos = " frase"

   let frase2 = fraseuno.endsWith(frasedos)

   document.write(frase2 + "<br>");


   //INCLUDES()

   /* lo que hace esto es comprobar que lo que esta en la variable (frasedos) este en la variable (fraseuno)*/

   let fraseuno = "esta es la frase"

   let frasedos = " frase"

   let frase2 = fraseuno.includes(frasedos)

   document.write(frase2 + "<br>");


   //INDEXOF()

   /* lo que hace esto es comprobar que lo que esta en la variable (frasedos) este en la variable (fraseuno). Pero el resultado que nos da no es boleano, no dice en que posicion se encuentra la primera letra de lo que este en (frasedos)*/

   let fraseuno = "esta es la frase"

   let frasedos = " frase"

   let frase2 = fraseuno.includes(frasedos)

   document.write(frase2 + "<br>");


   //PADSTART()

   /* lo que hace esto es reyenear la cadena al principio con lo que queramos, la cantidad de veces que vamos a reyenar tiene que ser mayor al número total de caracteres de la variable que vamos a reyenear */

   let fraseuno = "lo anterior fue con lo que reyenamos el principio";
   let frasedos = "";

   resultado7 = fraseuno.padStart(55, "_")

   document.write(resultado7 + "<br>");


   //PADEND()

   /* lo que hace esto es reyenear la cadena al final con lo que queramos, la cantidad de veces que vamos a reyenar tiene que ser mayor al número total de caracteres de la variable que vamos a reyenear */

   let fraseuno = "lo anterior fue con lo que reyenamos el principio";
   let frasedos = "";

   resultado7 = fraseuno.padEnd(55, "_")

   document.write(resultado7 + "<br>");


   //REPEAT()

   /* repite la cadena las veces que me digamos */

   let fraseuno = "lo anterior fue con lo que reyenamos el principio";
   let frasedos = "";

   resultado7 = fraseuno.repeat(6)
   /* repetiría 6 veces lo que esta dentro de fraseuno */
   document.write(resultado7 + "<br>")

   //SPLIT()

   /* lo que hace es dividir el string como si fuera un array*/
   let frase6 = "hola como estas"

   /* cuando detecta lo que esta en el paréntesis, separa los elementos del array*/
   resultado3 = frase.split(" ")

   document.write(resultado3)

   //SUBSTRING()

   /* lo que hace es recortar el string de la forma en que nosotros le digamos*/

   let frase6 = "ABCDEFG"

   resultado3 = frase6.substring(0, 3)

   document.write(resultado3)

   //TOLOWERCASE()

   /* combierte a minúsculas */

   let frase6 = "ABCDEFG"

   resultado3 = frase6.toLowerCase()

   document.write(resultado3)


   //TOUPPERCASE()

   /* combierte a mayúsculas */

   let frase6 = "abcdefg"

   resultado3 = frase6.toUpperCase()

   document.write(resultado3)


   //TOSTRING()

   /* combierte cualquier dato en un string */

   let num1 = 50

   resultado4 = num1.toString()

   document.write(resultado4)



   //TRIM()

   /* lo que hace es eliminar los espacios en blanco */

   let frase6 = "   hola   "

   resultado7 = frase6.trim()

   document.write(resultado7)


   //TRIMEND()

   /* lo que hace es eliminar los espacios en blanco al final */

   let frase6 = "   hola   "

   resultado7 = frase6.trim()

   document.write(resultado7)

   //TRIMSTART()

   /* lo que hace es eliminar los espacios en blanco al principio */

   let frase6 = "   hola   "

   resultado7 = frase6.trim()

   document.write(resultado7)

   //VALUEOF()



   //METODOS DE ARRAYS


   //TRANSFORMADORES



   //POP()

   /* elimina el último elemento del array, pero también nos muestra cual elimino*/
   let colores2 = ["azul", "verde", "rojo"]

   let resultado8 = colores2.pop()

   document.write(resultado8)

   //SHIFT()

   /* elimina el primer elemento del array, pero también nos muestra cual elimino */


   let colores2 = ["azul", "verde", "rojo"]

   let resultado8 = colores2.shift()

   document.write(resultado8)


   //PUSH()

   /* agrega elementos al array*/


   let colores2 = ["azul", "verde", "rojo"]

   let resultado8 = colores2.push("cafe", "negro")
   /* aqui nos muestra los elementos */
   document.write(colores2)

   /* aqui nos muestra la cantidad de elementos */

   document.write(resultado8)


   //REVERSE()

   /* invierte el orden de los elementos de un array (al revés) */

   let colores2 = ["azul", "verde", "rojo"]

   colores2.reverse()

   document.write(colores2)

   //UNSHIFT()

   /* agrega elementos al inicio del array y devuelve la nueva longitud del array */

   let colores2 = ["azul", "verde", "rojo"]

   colores2.unshift("negro", "cafe")

   document.write(colores2)

   //SORT()

   /* ordena los elementos locales, de 
   a-z o en orden numérico */

   let colores2 = ["azul", "verde", "rojo"]

   colores2.sort()

   document.write(resultado8)

   //SPLICE()

   /* cambia elementos del array ya sea agregandolos o eliminandolos */

   let colores2 = ["azul", "verde", "rojo", "negro", "cafe"]

   colores2.splice(1, 3, "nariz")
   /* aqui lo que le dijimos fue, inicia en el elemento de la posicion 1 y de ahi eliminame 3 elementos y remplazalo por "nariz"*/
   document.write(resultado8)

   //ACCESORES


   //JOIN()

   /* cumple con convertiré todos los datos en una cadena de texto, con la diferencia de que se puede usar el separador que queramos */

   let colores2 = ["azul", "verde", "rojo"]

   let resultado8 = colores2.join(" - ")

   document.write(resultado8)

   //SLICE()

   /* este nos muestra una parte del array en un nuevo array, el último elemento no lo muestra */

   let colores2 = ["azul", "verde", "rojo"]

   let resultado8 = colores2.slice(0, 2)

   document.write(resultado8)

   //DE REPETICION




   //FILTER()
   /* da una vuelta por cada valor del array */

   let colores2 = ["azul", "verde", "rojo"]

   resultado8 = colores2.filter(colores2 => colores2.length > 3)

   document.write(resultado8)



   //FOREACH()

   /* da una vuelta por cada valor del array */

   let colores2 = ["azul", "verde", "rojo"]

   resultado8 = colores2.filter(colores2 => document.write(colores2 + "<br>"))

   document.write(resultado8)

   /* esto también lo hace filter()*/


   //OBJETO Math 


   //SQRT()
   
   /* muesta la raiz cuadrada de un número */
   
   numero1 = Math.sqrt(25)
   
   document.write(numero1)
   //CBRT()
   
   /* muestra la raiz cubica de un número */
   
   numero1= Math.cbrt(27)
   
   document.write (numero1)
   //MAX()
   
   /* saca el número mas grande de todos*/
   
   numero1 = Math.max (25,68,58,84,462,57, 59,68)
   
   document.write (numero1)
   //MIN()
   
   /* saca el número menor*/
   
   numero1 = Math.min(25,68,58,84,462,57, 59,68)
   
   document.write(numero1)
   //RANDOM()
   
   /* nos da un número random entre 0 y 1 */
   
   numero1 = Math.random()
   
   document.write(numero1)
   
   /* también entre cualquier número que querramos pero seria asi*/
   
   numero1 = Math.random()*100
   numero1 = numero1.toString()
   num = numero1[0] + numero1[1]
   
   document.write(num)
   
   //ROUND()
   
   /* facilita lo último que hicimos arriba*/
   
   numero1 = Math.random() * 100
   numero1 = Math.round(numero1)
   
   document.write(numero1)
   //FROUND()
   
   /*  
   
   numero1 = .()
   
   document.write(numero1)
   
   */
   
   //FLOOR()
   
   /* redondea un número decimal al número entero hacia abajo */
   
   numero1 = Math.random()*100 
   numero1 = Math.floor(4.9999)
   
   document.write(numero1)
   //TRUNC()
   
   /* elimina los números decimales*/
   
   numero1 = Math.trunc(9.9999999)
   
   document.write(numero1)
   
   
   //PROPIEDADES 
   
   
   //PI
   //SQRT_2
   //SQRT
   //E
   //LN2
   //LN10
   //LOG2E
   //LOG10E
   
   
   //




















































































































