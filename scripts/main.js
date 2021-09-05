let choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

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
const playerSelection = prompt('Make your move (rock, paper, or scissors): ');
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));