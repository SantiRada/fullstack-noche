let board = document.querySelector('.board');
let point = document.querySelector('.point');

let barHue = document.querySelector('.bar-hue');
let barSelector = document.querySelector('.bar-selector');

let preview = document.querySelector('.preview');
let hexText = document.querySelector('.hex');

let redText = document.querySelector('.red');
let greenText = document.querySelector('.green');
let blueText = document.querySelector('.blue');

let hueText = document.querySelector('.hue');
let saturationText = document.querySelector('.saturation');
let lightnessText = document.querySelector('.lightness');

let palette = []; // []
// [0] = PRIMERA FILA
// [0][3] = PRIMERA FILA, TERCERA COLUMNA
let hue = 0;
let selectedColor = [];

CreateBoard();
CreateBarHue();

function CreateBoard () {
    for(let j = 0; j < 10; j++){
        let element = []; // []
            for(let i = 0; i < 10; i++){
                let square = document.createElement('div');
                square.classList.add("item");
                square.style.backgroundColor = "hsl(" + hue + "deg, " + (i * 100 / 9) + "%, " + (-100 / 9 * j + 100) + "%)";
                board.appendChild(square);

                square.addEventListener('click', () => {
                    selectedColor = [ j, i ];

                    SelectedColor();
                });

                element.push(square);
            } // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        palette.push(element);
        // [
        // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        // ]
    }
}

function ColoredBoard(){
    for (let j = 0; j < palette.length; j++) {
        for (let i = 0; i< palette[j].length; i++) {
            palette[j][i].style.backgroundColor = "hsl(" + hue + "deg, " + (i * 100 / 9) + "%, " + (-100 / 9 * j + 100) + "%)";
        }
    }
    SelectedColor();
}

function CreateBarHue () {
    for(let i = 0; i < 45; i++){
        let element = document.createElement('div');
        element.classList.add("item-bar");
        element.style.backgroundColor = "hsl(" + (i * 8) + "deg, 100%, 50%)";
        barHue.appendChild(element);

        element.addEventListener('click', () => {
            hue = (i * 8);

            ColoredBoard();
        })
    }
}

function SelectedColor () {

    let color = palette[selectedColor[0]][selectedColor[1]].style.backgroundColor;

    preview.style.backgroundColor = color;

    let newColor = color.split(',');

    let red = newColor[0].replace("rgb(", "").replace(" ", "");
    let green = newColor[1].replace(" ", "");
    let blue = newColor[2].replace(" ", "").replace(")", "");

    redText.textContent = "R: " + red;
    greenText.textContent = "G: " + green;
    blueText.textContent = "B: " + blue;
}