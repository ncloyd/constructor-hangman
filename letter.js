// Letter Constructor: Used for each letter in the current word. Each letter object should 
// either display an underlying character, or a blank placeholder 
// (such as an underscore), depending on whether or not the user has 
// guessed the letter. This should contain letter specific logic and data.

function Letter(letterPassedIntoFunction) {
    this.character = letterPassedIntoFunction;
    this.appear = false;
    this.chooseLtrDisplay = function() {
        if (this.appear === true) {
            return this.character;
        } else {
            return " _ "
        }
    }
};

exports.Letter = Letter;

// function Letter(letter, appear) {
//     this.letter = ltr;
//     this.appear = false;
//     this.display = function() {
//         if (this.letter == ' ') {
//             this.appear = true;
//             return ' ';
//         }
//         if (this.appear === false) {
//             return ' _ ';
//         } else {
//             return this.letter;
//         }
//     };
// };

