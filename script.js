const para = document.getElementById('para');
const resetBtn = document.querySelector('.reset-btn');
const playBtn = document.querySelectorAll('.selection');

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
        return `Tie Game!`
    } else if (
        (computerSelection === "rock" && playerSelection === "paper" )||
        (computerSelection === "paper" && playerSelection === "scissors")||
        (computerSelection === 'scissors' && playerSelection === 'rock')
        ) {
            playerScore++;
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        } else {
            computerScore++;
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        };
}; 

function game() {
    let RoundGame = para;
    let score = scorePanel;

    RoundGame.textContent = playRound(playerSelection, computerSelection);
    score.innerHTML = `HUMANITY ${playerScore} - ${computerScore} MACHINES`;

    if (playerScore === 5) {
        para.innerHTML = `ALL HAIL THE NEW CHAMP!`
        score.style.color = 'yellow'
        RoundGame.style.color = 'yellow'
        RoundGame.style.textShadow = "0px 0px 15px #fff"
    } else if (computerScore === 5) {
        para.innerHTML = `DID YOU JUST LOSE TO A MACHINE? UGH...`;
        score.style.color = 'red'
        RoundGame.style.color = 'red'
        RoundGame.style.textShadow = "0px 0px 15px #fff"
    }
}; 
// disables the choice buttons when the game reaches its goal
function disableButtons () {
    playBtn.forEach((selection) => {
        selection.disabled = true
    });
};