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

// ---- AGREGAR TAREAS A HTML ---- //
let list = document.querySelector(".list-task");
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
});

buttonCreate.addEventListener('click', (e) => {
    e.preventDefault();
    AddTask();
});

searchbar.addEventListener('change', () => { SearchTask(); });

function CreateListTask (showTask) {
    list.innerHTML = '';

    // MAP - FILTER - FIND - SORT 
    showTask.sort((tarea1,tarea2) => tarea1.nombre.localeCompare(tarea2.nombre));

    showTask.forEach((tarea) => { AddOneTask(tarea); });
}
function AddOneTask (tarea) {
    let item = document.createElement('div');
    item.classList.add('task');
    list.appendChild(item);

    let h4 = document.createElement('h4');
    item.appendChild(h4);
    h4.textContent = tarea.nombre;
    
    let p = document.createElement('p');
    item.appendChild(p);

    let i = document.createElement('i');
    if (tarea.completada) { i.classList.add('show'); }
    else { i.classList.add('hide'); }
    p.append(i);

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

// 1. REPASAR TODO EL LISTADO
// 2. CONTAR LA CANTIDAD DE CARACTERES DE CADA TAREA QUE SON IGUALES
// 3. TENER UN VALOR ÍNDICE QUE SIRVA PARA SABER SI ES SUFICIENTEMENTE IGUAL
// 4. MOSTRAR MENSAJE DE SIMILITUD
// 5. SEGUIR A LA SIGUIENTE TAREA
