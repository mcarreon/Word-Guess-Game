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
  'KANYE',
  'SCHWAYZE',
  'FATHER',
  'TUPAC',
  'BLOODSTONE',
  'PARLIAMENT',
  'JOJI'
];
var wordLetters = []; //  array of available correct letters, corresponds to picked word
var guessedLetters = [];  //  container for past user guesses

//  string  //
var hiddenWord = ''; //  handles displaying the word
var pickedWordStatic = ''; //  static container for the target word
var pickedWord = ''; //  target word
var testWord = "Naruto"; //   hokage

//  ints    //
var gamesPlayed = 0;
var gamesWon = 0;
var guessChances = 10;

//  bool    //
var gameStarted = false;

document.onkeyup = function (event) {
  var userInput = event.key;

  //  initialze game if new
  if (gameStarted == false) {
    initialize(userInput);
  } 
  //  if out of guesses, show bio, and reinitialize game for next round
  else if (guessChances === 0) {
    reset();
  }
  //  if game is already initialized
  else {
    //  converts all input to uppercase
    var input = userInput.toUpperCase();

    //  reads for available correct letters and replaces
    correctInput(input);

    //  if input hasnt been guessed before, push to guessed letters and decrement chances if bad letter
    if (!isGuessed(input) && isAlpha(input)) {
      guessedLetters.push(input);
      if (!isGoodInput(input)) {
        guessChances--;
        userGuessChances.textContent = guessChances;
      }
    }
    //  if letter is wrong, decrement chances
    if (!isGoodInput(input) && !isGuessed(input) && isAlpha(input)) {
      console.log(2);
      guessChances--;
      userGuessChances.textContent = guessChances;
    }
    userGuessedLetters.textContent = guessedLetters;
  }
};

//picks a word from available word bank
function pickWord() {
  var word = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
  return word;
}

//hides to word on display
function setWord(word) {
  var wordHide = '';
  //    hides the word with _ and ' '
  for (var i = 0; i < word.length; i++) {
    wordLetters.push(word[i]);
    wordHide = wordHide.concat('_');
    wordHide = wordHide.concat(' ');
  }

  hiddenWord = wordHide;
}

//initializes game
function initialize(userInput) {
  if (
    userInput === ' ' ||
    userInput === 'Spacebar' ||
    userInput === 'Enter'
  ) {
    gameStarted = true;
    pickedWord = pickWord();
    pickedWordStatic = pickedWord;
    setWord(pickedWord);
    console.log(pickedWord);
    userGameStarted.textContent = "Game Started";
    userInstructions.textContent = "Guess the letter by pressing the corresponding key";
    userWordToGuess.textContent = hiddenWord;
    userGamesPlayed.textContent = gamesPlayed;
    userGamesWon.textContent = gamesWon;
    userGuessChances.textContent = guessChances;
    userGuessedLetters.textContent = guessedLetters;
  }
}

//resets needed variables for fresh round
function reset() {
  guessChances = 10;
  hiddenWord = '';
  pickedWord = '';
  guessedLetters = [];
  wordLetters = [];
  initialize(' ');
}

//sets character at specific index in string
function setChar(string, index, char) {
  if (index > string.length - 1) {
    return string;
  }
  return string.substr(0, index) + char + string.substr(index + 1);
}

//returns an array of indexs that from pickedWordStatic that correspond to the char arg
function findChar(char) {
  var indexes = [];

  for (var i = 0; i < pickedWordStatic.length; i++) {
    if (pickedWordStatic[i] == char) {
      indexes.push(i);
    }
  }
  return indexes;
}

function isGuessed(input) {
  for (var i = 0; i < guessedLetters.length; i++) {
    if (input === guessedLetters[i]) {
      return true;
    }
  }
  return false;
}
//returns whether char is a letter 
function isAlpha(char) {
  return /^[A-Z]$/i.test(char);
}
//reads for available correct letters and replaces correct inputs
function correctInput(input) {
  for (var i = 0; i < wordLetters.length; i++) {
    //  if input is not a letter, break for next input
    if (!isAlpha(input)) {
      break;
    }
    //  if they guess a letter they already guessed, break for next input
    else if (isGuessed(input)) {
      break;
    }
    //  if the input is correct, replace chars in hiddenWord, and splice out the corresponding chars from wordLetters 
    else if (input === wordLetters[i]) {
      var wordIndex = [];
      wordIndex = findChar(input);

      //  replaces the _ in the game word 
      for (var n = 0; n < wordIndex.length; n++) {
        hiddenWord = setChar(hiddenWord, wordIndex[n] * 2, input);
      }
      //  takes input char out of available word letters
      for (var x = 0; x < wordLetters.length; x++) {
        if (wordLetters[x] == input) {
          wordLetters.splice(x, 1);
        }
      }
      
      userWordToGuess.textContent = hiddenWord;
    }
  }
}
//checks for good input, kinda wet may fix later
function isGoodInput(input) {
  for (var i = 0; i < pickedWordStatic.length; i++) {
    if (input === pickedWordStatic[i]) {
      return true;
    }
  }
  return false;
}




