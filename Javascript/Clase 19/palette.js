let select = document.querySelector('.select');
let colorPicker = document.querySelector('.color-picker');

select.addEventListener('change', () => {
    switch(select.value){
        case "Complementario": Complementario(); break;
        case "Triadic": Triadic(); break;
        case "Tetradic": Tetradic(); break;
        case "Analogo": Analogo(); break;
        case "Neutral": Neutral(); break;
        case "Sombras": Sombras(); break;
        case "Tintes": Tintes(); break;
        case "Tonos": Tonos(); break;
        default: Complementario(); break;
    }
});

function Complementario () {
    let color = palette[selectedColor[0]][selectedColor[1]].style.backgroundColor;

    let returnColor = RgbToHsl(...CleanRgb(color));

    let colorHSL = "hsl(" + returnColor[0] + "deg, " + returnColor[1] + "%, " + returnColor[2] + "%)";

    colorPicker.innerHTML = "";

    CreateItem(colorHSL);

    let colorComplementario = returnColor[0] + 180;

    if (colorComplementario > 360) { colorComplementario -= 360; }

    colorComplementario = "hsl(" + colorComplementario + "deg, " + returnColor[1] + "%, " + returnColor[2] + "%)";
    
    CreateItem(colorComplementario);
}

function CreateItem (color) {
    let item = document.createElement('div');
    item.classList.add("color");
    item.style.backgroundColor = color;
    colorPicker.appendChild(item);
}

function Triadic () {

}

function Tetradic () {

}

function Analogo () {

}

function Neutral () {

}

function Sombras () {

}

function Tintes () {

}

function Tonos () {

}