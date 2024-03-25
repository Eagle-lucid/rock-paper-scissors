// Display welcome message
const welcome = "Welcome to the Rock Paper Scissors game!";
console.log(welcome);

// Rules for the game...
console.log("Rules of the game: Choose Rock, Paper, or Scissors to compete against the computer.");
console.log("Rock beats Scissors, Scissors beats Paper, and Paper beats Rock.");
console.log("The first player to win a highest number of rounds is the winner.");
console.log("Let's begin!");
// Get player's choice
const playerChoice = getPlayerChoice();
function getPlayerChoice() {
    let choice;
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
   return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
   } else {
    return choice;
    }
}

// generate choice for computer
const computerChoice = generateComputerChoice();
function generateComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
    case 0:
    return 'Rock';
    break;
    case 1:
    return 'Paper';
    break;
    case 2:
    return 'Scissors';
    break;
    }
}
// function to play a single round of rock, paper scissors.
function playRound(playerChoice, computerChoice, scores) {
    // Convert player and computer choice to lower case to determine the result
    const playerChoiceLower = playerChoice.toLowerCase();
    const computerChoiceLower = computerChoice.toLowerCase();
    // Determine the winner
    let result;
    if (playerChoiceLower === computerChoiceLower) {
    result = "It\'s a tie!";
    } else if (
    (playerChoiceLower === 'rock' && computerChoiceLower === 'scissors') ||
    (playerChoiceLower === 'paper' && computerChoiceLower === 'rock') ||
    (playerChoiceLower === 'scissors' && computerChoiceLower === 'paper')
    ) {
    result = 'Player wins!';
    scores.player++;
    } else {
    result = 'Computer wins!';
    scores.computer++;
    }
    return result;
}
// Declare a new function to play a five round game
function playGame() {
    // Set scores
    let scores = {player: 0, computer: 0};

    for (round = 1; round <= 5; round++) {
    console.log('\nRound:' + round);
    const playerChoice = prompt("Please choose: Rock, Paper or Scissors.");
    const computerChoice = generateComputerChoice();
    const result = playRound(playerChoice, computerChoice, scores);
    console.log('Player\'s choice: ' + playerChoice);
    console.log('Computer\'s choice: ' + computerChoice);
    console.log('Result: ' + result);
    }
    // Display final scores
    console.log('\nFinal score:');
    console.log('Player: ' + scores.player);
    console.log('Computer: ' + scores.computer);
    // Determine the winner
    if (scores.player > scores.computer) {
    console.log('Player wins the game!');
    } else if (scores.computer > scores.player) {
    console.log('Computer wins the game!');
    } else {
    console.log('It\'s a tie!');
    }
}
// start game
playGame();