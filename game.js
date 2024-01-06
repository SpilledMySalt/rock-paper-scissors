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

    // Choosing subtext to change to results of game
    const gameStatus = document.querySelector("#status");

    if (playerSelection == computerSelection) {
        gameStatus.textContent = "TIE!";
    }

    else if ((playerSelection == "rock" && computerSelection == "scissors") || 
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")){
        gameStatus.textContent = "The player wins, "+playerSelection+" beats "+computerSelection+"!";
    }

    else if ((playerSelection == "scissors" && computerSelection == "rock") || 
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors")){
        gameStatus.textContent = "The computer wins, "+computerSelection+" beats "+playerSelection+"!";
    }
}

function game() {
    
    // Define variables
    let computerSelection, playerSelection;
 

    //console.log("Round "+(i + 1)+":");

    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    console.log("You chose "+playerSelection);
    console.log("The computer chose "+computerSelection);

    playRound(playerSelection, computerSelection);
   
}


const buttons = document.querySelectorAll(".buttonContainer button");

// Add event listeners to each button
buttons.forEach((button) => {

    // Pass button ID and get computer selection into playRound
    button.addEventListener("click", () => {
        playRound(String(button.id), getComputerChoice());
    });
});




