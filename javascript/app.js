let wordBank = ["starbursts", "skittles", 
"peppermints", "chocolate", "lollipops", 
"jellybeans", "gummies", "cupcake"];

let underScores = [];
let userGuesses = []; //right letters
let guessesLeft = 6; //total amount of guesses

let winCounter; //increments by 1 as the word is guessed correctly
//let keepingScore = 0;


let correctAnswer = []; //users correct answer
let wrongLetter = []; //every time letter is guessed wrong

let on = false; //startbutton is turned on
let hints = ["These little treats are the STARS of every show, they come in bright colors, in wrappers and are packaged in a row.",
"Come Taste The Rainbow with these little candies, each marked with an 'S', they seem so dandy.",
"Red and white candies that leave a fresh taste, they're best when sucked on and come as a flavor for toothpaste.", 
"Sweet, velvety and a baking delight, it's a brown treat that comes in dark and light", 
"It's a hard sweet that comes on a stick, licks to eat it will do the trick",
"It's brightly colored and filled with jelly, a small little bean that's good in your belly",
"They're small, fruity and bouncy to touch, a gum that's fun to chew and we love very much",
"Blow out the candles on this popular sweet treat, they come individually frosted and are sweet to eat.",
 ];

const buttons = document.querySelector('#buttonholder');
const startButton = document.querySelector('#start');
const hintButton = document.querySelector('#hint');
const newGameButton = document.querySelector('#newGame');
const score = document.querySelector('#score');
const remainingGuesses = document.querySelector('#remGuesses');


//on button
newGameButton.onclick = function() {
    if (newGameButton.onclick = true) {
        on = true;
        remainingGuesses.innerHTML = "-";
    } else {
        on = false;
        remainingGuesses.innerHTML = ""
    }
    console.log("Clicked on!")

}


//start button
startButton.onclick = function(){
   if (on || win) {
       play();
   }
      console.log("Clicked!")
}

function play() {
    underScores = [];
    guessesLeft = 6;
    pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(pickedWord)
    underScoresDisplay();
};

function underScoresDisplay() {
    //creates the underscores
    for(var i = 0; i < pickedWord.length; i++) {
        underScores.push('_');
    }
    //prints underscores to screen
    document.getElementById('theWord').innerHTML = underScores.join(" ");
    console.log(underScores);

    //resets game
}