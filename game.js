function getComputerChoice() {
    let options = ["rock","paper","scissors"]
    let num = Math.floor(Math.random() * options.length);
    return options[num];
}

function getPlayerChoice() {
    console.log("Please select 'rock', 'paper', or 'scissors'");
    let playerSelection = prompt("Please choose one of the options: ");
    playerSelection = playerSelection.toLowerCase(); // Convert user input to lowercase for comparison
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("TIE! Rematch.");
    }

    else if ((playerSelection == "rock" && computerSelection == "scissors") || 
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")){
        console.log("The player wins, "+playerSelection+" beats "+computerSelection+"!");
    }

    else if ((playerSelection == "scissors" && computerSelection == "rock") || 
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors")){
        console.log("The computer wins, "+computerSelection+" beats "+playerSelection+"!");
    }
}

function game() {
    
    // Define variables
    let computerSelection, playerSelection;
    for (let i = 0; i < 5; i++) {

        console.log("Round "+(i + 1)+":");

        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice();
        console.log("You chose "+playerSelection);
        console.log("The computer chose "+computerSelection);

        playRound(playerSelection, computerSelection);
    } // end for loop to iterate through game 5 times
}

// Call game function which repeats five times
game();

