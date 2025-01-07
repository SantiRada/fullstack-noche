// VARIABLES let var const
// CONDICIONALES if else-if else
// ESTRUCTURA DE CONTROL switch case break default
// FUNCIONES function
// Tipos de Datos Complejos
// BUCLES
// --------------------- //
// [] = CORCHETES
// {} = LLAVES
// () = PARENTESIS

let abc = 'H'; // NUMBER (INT, FLOAT) // STRING // CHAR
let complejo = [ 20, 45, 65, 10, 93 ]; // Esto es un Array 

// Escribe una función en JavaScript llamada manipularArray que reciba un array de números enteros como parámetro y realice las siguientes operaciones:
// Devuelva un nuevo array con los números al cuadrado.
// Filtre los números impares del array original.

function ManipularArray (arrayDeNumeros) {
    let arrayNuevo = [];
    let arrayImpares = [];

    for(let i = 0; i < arrayDeNumeros.length; i++){
        arrayNuevo[i] = arrayDeNumeros[i] * arrayDeNumeros[i];

        if(arrayNuevo[i] % 2 != 0){
            arrayImpares[arrayImpares.length] = arrayNuevo[i];
        }
    }

    console.log(arrayImpares);

    return arrayNuevo;
}
// let resultado = ManipularArray([ 33, 28, 14 ]);

// SIGUIENTE EJERCICIO
// Escribe una función en JavaScript llamada contarMayores que reciba un array de números y un número límite como parámetros. La función debe utilizar un bucle for para recorrer el array y contar cuántos números del array son mayores que el límite proporcionado.

// El resultado debe ser un número entero que represente la cantidad de elementos mayores al límite.
function ContarMayores (arrayDeNumeros, limite) {

    let contador = 0;

    for( i = 0; i < arrayDeNumeros.length; i++) {
        if (arrayDeNumeros[i] > limite) {
            contador++;
        }
    }

    return contador;
}
let limite = 40;
// console.log("Hay " + ContarMayores([ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ], limite) + " números mayores que " + limite);

// SIGUIENTE ACTIVIDAD
// Escribe una función llamada duplicarElementos que reciba un array de números como parámetro. Utiliza un bucle for para recorrer el array y generar un nuevo array donde cada elemento sea el doble del valor correspondiente en el array original (esta cuenta debe hacerse en una segunda función). Devuelve el nuevo array.
function duplicarNumero(numero) {
    return numero * 2;
}
function duplicarElementos(array) {
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        nuevoArray[nuevoArray.length] = duplicarNumero(array[i]);
    }
    return nuevoArray;
}

let numeros = [1, 2, 3, 4, 5];
let resultado = duplicarElementos(numeros);
// console.log(resultado); // [2, 4, 6, 8, 10]

// SIGUIENTE EJERCICIO
// Crea una función llamada encontrarPalabrasLargas que reciba un array de palabras y un número mínimo de caracteres como parámetros. Usando un bucle for, encuentra todas las palabras del array que tengan más caracteres que el número mínimo y almacénalas en un nuevo array. Devuelve el nuevo array con las palabras que cumplen la condición.

function EncontrarPalabrasLargas(palabras, minCaracteres) {
    let palabrasLargas = [];
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length >= minCaracteres) {
            palabrasLargas.push(palabras[i]);
        }
    }
    return palabrasLargas;
}

// console.log(EncontrarPalabrasLargas(["hola", "facundo", "elian", "a"], 5));

let palabras = [ 10, 20, 30 ];

palabras.push("Leo"); // AGREGA AL FINAL palabras[palabras.length]
palabras.shift("Leo"); // AGREGA AL INICIO palabras[0]
palabras.pop(); // QUITA EL ÚLTIMO ELEMENTO palabras[palabras.length]
palabras.unshift(); // QUITA DEL INICIO palabras[0]

let a = [ 10, 20, 30 ];
let b = [ 40, 50, 60 ];

// let d = [];
// // for(let i = 0; i < a.length; i++){
// //     d[d.length] = a[i];
// // }
// // for(let i = 0; i < b.length; i++){
// //     d[d.length] = b[i];
// // }

let c = [ ...a, ...b ]; // SPREAD OPERATOR

console.log(c);

// Ejercicio:
// Crea una función llamada analizarNumeros que reciba un array de números como parámetro. La función debe recorrer el array utilizando un bucle for y realizar las siguientes acciones:
// Contar cuántos números son positivos, negativos y cuántos son ceros.
// Calcular la suma de los números positivos.
// Calcular el promedio de los números negativos (si no hay negativos, el promedio debe ser null).
// Devolver un objeto con los resultados.