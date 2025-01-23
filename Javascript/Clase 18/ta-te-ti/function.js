const squares = document.querySelectorAll('.square');
const resetBtn = document.querySelectorAll('.reset');
const iconTurn = document.querySelectorAll('.icon-turn');
const modal = document.querySelector('.modal');
const counterTextX = document.querySelector('.counterX');
const counterTextO = document.querySelector('.counterO');
let winningLine = document.querySelector('.winning-line');

const resetHistorial = document.querySelector('.btn');

resetHistorial.addEventListener('keydown', (e) => {
    localStorage.setItem("counterX", JSON.stringify(0));
    localStorage.setItem("counterO", JSON.stringify(0));
    counterO = 0;
    counterX = 0;

    counterTextX.textContent = 0;
    counterTextO.textContent = 0;
});

let turn = "X";
let combinations = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];
let winLines = [
    "translateY(-115px)",
    "none",
    "translateY(115px)",
    "translateX(-115px) rotateZ(90deg)",
    "rotateZ(90deg)",
    "translateX(115px) rotateZ(90deg)",
    "rotateZ(45deg)",
    "rotateZ(135deg)"
];

let counterPlace = 0;

let winner = "";

let counterX = localStorage.getItem("counterX") ? JSON.parse(localStorage.getItem("counterX")) : 0;
let counterO = localStorage.getItem("counterO") ? JSON.parse(localStorage.getItem("counterO")) : 0;

Initial();

squares.forEach((square, i) => {
    square.addEventListener('click', () => {
        if(winner == "" && square.textContent == ""){
            square.textContent = turn;

            DetectWinner(i);
            saveGame();
    
            if(winner == ""){
                turn = turn == "X" ? "O" : "X";
                iconTurn.forEach(icon => icon.textContent = turn );

                localStorage.setItem("turn", JSON.stringify(turn));

                counterPlace++;
    
                if(counterPlace >= 9 && winner == "") { console.log("¡Es un empate!"); }
            }
        }
    });
});

resetBtn.forEach(btn => btn.addEventListener('click', () => { Reset(); }));

function Initial(){
    turn = localStorage.getItem("turn") ? JSON.parse(localStorage.getItem("turn")) : "X";
    iconTurn.forEach(icon => icon.textContent = turn );
    modal.style.display = "none";
    
    counterTextO.textContent = counterO;
    counterTextX.textContent = counterX;

    if(localStorage.getItem("squares")){
        let squaresContent = JSON.parse(localStorage.getItem("squares"));
        
        squares.forEach((square, i) => {
            square.textContent = squaresContent[i];
        });
    }
}

function Reset(){
    turn = "X";
    winner = "";
    counterPlace = 0;
    modal.style.display = "none";
    counterTextO.textContent = counterO;
    counterTextX.textContent = counterX;
    iconTurn.forEach(icon => icon.textContent = turn );
    winningLine.style.display = "none";

    squares.forEach(square => square.textContent = "" );

    saveGame();
}

function saveGame(){
    let content = [];
    squares.forEach(square => content.push(square.textContent) );
    localStorage.setItem("squares", JSON.stringify(content));
}

function DetectWinner(i){
    let combinationWinner = combinations.filter(combination => combination.includes(i));
    
    let counterTurn = 0;

    for(let i = 0; i < combinationWinner.length; i++){
        for(let j = 0; j < combinationWinner[i].length; j++){
            if (squares[combinationWinner[i][j]].textContent == turn) {
                counterTurn++;
            }
        }
        if(counterTurn < 3) { counterTurn = 0; }
        else{
            Win(combinationWinner[i]);
            break;
        }
    }
}

function Win(combinationWinner) {
    winner = turn;
    
    if (winner == "X") { counterX++; }
    else { counterO++; }

    counterTextO.textContent = counterO;
    counterTextX.textContent = counterX;

    localStorage.setItem("counterX", JSON.stringify(counterX));
    localStorage.setItem("counterO", JSON.stringify(counterO));

    // modal.style.display = "flex";

    let index = combinations.findIndex(combi => combi == combinationWinner); // [0,3,6]

    winningLine.style.display = "flex";
    winningLine.style.transform = winLines[index];
}