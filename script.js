var startButton = document.querySelector("#button1");
var questions = [
  {
    question1: "Commonly used data types do not include:",
    answers: [
      { text: "strings", correct: false },
      { text: "alerts", correct: true },
      { text: "numbers", correct: false },
      { text: "booloeans", correct: false },
    ],
  },
  {
    question2: "Arrays is JavaScript can be used to store ___.",
    answers: [
      { text: "booleans", correct: false },
      { text: "numbers and strings", correct: false },
      { text: "other arrays", correct: false },
      { text: "all of the above", correct: true },
    ],
  },
  {
    question3:
      "A very useful tool used during developement and debugging for printing content to the debugger is:",
    answers: [
      { text: "console.log", correct: true },
      { text: "terminal/bash", correct: false },
      { text: "JavaScript", correct: false },
      { text: "for loops", correct: false },
    ],
  },
  {
    question4: "The condition in an if/else statement is enclosed within:",
    answers: [
      { text: "curly brackets", correct: false },
      { text: "parentheses", correct: true },
      { text: "square brackets", correct: false },
      { text: "quotes", correct: false },
    ],
  },
  {
      question5: "String values must be enclosed within _____ when being assigned to variables:",
      answers: [
          { text: "commas", correct: false },
          { text: "parentheses", correct: false },
          { text: "quotes", correct: true },
          { text: "curly brackets", correct: false }

      ]
  }
];

startButton.addEventListener("click", startGame);

function startGame() {
  console.log("started");
}
