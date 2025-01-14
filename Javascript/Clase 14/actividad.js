// Actividad: Sistema de gestión de tareas
// En esta actividad, crearás un sistema para gestionar tareas que permita al usuario agregar, listar y filtrar tareas, usando un array de objetos que contenga la información de cada tarea. El sistema deberá usar map, filter, while, prompt, arrays y objetos de manera combinada.

// Requisitos de la actividad:

// Objetos de tareas: Cada tarea tendrá la siguiente estructura:
// id: un número único.
// nombre: el nombre de la tarea (cadena de texto).
// completada: un valor booleano que indica si la tarea está completada o no.

// Operaciones:
// Agregar nuevas tareas.
// Mostrar todas las tareas (todas, completadas o no completadas).
// Buscar una tarea
// Marcar tareas como completadas.

// El sistema seguirá pidiendo operaciones al usuario hasta que decida salir.

let tareas = [
    {
        "id": 0,
        "nombre": "Lavar los platos",
        "completada": false
    },
    {
        "id": 1,
        "nombre": "Hacer las compras",
        "completada": false
    },
    {
        "id": 2,
        "nombre": "Llamar al trabajo",
        "completada": false
    },
    {
        "id": 3,
        "nombre": "Sacar la basura",
        "completada": true
    },
    {
        "id": 4,
        "nombre": "Hacer la cama",
        "completada": true
    },
    {
        "id": 5,
        "nombre": "Hora de tomar mate",
        "completada": false
    },
    {
        "id": 6,
        "nombre": "Pasear al perro",
        "completada": false
    },
    {
        "id": 7,
        "nombre": "Clase de Frontend a las 19",
        "completada": true
    },
];

let searchbar = document.getElementById("searchbar");
let buttonSearch = document.getElementById("button-search");

// INPUT DE CREACIÓN DE TAREA
let createbar = document.getElementById("createbar");
let buttonCreate = document.getElementById("create-task");

buttonSearch.addEventListener('click', () => {
    SearchTask();
});

buttonCreate.addEventListener('click', () => {
    AddTask();
});

// OPCION 1: AGREGAR TAREA
function AddTask(){
    let moreTask = true;
    let nombre = null;

    do{
        if(nombre != null){
            moreTask = parseInt(prompt("¿Quieres añadir una nueva tarea? 1: SI // 2: NO")) == 1 ? true : false;
        }

        if(!moreTask) { break; }

        nombre = prompt("Añadir tarea: ");
        let completada = prompt("¿Está completada? 1: SI // 2: NO");
        completada = parseInt(completada) == 1 ? true : false;
        
        nombre[0].toLocaleUpperCase();

        let nuevaTarea = {
            "id": tareas.length,
            "nombre": nombre,
            "completada": completada
        };
        
        tareas.push(nuevaTarea);
    } while (moreTask);
}

// OPCION 2: MOSTRAR TAREAS
function ShowTask(){
    // TAREA == cada elemento de iteración
    let completedTask = [];
    let notCompletedTask = [];
    for(tarea of tareas){
        if(tarea.completada){ completedTask.push(tarea.nombre); }
        else{ notCompletedTask.push(tarea.nombre); }
    }

    alert("Completadas: " + completedTask);
    alert("Pendientes: " + notCompletedTask);
}

// OPCION 3: BUSCAR TAREA
function SearchTask(){
    let input = null;
    let moreSearch = true;

    do{
        if(input != null) {
            moreSearch = parseInt(prompt("¿Quieres hacer otra búsqueda? 1: SI // 2: NO")) == 1 ? true : false;
        }

        if(!moreSearch) { break; }
        input = prompt("Buscar tarea por nombre...");
        input = input.toLocaleLowerCase();

        // FILTRA EL CONTENIDO DE UN ARRAY SEGÚN UNA CONDICIÓN
        let tareasFiltradas = tareas.filter(tarea => tarea.nombre.toLocaleLowerCase().includes(input));

        let totalTask = [];
        for(tarea of tareasFiltradas){
            totalTask.push(tarea.nombre);
        }
    
        alert(totalTask);

    } while (moreSearch);
}

// WHILE - DO-WHILE - MAP - FILTER
// Object.entries // .values // .keys