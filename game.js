function getComputerChoice() {
    let options = ["rock","paper","scissors"]
    let computerSelection = Math.floor(Math.random() * options.length);
    return computerSelection;
}

function getPlayerChoice() {
    console.log("Please select 'rock', 'paper', or 'scissors'");
    let playerSelection = prompt("Please choose one of the options: ");
    playerSelection = playerSelection.toLowerCase(); // Convert user input to lowercase for comparison
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("TIE! Rematch.");
    }

    else if (playerSelection === "rock" && computerSelection === "scissors" || 
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper"){
        console.log("The player wins, ${playerSelection} beats ${computerSelection}!");
    }

    else if (playerSelection === "scissors" && computerSelection === "rock" || 
    playerSelection === "rock" && computerSelection === "paper" ||
    playerSelection === "paper" && computerSelection === "scissors"){
        console.log("The computer wins, ${computerSelection} beats ${playerSelection}!");
    }
}

// Define array of possible options for computer
let computerSelection, playerSelection;
computerSelection = getComputerChoice();
playerSelection = getPlayerChoice();
console.log("You chose ${getPlayerChoice}");

// Check if player or computer won
playRound(playerSelection, computerSelection);

