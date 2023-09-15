// generating randomized computer choice
function getComputerChoice(){
    let action = ["Rock", "Paper", "Scissors"];
    return action [Math.floor(Math.random() * action.length)]; 
}

// declaring variables for future use 
let computerSelection = getComputerChoice();
let computerChoice;

let playerWins;
let computerWins; 
playerWins = 0;
computerWins = 0;

let message; 

// round played between player and computer
function playRound (playerSelection, computerSelection){

    computerChoice = computerSelection; 

    if (playerSelection === computerSelection){
    message = "It's a tie!" 

}   else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        message = "You win! Rock beats Scissors";
        playerWins++;
}   else if(playerSelection === "Paper" && computerSelection === "Rock"){
        message = "You win! Paper beats Rock";
        playerWins++;
}   else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        message = "You win! Scissors beats Paper";
        playerWins++;

}   else if(playerSelection === "Scissors" && computerSelection === "Rock"){
        message = "You lose! Rock beats Scissors";
        computerWins++;
}   else if(playerSelection === "Rock" && computerSelection === "Paper"){
        message = "You lose! Paper beats Rock";
        computerWins++;
}   else if(playerSelection === "Paper" && computerSelection === "Scissors"){
        message = "You lose! Scissors beats paper";
        computerWins++; 

}   return message;
}

// ui and console.log game results 
const rock = document.querySelector("#rock"); 
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const gameMessage = document.querySelector(".game-message");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score"); 

rock.addEventListener('click', () => {
    playRound('Rock', getComputerChoice());
    gameMessage.textContent = message; 
    playerScore.textContent = `Player Score: ${playerWins}`;
    computerScore.textContent = `Computer Score: ${computerWins}`; 
    console.log ('Player Selected: Rock');
    console.log ('Computer Selected:', computerChoice);
    console.log ('Result:', `${message}`); 
    console.log ('Player Score:', `${playerWins}`, '     Computer Score:', `${computerWins}`);
    console.log ("--------------------------------------")
    firstTo5();
    buttonDisable();
});

paper.addEventListener('click', () => {
    playRound('Paper', getComputerChoice());
    gameMessage.textContent = message;
    playerScore.textContent = `Player Score: ${playerWins}`; 
    computerScore.textContent = `Computer Score: ${computerWins}`;
    console.log ('Player Selected: Paper');
    console.log ('Computer Selected:', computerChoice);
    console.log ('Result:', `${message}`); 
    console.log ('Player Score:', `${playerWins}`, '     Computer Score:', `${computerWins}`);
    console.log ("--------------------------------------")
    firstTo5();
    buttonDisable();
});

scissors.addEventListener('click', () => {
    playRound('Scissors', getComputerChoice());
    gameMessage.textContent = message; 
    playerScore.textContent = `Player Score: ${playerWins}`;
    computerScore.textContent = `Computer Score: ${computerWins}`;
    console.log ('Player Selected: Scissors');
    console.log ('Computer Selected:', computerChoice);
    console.log ('Result:', `${message}`); 
    console.log ('Player Score:', `${playerWins}`, '     Computer Score:', `${computerWins}`);
    console.log ("--------------------------------------")
    firstTo5(); 
    buttonDisable();
});

// first to 5 wins, wins
function firstTo5 () {
    if (playerWins === 5) {
        gameMessage.textContent = 'Player Wins!';
        console.log ('Player Wins!');
    }

    else if (computerWins === 5) {
        gameMessage.textContent = 'Computer Wins!';
        console.log ('Computer Wins!');
    }
} 

// disable buttons once a player has reached 5 wins 
function buttonDisable () {
    if (playerWins === 5 || computerWins === 5) {
        document.getElementById("rock").disabled = true; 
        document.getElementById("paper").disabled = true; 
        document.getElementById("scissors").disabled = true; 
    }
}

// page reload option once game is over or user wants to reset game
const resetButton = document.querySelector("#reset");

resetButton.addEventListener('click',() => location.reload());
