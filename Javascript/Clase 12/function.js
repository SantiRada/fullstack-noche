let variableLet = "hola mundo"; // let = crear una variable
var variableVar = 15; // var = crear una variable para todo el documento
const variableConst = 28.5; // const = crear una variable que NO puede cambiar

// char string int float uint double bool null NaN undefined
let variable = 20; // sos un texto = sos string // string variable = 25;

let a = 10;
let b = 5;

// alert(a + b); // CONTACTENAR = UNIRLOS EN TEXTO 10 + 5 = 105

let c = true; // BOOLEANO = BINARIO // TRUE = 1 // FALSE = 0

// alert(a + b + c); // 105true
// alert(c + a); // 11
// alert(c + c); // 2

// alert(a + (a + b) + c); // 10 + (10 + "5") + 1 // 10105true
// alert(a + (a + c) + b); // 10 + (10 + 1) + "5" // 215
// alert(a % b);

// let camelCase; // BUENA PRÁCTICA
// let PascalCase;
// let snake_case;
// let kebab-case;
// let Train-Case;
// let dot.case;
// let flatcase;

let num1 = 30;
let num2 = 25;

// alert(num1 === num2);
// > = mayor que
// < = menor que
// >= mayor o igual que
// <= menor o igual que
// == igual en contenido
// != distinto de
// === igual en contenido y tipo de datos

let num3 = 15;

// alert(num1 > num2 || num2 < num3); // TRUE
// && == Y
// || == O

let resultado = (((num1 + num3) == num2 || num2 >= num3) && (num3 < num1) && (num2 != num3));
// alert(resultado);

// if ( CONDICIONES ) {
//     RESULTADO
// } else{
//     RESULTADO CUANDO NO SE CUMPLE LA CONDICIÓN
// }

if((num1 + num3) < num2) {
    alert("num1 es mayor a num2");
}

// Desarrollar un programa en JavaScript que permita calcular el promedio de tres notas de un estudiante
// (primer parcial, segundo parcial y final) y determine si el estudiante aprueba o desaprueba la materia,
// para finalizar muestra su nota y un texto que diga si está o no aprobado.

/* --------- COMPLEJIZAR LA ACTIVIDAD --------- */
// Si el promedio es menor a 4.0, mostrar en pantalla: "Desaprobado".
// Si el promedio está entre 4.0 (inclusive) y 5.9, mostrar en pantalla: "Desaprobado, pero puede recuperar".
// Si el promedio está entre 6.0 (inclusive) y 7.9, mostrar en pantalla: "Aprobado con nota justa".
// Si el promedio está entre 8.0 (inclusive) y 9.4, mostrar en pantalla: "Aprobado con buena nota".
// Si el promedio es mayor a 9.5 (inclusive), mostrar en pantalla: "Aprobado con excelencia".

let title = document.getElementById("title");
let notas = document.getElementById("notas");
let resultadoText = document.getElementById("resultado");

let nota1 = prompt("Nota de primer parcial:");
let nota2 = prompt("Nota de segundo parcial:");
let nota3 = prompt("Nota del final:");

let promedio = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;

if(promedio <= 10) {

    title.innerHTML = "NOTAS DEL ALUMNO";
    notas.innerHTML = "Primer parcial: " + nota1 + "<br>";
    notas.innerHTML += "Segundo parcial: " + nota2 + "<br>";
    notas.innerHTML += "Final: " + nota3;

    if(promedio < 4.0){
        resultadoText.innerHTML = "Desaprobado";
    } else if(promedio >= 4.0 && promedio < 5.9){
        resultadoText.innerHTML = "Desaprobado, pero puede recuperar";
    } else if(promedio >= 6.0 && promedio < 7.9){
        resultadoText.innerHTML = "Aprobado con nota justa";
    } else if(promedio >= 8.0 && promedio < 9.4){
        resultadoText.innerHTML = "Aprobado con buena nota";
    } else{
        resultadoText.innerHTML = "Aprobado con excelencia";
    }

}else{
    title.innerHTML = "El promedio no es correcto.";
}

// title                // TODO EL CONTENIDO
// title.textContent    // SOLO SU TEXTO
// title.innerHTML      // MODIFICA EL HTML CREADO
// title.innerText      // MODIFICA SOLO SU TEXTO












// SI (PASA ESTO) ENTONCES
// SINO SI (PASA ESTO) ENTONCES
// SINO

// Desarrollar un programa en JavaScript que permita calcular el descuento aplicado a una compra 
// según el monto total y la categoría del cliente (Regular o VIP). 
// Finalmente, muestra el monto final a pagar y un texto que indique el descuento aplicado.

// Reglas de descuento:
// - Si el cliente es "Regular" y gasta menos de $50, no tiene descuento.
// - Si el cliente es "Regular" y gasta entre $50 (inclusive) y $100, tiene un 5% de descuento.
// - Si el cliente es "Regular" y gasta más de $100, tiene un 10% de descuento.
// - Si el cliente es "VIP" y gasta menos de $100, tiene un 10% de descuento.
// - Si el cliente es "VIP" y gasta $100 o más, tiene un 20% de descuento.