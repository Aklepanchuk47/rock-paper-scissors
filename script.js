function getPlayerChoice(){
    let playerInput = prompt("Choose carefully: 'rock, paper, scissors'");
    return playerInput.toLowerCase();  
}

function getComputerChoice(){
    let action = ["rock", "paper", "scissors"];
    return action [Math.floor(Math.random() * action.length)]; 
}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

function playRound (playerSelection, computerSelection){

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    if(playerSelection === computerSelection){ 
        alert ("It's a tie!");
        return "It's a tie!";

}   else if(playerSelection === "rock" && computerSelection === "scissors"){
        alert ("You win! Rock beats Scissors");
        return "playerWin";
}   else if(playerSelection === "paper" && computerSelection === "rock"){
        alert ("You win! Paper beats Rock");
        return "playerWin";
}   else if(playerSelection === "scissors" && computerSelection === "paper"){
        alert ("You win! Scissors beats Paper");
        return "playerWin";

}   else if(playerSelection === "scissors" && computerSelection === "rock"){
        alert ("You lose! Rock beats Scissors");
        return "computerWin";
}   else if(playerSelection === "rock" && computerSelection === "paper"){
        alert ("You lose! Paper beats Rock");
        return "computerWin";
}    else if(playerSelection === "paper" && computerSelection === "scissors"){
        alert ("You lose! Scissors beats paper");
        return "computerWin";    
}
}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    for(let i = 0; i < 5; i++) 
    {
      
        let round_result = playRound();

        console.log(playerSelection, "- You");
        console.log(computerSelection, "- Bot");
        console.log(round_result);

        if(round_result == "playerWin"){
            playerWins++;
        }
            else if(round_result == "computerWin"){
            computerWins++;
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
