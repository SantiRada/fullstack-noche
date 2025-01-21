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

if(localStorage.getItem("tareas")){
    tareas = JSON.parse(localStorage.getItem("tareas"));
}

// ---- AGREGAR TAREAS A HTML ---- //
let list = document.querySelector(".list-complete");
let listPending = document.querySelector(".list-pending");
// FOREACH - FOR OF
CreateListTask(tareas);
// ---- AGREGAR TAREAS A HTML ---- //

let searchbar = document.getElementById("searchbar");

// INPUT DE CREACIÓN DE TAREA
let createbar = document.getElementById("createbar");
let buttonCreate = document.getElementById("create-task");

let btnReverse = document.getElementById('reverse');

btnReverse.addEventListener('click', () => {
    list.classList.toggle('column-reverse');
    listPending.classList.toggle('column-reverse');
});

buttonCreate.addEventListener('click', (e) => {
    e.preventDefault();
    AddTask();
});

searchbar.addEventListener('change', () => { SearchTask(); });

function CreateListTask (showTask) {
    list.innerHTML = '';
    listPending.innerHTML = '';

    // MAP - FILTER - FIND - SORT - FOREACH
    showTask.sort((tarea1,tarea2) => tarea1.nombre.localeCompare(tarea2.nombre));

    showTask.forEach((tarea, i) => { AddOneTask(tarea, i); });
}
function AddOneTask (tarea, iter) {
    let item = document.createElement('div');
    item.classList.add('task');

    if(tarea.completada) { list.appendChild(item); }
    else { listPending.appendChild(item); }

    let h4 = document.createElement('h4');
    item.appendChild(h4);
    h4.textContent = tarea.nombre;
    
    let divIcons = document.createElement('div');
    divIcons.classList.add('list-icon');
    item.appendChild(divIcons);

    let p = document.createElement('p');
    divIcons.appendChild(p);

    let i = document.createElement('i');
    if (tarea.completada) { i.classList.add('show'); }
    else { i.classList.add('hide'); }
    p.appendChild(i);

    p.addEventListener('click', () => {
        tareas[iter].completada = !tareas[iter].completada;

        ChangeTask(tarea, item, iter);
    });

    let xmark = document.createElement('i');
    xmark.classList.add('fas', 'fa-xmark', 'icon');
    divIcons.appendChild(xmark);
    xmark.addEventListener('click', () => {
        tareas.pop(tarea);
        item.remove();
        SaveList();
    });
}
function ChangeTask(tarea, item, iter){
    item.remove();

    AddOneTask(tarea, iter);

    SaveList();
}
// OPCION 1: AGREGAR TAREA
function AddTask(){

    // FUNCIONES DE ARRAYS = MAP, FILTER, FIND
    let ejemplo = tareas.find(tarea => tarea.nombre.toLocaleLowerCase() == createbar.value.toLocaleLowerCase());
    
    if (createbar.value == "") { alert("Falta contenido"); }
    else if (ejemplo != null) { alert("Esta tarea ya existe"); }
    else{
        let nuevaTarea = {
            "id": tareas.length,
            "nombre": createbar.value,
            "completada": false
        };

        tareas.push(nuevaTarea);
        CreateListTask(tareas);

        SaveList();
    }
}
// OPCION 2: BUSCAR TAREA
function SearchTask(){
    let input = searchbar.value;
    input = input.toLocaleLowerCase();

    // FILTRA EL CONTENIDO DE UN ARRAY SEGÚN UNA CONDICIÓN
    let tareasFiltradas = tareas.filter(tarea => tarea.nombre.toLocaleLowerCase().includes(input));

    CreateListTask(tareasFiltradas);
}

function SaveList(){
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

// 1. REPASAR TODO EL LISTADO
// 2. CONTAR LA CANTIDAD DE CARACTERES DE CADA TAREA QUE SON IGUALES
// 3. TENER UN VALOR ÍNDICE QUE SIRVA PARA SABER SI ES SUFICIENTEMENTE IGUAL
// 4. MOSTRAR MENSAJE DE SIMILITUD
// 5. SEGUIR A LA SIGUIENTE TAREA

// LOCALSTORAGE
// CREATE-NEW-LIST

// find, findIndex, slice, reduce, indexof, lastindexof, setinterval
// Modificar css desde js, padStart, padEnd, JSON, localStorage, Crear un Reloj

// MENÚ HAMBURGUESA 
// DARK MODE
// CARRUSEL DE IMÁGENES