// Display welcome message
const welcome = "Welcome to the Rock Paper Scissors game!";
console.log(welcome);

// Rules for the game...
console.log("Rules of the game: Choose Rock, Paper, or Scissors to compete against the computer.");
console.log("Rock beats Scissors, Scissors beats Paper, and Paper beats Rock.");
console.log("The first player to win a highest number of rounds is the winner.");
console.log("Let's begin!");

//Generate Computer's choice 
function generateComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    switch(randomNum) {
        case 0:
            return 'Rock';
        case 1: 
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

// Get player's choice
function getPlayerChoice() {
    let choice = prompt("Please choose: Rock, Paper, or Scissors.");
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
        return choice;
    } else {
        alert('Invalid response please choose: Rock, Paper or Scissors');
        return getPlayerChoice();
    }
}
// Function to play a single round of rock, paper scissors and determine the winner
function playRound(playerChoice, computerChoice, scores) {
    const playerChoiceLower = playerChoice.toLowerCase();
    const computerChoiceLower = computerChoice.toLowerCase();
    // Determine the winner
    let result;
    if (playerChoiceLower === computerChoiceLower) {
        result = "It's a tie!";
    } else if (
        (playerChoiceLower === 'rock' && computerChoiceLower === 'scissors') ||
        (playerChoiceLower === 'paper' && computerChoiceLower === 'rock') ||
        (playerChoiceLower === 'scissors' && computerChoiceLower === 'paper')
    ) {
        result = 'Player wins!';
        scores.player++;
    } else {
        result = 'Computer wins!';
        scores.computer++
    }
    return result;
}
// function to play a five round game and store the scores and declare the winner of the game
function playGame() {
    // Initialize scores
    let scores = { player: 0, computer: 0};

    // Play 5 rounds
    for (let round = 1; round <= 5; round++) {
        console.log("\nRound " + round);
        const playerChoice = getPlayerChoice();
        const computerChoice = generateComputerChoice();
        const result = playRound(playerChoice, computerChoice, scores);
        console.log("Player's choice: " + playerChoice);
        console.log("Computer's choice: " + computerChoice);
        console.log("Result: " + result);
    }

    // Display final scores
    console.log("\nFinal Scores:");
    console.log("Player: " + scores.player);
    console.log("Computer: " + scores.computer);

    // Determine the winner of the game
    if (scores.player > scores.computer) {
        console.log("Player wins the game!");
    } else if (scores.computer > scores.player) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie!");
    }
}

// Start the game
playGame();