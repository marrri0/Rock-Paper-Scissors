const para = document.getElementById('para');
const rock = document.getElementById('rock-btn');
const paper = document.getElementById('paper-btn');
const scissors = document.getElementById('scissors-btn');
const resetBtn = document.querySelector('.reset-btn');

let rockCounter = 0;
let paperCounter = 0;
let scissorsCounter = 0;

function updateRock() {
    rockCounter++
    para.innerHTML = `You clicked Rock ${rockCounter} times`
}

function updatePaper() {
    paperCounter++
    para.innerHTML = `You clicked Paper ${paperCounter} times`
}

function updateScissors() {
    scissorsCounter++
    para.innerHTML = `You clicked Scissors ${scissorsCounter} times`
}

resetBtn.addEventListener('click', () => location.reload());
rock.addEventListener('click', updateRock);
paper.addEventListener('click', updatePaper);
scissors.addEventListener('click', updateScissors);