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

        element.addEventListener('click', (e) => {
            hue = (i * 8);

            barSelector.style.transform = "translateY(" + e.layerY + "px)";

            ColoredBoard();
        })
    }
}

function SelectedColor () {

    let color = selectedColor.length > 0 ? palette[selectedColor[0]][selectedColor[1]].style.backgroundColor : "";

    if(color == "") return;

    // top: calc(40.5px * 4); // left: calc(40.5px * 4);

    point.style.top = "calc(40.35px * " + selectedColor[0];
    point.style.left = "calc(40.35px * " + selectedColor[1];

    preview.style.backgroundColor = color;

    let colorRGB = CleanRgb(color);

    redText.textContent = "R: " + colorRGB[0];
    greenText.textContent = "G: " + colorRGB[1];
    blueText.textContent = "B: " + colorRGB[2];

    let colorHSL = RgbToHsl(colorRGB[0], colorRGB[1], colorRGB[2]);

    hueText.textContent = "H: " + colorHSL[0];
    saturationText.textContent = "S: " + colorHSL[1];
    lightnessText.textContent = "L: " + colorHSL[2];

    let colorHex = rgbToHex(parseInt(colorRGB[0]), parseInt(colorRGB[1]), parseInt(colorRGB[2]));

    hexText.textContent = colorHex;
}

function CleanRgb(color){
    let newColor = color.split(',');

    let red = newColor[0].replace("rgb(", "").replace(" ", "");
    let green = newColor[1].replace(" ", "");
    let blue = newColor[2].replace(" ", "").replace(")", "");

    return [ parseInt(red), parseInt(green), parseInt(blue) ];
}

function RgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l;

    l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // Achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r: 
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g: 
                h = (b - r) / d + 2;
                break;
            case b: 
                h = (r - g) / d + 4;
                break;
        }

        h *= 60;
    }

    return [
        Math.round(h),
        Math.round(s * 100),
        Math.round(l * 100)
    ];
}

function rgbToHex(r, g, b) {
    const toHex = (value) => {
        // BASE 16 0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f // BASE 2 = 0,1
        const hex = value.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };

    // return "#" + toKex(r) + toHex(g) + toHex(b);
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
