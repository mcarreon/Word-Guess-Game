//  ID selectors
var userGameStarted = $('#game-start');
var userGamesPlayed = $('#game-total');
var userGamesWon = $('#game-won');
var userGuessChances = $('#game-chances');
var userWordToGuess = $('#game-word');
var userGuessedLetters = $('#game-guessed');
var userInstructions = $('#game-instructions');
var userGameFinishedWord = $('#game-finished-word');

var game = {
    //  Word Bank
    hangmanWords: [
        kanye = {
            name: 'KANYE'
        },
        schwayze = {
            name: 'SHWAYZE'
        },
        father = {
            name: 'FATHER'
        },
        tupac = {
            name: 'TUPAC'
        },
        bloodstone = {
            name: 'BLOODSTONE'
        },
        parliament = {
            name: 'PARLIAMENT'
        },
        joji = {
            name: 'JOJI'
        },
        smokepurpp = {
            name: 'SMOKEPURPP'
        },
        drake = {
            name: 'DRAKE'
        },
        logic = {
            name: 'LOGIC'
        },
        xxxtentacion = {
            name: 'XXXTENTACION'
        },
        jeremih = {
            name: 'JEREMIH'
        },
        problem = {
            name: 'PROBLEM'
        },
        nerd = {
            name: 'NERD'
        },
        kamaiyah = {
            name: 'KAMAIYAH'
        },
        towkio = {
            name: 'TOWKIO'
        },
        wale = {
            name: 'WALE'
        },
        pharcyde = {
            name: 'PHARCYDE'
        },
        qtip = {
            name: 'QTIP'
        },
        tpain = {
            name: 'TPAIN'
        }
    ],

    //  array containers
    wordLetters: [],
    guessedLetters: [],

    //  string
    hiddenWord: '',
    pickedWord: '',
    pickedWordStatic: '',
    testWord: 'Naruto', //hokage

    //  ints
    gamesPlayed: 0,
    gamesWon: 0,
    guessChances: 10,

    //  bool
    gameStarted: false,
    gameOver: false,

    //  methods
    pickWord: function () {
        var wordIndex = Math.floor(Math.random() * this.hangmanWords.length);
        var word = this.hangmanWords[wordIndex].name; //pics rando word from list
        this.hangmanWords.splice(wordIndex, 1);
        return word;
    },

    //hides to word on display
    setWord: function (word) {
        var wordHide = '';
        //    hides the word with _ and ' '
        for (var i = 0; i < word.length; i++) {
            this.wordLetters.push(word[i]);
            wordHide = wordHide.concat('_');
            wordHide = wordHide.concat(' ');
        }
        this.hiddenWord = wordHide;
    },

    //initializes game
    initialize: function (userInput) {
        if (userInput === ' ' || userInput === 'Spacebar' || userInput === 'Enter') {
            this.gameStarted = true;
            this.pickedWord = this.pickWord();
            this.pickedWordStatic = this.pickedWord;
            this.setWord(this.pickedWord);
            console.log(this.pickedWord);
            userGameStarted.text('Game Started');
            userInstructions.text('Guess the letter by pressing the corresponding key');
            userWordToGuess.text(this.hiddenWord);
            userGamesPlayed.text(this.gamesPlayed) ;
            userGamesWon.text(this.gamesWon);
            userGuessChances.text(this.guessChances);
            userGuessedLetters.text(this.guessedLetters);
        }
    },

    //resets needed variables for fresh round
    reset: function () {
        this.guessChances = 10;
        this.gamesPlayed++;
        this.hiddenWord = '';
        this.pickedWord = '';
        this.guessedLetters = [];
        this.wordLetters = [];
        this.initialize(' ');
    },

    //sets character at specific index in string
    setChar: function (string, index, char) {
        if (index > string.length - 1) {
            return string;
        }
        return string.substr(0, index) + char + string.substr(index + 1);
    },

    //returns an array of indexs that from pickedWordStatic that correspond to the char arg
    findChar: function (char) {
        var indexes = [];
        for (var i = 0; i < this.pickedWordStatic.length; i++) {
            if (this.pickedWordStatic[i] == char) {
                indexes.push(i);
            }
        }
        return indexes;
    },

    isGuessed: function (input) {
        for (var i = 0; i < this.guessedLetters.length; i++) {
            if (input === this.guessedLetters[i]) {
                return true;
            }
        }
        return false;
    },

    //returns whether char is a letter
    isAlpha: function (char) {
        return /^[A-Z]$/i.test(char);
    },

    //reads for available correct letters and replaces correct inputs
    correctInput: function (input) {
        for (var i = 0; i < this.wordLetters.length; i++) {
            //  if input is not a letter, break for next input
            if (!this.isAlpha(input)) {
                break;
            }
            //  if they guess a letter they already guessed, break for next input
            else if (this.isGuessed(input)) {
                break;
            }
            //  if the input is correct, replace chars in hiddenWord, and splice out the corresponding chars from wordLetters
            else if (input === this.wordLetters[i]) {
                var wordIndex = [];
                wordIndex = this.findChar(input);

                //  replaces the _ in the game word
                for (var n = 0; n < wordIndex.length; n++) {
                    this.hiddenWord = this.setChar(this.hiddenWord, wordIndex[n] * 2, input);
                }
                //  takes input char out of available word letters
                for (var x = 0; x < this.wordLetters.length; x++) {
                    if (this.wordLetters[x] === input) {
                        this.wordLetters.splice(x, 1);
                        x = -1; //resets x, in case of adjacent duplicates. I realize I could just screen for duplicates on wordLettesr creation but oh well.
                    }
                }

                userWordToGuess.text(this.hiddenWord);
            }
        }
    },

    //checks for good input, kinda wet may fix later
    isGoodInput: function (input) {
        for (var i = 0; i < this.pickedWordStatic.length; i++) {
            if (input === this.pickedWordStatic[i]) {
                return true;
            }
        }
        return false;
    }
};

document.onkeyup = function (event) {
    var userInput = event.key;

    if (game.gameOver === false) {
        //  initialze game if new
        if (game.gameStarted === false) {
            game.initialize(userInput);
        }
        //  if game is already initialized
        else {
            //  converts all input to uppercase
            var input = userInput.toUpperCase();

            //  reads for available correct letters and replaces
            game.correctInput(input);

            //  if input hasnt been guessed before, push to guessed letters and decrement chances if bad letter
            if (!game.isGuessed(input) && game.isAlpha(input)) {
                game.guessedLetters.push(input);
                if (!game.isGoodInput(input)) {
                    game.guessChances--;
                    userGuessChances.text(game.guessChances);
                }
            }
            //  if letter is wrong, decrement chances
            if (!game.isGoodInput(input) && !game.isGuessed(input) && game.isAlpha(input)) {
                game.guessChances--;
                userGuessChances.text(game.guessChances);
            }
            userGuessedLetters.text(game.guessedLetters);
        }

        //  if out of words, and the current word letters length is 0
        if (
            game.hangmanWords.length <= 0 &&
            (game.wordLetters.length <= 0 || game.guessChances === 0)
        ) {
            if (game.wordLetters.length <= 0) {
                game.gamesWon++;
            }
            game.gamesPlayed++;
            game.gameOver = true;
            userGameStarted.text(
                "You've reached the end of the road. Your score is: " +
                game.gamesWon +
                '/20');
            userGamesPlayed.text(game.gamesPlayed);
            userGamesWon.text(game.gamesWon);
            userGameFinishedWord.text(game.pickedWordStatic);
        }
        //  if out of guesses, show bio, and reinitialize game for next round
        else if (game.guessChances === 0) {
            userGameFinishedWord.text(game.pickedWordStatic);
            game.reset();
        }
        //  if game is won, ie. wordLetters is empty, show bio and inc wins + games played
        else if (game.wordLetters.length <= 0 && game.gameStarted !== false) {
            game.gamesWon++;
            userGameFinishedWord.text(game.pickedWordStatic);
            game.reset();
        }
    }
};