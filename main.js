var game = require("./game.js");
var word = require("./word.js")
var letter = require("./letter.js");
var prompt = require('prompt');
var inquirer = require("inquirer");
var clear = require('clear');

console.log("Choose a letter within the name of a dog breed");

prompt.start();
// function to start the game
game = {
    guessesRemaining: 10,
    currentWord: null,
    startGame: function(wrd) {
        this.resetGuessesRemaining();
        this.lettersAlreadyGuessed = "";
        this.currentWord = new Word.Word(game.wordBank[Math.floor(Math.random() *
            game.wordBank.length)].toUpperCase());
        this.currentWord.populateLetterArray();
        this.userPrompt();
    },

// guess counter
    resetGuessesRemaining: function() {
        guessesRemaining = 10;
    },

//function to prompt user to guess a letter
// function to count number of guesses remaining
// function to loop "Guess a letter!" after each try
// correct guesses > Correct!! displays and word break down displayed
// incorrect guesses > Incorrect!! _ guesses remaining!
// after all guesses are gone prompt user to end the game

    userPrompt: function() {
    	
    	prompt.get(['letterGuessed'], function(err, result) {
    		clear();
    		var promptInput = result.letterGuessed.toUpperCase();
    		if (result.letterGuessed.length > 1 || this.letterGuessed.includes(promptInput) || /[^A-Z]/.test(promptInput)) {
    			console.log('The letter or space you guessed is: ' + promptInput);
				console.log('Letters already guessed are '+this.lettersAlreadyGuessed);
			    console.log('\n\nGuesses remaining: ', this.guessesRemaining);
		    	console.log(this.currentWrd.wordRender());
		    	console.log('here are the letters you guessed already: ');
		    	console.log(this.lettersAlreadyGuessed);
				this.userPrompt();
			}else{
				console.log("The letter you guesses is: " + promptInput);
				this.letter
    		}


    	})
    // check the users guess against the current word
    	.then(function(answer) {
    		if (answer.userprompt.toUpperCase() )
    	}
    }

};

game.startGame();