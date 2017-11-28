// var inquirer = require("inquirer");
// var mysql = require("mysql");
// var word = require("./word.js");
var letter = require("./letter.js");

var wordBank = ['Corgi', "Labrador", "Beagle", "Pug", "Boxer", "Setter", "Terrier", "Yorkipoo"]


exports.toWordJS = wordBank;
exports.toLetterJS = wordBank;
exports.toMainJS = wordBank;

// array to hold word choices
// var wordBank = {
//     words: ['Corgi', "Labrador", "Beagle", "Pug",
//      "Boxer", "Setter", "Terrier", "Yorkipoo"],
//     randomNum: 0,
//     chosenWord: "",
//     wordLetters:[],=

// pickWord: function(){
//         this.randNum = Math.floor(Math.random()*this.words.length);
//         this.chosenWord = this.words[this.randNum];
//         this.wordLetters = this.chosenWord.split("");
//     }
// };

// display "_" for all letters in selected word
// function to count number of guesses remaining
// function to loop "Guess a letter!" after each try
// correct guesses > Correct!! displays and word break down displayed
// incorrect guesses > Incorrect!! _ guesses remaining!
// after all guesses are gone prompt user to end the game