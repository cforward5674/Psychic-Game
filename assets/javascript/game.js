var computerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", 
"w", "x", "y", "z"];
console.log(computerLetters.length);  
var wins = 0;
var losses = 0;
var guesses = 9;

document.onkeyup = function run() {
var userguess = String.fromCharCode(event.keyCode).toLowerCase();
console.log(userguess);
var computerGuess = computerLetters[Math.floor(Math.random()*computerLetters.length)];
console.log(computerGuess);
var letterGuess = document.getElementById("letter-guess");



if (userguess === computerGuess) {
alert("you win");
wins++;
}
if (userguess != computerGuess) {
alert("you lose");
losses++;
}
//  for (var i = 0; i < 9; i++) {
if (userguess != computerGuess) {
guesses--; 
}
// }
// if (userguess === computerGuess) {

// }

if (userguess != computerGuess) {
letterGuess.innerHTML = letterGuess.innerHTML + userguess; 
}

// if (guesses === 0) {
//     guesses = 10;
//     losses ++;
//     guessChoices = [];

if(losses === 9) {
guesses = 9;
letterGuess.innerHTML = "";
losses = 0;
}


var html = "<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses + "</p>" +
"<p>Guesses Left: " + guesses + "</p>";

document.querySelector("#game").innerHTML = html;
// for (var i = 0; i < 9; i++) {
//  userguess--; 

}  