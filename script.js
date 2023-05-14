function getComputerChoice () {
    const action = ["Rock", "Paper", "Scissors"];
    return action[Math.floor(Math.random() * action.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) 
        return "It's a tie! You both picked ${playerSelection}";
    else if (playerSelection === "Rock" && computerSelection === "Scissors")
        return "You win! Rock beats Scissors";
    else if (playerSelection === "Paper" && computerSelection === "Rock")
        return "You win! Paper beats Rock"; 
    else if (playerSelection === "Scissors" && computerSelection === "Paper")
        return "You win! Scissors beats Paper";
    else 
        return "You lose! ${computerSelection} beats ${playerSelection}";
}

const playerSelection = "Paper"; 
const computerSelection = getComputerChoice();
console.log (playRound(playerSelection, computerSelection));

/*
console.log (getComputerChoice(["Rock", "Paper", "Scissors"]));
*/
