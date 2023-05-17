// Simulating page load delay
setTimeout(function() {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.body-container').style.display = 'flex';
    document.querySelector('.body-container').style.flexDirection = 'column';

}, 6000);


const para = document.getElementById('para');
const resetBtn = document.querySelector('.reset-btn');
const playBtn = document.querySelectorAll('.selection');
const choices = document.getElementById('choices')

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

// reload func
resetBtn.addEventListener('click', () => location.reload());

//player choice
playBtn.forEach((selection) => {   
    selection.addEventListener('click', ()=> {
        let playerChoice = selection.querySelector('img');
        playerSelection = playerChoice.alt;
        game();
        if (playerScore === 5 || computerScore === 5) {
            disableButtons();
            resetBtn.style.display = 'block'
        };
    });
});

// computer choice
function getComputerChoice () {
    let choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * choices.length)
    return choices[index];  
}; 

//play round
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    
    if (playerSelection === computerSelection) {
        choices.innerHTML = `${playerSelection} ${computerSelection}`
        return `Tie Game!`
    } else if (
        (computerSelection === "rock" && playerSelection === "paper" )||
        (computerSelection === "paper" && playerSelection === "scissors")||
        (computerSelection === 'scissors' && playerSelection === 'rock')
        ) {
            playerScore++;
            choices.innerHTML = `${playerSelection} ${computerSelection}`;
            return `You Won`;
        } else {
            computerScore++;
            choices.innerHTML = `${playerSelection} ${computerSelection}`;
            return `You Lost`
        };
}; 

function game() {
    para.innerHTML = playRound(playerSelection, computerSelection);
    scorePanel.innerHTML = `HUMANITY ${playerScore} - ${computerScore} MACHINES`;

    if (playerScore === 5) {
        para.innerHTML = `PLAYAAA`;
        scorePanel.style.color = 'yellow';
        para.style.color = 'yellow';
        para.style.textShadow = "0px 0px 15px #000";
        choices.style.display = 'none';
    } else if (computerScore === 5) {
        para.innerHTML = `WELL DONE HUMAN`;
        scorePanel.style.color = 'red';
        para.style.color = 'red';
        para.style.textShadow = "0px 0px 15px #000";
        choices.style.display = 'none';
    }
}; 
// disables the choice buttons when the game reaches its goal
function disableButtons () {
    playBtn.forEach((selection) => {
        selection.disabled = true
    });
};