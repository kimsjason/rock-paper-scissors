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

// This function prompts the user to play five rounds of rock, paper, scissors
function game() {
    let userWins = 0;
    let computerWins = 0;

    let rock = document.querySelector('#rock');
    let paper = document.querySelector('#paper');
    let scissors = document.querySelector('#scissors');
    let playerSelection;
    rock.addEventListener('click', () => {
        playerSelection = 'rock';
        const computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);
        console.log('Player Selection: ' + playerSelection);
        console.log('Computer Selection: ' + computerSelection);
        console.log(round)
    });
    paper.addEventListener('click', () => {
        playerSelection = 'paper';
        const computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);
        console.log('Player Selection: ' + playerSelection);
        console.log('Computer Selection: ' + computerSelection);
        console.log(round)
    });
    scissors.addEventListener('click', () => {
        playerSelection = 'scissors';
        const computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);
        console.log('Player Selection: ' + playerSelection);
        console.log('Computer Selection: ' + computerSelection);
        console.log(round)
    });


    
    if (userWins > computerWins) {
        return 'You win the game!';
    } else if (userWins < computerWins) {
        return 'You lose the game!';
    } else {
        return 'You tied the game!';
    }
}



console.log(game())