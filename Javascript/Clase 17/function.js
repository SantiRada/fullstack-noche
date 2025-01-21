let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');

let content = document.querySelector('.content');
let img = document.querySelectorAll('.img');
let index = 0;
let percentage = 100 / img.length;

leftArrow.addEventListener('click', () => {

    if(index > 0) { index--; }
    else { index = img.length - 1; }

    content.style.transform = "translateX(-" + (percentage * index) + "%)";
});

rightArrow.addEventListener('click', () => {

    if(index < (img.length - 1)) { index++; }
    else { index = 0; }
    
    content.style.transform = "translateX(-" + (percentage * index) + "%)";
});

// content = 1250px * 6 = 7500px