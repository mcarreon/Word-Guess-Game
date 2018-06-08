/*
ask for enter/spacebar to start
    if word is guessed
        tell user, and show image
        restart game on new word
    if # of guesses remaining is 0
        alert user
        increment games played
        show the word, and move to new word
    choose a key
        if its right, add to blank Word
        if its wrong, decrement # of guesses and alert user
        add letter to already guessed letters


data needed 
    # games played
    # wins
    # of guesses left
    array for hangman words
    string for hangman word
    string for blank word
    array of guessed letters 
*/

var userGameStarted = document.getElementById('game-start');
var userGamesPlayed = document.getElementById('game-total');
var userGamesWon = document.getElementById('game-won');
var userGuessChances = document.getElementById('game-chances');
var userWordToGuess = document.getElementById('game-word');
var userGuessedLetters = document.getElementById('game-guessed');
var userInstructions = document.getElementById('game-instructions');

//  arrays  //
var hangmanWords = [
  'Kanye',
  'Schwayze',
  'Father',
  'Big Pun',
  'Tupac',
  'Lil Wayne',
  'Bloodstone',
  'Parliament',
  'Kodak Black',
  'Joji',
  'Mac Dre'
];
var guessedLetters = [];

//  string  //
var hiddenWord = '';
var pickedWord = '';

//  ints    //
var gamesPlayed = 0;
var gamesWon = 0;
var guessChances = 10;

//  bool    //
var gameStarted = false;

document.onkeyup = function(event) {
  var userInput = event.key;

  if (gameStarted == false) {
    if (
      userInput === ' ' ||
      userInput === 'Spacebar' ||
      userInput === 'Enter'
    ) {
      gameStarted = true;
      pickedWord = pickWord();
      setWord(pickedWord);
      console.log(pickedWord);
      userGameStarted.textContent = "Game Started";
      userInstructions.textContent = "Guess the letter by pressing the corresponding key";
      userWordToGuess.textContent = hiddenWord;
      userGamesPlayed.textContent = gamesPlayed;
      userGamesWon.textContent = gamesWon;
      userGuessChances.textContent = guessChances;
    }
  } else {

  }
};

function pickWord() {
  var word = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
  return word;
}

function setWord(word) {
  var wordHide = '';

  //    hides the word with _ and ' '
  for (var i = 0; i < word.length; i++) {
    wordHide = wordHide.concat('_');
    wordHide = wordHide.concat(' ');
  }
  hiddenWord = wordHide;

  var spaceLocation = 2 * returnSpace(word);
  

  console.log(hiddenWord);
  console.log(hiddenWord.length);
  console.log(spaceLocation);

  hiddenWord[spaceLocation] = 'A';
  console.log(hiddenWord);
}

function returnSpace(word) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] === ' ') {
            return i;
        }
    }
}
