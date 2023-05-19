function getComputerChoice(){
    let action = ["rock", "paper", "scissors"];
    return action [Math.floor(Math.random() * action.length)];
}

function playRound (playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection) 
        return "It's a tie!";

    else if(playerSelection === "rock" && computerSelection === "scissors")
        return "You win! Rock beats Scissors";
    else if(playerSelection === "paper" && computerSelection === "rock")
        return "You win! Paper beats Rock"; 
    else if(playerSelection === "scissors" && computerSelection === "paper")
        return "You win! Scissors beats Paper";

    else if(playerSelection === "scissors" && computerSelection === "rock")
        return "You lose! Rock beats Scissors";
    else if(playerSelection === "rock" && computerSelection === "paper")
        return "You lose! Paper beats Rock";
    else if(playerSelection === "paper" && computerSelection === "scissors")
        return "You lose! Scissors beats paper";
}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    for(let i = 0; i < 5; i++)
    {
        let playerSelection = prompt("Choose carefully: 'rock, paper, scissors'");
        let computerSelection = getComputerChoice();
        let round_result = playRound(playerSelection, computerSelection);

        console.log(playerSelection, "- You");
        console.log(computerSelection, "- Bot");
        console.log(round_result);

        if(round_result[0] == "W"){
            ++playerWins;
        }
            else if(round_result[0] == "L"){
            ++computerWins;
        }
    }
    if(playerWins > computerWins){
        console.log("You win the game!");
    }
        else if(playerWins < computerWins){
            console.log("You Lose the game!");
    }
    else{
        console.log("The game is a draw!");
    }
}

game ();

/*
console.log (getComputerChoice(["Rock", "Paper", "Scissors"]));
*/