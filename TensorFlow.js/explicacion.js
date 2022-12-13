    
// ------ ESTOS SE HACEN PARA DECLARAR TENSORES DE UNA FORMA MÁS GENERAL, SIN ESPECIFICAR DE CUANTAS DIMENSIONES ES ------

// // Pass an array of values to create a vector.
// tf.tensor([1, 2, 3, 4]).print();

// // Pass a nested array of values to make a matrix or a higher
// // dimensional tensor.

// // ------ EN ESTE TENSOR ESTAMOS PASANDOLE UNA MATRIZ DE DOS DIMENSIONES ------
// tf.tensor([[1, 2], [3, 4]]).print();

// // Pass a flat array and specify a shape yourself.
// tf.tensor([1, 2, 3, 4], [2, 2]).print();

// // --- ES BASICAMENTE LO MISMO QUE EL TENSOR SOLO QUE AQUI ES UNA FORMA MAS LEGIBLE DE HACER NUESTRO CODIGO ---
// // --- RECIBE VALORES DE: value (number|boolean|string|Uint8Array) The value of the scalar. ---
// tf.scalar(3.14).print();

// // --- SE LE PASA UN TENSOR DE UNA SOLA DIMENSION (es algo mas estricto) ---
// tf.tensor1d([1, 2, 3]).print();

// // --- VARIABLES DE TENSORFLOW.JS --- 
// // Evita usarlos, solo los usas cuando sea realmente necesario que el tensor cambie de valor 
// const x = tf.variable(tf.tensor([1, 2, 3]));
// x.assign(tf.tensor([4, 5, 6]));
// x.print();

// ----------------------------------

