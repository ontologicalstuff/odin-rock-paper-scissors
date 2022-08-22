
/* August 22 3:20PM pre-GUI version */

/* Function to randomly choose among rock, paper, and scissors. */
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    let choicesIndex = Math.floor(Math.random() * 3)
    return choices[choicesIndex];
}

/* Variables that represent computer and player choices and their scores.  */

let playerChoice;

let computerChoice; 

let playerScore = 0;

let computerScore = 0;

/* oneRound function */

let oneRound = function (player, computer) {
    if (player === "rock" && computer === "scissors") {
        playerScore ++;
        return "You win! Rock beats scissors!";
    } else if (player === "rock" && computer === "paper") {
        computerScore ++;
        return "You lose! Paper beats rock!"; 
    } else if (player === "scissors" && computer === "rock") {
        computerScore ++;
        return "You lose! Rock beats scissors!"
    } else if (player === "scissors" && computer === "paper") {
        playerScore ++;
        return "You win! Scissors beats paper!";
    } else if (player === "paper" && computer === "rock") {
        playerScore ++;
        return "You win! Paper beats rocks!";
    } else if (player === "paper" && computer === "scissors") {
        computerScore ++;
        return "You lose! Scissors beats paper!";
    } else {
        return "It's a tie!"
    }  
}

/* Game function. */

function game() {
    for (let i = 0; i < 5; i++) {
        playerChoice = prompt('Enter rock, paper, or scissors', '')
        playerChoice = playerChoice.toLowerCase();
        computerChoice = getComputerChoice();
        console.log(oneRound(playerChoice, computerChoice));
        console.log(playerScore, computerScore);
    }
    if (playerScore > computerScore) {
        return "You beat the computer! Hoorah!";
    } else if (playerScore < computerScore) {
        return "The computer beat you. :-( ";
    } else {
        return "It's a tie.";
    }
}

console.log(game());