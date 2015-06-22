////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var playerMove = Math();
    if (playerMove < 0.33) {
        return "rock";
    } else if (playerMove < 0.66) {
        return "paper";
    } else {
        return "scissors";

}

function getComputerMove(move) {
    var computerMove = Math();
    if (computerMove < 0.33) {
        return "rock";
    } else if (computerMove < 0.66) {
        return "paper";
    } else {
        return "scissors";
}

function getWinner(playerMove,computerMove) {
    var winner;
    var playerMove
    if (playerMove = "rock") {
        if (computerMove = "rock") 
            return (getWinner(playerMove, "rock")) = "tie";
        else if (computerMove = "paper")
                return (getWinner(playerMove, "paper")) = "computer";
        else (computerMove = "paper")
            return (getWinner(playerMove, "scissors")) = "player";

    } else if (playerMove = "paper") {
                if (computerMove = "paper")
                    return (getWinner(playerMove, "paper")) = "tie";
                if (computerMove = "scissors")
                    return (getWinner(playerMove, "paper")) = "computer";
                if (computerMove = "rock")
                    return (getWinner(playerMove, "paper")) = "player";

    } else (playerMove = "scissors") {
            if (computerMove = "scissors")
                return (getWinner(playerMove, "scissors")) = "tie";
            if (computerMove = "scissors")
                return (getWinner(playerMove, "rock")) = "computer";
            if (computerMove = "paper")
                return (getWinner(playerMove, "scissors")) = "player";

    }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
       console.log( 'Player chose' + playerMove + 'while computer chose' + computerMove); 
       console.log( 'The score is currently' + playerWins + 'to' computerWins + '\n');
    return [playerWins, computerWins];
