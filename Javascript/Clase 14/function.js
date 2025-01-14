// FOREACH
// MAP
// FILTER
// ARROW FUNCTION
// EVENT LISTENER
// WHILE - DO-WHILE

// let edad = prompt("¿Qué edad tienes?");
// edad = parseInt(edad);

// MIENTRAS
// while (edad < 18) {
    // edad = prompt("¿Qué edad tienes? (No pueden ingresar menores de 18 años)");
    // edad = parseInt(edad);
// }

// console.log("El usuario es mayor de edad");

// if()
// switch
// for in // for of
// for
// while == Un bucle que espera el cambio de un valor
// do-while == Se ejecuta antes de preguntar la condición

// Crea un programa en el que el usuario tenga que adivinar un número secreto. El programa deberá usar un bucle while para seguir pidiendo al usuario que adivine hasta que lo haga correctamente.

// let intentos = 0;
// let numero;

// let numRandom = 6; // Harcodeamos el número random

// do{
//     numero = prompt("Adivina el número del 1 al 10 👀");
//     numero = parseInt(numero);
//     intentos++;

//     if(intentos >= 5) { break; }
// } while (numero != numRandom);

// if (numero != numRandom) { console.log("LO SIENTO, HAS PERDIDO 😭"); }
// else { console.log("¡Perfecto! El número secreto era " + numRandom); }

// let num = 2;

// // NO EJECUTA EL CONTENIDO SI LA CONDICIÓN NO SE CUMPLE
// while (num == 4) {
//     console.log("Num vale 4");
// }

// // EJECUTA EL CONTENIDO POR LO MENOS UNA VEZ
// do{
//     console.log("Num vale 4 en un DO-WHILE");
// } while (num == 4);

// let pass;
// let passSecurity = "hola1234";

// USANDO DO-WHILE
// do{
//     pass = prompt("Ingresa tu contraseña 👀");

//     if(pass != passSecurity){
//         console.log("La contraseña no es correcta, intentalo de nuevo");
//     }
// } while (pass != passSecurity);


// USANDO WHILE
// pass = prompt("Ingresa tu contraseña 👀");

// while(pass != passSecurity){
//     pass = prompt("Ingresa tu contraseña 👀");

//     if(pass != passSecurity){
//         console.log("La contraseña no es correcta, intentalo de nuevo");
//     }
// }

// RegEx = Expreciones regulares

// Menú interactivo (Do-While)
// Crea un programa que muestre un menú con opciones y permita al usuario seleccionar una opción hasta que elija salir.

// Instrucciones:

// Usa un bucle do-while para mostrar el menú al usuario.
// Ofrece opciones como:
// 1: Saludar
// 2: Mostrar la fecha actual
// 3: Salir
// Ejecuta la acción correspondiente a cada opción y repite el menú hasta que el usuario elija salir.

let opcion;

// MiWhile:
// do{

//     opcion = prompt("Menu: 1. Saludar // 2. Fecha actual // 3. Salir");
//     opcion = parseInt(opcion);

//     switch(opcion){
//         case 1: alert("¡Hola mundo!"); break;
//         case 2: alert("Hoy es 13 de Enero de 2025"); break; // break MiWhile;
//         case 3: alert("Saliendo del Sistema"); break;
//         default: alert("El valor ingresado no corresponde con el sistema, intentalo de nuevo."); break;
//     }
// } while (opcion != 3);

// FOREACH - MAP - FILTER

// let usuarios = [ 2, 4, 8, 16 ]; // CÓDIGO DESTRUCTIVO

// [ 4, 8, 16, 32 ]

// let nuevosUsuarios = usuarios.map(usuario => usuario * 2);

// console.log("Iniciales: " + usuarios);
// console.log("Nuevos: " + nuevosUsuarios);

// let usuariosObj = {
//     "nombre": "Joaquin",
//     "edad": 24,
//     "a": 12,
//     "b": 6
// }

// let arrayUser = Object.entries(usuariosObj);
// console.log(Object.values(usuariosObj));
// console.log(Object.keys(usuariosObj));
// for(let i = 0; i < Object.values(usuariosObj).length; i++){} // PARA ESO USA FOR OF

// console.log(arrayUser);

// for(let i = 0; i < arrayUser.length; i++){
//     for(let j = 0; j < arrayUser[i].length; j++){
//         console.log(arrayUser[i][j]);
//     }
// }

// let usuarios = [ "Aldana", "Agustina", "Elian", "Jose", "Ivan" ];
// let saludos = usuarios.map(usuario => usuario = "Hola " + usuario);
// console.log(saludos);

// let climaCelsius = [ 25, 28, 30 ];

// CELSIUS A FAHRENHEIT
// F = (C x 1.8) + 32

// let climaFahrenheit = climaCelsius.map(clima => clima = (clima * 1.8) + 32);

// console.log("Celsius:" + climaCelsius);
// console.log("Fahrenheit:" + climaFahrenheit);

// usuarios = [ "Aldana", "Agustina", "Elian", "Jose", "Ivan" ];
// for(let usuario of usuarios){
//     // usuario = VARIABLE MOMENTANEA PARA ITERAR CADA VALOR DEL ARRAY
//     console.log(usuario); // usuario = ALDANA // AGUSTINA // ELIAN
// }

// FOREACH - FILTER