let choices = ['rock', 'paper', 'scissors'];
let computerChoice = choices[Math.floor(Math.random() * choices.length)];
console.log(computerChoice);
let userChoice = prompt('Make your move (rock, paper, or scissors): ');