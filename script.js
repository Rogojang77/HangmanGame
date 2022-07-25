document.getElementById("restartGame").style.visibility = "hidden";

function startGame() {
    let wordToGuess = document.querySelector('input').value;    
    let wordLength = wordToGuess.length;
    if(wordLength != 0) {
        let guessedLetters = [];
        let reLetter = wordLength;
        let foundLetters;
        let button;
        for(let i=0; i < wordLength; ++i) {
            guessedLetters[i] = " _";
        }

        document.getElementById("guessedWord").innerHTML = guessedLetters.join('');
        document.getElementById("lives").innerHTML = "You have " + wordLength + " lives left";
            
        for(var i='a'.charCodeAt(0); i <= 'z'.charCodeAt(0); ++i) {
            let character = String.fromCharCode(i);
            button = document.createElement("button");
            button.setAttribute("letter", character);
            button.innerHTML = character;
            document.getElementById("alphabethButtons").appendChild(button);
            onClick(button);
        }

        function onClick(button) {
            button.addEventListener("click", function() {
                foundLetters = 0;
                for(let j=0; j <= wordLength * 2; ++j) {
                    if(wordToGuess[j] == button.textContent) {
                        guessedLetters[j] = button.textContent;
                        foundLetters = 1;
                        lettersUntilWin();
                    }
                }
                if(foundLetters == 0) {
                    decreaseLives();
                }
            document.getElementById("guessedWord").innerHTML = guessedLetters.join('');
            button.style.backgroundColor = 'grey';
            },
            {once : true});	
        }

        function decreaseLives(button) {
            --wordLength;
            document.getElementById("lives").innerHTML = "You have " + wordLength + " lives left";
            if(wordLength == 0) {
                document.getElementById("lives").innerHTML = "You lost!</br>The word was: " + wordToGuess;
                document.getElementById("restartGame").style.visibility = 'visible';
                document.getElementById("alphabethButtons").style.visibility = 'hidden';
            }
        }

        function lettersUntilWin() {
            --reLetter;
            if(reLetter == 0) {
                document.getElementById("lives").innerHTML = "You find it!</br>";
                document.getElementById("restartGame").style.visibility = "visible";
            }
        }
    } else {
        alert("Please enter a word!")
    }
}
function restart() {
    window.location.reload();
}