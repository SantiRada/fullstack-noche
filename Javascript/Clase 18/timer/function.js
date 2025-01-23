let timer = document.querySelector('.timer');

// SET INTERVAL
// setInterval(() => {
//     let horario = new Date();

//     let horas = String(horario.getHours()).padStart(2, '0');
//     let minutos = String(horario.getMinutes()).padStart(2, '0');
//     let segundos = String(horario.getSeconds()).padStart(2, '0');

//     timer.textContent = horas + ":" + minutos + ":" + segundos;
// }, 1000);

let counter = 180;

setInterval(() => {
    counter--;

    let minutes = String(counter > 60 ? Math.floor(counter / 60) : 0).padStart(2, 0);
    let seconds = String(counter % 60).padStart(2, '0');

    timer.textContent = minutes + ":" + seconds;
}, 1000);

// SET INTERVAL ES ITERATIVO
// SETTIMEOUT ES DE LLAMADO ÚNICO