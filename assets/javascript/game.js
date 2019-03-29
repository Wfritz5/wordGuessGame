// variables
var word = ["apple", "pear", "peach", "banana", "strawberry", "orange", "kiwi", "mango", "honeydew", "watermelon", "grapes",
"lemon", "pineapple", "blueberry", "broccolli" ];
var actualWord = "";
var letters = [];
var output = [];
var wrongLetters = [];

var num = 0;
var guessesLeft = 12;
var losses = 0;
var wins = 0;

// random word generator
function gameStart() {
  actualWord = word[Math.floor(Math.random() * word.length)];
  letters = actualWord.split("");
  num = letters.length;

  // console.log(num);
  // console.log(letters);
  // console.log(actualWord)
  //  guesses left
  guessesLeft = 6;
  wrongLetters = [];
  output = [];
  // for loop to get number of letters on screen
  for (var i = 0; i < num; i++) {
    output.push("_")
    console.log(output)
  }
  //  grabbing elements from html
  document.getElementById("secretAnswer").innerHTML = output.join(" ");
  document.getElementById("game").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("guessesLeft").innerHTML = guessesLeft;

};

// check guesses to see if guesses are in the answer
function checkAnswer(letter) {

  var letterInWord = false;

  for (var j = 0; j < num; j++) {

    if (letter == actualWord[j]) {
      letterInWord = true;
    }
  }

  if (letterInWord) {
    for (var j = 0; j < num; j++) {
      if (actualWord[j] == letter) {
        output[j] = letter;
        console.log(output)
      }
    }
  } else {
    if (!wrongLetters.includes(letter)) {
      wrongLetters.push(letter);
      guessesLeft--;

    }
    // wrongLetters.push(letter);
    // guessesLeft--;
  }
  // if guess has already been guessed then break?
};


gameStart();


function rounds() {
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  document.getElementById("answersGuessed").innerHTML = wrongLetters;
  document.getElementById("secretAnswer").innerHTML = output.join(" ");

  if (letters.toString() == output.toString()) {
    wins++
    document.getElementById("game").innerHTML = wins;
    play();
  } else if (guessesLeft === 0) {
    losses++
    document.getElementById("losses").innerHTML = losses;
    gameStart();
  }
};

//event listener
document.onkeypress = function (event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(userGuess);
  checkAnswer(userGuess);
  rounds();
};


//  getting images to pop up after correct guess

function play() {
  if (actualWord == "apple") {
    var picture = "<img src='https://raw.githubusercontent.com/Wfritz5/wordGuessGame/master/assets/images/apple.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (actualWord == "pear") {
    var picture = '<img src="https://raw.githubusercontent.com/Wfritz5/wordGuessGame/master/assets/images/pear.jpg">'
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (actualWord == "peach") {
    var picture = "<img src='https://raw.githubusercontent.com/Wfritz5/wordGuessGame/master/assets/images/peach.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (actualWord.toString() == "banana") {
    var picture = "<img src='https://raw.githubusercontent.com/Wfritz5/wordGuessGame/master/assets/images/banana.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (actualWord == "strawberry") {
    var picture = "<img src='https://raw.githubusercontent.com/Wfritz5/wordGuessGame/master/assets/images/strawberry.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (actualWord == "orange") {
    var picture = "<img src='https://raw.githubusercontent.com/Wfritz5/wordGuessGame/master/assets/images/orange.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();

  } else if (actualWord == "kiwi") {
    var picture = "<img src='https://raw.githubusercontent.com/Wfritz5/wordGuessGame/master/assets/images/kiwi.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (actualWord == "mango") {
    var picture = "<img src='https://raw.githubusercontent.com/Wfritz5/wordGuessGame/master/assets/images/mango.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (actualWord == "honeydew") {
    var picture = "<img src='https://raw.githubusercontent.com/Wfritz5/wordGuessGame/master/assets/images/honeydew.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (actualWord == "watermelon") {
    var picture = "<img src='https://raw.githubusercontent.com/Wfritz5/wordGuessGame/master/assets/images/watermelon.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();  
  } else if (actualWord == "grapes") {
      var picture = "<img src='https://raw.githubusercontent.com/Wfritz5/wordGuessGame/master/assets/images/grapes.jpg'>"
      document.querySelector("#picture").innerHTML = picture;
      gameStart();
    } else if (actualWord == "lemon") {
      var picture = "<img src='https://raw.githubusercontent.com/Wfritz5/wordGuessGame/master/assets/images/lemon.jpg'>"
      document.querySelector("#picture").innerHTML = picture;
      gameStart();
    } else if (actualWord == "pineapple") {
      var picture = "<img src='https://raw.githubusercontent.com/Wfritz5/wordGuessGame/master/assets/images/pineapple.jpg'>"
      document.querySelector("#picture").innerHTML = picture;
      gameStart();
    } else if (actualWord == "blueberry") {
      var picture = "<img src='https://raw.githubusercontent.com/Wfritz5/wordGuessGame/master/assets/images/blueberry.jpg'>"
      document.querySelector("#picture").innerHTML = picture;
      gameStart();
    } else if (actualWord == "broccolli") {
      var picture = "<img src='https://raw.githubusercontent.com/Wfritz5/wordGuessGame/master/assets/images/broccolli.jpg'>"
      document.querySelector("#picture").innerHTML = picture;
      gameStart();
    
  }

};
// END GAME

















var audio = "<audio autoplay = 'autoplay' >" + "<source src=''></audio>"
document.querySelector("#audio").innerHTML = audio;