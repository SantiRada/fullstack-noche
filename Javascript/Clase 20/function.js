let container = document.querySelector('.container');
let img = document.querySelector('.container img');

container.addEventListener('mousemove', () => {
    let rect = container.getBoundingClientRect();

    console.log(rect);
});