function getComputerChoice() {
    let options = ["rock","paper","scissors"]
    let computerSelection = Math.floor(Math.random() * options.length);
    return computerSelection;
}

function getPlayerChoice() {
    console.log("Please select 'rock', 'paper', or 'scissors'");
    let playerSelection = prompt("Please choose one of the options: ");
    return playerSelection;
}

// Define array of possible options for computer
let computerSelection, playerSelection;
computerSelection = getComputerChoice();
playerSelection = getPlayerChoice();

