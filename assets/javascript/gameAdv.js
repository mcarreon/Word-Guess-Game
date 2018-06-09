//  ID selectors
var userGameStarted = $('#game-start');
var userGamesPlayed = $('#game-total');
var userGamesWon = $('#game-won');
var userGuessChances = $('#game-chances');
var userWordToGuess = $('#game-word');
var userGuessedLetters = $('#game-guessed');
var userInstructions = $('#game-instructions');
var userGameFinishedWord = $('#game-finished-word');

var gameController = {
    //  Word Bank
    hangmanWords: [
        kanye = {
            name: 'KANYE'
        },
        schwayze = {
            name: 'SHWAYZE'
        },
        father = { 
            name : 'FATHER'
        },
        tupac = { 
            name : 'TUPAC'
        },
        bloodstone = { 
            name : 'BLOODSTONE'
        },
        parliament = { 
            name : 'PARLIAMENT'
        },
        joji = { 
            name : 'JOJI'
        },
        smokepurpp = { 
            name : 'SMOKEPURPP'
        },
        drake = { 
            name : 'DRAKE'
        },
        logic = { 
            name : 'LOGIC'
        },
        xxxtentacion = { 
            name : 'XXXTENTACION'
        },
        jeremih = { 
            name : 'JEREMIH'
        },
        problem = { 
            name : 'PROBLEM'
        },
        nerd = { 
            name : 'NERD'
        },
        kamaiyah = { 
            name : 'KAMAIYAH'
        },
        towkio = { 
            name : 'TOWKIO'
        },
        wale = { 
            name : 'WALE'
        },
        pharcyde = { 
            name : 'PHARCYDE'
        },
        qtip = { 
            name : 'QTIP'
        },
        tpain = { 
            name : 'TPAIN'
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
    gameOver: false

};
