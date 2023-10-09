// Function to generate a random number between 1 and 6.

function rollDice() {
    // Return a random number between 1 and 6.
    return Math.floor(Math.random() * 6) + 1;
    }


// Function that implements the main game.
    function playGame() {
    var die1 = rollDice();
    var die2 = rollDice();

    // Calculate the sum of the two dice.
    var sum = die1 + die2;

    // Get the output element to display the game result.
    var outputElement = document.getElementById("output");

    // Output the dice results.
    outputElement.innerHTML = `You rolled: ${die1} and ${die2}. Sum is: ${sum}.<br>`;

    // If the sum is 7 or 11, the player loses.
    if (sum === 7 || sum === 11) {  
    outputElement.innerHTML += "CRAPS – you lose!";

     // If both dice are equal and even, the player wins.
    } else if (die1 === die2 && die1 % 2 === 0) {
    outputElement.innerHTML += "You won!";

    // In all other cases, the game is a push.
    } else {
    outputElement.innerHTML += "You pushed!";
    }
    }
    
    
    function demoFunction(inputValue) {
   
   // Check if the input value is even or odd.
    if (inputValue % 2 === 0) {
    return "Input is even.";
    } else {
    return "Input is odd.";
    }
    }
    
    
    
    
    
    
    