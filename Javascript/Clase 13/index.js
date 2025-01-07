// Desarrollar un programa en JavaScript que permita calcular el descuento aplicado a una compra 
// según el monto total y la categoría del cliente (Regular o VIP).
// Finalmente, muestra el monto final a pagar y un texto que indique el descuento aplicado.

// Reglas de descuento:
// - Si el cliente es "Regular" y gasta menos de $50, no tiene descuento.
// - Si el cliente es "Regular" y gasta entre $50 (inclusive) y $100, tiene un 5% de descuento.
// - Si el cliente es "Regular" y gasta más de $100, tiene un 10% de descuento.
// - Si el cliente es "VIP" y gasta menos de $100, tiene un 10% de descuento.
// - Si el cliente es "VIP" y gasta $100 o más, tiene un 20% de descuento.

// 1. Cambiar a const los valores que no serán modificables
// 2. Agregar "salidas" a los condicionales ante errores.
// 3. 

// const gasto1 = 50;
// const gasto2 = 100;
// // ---------------- //
// const descuento1 = 5;
// const descuento2 = 10;
// const descuento3 = 20;

// let cliente1 = prompt("Tipo de Usuario - (1: Regular, 2: VIP)");
// cliente1 = cliente1 == "1" ? "Regular" : "VIP";

// let gastoCliente1 = prompt("¿Cuánto gastó?");
// gastoCliente1 = parseInt(gastoCliente1);

// if(cliente1 == "Regular"){
//     if (gastoCliente1 < gasto1) { alert ("no tiene descuento"); }
//     else if (gastoCliente1 >= gasto1 && gastoCliente1 <= gasto2) { alert ("tiene un 5% de descuento"); }
//     else if (gastoCliente1 > gasto2) { alert ("tiene un 10% de descuento"); }
//     else { alert ("Los datos no son correctos."); }
// }else {
//     if (gastoCliente1 < gasto2) { alert ("tiene 10% de descuento"); }
//     else if (gastoCliente1 >= gasto2) { alert ("tiene un 20% de descuento"); }
//     else { alert("Los datos no son correctos"); }
// }

// SCOPE

// PUEDO RECIBIR DATOS
// PUEDO DEVOLVER DATOS
function Suma (a, b) {
    return (a + b);
}
function Resta (a, b) {
    let res = a - b;

    return res;
}
function Multiplicar (a, b) {
    let res = a * b;

    return res;
}
function Dividir (a, b) {
    let res = a / b;

    return res;
}

let num1 = prompt("Primer número:");
num1 = parseInt(num1);
let num2 = prompt("Segundo número:");
num2 = parseInt(num2);
let typeAccount = prompt("Tipo de Cuenta - (0: Suma, 1: Resta, 2: Multiplicación, 3: División)");

let resultado;

switch(typeAccount) {
    case "0": resultado = Suma(num1, num2); break;
    case "1": resultado = Resta(num1, num2); break;
    case "2": resultado = Multiplicar(num1, num2); break;
    case "3": resultado = Dividir(num1, num2); break;
    default: alert("No se reconoce el tipo de cuenta"); break;
}

console.log("El resultado es: " + resultado);




