var readlineSync = require("readline-sync");

var score = 0;

//all time highscores
var highScores = [
  {
    name: "ashish",
    score: 2,
  },

  {
    name: "gourav",
    score: 1,
  },
];

function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log(
    "Welcome " + userName + " Let's play beginner progaming quiz on javascript:"
  );
}

// array of objects
var questions = [
  {
    question: `Inside which HTML element do we put the JavaScript?
   a) <js>
   b) <script> 
   c) <scripting>
   d) <javascript> 
   `,
    answer: "b",
  },
  {
    question: `Which is the correct way to write a comment in JavaScript?
  a) {# ... #}
  b) <!--- .... ---!>
  c)  // ....
  d)  \\ ...
  `,
    answer: "c",
  },
  {
    question: `How do you create a new function in JavaScript?
  a) new.function() {}
  b) function myFunction() {}
  c) function:myFunction() {}
  d) function = myFunction() {}
  `,
    answer: "b",
  },
];

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    // branching
    console.log("right!");
    score = score + 1;
  } else {
    console.log("wrong!");
  }

  console.log("current score: ", score);
  console.log("-------------");
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function showScores() {
  console.log("Good game! You SCORED: ", score);
  console.log(
    "Check out the high scores, if you should be there ping me and I'll update it"
  );

  highScores.map((score) => console.log(score.name, " : ", score.score));
}

welcome();
game();
showScores();
