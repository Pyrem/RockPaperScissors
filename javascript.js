function computerPlay(){
    let moves = ["Rock","Paper","Scissors"];
    let choiceIndex = Math.floor(Math.random()*moves.length);
    return moves[choiceIndex];
}

function playRound(playerInput,computerInput){
    if (playerInput === computerInput){
        return "Tie";
    }else if (playerInput === "Rock" && computerInput === "Paper"){
        return "Lose";
    }else if (playerInput === "Paper" && computerInput === "Scissors"){
        return "Lose";
    }else if (playerInput === "Scissors" && computerInput === "Rock"){
        return "Lose";
    }else{
        return "Win";
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let round = 0;
    while (round < 5){
        playerInput = prompt("Enter your choice (Rock,Paper,Scissors)");
        computerInput = computerPlay();
        if (!playerInput){
            console.log("Please enter Rock, Paper, or Scissors");
            continue;
        }
        playerInput = playerInput.toLowerCase();
        playerInput = playerInput.charAt(0).toUpperCase() + playerInput.slice(1);
        if (!(playerInput === "Rock" || playerInput === "Scissors" || playerInput === "Paper")){
            console.log("Please enter Rock, Paper, or Scissors");
            continue;
        }
        result = playRound(playerInput,computerInput);
        if (result === "Win"){
            playerScore++;
            console.log(`You Win! ${playerInput} beats ${computerInput}`);
        }
        else if (result === "Lose"){
            computerScore++;
            console.log(`You Lose! ${computerInput} beats ${playerInput}`);
        }
        else{
            console.log(`Tie! You both picked ${playerInput}`);
        }
        round++;
    }
    reportWinner(playerScore,computerScore);
}
function reportWinner(playerScore,computerScore){
    if (playerScore > computerScore){
        console.log("Congrats! You Win!");
    }else if (playerScore < computerScore){
        console.log("You Lose!");
    }
    else{
        console.log("You Tied!");
    }
}