//  ID selectors
var userGameStarted = $('#game-start');
var userGamesPlayed = $('#game-total');
var userGamesWon = $('#game-won');
var userGuessChances = $('#game-chances');
var userWordToGuess = $('#game-word');
var userGuessedLetters = $('#game-guessed');
var userInstructions = $('.game-instructions');
var userGameFinishedWord = $('#game-finished-word');
var userAsideImage = $('#aside-image');
var userAsideContent = $('#aside-content');
var userGameLettersInfo = $('.game-letters-info');
var userGoat = $('.goat');
var audio = document.getElementById("audio");

var game = {
    //  Word Bank
    hangmanWords: [
        kanye = {
            name: 'KANYE',
            bio: "Kanye Omari West is an American rapper, singer, songwriter, record producer, entrepreneur and fashion designer. He is one of the most popular rappers in the world, and one of the world's best-selling music artists. West's contributions to music and fashion, along with his publicized personal life made him a global figure in popular culture.",
            img: './assets/images/bio/kanye-west.jpg'
        },
        schwayze = {
            name: 'SHWAYZE',
            bio: "Shwayze is the stage name of Aaron Smith, an American rapper. His first single 'Buzzin' peaked at #46 on the Billboard Hot 100. His second single 'Corona and Lime,' reached #23 on the Billboard Hot 100 in the US and #3 in the US iTunes Store.",
            img: './assets/images/bio/shwayze.jpg'
        },
        father = {
            name: 'FATHER',
            bio: "Father is an American rapper that hails from Atlanta. He is known for his slump style and trippy melodies. He and his crew are organized as Awful Records. Father is the CEO.",
            img: './assets/images/bio/father.jpg'
        },
        tupac = {
            name: 'TUPAC',
            bio: "Tupac Amaru Shakur (born Lesane Parish Crooks; June 16, 1971 – September 13, 1996), also known by his stage names 2Pac and Makaveli, was an American rapper, record producer and actor. As of 2007, Shakur has sold over 75 million records worldwide. His double disc albums All Eyez on Me and his Greatest Hits are among the best selling albums in the United States. He has been listed and ranked as one of the greatest artists of all time by many magazines, including Rolling Stone which ranked him 86th on its list of The 100 Greatest Artists of All Time.",
            img: './assets/images/bio/tupac.gif'
        },
        bloodstone = {
            name: 'BLOODSTONE',
            bio: "Formed in 1962, in Kansas City, Missouri, the group was a high school doo-wop group called The Sinceres. In 1967-68 they were backed by and toured with a large Kansas City horn band known as the Smokin' Emeralds and performed their version of a Motown-style review which drew large crowds at a venue called the Place in the Westport district of KC. After learning to play their respective musical instruments, moved to Los Angeles, California. After arriving in Los Angeles, the group met their prospective managers George Braunstein and Ron Hamady. They also replaced their drummer Melvin Webb with Eddie Summers, a resident of Los Angeles, California. The managers decided to change their name from The Sinceres to Bloodstone.",
            img: './assets/images/bio/bloodstone.jpeg'
        },
        parliament = {
            name: 'PARLIAMENT',
            bio: "Parliament is a funk band formed in the late 1960s by George Clinton as part of his Parliament-Funkadelic collective. Less rock-oriented than its sister act Funkadelic, Parliament drew on science-fiction and outlandish performances in their work. The band scored a number of Top 10 hits, including the million-selling 1975 single 'Give Up the Funk (Tear the Roof off the Sucker),' and Top 40 albums such as Mothership Connection (1975).",
            img: './assets/images/bio/parliament.webp'
        },
        joji = {
            name: 'JOJI',
            bio: "George Miller (born 18 September 1992), better known by his stage name Joji (stylized as joji), is a Japanese-Australian record producer, singer, songwriter, and retired YouTube personality and rapper.Miller's start as an entertainer began on his surreal YouTube channel, now defunct, that consisted of music, rants, ukulele performances and a bizarre show, with all of the main characters played by Miller. In late 2017, Miller stepped away from the channel to focus on his music career, under the name Joji, producing more nuanced and serious music, releasing the EP In Tongues which peaked at number 58 on the Billboard 200. Miller's music has been described as a mix between R&B and trip-hop.",
            img: './assets/images/bio/joji.jpg'
        },
        smokepurpp = {
            name: 'SMOKEPURPP',
            bio: "Omar Pineiro (born May 15, 1997), known professionally as Smokepurpp, is an American rapper from Miami, Florida. Pineiro initially found success on the audio distribution platform SoundCloud in 2017 after his song 'Ski Mask' went viral. Originally a producer, Pineiro is one of the most known figures of the 'SoundCloud rap' movement due to his influence on artists such as Lil Pump who have since entered the mainstream music market. Pineiro released his debut commercial mixtape Deadstar on September 28, 2017, and the mixtape peaked at number 42 on the Billboard 200 albums chart.",
            img: './assets/images/bio/smokepurpp.jpg'
        },
        drake = {
            name: 'DRAKE',
            bio: "Aubrey Drake Graham (born October 24, 1986) is a Canadian rapper, singer, songwriter, record producer, actor, and entrepreneur. Drake initially gained recognition as an actor on the teen drama television series Degrassi: The Next Generation in the early 2000s. Intent on pursuing a career as a rapper, he departed the series in 2007 following the release of his debut mixtape, Room for Improvement. He released two further independent projects, Comeback Season and So Far Gone, before signing to Lil Wayne's Young Money Entertainment in June 2009.",
            img: './assets/images/bio/drake.jpg'
        },
        logic = {
            name: 'LOGIC',
            bio: "Sir Robert Bryson Hall II (born January 22, 1990), known by his stage name Logic, is an American rapper, singer, songwriter, and record producer. Raised in Gaithersburg, Maryland, Logic developed an interest in music as a teenager, and ventured into a musical career in early 2009 releasing Logic: The Mixtape and a mixtape titled Young, Broke & Infamous in 2010. He signed with Visionary Music Group, before releasing three more mixtapes over three years. His fourth mixtape, Young Sinatra: Welcome to Forever (2013), was released to critical acclaim, and allowed Logic to secure a recording contract with Def Jam Recordings.",
            img: './assets/images/bio/logic.jpg'
        },
        xxxtentacion = {
            name: 'XXXTENTACION',
            bio: "Jahseh Dwayne Onfroy (born January 23, 1998), known professionally as XXXTentacion. Born and raised in Plantation, Florida, Onfroy spent most of his childhood in Lauderhill, Florida. He began writing music after being released from a youth correction center and eventually released his first song on the audio distribution platform SoundCloud in June 2013, titled 'News/Flock'. He is a popular figure in SoundCloud rap. Onfroy released his debut album, 17, on August 25, 2017. Onfroy's second album, ? was released on March 16, 2018, It debuted at number one on the Billboard 200, with its singles 'Sad!' and 'Changes' peaking at numbers 7 and 37 on the Billboard Hot 100 respectively.",
            img: './assets/images/bio/xxxtentacion.png'
        },
        jeremih = {
            name: 'JEREMIH',
            bio: "Jeremih Felton (born July 17, 1987), better known by his mononym Jeremih, is an American singer, songwriter, and record producer. In 2009, he signed a record deal with Def Jam Recordings. Jeremih's commercial debut single, 'Birthday Sex', peaked at number four on the US Billboard Hot 100 chart. His self-titled debut album reached number six on the US Billboard 200 chart. Jeremih's success continued with the release of his second album, All About You, led by the single 'Down on Me', which also reached the top five of the Billboard Hot 100. In 2014, his single 'Don't Tell 'Em' became his third top-ten hit on the Billboard Hot 100.",
            img: './assets/images/bio/jeremih.jpg'
        },
        problem = {
            name: 'PROBLEM',
            bio: "Jason Martin (born May 8, 1985), better known by his stage name Problem, is an American rapper and record producer. He has released nine mixtapes in his career, the most recent being The Separation, released on June 13, 2013. His debut EP, Understand Me, was released on December 10, 2013. He is best known for his single 'Like Whaaat' and for featuring on E-40's 'Function'.",
            img: './assets/images/bio/problem.jpg'
        },
        nerd = {
            name: 'NERD',
            bio: "N*E*R*D* is an American hip hop and rock band, formed in Virginia Beach, Virginia in 1999. Pharrell Williams and Chad Hugo were signed by Teddy Riley to Virgin Records as a duo, The Neptunes. After producing songs for several artists throughout the late 1990s and early 2000s, the production duo formed the band with Shay Haley as a side project of The Neptunes in 1999. N.E.R.D's debut album, In Search Of..., sold 603,000 copies in the United States and was certified Gold by the Recording Industry Association of America (RIAA). It was also awarded the second annual Shortlist Music Prize. ",
            img: './assets/images/bio/nerd.jpg'
        },
        kamaiyah = {
            name: 'KAMAIYAH',
            bio: "Kamaiyah Jamesha Johnson (born March 13, 1992) is an American rapper and singer from Oakland, California. She released her acclaimed debut mixtape A Good Night in the Ghetto in 2016.",
            img: './assets/images/bio/kamaiyah.jpg'
        },
        towkio = {
            name: 'TOWKIO',
            bio: "Preston Oshita (born June 26, 1993), better known by his stage name Towkio, is an American rapper from Chicago, Illinois. He was previously known as Preston San and Tokyo Shawn. He is a member of the Savemoney crew. His debut studio album, WWW., was released in 2018.",
            img: './assets/images/bio/towkio.jpg'
        },
        wale = {
            name: 'WALE',
            bio: "Olubowale Victor Akintimehin (born September 21, 1984), better known by his stage name Wale, is a Nigerian-American rapper. He first rose to prominence in 2006, when his song 'Dig Dug (Shake It)' became popular in his hometown. Wale became locally recognized and continued recording music for the regional audience. Producer Mark Ronson discovered Wale in 2006 and signed him to Allido Records in 2007. In 2008, Wale signed with Interscope Records for $1.3 million, and his debut album Attention Deficit was released in 2009 with the singles 'Chillin', 'Pretty Girls', and 'World Tour'.",
            img: './assets/images/bio/wale.jpg'
        },
        pharcyde = {
            name: 'PHARCYDE',
            bio: "The Pharcyde (pronounced 'far side') is an American alternative hip hop group, formed in 1989, from South Central Los Angeles. The original four members of the group are Imani (Emandu Wilcox), Slimkid3 (Trevant Hardson), Bootie Brown (Romye Robinson), and Fatlip (Derrick Stewart). DJ Mark Luv was the group's first disc jockey (DJ), followed by producer J-Swift and then J Dilla. The group is perhaps best known for the hit singles 'Drop', 'Passin' Me By' and 'Runnin', as well as their first album, Bizarre Ride II the Pharcyde (1992).",
            img: './assets/images/bio/pharcyde.jpg'
        },
        qtip = {
            name: 'QTIP',
            bio: "Kamaal Ibn John Fareed (born Jonathan William Davis; April 10, 1970), better known by his stage name Q-Tip, is an American rapper, singer, actor, record producer and DJ. He embarked on his music career as part of the critically acclaimed East Coast hip hop group A Tribe Called Quest. John Bush of AllMusic called him 'the best rapper/producer in hip-hop history,' while editors of About.com placed him #17 on their list of the Top 25 Hip-Hop Producers, as well as placing him #38 on their list of the Top 50 MCs of Our Time. In 2012, The Source ranked him #20 on their list of the Top 50 Lyricists of All Time.",
            img: './assets/images/bio/qtip.jpg'
        },
        tpain = {
            name: 'TPAIN',
            bio: "Faheem Rashad Najm (born September 30, 1985), better known by his stage name T-Pain, is an American singer, rapper, songwriter, and record producer. His debut album, Rappa Ternt Sanga, was released in 2005. In 2007, T-Pain released his second album Epiphany, which reached number one on the US Billboard 200 chart. His third album, Thr33 Ringz, was released in 2008. T-Pain has earned two Grammy Awards, alongside artists Kanye West and Jamie Foxx respectively.",
            img: './assets/images/bio/tpain.jpg'
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
    asideBio: '',
    asideImg: '',

    //  ints
    gamesPlayed: 0,
    gamesWon: 0,
    guessChances: 15,
    wordIndex: 0,

    //  bool
    gameStarted: false,
    gameOver: false,

    //  methods
    pickWord: function () {
        this.wordIndex = Math.floor(Math.random() * this.hangmanWords.length);
        var word = this.hangmanWords[this.wordIndex].name; //pics rando word from list
        this.asideBio = this.hangmanWords[this.wordIndex].bio;
        this.asideImg = this.hangmanWords[this.wordIndex].img;
        this.hangmanWords.splice(this.wordIndex, 1);
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
            if (this.gameStarted != true) {
                $('#game-start').toggleClass("typing");
                $('#game-start').text("hey man can you help me out im tryna remember these artists...");
                $('.dialog-start').text('');
                $('#kanye-instructions').delay(3000).queue(function () {
                    $('#kanye-instructions').toggleClass("typing").dequeue();
                    $('#kanye-instructions').text('press a key and help a kanye out...').dequeue();
                });
                this.play();
            }
            this.gameStarted = true;
            this.pickedWord = this.pickWord();
            this.pickedWordStatic = this.pickedWord;
            this.setWord(this.pickedWord);
            userGoat.toggleClass("shake");
            userGoat.delay(4500).queue(function () {
                userGoat.removeClass("shake").dequeue();
            });
            userInstructions.toggleClass("typing");
            userInstructions.delay(2000).queue(function () {
                userInstructions.removeClass("typing").dequeue();
            });
            userInstructions.text('who be on my mind?');
            userGameLettersInfo.text('letters guessed');
            userWordToGuess.text(this.hiddenWord);
            userGamesPlayed.text(this.gamesPlayed);
            userGamesWon.text(this.gamesWon);
            userGuessChances.text(this.guessChances);
            userGuessedLetters.text(this.guessedLetters);
        }
    },

    //resets needed variables for fresh round
    reset: function () {
        this.guessChances = 15;
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
    },

    //changes text and image for bio
    fillBio: function (index) {
        this.fillImg(index);
        userAsideContent.text(this.asideBio);
    },

    //clears bio for reset
    clearBio: function () {
        $('.bio-image').remove();
        userAsideContent.empty();
    },

    //supplies image for bio
    fillImg: function (index) {
        var bioImg = document.createElement("img");
        bioImg.src = this.asideImg;
        bioImg.className = "bio-image";
        userAsideImage.append(bioImg);
    },

    //plays music?
    play: function () {
        audio.volume = .005;
        audio.loop = true;
        audio.play();
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
                'kanye is tired, he says "you get a "' +
                game.gamesWon +
                '/20');
            userInstructions.text("kanye gotta sleep");
            userGamesPlayed.text(game.gamesPlayed);
            userGamesWon.text(game.gamesWon);
            userGameFinishedWord.text(game.pickedWordStatic);
        }
        //  if out of guesses, show bio, and reinitialize game for next round
        else if (game.guessChances === 0) {
            userGameFinishedWord.text(game.pickedWordStatic);
            game.fillBio(game.wordIndex);
            game.reset();
        }
        //  if game is won, ie. wordLetters is empty, show bio and inc wins + games played
        else if (game.wordLetters.length <= 0 && game.gameStarted !== false) {
            game.gamesWon++;
            userGameFinishedWord.text(game.pickedWordStatic);
            game.clearBio();
            game.fillBio(game.wordIndex);
            game.reset();
        }
    }
};

