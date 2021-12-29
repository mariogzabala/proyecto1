let fs = require ('fs'); //importo libreria para leer archivos de texto 
let moment = require('moment'); //importo libreria para fechas
let bandas = require('./bandas/info'); 
let colores = require('./colores/info');
let equipos_cba = require('./equipos_cba/info');

console.log("Mis bandas favoritas son: ");
console.log(bandas);

console.log("Mis colores favoritos son: ");
console.log(colores);

console.log("Los equipos de Cordoba son: ");
console.log(equipos_cba);

let datosTexto = fs.readFileSync(__dirname + '/documento.txt', 'utf-8')

console.log(datosTexto);

console.log("La fecha de hoy es: " + moment().format('DD/MM/YYYY'));



