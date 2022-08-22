
/* August 22 3:20PM pre-GUI version */

/* Function to randomly choose among rock, paper, and scissors. */
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    let choicesIndex = Math.floor(Math.random() * 3)
    return choices[choicesIndex];
}

/* Variables that represent computer and player choices */

let playerChoice;

let computerChoice; 

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

/* Game function. Declare playerChoice and computerChoice variables above with 
let instead of const so both could be used and changed inside the game() function. */

function game() {
    for (let i = 0; i < 5; i++) {
        playerChoice = prompt('Enter rock, paper, or scissors', '')
        playerChoice = playerChoice.toLowerCase();
        computerChoice = getComputerChoice();
        console.log(oneRound(playerChoice, computerChoice));
        console.log(pScore, cScore);
    }
    if (pScore > cScore) {
        return "You beat the computer! Hoorah!";
    } else if (pScore < cScore) {
        return "The computer beat you. :-( ";
    } else {
        return "It's a tie.";
    }
}

console.log(game());