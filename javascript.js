// GENERATE computer choice
// SET computer choice to return rock, paper, or scissors
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    switch (choice) {
        case 0:
            return choice = 'rock';
        case 1:
            return choice = 'paper';
        case 2:
            return choice = 'sciccors'
    }
}
// OBTAIN user input
function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper, or scissors");
    if (!(['rock', 'paper', 'scissors'].includes(humanChoice.toLowerCase()))) {
        return "Please enter a valid option";
    }
    return humanChoice
}
// DISPLAY player score variables
let humanScore = 0;
let computerScore = 0;
function playRound(computerChoice, humanChoice) {
    console.log(`Computer chose ${computerChoice}\nYou chose ${humanChoice}`)
    if (computerChoice == humanChoice) {
        return "It's a tie!"
    }
    if (computerChoice == 'rock') {
        if (humanChoice == 'paper') {
            humanScore++;
            return "You win!"
        } else if (humanChoice == 'scissors') {
            computerScore++;
            return "You lose!"
        }
    } else if (computerChoice == 'paper') {
        if (humanChoice == 'scissors') {
            humanScore++;
            return "You win!"
        } else if (humanChoice == 'rock') {
            computerScore++;
            return "You lose!"
        }
    } else {
        if (humanChoice == 'rock') {
            humanScore++;
            return "You win!"
        } else if (humanChoice == 'paper') {
            computerScore++;
            return "You lose!"
        }
    }
}

function playGame() {
    for (let i = 0; i <=5; i++) {
        console.log(playRound(getComputerChoice(), getHumanChoice()));
        console.log(`Computer score: ${computerScore}\nHuman score ${humanScore}`);
    }
    if (humanScore == computerScore){
        return console.log("It's a tie");
    } else if (humanScore < computerScore) {
        return console.log("Computer wins");
    } else {
        return console.log("Human wins");
    }
}
playGame();
// DETERMINE winner of a single round

// DETERMINE winner of entire game