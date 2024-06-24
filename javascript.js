let humanScore = 0;
let computerScore = 0;
let gameHistory = ''

let humanScoreBoard = document.querySelector(".current-human");
let computerScoreBoard = document.querySelector(".current-computer");
let historyBox = document.querySelector(".history-box");
const gameButtons = document.querySelector('.game-buttons');

// when a round is played
// append what player and computer chose as a new div to history box

function updateScores() {
    humanScoreBoard.textContent = humanScore.toString();
    computerScoreBoard.textContent = computerScore.toString();
}

function updateHistory(history) {
    let newHistory = document.createElement("div");
    let newHistoryText = `${history}`
    newHistory.textContent = newHistoryText;
    historyBox.appendChild(newHistory);
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    switch (choice) {
        case 0:
            return choice = 'rock';
        case 1:
            return choice = 'paper';
        case 2:
            return choice = 'scissors'
    }
}

function displayWinner(winner) {
    let container = document.querySelector(".container");
    let winningDisplay = document.createElement("div");
    winningDisplay.textContent = `${winner} has won the game`;
    winningDisplay.setAttribute("id", "winner");
    container.insertBefore(winningDisplay, gameButtons);
}

function playRound(computerChoice, humanChoice) {
    let newHistory = document.createElement("div");
    let gameHistory = `Computer chose ${computerChoice} and You chose ${humanChoice}`
    newHistory.textContent = gameHistory;
    historyBox.appendChild(newHistory);
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

gameButtons.addEventListener('click', (event) => {
    let target = event.target;
    const winner = document.getElementById('winner');
    if (humanScore < 5 && computerScore < 5) {
        switch (target.id) {
            case 'rock':
                updateHistory(playRound(getComputerChoice(), 'rock'));
                break;
            case 'paper':
                updateHistory(playRound(getComputerChoice(), 'paper'));
                break;
            case 'scissors':
                updateHistory(playRound(getComputerChoice(), 'scissors'));
                break;
        }

        updateScores()
    } if (winner === null) {
        if (humanScore == 5) {
            displayWinner('Human')
        } else if (computerScore == 5)
            displayWinner('Computer')
    }
});
