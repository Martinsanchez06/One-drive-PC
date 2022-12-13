

// const val = []
// for (let i = 0; i < 30; i++) {
//     val[i]=Math.random(0, 100)
// }
// // --- AQUI INICIALMENTE LE DECIMOS QUE HAGA 5 REGISTROS ---
// // --- LUEGO LE DECIMOS QUE HAGA DENTRO DE ESOS 5 REGISTROS 3 REGISTROS ---
// // ---- LUEGO LE DECIMOS QUE EN ESOS TRES REGISTROS HAGA 2 COLUMNAS ---
// const tens = tf.tensor3d(val,[5,3,2])
// tens.print();
// // --- SE USA PARA TRAER LOS DATOS ---
// tens.data().then(function(res){
//     console.log(res[2]);
// })

// //son basicamente lo mismo solo que la de abajo es mas corta

// // console.log(tens.dataSync());

// // --- PARA HACER LAS MULTIPLICACIONES DE MATRICES ---
// const a = tf.tensor2d([[1,2,-3],[4,0,2]])
// const b = tf.tensor2d([[3,1],[2,4],[-1,5]])
// tf.matMul(a, b).print()
// SE UTILIZA PARA DESPEJAR DE LA MEMORIA LOS TENSORES QUE YA NO ESTEMOS USANDO PARA NO CONSUMIRLE DEMACIADOS RECURSOS AL NAVEGADOR DEL USUARIO 

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// SELFT LEARNING

// --- TENSORES ---

// tf.tensor([1, 2, 3, 4], [1, 2, 2, 1]).print()
// tf.tensor([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 2, 2, 1]).print();

// --- BUFFER --- 
//     const buffer = tf.buffer([3, 3]);
// buffer.set(9, 2, 2);
// buffer.set(56, 0, 1);
// // Convert the buffer back to a tensor.
// buffer.toTensor().print();

// --- CLONE --- 
// // Crea un nuevo tensor con los mismos valores y forma que el tensor especificado.

// const x = tf.tensor([1, 2]);

// x.clone().print();


// --- COMPLEX --- 

// const real = tf.tensor1d([2.25, 3.25]);
// const imag = tf.tensor1d([4.75, 5.75]);
// const complex = tf.complex(real, imag);

// complex.print();

// --- DIAG --- 

// const x = tf.tensor1d([1, 2, 3, 4]);

// tf.diag(x).print()

// const x = tf.tensor2d([1, 2, 3, 4, 5, 6, 7, 8], [4, 2])

// tf.diag(x).print()

// --- FILL --- 
// Crea un tf.Tensor relleno con un valor escalar., Pasandole nosotros el valor que se le va a rellenar y la cantidad de filas y columnas que va a tener el tensor 

// tf.fill([9, 9], 8).print();

// --- IMAG ---

// Devuelve la parte imaginaria de un tensor complejo (o real).
// Dada una entrada de tensor, esta operación devuelve un tensor de tipo float que es la parte imaginaria de cada elemento de entrada considerado como un número complejo. Si la entrada es real, se devuelve un tensor de todos los ceros.


// const x = tf.complex([-2.25, 3.25], [4.75, 5.75]);
// tf.imag(x).print();

// --- LINSPACE --- 

// Lo que hace esto es que el primer numero es donde le decimos que inicie, el segundo es el ultimo valor que debe traer y el ultimo es cuantos numeros me tiene que traer entre el primero y el ultimo numeoro

// tf.linspace(0,9,10).print();

// --- ONEHOT ---

// Las ubicaciones representadas por indicestoman valor onValue(predeterminado en 1), mientras que todas las demás ubicaciones toman valor offValue(predeterminado en 0). 


// tf.oneHot(tf.tensor1d([1, 2], 'int32'), 3).print();

// --- ONES --- 

// Crea un tf.Tensor con todos los elementos establecidos en 1.

// tf.ones([2, 2]).print();


// --- onesLike ---   
// No importa que valores le pases los dejara siempre en 1 

// const x = tf.tensor([2, 4, 5, 6, 7, 8]);
// tf.onesLike(x).print();


// --- tf.print ---

// Imprime información sobre el tf.Tensor incluyendo sus datos.
// La impresion de susu datos solo de da un true como valor al print 

// tf.tensor2d([1, 2, 3, 4], [2, 2]).print(true);

// --- tf.range ---
// Crea un nuevo tf.Tensor1D lleno con los números en el rango provisto.

// El tensor es un intervalo semiabierto, lo que significa que incluye el inicio, pero excluye el final. También se admiten rangos decrecientes y valores de paso negativos.

// Es como linspace pero la diferencia es que aqui le decimos que valor queremos excluir pasandole la cantidad de valores que excluya como ultimo valor, este caso exluimos los 2 ultimos valores 

// tf.range(0, 9, 2).print();

// Parámetros:
// inicio (número) Un valor de inicio entero
// stop (número) Un valor de parada entero
// paso (número) Un incremento de número entero (por defecto será 1 o -1) Opcional
// dtype ('float32'|'int32') El tipo de datos del tensor de salida. El valor predeterminado es 'float32'. Opcional


// --- tf.real ---

/* 
Devuelve la parte real de un tensor complejo (o real).

 Dada una entrada de tensor, esta operación devuelve un tensor de tipo float que es la parte real de cada elemento de entrada considerado como un número complejo.

 Si la entrada es real, simplemente hace un clon. */

// Practicamente funciona igual que img solo que este trae el real.

// const x = tf.complex([-2.25, 3.25], [4.75, 5.75]);
// tf.real(x).print();


// --- tf.truncatedNormal ---
/* 

Crea un tf.Tensor con valores muestreados de una distribución normal truncada.

*/

// Practicamente funciona para traer datos aleatorios 

// tf.truncatedNormal([1, 1]).print();


// --- tf.variable --- 

/*

Crea una nueva variable con el valor inicial proporcionado.

*/

// Remplazamos el valor de la variable

// const x = tf.variable(tf.tensor([1, 2, 3, 4, 5]));
// x.assign(tf.tensor([4, 5, 9, 5, 7]));

// x.print();


// --- tf.zeros --- 

/*

Crea un tf.Tensor con todos los elementos establecidos en 0.

*/

// tf.zeros([2, 2]).print();


// --- tf.zerosLike --- 

/*

Crea un tf.Tensor con todos los elementos establecidos en 0 con la misma forma que el tensor dado.

*/

// const x = tf.tensor([1, 2]);
// tf.bufferSync(x).print();

const a= tf.tensor2d([[0, 1], [2, 3]])
console.log(a.buffer().then())



// 

// []