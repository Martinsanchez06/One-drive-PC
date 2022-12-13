// // EJERCICIO POR VER Y RESOLVER


// function agregarHttp(url) {
//     return "http://" + url;
// }

// function procesar(unArray,callback) {
//     let sitiosWeb = [];
//     for (let i = 0; i < unArray.length; i++){
       
//         sitiosWeb.push(callback(unArray[i]));
//     }
//     return sitiosWeb;
// }

// let sitioWebCompleto = (unArray, callback) => procesar(unArray, callback);

// console.log(sitioWebCompleto(["www.yahoo.com", "www.google.com", "www.git.com"], agregarHttp));


// OTRO EJERCICIO


// function cantidadDeMesesConGanancia(unPeriodo) {
//     let cantidad = 0;
//     for (let i = 0; i < unPeriodo.length; i++) {
//       let mes = unPeriodo[i];
//          if (mes>0) cantidad++;
//     }
//     return cantidad;
//   }
  
//   cantidadDeMesesConGanancia([0, 3, -1, 5]) 


// OTRO MAS 


// function saldosDeMesesConGanancia(unPeriodo) {
//     var saldos = [];
//     for (var i = 0; i < unPeriodo.length; i++) {
//       if (unPeriodo[i] > 0){
//         saldos.push(unPeriodo[i])
//       }    
//     }
//     return saldos
  