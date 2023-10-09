// This function checks if the string is a palindrome
function isPalindrome(str1) {
    let cleanedStr = removeSpaces(str1);
    let reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// Function to remove spaces from a string "copied from internet"
function removeSpaces(str) {
    return str.replace(/\s+/g, '');
}

// This function is triggered when the button is clicked
function check() {
    let userInput = document.getElementById("pal").value;

    // If the user does not provide any input, return
    if (!userInput) {
        alert("Please enter a word!");
        return;
    }

    // Check if the string is a palindrome and update the page accordingly
    if (isPalindrome(userInput.toLowerCase())) {
       document.getElementById("result").innerHTML = "This is a palindrome";
       playSound('success')
    } else {
        document.getElementById("result").innerHTML = "This is NOT a palindrome";
        playSound('error')
    }

    // Ask the user if they wish to continue I tied to use this comand but is coming in too earli and as an alert so I don't like it.
    //let shouldContinue = confirm("Do you want to enter another word?");
   // if (shouldContinue) {
        document.getElementById("Pal").value = ""; // Clear the input
    //}
}

let currentSound = null;  //Makes variable currentSound become empty to store the playing sound
//This Function will add sound when is corrent or wrong the answer
function playSound(typeOrSrc) {
    if (currentSound) {
        currentSound.pause();  // Stop currently playing sound
    }

    let src;
    if(typeOrSrc === 'success') {
        src = 'Success.mp3';
    } else if(typeOrSrc === 'error') {
        src = 'wrong.mp3';
    } else {
        src = typeOrSrc;
    }

    currentSound = new Audio(src);
    currentSound.play();
}

function stopSound() {
    if (currentSound) {
        currentSound.pause();  // Stop the sound
        currentSound.currentTime = 0;  // Reset the audio playback to the start
    }
}

// Now, the function PlayBoo can remain the same
function PlayBoo() {
    playSound("boogaloo.mp3");
}

function StopBoo() {
    stopSound();
}
