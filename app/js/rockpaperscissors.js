////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
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
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return (move || getInput());
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return (move || randomPlay());
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
	if (playerMove === computerMove) {
		winner = 'tie';
	} else if (playerMove === 'rock') {
		if (computerMove === 'paper') {
			winner = 'computer';  //paper covers rock
		} else {
			winner = 'player';   //rock smashes scissors 
		}
	} else if (playerMove === 'paper') {
		if (computerMove === 'scissors') {
			winner = 'computer';  //scissors cut paper
		} else {
			winner = 'player';   //paper covers rock
		}
		} else if (playerMove === 'scissors') {
		if (computerMove === 'rock') {
			winner = 'computer';  //rock smashes scissors
		} else {
			winner = 'player';   //scissors cut paper
		}
	}
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
	var playerMove;
	var computerMove;
	var roundWinner;
		
	while (playerWins < 5 && computerWins < 5) {
		playerMove = getPlayerMove(null);
		computerMove = getComputerMove(null);
		roundWinner = getWinner (playerMove, computerMove);
		if (roundWinner == "player") {
			playerWins++;
		}
		if (roundWinner == "computer") {
			computerWins++;
		}
		if (roundWinner == "tie") {
			// don't change the score
		}
			
		console.log("Player chose " + playerMove + " while computer chose " + computerMove + ".");
		console.log("This round's winner:  " + roundWinner);
		console.log("The score is " + playerWins + " to " + computerWins + ".\n");
	}
	
    return [playerWins, computerWins];
}

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    console.log("  Game to " + x);
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won x times.
	var playerMove;
	var computerMove;
	var roundWinner;
		
	while (playerWins < x && computerWins < x) {
		playerMove = getPlayerMove(null);
		computerMove = getComputerMove(null);
		roundWinner = getWinner (playerMove, computerMove);
		if (roundWinner == "player") {
			playerWins++;
		}
		if (roundWinner == "computer") {
			computerWins++;
		}
		if (roundWinner == "tie") {
			// don't change the score
		}
			
		console.log("Player chose " + playerMove + " while computer chose " + computerMove + ".");
		console.log("This round's winner:  " + roundWinner);
		console.log("The score is " + playerWins + " to " + computerWins + ".\n");
	}
	
    return [playerWins, computerWins];
}


function play() {
	var playerWins;
	var computerWins;
//    [playerWins, computerWins] = playToFive();
    [playerWins, computerWins] = playTo(3);
    console.log ("\nFinal score:\nPlayer:  "+playerWins+"\nComputer:  "+computerWins);
    
}