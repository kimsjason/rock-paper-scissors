// This function randomly selects rock, paper, or scissors for the computer player
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// This function determines if the user or computer wins the round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            return 'You tied!';
        } else if (computerSelection == 'paper') {
            return 'You lose! Paper beats rock.'
        } else if (computerSelection == 'scissors') {
            return 'You win! Rock beats scissors.';
        }
    } else if (playerSelection == 'paper') {
            if (computerSelection == 'paper') {
                return 'You tied!';
            } else if (computerSelection == 'scissors') {
                return 'You lose! Scissors beats paper.';
            } else if (computerSelection == 'rock') {
                return 'You win! Paper beats rock.';
            }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'scissors') {
            return 'You tied!';
        } else if (computerSelection == 'rock') {
            return 'You lose! Rock beats scissors.'
        } else if (computerSelection == 'paper') {
            return 'You win! Scissors beats paper.';
        }
    }
}

function displayResults(playerSelection, computerSelection, round) {
    playerSelectionParagraph = document.querySelector('#player-selection');
    playerScoreParagraph = document.querySelector('#player-score');
    computerSelectionParagraph = document.querySelector('#computer-selection');
    computerScoreParagraph = document.querySelector('#computer-score');
    outcomeParagraph = document.querySelector('#outcome');
    playerSelectionParagraph.textContent = `Your Selection: ${playerSelection}`;
    playerScoreParagraph.textContent = `Your Score: ${userWins}`;
    computerSelectionParagraph.textContent = `Computer Selection: ${computerSelection}`;
    computerScoreParagraph.textContent = `Computer Score: ${computerWins}`;
    outcomeParagraph.textContent = round;
}

function addPoint(round, userWins, computerWins) {
    if (round.includes('lose')) {
        computerWins+=1;
        console.log('Computer Wins: ' + computerWins);
    } else if (round.includes('win')) {
        userWins+=1;
        console.log('User Wins: ' + userWins);
    }
    return {userWins, computerWins};
}

function checkWinner (userWins, computerWins) {
    let h2 = document.createElement('h2');
    if (userWins == 5) {
        h2.textContent = 'You win the game!';
        results.appendChild(h2);
    } else if (computerWins == 5) {
        h2.textContent = 'The computer wins the game!';
        results.appendChild(h2);
    } else return;
}

function clickFunction(playerSelection) {
    const computerSelection = computerPlay();
    let round = playRound(playerSelection, computerSelection);
    let wins = addPoint(round, userWins, computerWins);
    userWins = wins.userWins;
    computerWins = wins.computerWins;
    checkWinner(userWins, computerWins);
    displayResults(playerSelection, computerSelection, round);
}

let userWins = 0;
let computerWins = 0;

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let results = document.querySelector('#results');

rock.addEventListener('click', () => {
    const playerSelection = 'rock';
    clickFunction(playerSelection);
});
paper.addEventListener('click', () => {
    const playerSelection = 'paper';
    clickFunction(playerSelection);
});
scissors.addEventListener('click', () => {
    const playerSelection = 'scissors';
    clickFunction(playerSelection);
});