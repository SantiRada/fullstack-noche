let select = document.querySelector('.select');
let colorPicker = document.querySelector('.color-picker');

select.addEventListener('change', () => VerifySelect() );
board.addEventListener('click', () => VerifySelect() );
barHue.addEventListener('click', () => VerifySelect() );

VerifySelect();

function VerifySelect () {
    hasChange = false;
    switch(select.value){
        case "Complementario": CreatePalette(180, 2); break;
        case "Triadic": CreatePalette(120, 3); break;
        case "Tetradic": CreatePalette(90, 4); break;
        case "Analogo": CreatePaletteBothDirection(30); break;
        case "Neutral": CreatePaletteBothDirection(15); break;
        
        case "Sombras": CreatePaletteForLightness(0, 2); break;
        case "Tintes": CreatePaletteForLightness(100, 2); break;
        case "Tonos" : CreatePaletteForLightness(0, 1); break;
        default: CreatePalette(180, 2); break;
    }
}

function CleanPicker () {
    colorPicker.innerHTML = "";

    let color = palette[selectedColor[0]][selectedColor[1]].style.backgroundColor;
    
    return RgbToHsl(...CleanRgb(color));
}

function CreateItem (color) {
    let item = document.createElement('div');
    item.classList.add("color");
    item.style.backgroundColor = color;
    item.textContent = color;
    colorPicker.appendChild(item);
}

function CreatePalette (distance, count) {
    let color = CleanPicker();

    for(let i = 0; i < count; i++){
        let colorComplementario = color[0] + distance * i;
    
        if (colorComplementario > 360) { colorComplementario -= 360; }
    
        let colorHSL = "hsl(" + colorComplementario + "deg, " + color[1] + "%, " + color[2] + "%)";
        
        CreateItem(colorHSL);
    }
}

function CreatePaletteBothDirection (diff) {
    let color = CleanPicker();

    // i = 0 == -15
    // i = 1 == 0
    // i = 2 == 15

    let distance = -diff * 2;

    for (let i = 0; i < 5; i++) {
        let colorDistance = color[0] + distance;
    
        if (colorDistance < 0) { colorDistance += 360; }
        if (colorDistance > 360) { colorDistance -= 360; }
    
        let colorHSL = "hsl(" + colorDistance + "deg, " + color[1] + "%, " + color[2] + "%)";
        
        CreateItem(colorHSL);

        distance += diff;
    }
}

function CreatePaletteForLightness (goal, position) {
    let color = CleanPicker();

    // SHADES
    // i = 0 // color[2] = color[2]
    // i = 5 // color[2] = 0

    let distance;
    if (goal == 0) {
        // SI VOY A 0
        distance = color[position] / 6;
    } else if (goal == 100){
        // SI VOY A 100
        distance = (100 - color[position]) / 6;
    }

    let colorDistance;
    for(let i = 0; i < 6; i++) {
        if(goal == 0){ colorDistance = color[position] - distance * i; }
        else if(goal == 100) { colorDistance = color[position] + distance * i; }
    
        let colorHSL;
        if (position == 1) { colorHSL = "hsl(" + color[0] + "deg, " + colorDistance.toFixed(2) + "%, " + color[2] + "%)"; }
        else { colorHSL = "hsl(" + color[0] + "deg, " + color[1] + "%, " + colorDistance.toFixed(2) + "%)"; }
        
        CreateItem(colorHSL);
    }
}