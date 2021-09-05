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
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Make your move (rock, paper, or scissors): ').toLowerCase();
        const computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);

        console.log('Player Selection: ' + playerSelection);
        console.log('Computer Selection: ' + computerSelection);
        console.log(round)

        if (round.includes('lose')) {
            computerWins+=1;
        } else if (round.includes('win')) {
            userWins+=1;
        }
    }

    if (userWins > computerWins) {
        return 'You win the game!';
    } else if (userWins < computerWins) {
        return 'You lose the game!';
    } else {
        return 'You tied the game!';
    }
}



console.log(game())