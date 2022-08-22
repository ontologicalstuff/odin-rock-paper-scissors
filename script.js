
/* Function to randomly choose among rock, paper, and scissors. */
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    let randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber];
}

/* Variables that represent computer and player choices */

let playerChoice = "Rock";
playerChoice = playerChoice.toLowerCase();

const computerChoice = getComputerChoice();

let oneRound = function (player, computer) {
    if (player === "rock" && computer === "scissors") {
        return "You win! Rock beats scissors.";
    } else if (player === "rock" && computer === "paper") {
        return "You lose! Paper beats rock"; 
    } else if (player === "scissors" && computer === "rock") {
        return "You lose! Rock beats scissors!"
    } else if (player === "scissors" && computer === "paper") {
        return "You win! Scissors beats paper!";
    } else if (player === "paper" && computer === "rock") {
        return "You win! Paper beats rocks!";
    } else if (player === "paper" && computer === "scissors") {
        return "You lose! Scissors beats paper!";
    } else {
        return "It's a tie!"
    }  
}

console.log(oneRound(playerChoice, computerChoice));