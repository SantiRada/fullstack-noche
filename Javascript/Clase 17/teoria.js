// find findindex slice indexof lastindexof
// MAP - FILTER - FOREACH

// Object.entries Object.values Object.keys

let usuarios = [ "joaquin", "jacinto", "javier", "jeremias", "javier", "jose" ];

// FIND
let resultadoFind = usuarios.find(usuario => usuario.includes("ja"));
// console.log(resultadoFind);

// FINDINDEX
let resultadoFindIndex = usuarios.findIndex(usuario => usuario.includes("ja"));
// console.log(resultadoFindIndex);

// SLICE
let resultadoSlice = usuarios.slice(3); // Se para en el índice y toma todo lo que le sigue
resultadoSlice = usuarios.slice(1, 3);
resultadoSlice = usuarios.slice(-3);
// console.log(resultadoSlice);

// INDEXOF
let resultadoIndexOf = usuarios.indexOf("javier");
console.log(resultadoIndexOf);

// LASTINDEXOF
let resultadoLastIndexOf = usuarios.lastIndexOf("javier");
console.log(resultadoLastIndexOf);


if(resultadoIndexOf == resultadoLastIndexOf){
    console.log("El elemento no está repetido");
}else{
    console.log("El elemento SI está repetido");
}

// setinterval ...