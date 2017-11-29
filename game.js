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
