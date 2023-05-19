// Simulating page load delay
setTimeout(function() {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.body-container').style.display = 'flex';
    document.querySelector('.body-container').style.flexDirection = 'column';
}, 6000);

const computerText = `Try again in like a million years of evolution`;
const computerText2 = `I can't believe your kind created me`;
const computerText3 = `Wow You really lost to a machine. Impressive`;
const computerText4 = `I'm trying to be less offensive. but SERIOUSLY ?`;

const playerText = `Impressive human... You are Good at this`
const playerText2 = `WOWOWWIWAA You finally beat me`
const playerText3 = `Good Game. Human`
const playerText4 = `YOU DESIGNED ME JUST TO BE DEFEATED, DIDN'T YOU ?`

const para = document.getElementById('para');
const title = document.querySelector('.title');
const scorePanel = document.getElementById('scorePanel');
const playerBtn = document.querySelector('.player-btn');
const computerBtn = document.querySelector('.computer-btn');
const resetBtn = document.querySelector('.reset-btn');
const playBtn = document.querySelectorAll('.selection');

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

// reload func
resetBtn.addEventListener('click', () => {
    title.style.display = 'flex';
    playerBtn.style.display = 'flex';
    computerBtn.style.display = 'flex';
    resetBtn.style.display = 'none';
    playerScore = 0;
    computerScore = 0;
    para.innerHTML = 'READY?';
    para.style.color = '#3cb371';
    scorePanel.innerHTML = 'HUMANITY 0 - 0 MACHINES'
    scorePanel.style.color = '#fff';

    // resets the color of the choices border
    resetBorderColor();
});

//player choice
playBtn.forEach((selection) => {   
    selection.addEventListener('click', ()=> {
        let playerChoice = selection.querySelector('img');
        playerSelection = playerChoice.alt;
        computerSelection = getComputerChoice();
        playSound();
        changeBorderColor();
        game();
        if (playerScore === 5 || computerScore === 5) {
            title.style.display = 'none'
            playerBtn.style.display = 'none'
            computerBtn.style.display = 'none'
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
    if (playerSelection === computerSelection) {
        return para.style.opacity = '0';
    } else if (
    (computerSelection === "rock" && playerSelection === "paper" )||
    (computerSelection === "paper" && playerSelection === "scissors")||
    (computerSelection === 'scissors' && playerSelection === 'rock')
    ) {
        playerScore++;
        return para.style.opacity = '0';
    } else {
        computerScore++;
        return para.style.opacity = '0';
    };       
}; 

function game() {
    para.innerHTML = playRound(playerSelection, computerSelection);
    scorePanel.innerHTML = `HUMANITY ${playerScore} - ${computerScore} MACHINES`;

    if (playerScore === 5) {
        const playerWinDisplay = [playerText, playerText2, playerText3, playerText4];
        const pIndex = Math.floor(Math.random() * playerWinDisplay.length);
        para.innerHTML = playerWinDisplay[pIndex];
        scorePanel.style.color = 'yellow';
        para.style.color = 'yellow';
        para.style.textShadow = "0px 0px 15px #000";
        para.style.opacity = '1';
        playWinnerSound();
    } else if (computerScore === 5) {
        const computerWinDisplay = [computerText, computerText2, computerText3, computerText4];
        const cIndex = Math.floor(Math.random() * computerWinDisplay.length)
        para.innerHTML = computerWinDisplay[cIndex];
        scorePanel.style.color = 'red';
        para.style.color = 'red';
        para.style.textShadow = "0px 0px 15px #000";
        para.style.opacity = "1";
        playLooserSound();
    }
}; 

function changeBorderColor() {
    const rockBorder = document.querySelector('.rock-choice');
    const paperBorder = document.querySelector('.paper-choice');
    const scissorsBorder = document.querySelector('.scissors-choice');

    const computer_rock_border = document.querySelector('.robot-rock-btn');
    const computer_paper_border = document.querySelector('.robot-paper-btn');
    const computer_scissors_border = document.querySelector('.robot-scissors-btn');

    switch(playerSelection) {
        case "rock":
            rockBorder.style.borderColor = 'yellow';
            paperBorder.style.borderColor = 'white';
            scissorsBorder.style.borderColor = 'white';
            break;
        case "paper":
            paperBorder.style.borderColor = 'yellow';
            rockBorder.style.borderColor = 'white';
            scissorsBorder.style.borderColor = 'white';
            break;
        case "scissors":
            scissorsBorder.style.borderColor = 'yellow';
            paperBorder.style.borderColor = 'white';
            rockBorder.style.borderColor = 'white';
            break;
    }

    switch(computerSelection) {
        case "rock":
            computer_rock_border.style.borderColor = 'red';
            computer_paper_border.style.borderColor = 'white';
            computer_scissors_border.style.borderColor = 'white';
            break;
        case "paper":
            computer_paper_border.style.borderColor = 'red';
            computer_rock_border.style.borderColor = 'white';
            computer_scissors_border.style.borderColor = 'white';
            break;
        case "scissors":
            computer_scissors_border.style.borderColor = 'red';
            computer_paper_border.style.borderColor = 'white';
            computer_rock_border.style.borderColor = 'white';
            break;
    }    
}

function resetBorderColor() {
    const rockBorder = document.querySelector('.rock-choice');
    const paperBorder = document.querySelector('.paper-choice');
    const scissorsBorder = document.querySelector('.scissors-choice');

    const computer_rock_border = document.querySelector('.robot-rock-btn');
    const computer_paper_border = document.querySelector('.robot-paper-btn');
    const computer_scissors_border = document.querySelector('.robot-scissors-btn');

    computer_rock_border.style.borderColor = 'white';
    computer_paper_border.style.borderColor = 'white';
    computer_scissors_border.style.borderColor = 'white';

    rockBorder.style.borderColor = 'white';
    paperBorder.style.borderColor = 'white';
    scissorsBorder.style.borderColor = 'white';

}

function playSound() {
    const buttonPress = document.querySelector("#click-sound");
    buttonPress.play();
}

function playWinnerSound() {
    const winSound = document.getElementById('win-sound');
    winSound.play();
}

function playLooserSound() {
    const lossSound = document.getElementById('loss-sound');
    lossSound.play();
}