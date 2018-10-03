let origBoard;
const huPlayer = '0';
const comp = 'x';
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const cells = document.querySelectorAll('.space');

startGame();

function startGame(){
    document.querySelector(".end-game").style.display = "none";
    origBoard = Array.from(Array(9).keys());
    for (var i = 0; i<cells.length; i++) {
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick, false);
    }
}

function turnClick(square) {
    console.log(square.target.id);
}