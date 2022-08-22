
/* Function to randomly choose among rock, paper, and scissors. */
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    let randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber];
}

/* Variables that represent computer and player choices */

let playerChoice = prompt('Enter rock, paper, or scissors', '')
playerChoice = playerChoice.toLowerCase();

const computerChoice = getComputerChoice();

/* oneRound function */

let pScore = 0;
let cScore = 0;

let oneRound = function (player, computer) {
    if (player === "rock" && computer === "scissors") {
        pScore ++;
        return "You win! Rock beats scissors!";
    } else if (player === "rock" && computer === "paper") {
        cScore ++;
        return "You lose! Paper beats rock!"; 
    } else if (player === "scissors" && computer === "rock") {
        cScore ++;
        return "You lose! Rock beats scissors!"
    } else if (player === "scissors" && computer === "paper") {
        pScore ++;
        return "You win! Scissors beats paper!";
    } else if (player === "paper" && computer === "rock") {
        pScore ++;
        return "You win! Paper beats rocks!";
    } else if (player === "paper" && computer === "scissors") {
        cScore ++;
        return "You lose! Scissors beats paper!";
    } else {
        return "It's a tie!"
    }  
}

console.log(oneRound(playerChoice, computerChoice))


for (let i = 0; i < 5; i++) {
    oneRound(playerChoice, computerChoice);
} 
