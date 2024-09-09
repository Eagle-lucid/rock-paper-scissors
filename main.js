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
// Function to play a single round of rock, paper scissors and determine the winner
function playRound(playerChoice, computerChoice, scores) {
    const playerChoiceLower = playerChoice.toLowerCase();
    const computerChoiceLower = computerChoice.toLowerCase();

    // Validate the player's choice
    if (!validChoices.includes(playerChoice)) {
        return 'Invalid choice!';
    }
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
    // Initialize scores
    let scores = { player: 0, computer: 0};
    let round = 1;
    const maxRounds = 6;


    //Get DOM elements
    const playerScoreElement = document.getElementById('playerScore');
    const computerScoreElement = document.getElementById('computerScore');
    const roundResultElement = document.getElementById('roundResult');

    //valid choice
    const validChoices = ['Rock', 'Paper', 'Scissors'];
    
    //Function to update the scores on the page
    function updateScores() {
        playerScoreElement.innerHTML = scores.player;
        computerScoreElement.innerHTML = scores.computer;
    }

    //Function to handle an icon click

    function handleChoice(playerChoice) {
    if (!validChoices.includes(playerChoice)) {
        roundResultElement.innerHTML = 'Invalid choice!';
        return;
    }

     const computerChoice = generateComputerChoice();
     const result = playRound(playerChoice, computerChoice, scores);
     updateScores();

     roundResultElement.innerHTML = `Round ${round}: ${result}`;
     round++;
     checkEndOfGame();
    }
//Event listeners for the game icons
document.getElementById('rock').addEventListener('click', () => handleChoice('Rock'));
document.getElementById('paper').addEventListener('click', () => handleChoice('Paper'));
document.getElementById('scissors').addEventListener('click', () => handleChoice('Scissors'));

//Check for the game and redirect to result page
function checkEndOfGame() {
    if (round > maxRounds) {
        const params = new URLSearchParams({
            playerScore: scores.player,
            computerScore: scores.computer,
            result: scores.player > scores.computer ? 'Player wins the game!' :
                    scores.computer > scores.player ? 'Computer wins the game!' :
                    "It's a tie!"
        });
        window.location.href = `result.html?${params.toString()}`;
    } 
}