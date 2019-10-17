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
let hints = ['These little treats are the STARS of every show, they come in bright colors, in wrappers and are packaged in a row.',
'Come Taste The Rainbow with these little candies, each marked with an S, they seem so dandy.',
'Red and white candies that leave a fresh taste, they are best when sucked on and come as a flavor for toothpaste.', 
'Sweet, velvety and a baking delight, a brown treat that comes in dark and light.', 
'It is a hard sweet that comes on a stick, licks to eat it will do the trick.',
'It is brightly colored and filled with jelly, a small little bean that is good in your belly.',
'They are small, fruity and bouncy to touch, a gum that is fun to chew and we love very much.',
'Blow out the candles on this popular sweet treat, they come individually frosted and are sweet to eat.',
 ];

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const buttons = document.querySelector('#buttonholder');
const startButton = document.querySelector('#start');
const hintButton = document.querySelector('#hint');
const newGameButton = document.querySelector('#newGame');
const score = document.querySelector('#score');
const remainingGuesses = document.querySelector('#remGuesses');
const buttonHolder = document.getElementById("buttonsHolder");
const buttonName = document.getElementById( "name");


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
    theseButtons();
   
};





function underScoresDisplay() {
    //creates the underscores
    for(var i = 0; i < pickedWord.length; i++) {
        underScores.push('_');
    }
    //prints underscores to screen
    document.getElementById('theWord').innerHTML = underScores.join(" ");
    console.log(underScores);

    //reset
    wrongLetter = [];
    guessesLeft = 6;
    correctAnswer = [];

    //prints guesses left game
    document.getElementById('remGuesses').innerHTML = 'Number of Guesses Left: ' + " " + guessesLeft;
    console.log(guessesLeft)

    for(i = 0; i < underScores; i++){
        correctAnswer.push(" ");
        console.log(correctAnswer);
    }

    theseHints();
}

function theseHints () {
    if (pickedWord === 'starbursts'){
        document.getElementById("myHints2").innerHTML = 'These little treats are the STARS of every show, they come in bright colors, in wrappers and are packaged in a row.'
    }
    if (pickedWord === 'skittles'){
        document.getElementById("myHints3").innerHTML = 'Come Taste The Rainbow with these little candies, each marked with an S, they seem so dandy.'
    }
    if (pickedWord === 'peppermints'){
        document.getElementById("myHints4").innerHTML = 'Red and white candies that leave a fresh taste, they are best when sucked on and come as a flavor for toothpaste.'
    }
    if (pickedWord === 'chocolate'){
        document.getElementById("myHints5").innerHTML = 'Sweet, velvety and a baking delight, a brown treat that comes in dark and light.'
    }
    if (pickedWord === 'lollipops'){
        document.getElementById("myHints6").innerHTML = 'It is a hard sweet that comes on a stick, licks to eat it will do the trick.'
    }
    if (pickedWord === 'jellybeans'){
        document.getElementById("myHints7").innerHTML = 'It is brightly colored and filled with jelly, a small little bean that is good in your belly.'
    }
    if (pickedWord === 'gummies'){
        document.getElementById("myHints8").innerHTML = 'They are small, fruity and bouncy to touch, a gum that is fun to chew and we love very much.'
    }
    if (pickedWord === 'cupcake'){
        document.getElementById("myHints9").innerHTML = 'Blow out the candles on this popular sweet treat, they come individually frosted and are sweet to eat.'
    }
}

const theseButtons = function () {
    const myButtons = document.getElementById("buttonsHolder");
    const letters = document.createElement('ul')

    for (var i=0; i < alphabet.length; i++){
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        // check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
    }
}
function check () {
    list.onclick = function () {
        userGuesses = (this.innerHTML)
        this.setAttribute
    }
}
// function keys() {
//     holder = buttonHolder
//     for(var i = 65; i <= 90; i++ ) {
//         if ( i == 65 || i == 75 || i == 84 ) {
//             p = document.createElement("p");
//         }
//         letter = String.fromCharCode( i );
//         button = document.createElement("button");
//         button.innerHTML = letter;
//         button.setAttribute("data-letter", letter);
//         button.onclick = function(e) { setLetter( this.getAttribute("data-letter"));};
//         p.appendChild(button);
//         if(i == 74 || i == 83 || i ==90) {
//             holder.appendChild( p );
//         }

//     }
    
// }

// function setLetter(letter) {
//         buttonName.innerHTML;
//         console.log(letter)

        
//     }





