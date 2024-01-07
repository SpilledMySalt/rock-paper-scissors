function getComputerChoice() {
    let options = ["rock","paper","scissors"]
    let num = Math.floor(Math.random() * options.length);
    return options[num];
}

function getPlayerChoice() {
    let playerSelection = prompt("Please choose one of the options: ");
    playerSelection = playerSelection.toLowerCase(); // Convert user input to lowercase for comparison
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {

    // Choosing subtext to change to results of game
    const gameStatus = document.querySelector("#status");
    const results = document.querySelector("#explanation")

    if (playerSelection == computerSelection) {
        gameStatus.textContent = "TIE!";
    }

    else if ((playerSelection == "rock" && computerSelection == "scissors") || 
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")){
        gameStatus.textContent = "The player wins";
        results.textContent = playerSelection+" beats "+computerSelection+"!";
        playerScore++;
    }

    else if ((playerSelection == "scissors" && computerSelection == "rock") || 
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors")){
        gameStatus.textContent = "The computer wins";
        results.textContent = computerSelection+" beats "+playerSelection+"!";
        computerScore++;
    }

    updateScore();
   
}

function updateScore() {

    // Update both scores after most recent calculations
    const playerStatus = document.querySelector("#playerScore");
    const computerStatus = document.querySelector("#computerScore");

    if (document.querySelector("#status").textContent == "The player wins"){
        playerStatus.textContent = String(playerScore);
    }

    else if (document.querySelector("#status").textContent == "The computer wins"){
        computerStatus.textContent = String(computerScore);
    }

    // Wow, note to self to learn to debug - the two consts were down here thus not updating
    // despite the rest of the logic being sound. DUUUUUUUUDE omlllll.

    if (playerScore == 5 || computerScore == 5){
        window.alert("Game is over!");
        playerScore = 0;
        computerScore = 0;
        playerStatus.textContent = String(playerScore);
        computerStatus.textContent = String(computerScore);
    } // Fix later, not quite great for user understanding who wins

}

let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll(".buttonContainer button");

// Add event listeners to each button
buttons.forEach((button) => {

    // Pass button ID and get computer selection into playRound
    button.addEventListener("click", () => {
        playRound(String(button.id), getComputerChoice());
    });
});

// create playGame function to keep track of scores




