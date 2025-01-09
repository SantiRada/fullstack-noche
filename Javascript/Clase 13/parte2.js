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

// let c = [ ...a, ...b ]; // SPREAD OPERATOR

// console.log(c);

// Ejercicio:
// Crea una función llamada analizarNumeros que reciba un array de números como parámetro. La función debe recorrer el array utilizando un bucle for y realizar las siguientes acciones:
// Contar cuántos números son positivos, negativos y cuántos son ceros.
// Calcular la suma de los números positivos.
// Calcular el promedio de los números negativos (si no hay negativos, el promedio debe ser null).
// Devolver un objeto con los resultados.

// function analizarNumeros(numeros) {
//     let positivos = 0;
//     let negativos = 0;
//     let ceros = 0;
//     let sumaPositivos = 0;
//     let sumaNegativos = 0;
  
//     for (let i = 0; i < numeros.length; i++) {
//       if (numeros[i] > 0) {
//         positivos++;
//         sumaPositivos += numeros[i];
//       } else if (numeros[i] < 0) {
//         negativos++;
//         sumaNegativos += numeros[i];
//       } else {
//         ceros++;
//       }
//     }
  
//     const promedioNegativos = negativos > 0 ? sumaNegativos / negativos : null;
  
//     return {
//       positivos,
//       negativos,
//       ceros,
//       sumaPositivos,
//       promedioNegativos,
//     };
//   }
  
//   const ArrayNumeros = [2, -3, 0, 5, 1, 15, -35, 12, 6, 0, -4, 9, 0, 0];
//   const AnalizarArray = analizarNumeros(ArrayNumeros);
//   console.log(AnalizarArray);

// PUEDE TENER INFINITA CANTIDAD DE DATOS
// PUEDE TENER TODO TIPO DE DATOS (PERO ES MALA PRÁCTICA QUE TENGA TIPOS DISTINTOS)
// EXISTEN FUNCIONES DE AGREGAR Y QUITAR DESDE EL INICIO Y EL FIN: PUSH, POP, SHIFT, UNSHIFT
// PODEMOS OBTENER LA CANTIDAD DE ELEMENTOS DE UN ARRAY CON EL VALOR .length


// SENTIDO NORMAL
// for (let i = 0; i < 10; i++) {
//     // console.log(i);
// }

// // SENTIDO INVERSO
// for (let i = 9; i >= 0; i--) {
//     console.log(i);
// }

// let resA = prompt("¿Cuanto vale la variable?");
// resA = parseInt(resA);

// switch (resA) {
//     case 2: console.log("La variable vale 2"); break;
//     case 3: console.log("La variable vale 3"); break;
//     case 4: console.log("La variable vale 4"); break;
//     case 5: console.log("La variable vale 4"); break;
//     case 6: console.log("La variable vale 4"); break;
//     case 7: console.log("La variable vale 4"); break;
//     case 8: console.log("La variable vale 4"); break;
//     case 9: console.log("La variable vale 4"); break;
//     default: console.log("La variable es mayor a 9"); break;
// }

// 


let array = [ "tortuga", "leon", "liebre", "Jirafa", "Tigre" ];

for (let item of array) {
    // console.log(item);
}

// Tienes un array con los nombres de los estudiantes y otro array con sus respectivas calificaciones. Usa un for...of para recorrer las calificaciones y mostrar en la consola los nombres de los estudiantes que aprobaron.

let nombres = [ "Jose", "Alejandro", "Aldana", "Leonardo" ];
let notas = [ 9, 9, 10, 8.5 ];

for (let i = 0; i < nombres.length; i++) {
    // console.log(nombres[i] + " tiene un " + notas[i]);

    // if(notas[i] > 6){ console.log("¡Está aprobado!"); }
    // else { console.log("¡Está desaprobado!") }
}

for(let alumno of nombres){
    // console.log(alumno);
}

let objeto = {}; // OBJETO VACIO

for(let i = 0; i < 3; i++){
    // console.log(objeto["nombre"]);
    // console.log(objeto["edad"]);
    // console.log(objeto["mail"]);
}

objeto = {
    nombre: "Juan Pablo",
    edad: 23,
    mail: "juanpablo@gmail.com"
};

for(let obj in objeto){
    // console.log(obj + ": " + objeto[obj]);
}

let usuario = {
    nombre: "Leonardo",
    type: "Regular",
    gasto: 70,
};

if(usuario["type"] == "VIP"){
    if(usuario["gasto"] > 50){
        // console.log("A " + usuario["nombre"] + " se le da un descuento del 10%.");
    }else{
        // console.log(usuario["nombre"] + ", No tiene descuento.");
    }
}else{
    // console.log(usuario["nombre"] + " no es VIP, por ende no tiene descuento.");
}

let estudiantes = [
    {
        nombre: "Leonardo",
        nota: 9
    },
    {
        nombre: "Aldana",
        nota: 10
    },
    {
        nombre: "Jose",
        nota: 8.5
    },
    {
        nombre: "Gian",
        nota: 10
    },
    {
        nombre: "Ivan",
        nota: 10
    }
];

for(let alumno of estudiantes){
    // console.log(alumno["nombre"] + ": " + alumno["nota"]);
    // console.log(alumno.nombre);
    // console.log(alumno["nombre"]);
}

let username = document.getElementById('name');
let mail = document.getElementById('mail');
let pass = document.getElementById('pass');
let sendForm = document.getElementById('send-form');

let user = {
    nombre: undefined,
    mail: undefined,
    pass: undefined,
};

sendForm.addEventListener("click", () => {
    user = {
        nombre: username.value,
        mail: mail.value,
        pass: pass.value
    };

    for(let data in user){
        console.log(data + ": " + user[data]);
    }
});