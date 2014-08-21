// Global variables to keep score.
var wins = 0, losses = 0, draws = 0;

// Expects a maximum and minimum number.
// Returns a random number between and including the max and
// minimum numbers.
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// function informPlayer takes three arguments:
// First is a string with the winning condition: win, lose, or draw.
// Second is a number representing the player's choice: 1 for rock, 2 for paper, or 3 for scissors
// Third is a number representing the computer's choice: 1 for rock, 2 for paper, or 3 for scissors
function informPlayer(type, player, computer) {
	
		// Create a variable called name which is an array.  The first value should be "" to 
		// represent the 0th element (which we don't care about).  The next three should represent the 
		// names of the choices mentioned above.
    	var name = new Array();
		name[0] = "";
		name[1] = "rock";
		name[2] = "paper";
		name[3] = "scissors";

		
		// Create an if statement representing the win condition.  This should raise an alert box fn 
		// alert(...) and tell the user that it was a win for the player, the player's choice in 
		// words (use the name array created above to do this) and finally say what was the 
		// computer's choice.
		if(type == "win"){
			alert("You won! \n Your choice: " + name[player] + ". \n Computer's choice: " + name[computer] + ".");
		}

		// Create an if statement representing the lose condition.  This should raise an alert box
		// alert(...) and tell the user that it was a loss for the player, the player's choice in 
		// words (again, use the name array created above to do this) and finally say what was 
		// the computer's choice.
		if(type == "lose"){
			alert("You lost! \n Your choice: " + name[player] + ". \n Computer's choice: " + name[computer] + ".");
		}

		// Create an if statement representing the draw condition.  This should raise an alert box
		// alert(...) and tell the user that it was a draw and that both the player and the computer
		// made the choice of ...(again, use the name array to specify the choice in words).
		if(type == "draw"){
			alert("It was a draw! \n You and the computer both chose: " + name[player] + ".");
		}
}


// function updateScore expects the result as a string: "win", "lose", or "draw".
// The fn will increment the count by one and update the scoreboard
function updateScore(result) {

  // Make references to the scoreboard HTML elements with ids of win, lose,  
  // and draw so we can easily update the appropriate scores on the page.
  // This will make more sense later after we talk about the DOM...
  var winDisplay = document.getElementById("win"),
    loseDisplay = document.getElementById("lose"),
    drawDisplay = document.getElementById("draw");

		// Create an if statement to handle the updating if the result is a "win"
		// Should increment the global var wins (set at the beginning) by 1 and 
		// then set the winDisplay.innerHTML to the value of wins var.
		if(result == "win"){
			wins = wins + 1;
			winDisplay.innerHTML = wins;
		}
 
		// Create an if statement to handle the updating if the result is "lose"
		// Should increment the global var losses (set at the beginning) by 1 and 
		// then set the loseDisplay.innerHTML to the value of losses var.
		if(result == "lose"){
			losses = losses + 1;
			loseDisplay.innerHTML = losses;
		}		
		
		
		
		
		// Create an if statement to handle the updating if the result is a "draw"
		// Should increment the global var draws (set at the beginning) by 1 and 
		// then set the drawDisplay.innerHTML to the value of draws var.
		if(result == "draw"){
			draws = draws + 1;
			drawDisplay.innerHTML = draws;
		}
}

// function throwHand expects a number of 1 for rock, 2 for paper, or 3 for scissors.
// This fn is called using an event handler on the html page.
function throwHand(player) {
	
  // The computer var gets and holds a random number 1, 2, or 3;
  // where 1 = rock, 2 = paper, 3 = scissors.  Use the randomInt(min, max)
  // method provided above to get a number from 1 to 3 and assign it to computer.
  var computer = randomInt(1, 3);	
  
  // Next, we find out if the player won, lost, or if the game
  // ended in a draw.  Let's deal with the draw case first...
  
	// Does the player number passed into the method match the computer's choice?
  // Hint: use an if statement to test this and execute the following if true:

		// if so, run the updateScore method, passing along "draw" in this case
		// then run the informPlayer method, passing along the "draw" result, along
		// with the player's choice (number) and computer's choice (number)
		if(player == computer){
			updateScore("draw");
			informPlayer("draw", player, computer);
		}
		
		
  // ROCK CONDITIONS
  // Win: player's rock (1) vs comp's scissors (3)
  //   if condition met, run the updateScore method and 
  //   then the informPlayer method with proper values
	if(player == 1 && computer == 3){
		updateScore("win");
		informPlayer("win", player, computer);
	}	
	
	
	
  // Lose: player's rock (1) vs comp's paper (2)
  //   if condition met, run the updateScore method and 
  //   then the informPlayer method with proper values
	if(player == 1 && computer == 2){
		updateScore("lose");
		informPlayer("lose", player, computer);
	}	
	
	
  
  // PAPER CONDITIONS
  // Win: player's paper (2) vs comp's rock (1)
  //   if condition met, run the updateScore method and 
  //   then the informPlayer method with proper values
	if(player == 2 && computer == 1){
		updateScore("win");
		informPlayer("win", player, computer);
	}		
	
	
  
  // Lose: player's paper (2) vs comp's scissors (3)
  //   if condition met, run the updateScore method and 
  //   then the informPlayer method with proper values
	if(player == 2 && computer == 2){
		updateScore("lose");
		informPlayer("lose", player, computer);
	}	
	
	
  
  // SCISSOR CONDITIONS
  // Win: player's scissors (3) vs comp's paper (2)
  //   if condition met, run the updateScore method and 
  //   then the informPlayer method with proper values
	if(player == 3 && computer == 2){
		updateScore("win");
		informPlayer("win", player, computer);
	}		
	
	
  
  // Lose: player's scissor (3) vs comp's rock (1)
  //   if condition met, run the updateScore method and 
  //   then the informPlayer method with proper values
	if(player == 3 && computer == 1){
		updateScore("lose");
		informPlayer("lose", player, computer);
	}	
	
	
}