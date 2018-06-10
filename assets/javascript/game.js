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

//  did this basic version with vanilla JS, and not object based.

var userGameStarted = document.getElementById('game-start');
var userGamesPlayed = document.getElementById('game-total');
var userGamesWon = document.getElementById('game-won');
var userGuessChances = document.getElementById('game-chances');
var userWordToGuess = document.getElementById('game-word');
var userGuessedLetters = document.getElementById('game-guessed');
var userInstructions = document.getElementById('game-instructions');
var userGameFinishedWord = document.getElementById('game-finished-word');

var hangmanWords = [
    'KANYE',
    'SHWAYZE',
    'FATHER',
    'TUPAC',
    'BLOODSTONE',
    'PARLIAMENT',
    'JOJI',
    'SMOKEPURPP',
    'DRAKE',
    'LOGIC',
    'XXXTENTACION',
    'JEREMIH',
    'PROBLEM',
    'NERD',
    'KAMAIYAH',
    'TOWKIO',
    'WALE',
    'PHARCYDE',
    'QTIP',
    'TPAIN'
  ];



//  arrays  //


var wordLetters = []; //  array of available correct letters, corresponds to picked word
var guessedLetters = []; //  container for past user guesses

//  string  //
var hiddenWord = ''; //  handles displaying the word
var pickedWordStatic = ''; //  static container for the target word
var pickedWord = ''; //  target word
var testWord = 'Naruto'; //   hokage

//  ints    //
var gamesPlayed = 0;
var gamesWon = 0;
var guessChances = 10;

//  bool    //
var gameStarted = false;
var gameOver = false;

document.onkeyup = function(event) {
  var userInput = event.key;

  if (gameOver === false) {
    //  initialze game if new
    if (gameStarted === false) {
      initialize(userInput);
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

    //  if out of words, and the current word letters length is 0
    if (
      hangmanWords.length <= 0 &&
      (wordLetters.length <= 0 || guessChances === 0)
    ) {
      if (wordLetters.length <= 0) {
        gamesWon++;
      }
      gamesPlayed++;
      gameOver = true;
      userGameStarted.textContent =
        "You've reached the end of the road. Your score is: " +
        gamesWon +
        '/20';
      userGamesPlayed.textContent = gamesPlayed;
      userGamesWon.textContent = gamesWon;
      userGameFinishedWord.textContent = pickedWordStatic;
    }
    //  if out of guesses, show bio, and reinitialize game for next round
    else if (guessChances === 0) {
      userGameFinishedWord.textContent = pickedWordStatic;
      reset();
    }
    //  if game is won, ie. wordLetters is empty, show bio and inc wins + games played
    else if (wordLetters.length <= 0 && gameStarted !== false) {
      gamesWon++;
      userGameFinishedWord.textContent = pickedWordStatic;
      reset();
    }
  }
};

//picks a word from available word bank
function pickWord() {
  var wordIndex = Math.floor(Math.random() * hangmanWords.length);
  var word = hangmanWords[wordIndex]; //pics rando word from list
  hangmanWords.splice(wordIndex, 1);
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
  if (userInput === ' ' || userInput === 'Spacebar' || userInput === 'Enter') {
    gameStarted = true;
    pickedWord = pickWord();
    pickedWordStatic = pickedWord;
    setWord(pickedWord);
    //console.log(pickedWord);
    userGameStarted.textContent = 'Game Started';
    userInstructions.textContent =
      'Guess the letter by pressing the corresponding key';
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
  gamesPlayed++;
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

//returns true if char has been prev guessed
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
        if (wordLetters[x] === input) {
          wordLetters.splice(x, 1);
          x = -1; //resets x, in case of adjacent duplicates. I realize I could just screen for duplicates on wordLettesr creation but oh well.
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
