// Word Constructor: Used to create an object representing the current word the user is 
// attempting to guess. This should contain word specific logic and data.

var game = require("./game.js");
var main = require("./main.js");
var letter = require('./letter.js');

function Word(word, letterArray, found) {

    //set a property called word and set it equal to what you think it should be
    this.word = gameWord;

    this.letterArray = [];

    //set a property called found to false
    this.found = false;

   
    this.populateletterArray = function() {
        for (var i = 0; i < this.word.length; i++) {
            this.letterArray.push(new letter.Letter(this.word[i].toUpperCase()));
        }
    };
    // function to check if word is completed
    this.findWord = function() {
        var returnCounter = 0;
        for (var i = 0; i < this.letterArray.length; i++) {
            if (this.letterArray[i].appear !== true) {
                return false
            } else if (this.letterArray[i].appear === true) {
                returnCounter++;
            }
        }
        if (returnCounter === this.letterArray.length) {
            return true;
        } else {
            return false;
        }
    }

    //function to check guessed letter against current word
    this.checkLetter = function(letterGuessed) {
            console.log("checkLetter letterGuessed = " + letterGuessed);
            var lettersReturn = 0;
        for (var i=0; i< this.letterArray.length; i++) {
        	if (this.letterArray[i].character.toUpperCase() === letterGuessed) {
        		this.letterArray[i].appear = true;
        		lettersReturn ++;
        	}
        }
        return lettersReturn;
    };

    this.renderLetter = function() {
    	var dis = "";
    	for (var i=0; i< this.letterArray.length; i++) {
    		dis += this.letterArrary[i].chooseLtrDisplay();
    		}
    	return dis;
    };
   };

   exports.Word = Word;

