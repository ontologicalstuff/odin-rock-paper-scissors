
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