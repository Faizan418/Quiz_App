const questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<scripting>", "<script>", "<js>", "<javascript>"],
    answer: "<script>",
  },

  {
    question: "How do you write 'Hello World' in an alert box?",
    options: [
      "alert('Hello World');",
      "alertBox('Hello World');",
      "msg('Hello World');",
      "msgBox('Hello World');",
    ],
    answer: "alert('Hello World');",
  },

  {
    question: "How do you create a function in JavaScript?",
    options: [
      "function myFunction()",
      "function = myFunction()",
      "function:myFunction()",
      "other",
    ],
    answer: "function = myFunction()",
  },

  {
    question: "How do you call a function named 'myFunction'?",
    options: [
      "myFunction()",
      "call function myFunction()",
      "call myFunction()",
      "oher",
    ],
    answer: "myFunction()",
  },

  {
    question: "How to write an IF statement in JavaScript?",
    options: ["if i = 5 then", "if i = 5", "if (i == 5)", "if i == 5 then"],
    answer: "if (i == 5)",
  },

  {
    question:
      "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    options: ["if (i <> 5)", "if i <> 5", "if (i != 5)", "if i =! 5 then"],
    answer: "if (i != 5)",
  },

  {
    question: "",
    options: [
      "while i = 1 to 10",
      "while (i <= 10; i++)",
      "while (i <= 10)",
      "other",
    ],
    answer: "How does a WHILE loop start?",
  },

  {
    question: "How does a FOR loop start?",
    options: [
      "for i = 1 to 5",
      "for (i <= 5; i++)",
      "for (i = 0; i <= 5; i++)",
      "for (i = 0; i <= 5)",
    ],
    answer: "for (i = 0; i <= 5; i++)",
  },

  {
    question: "What is the correct way to write a JavaScript array?",
    options: [
      "var colors = 'red', 'green', 'blue'",
      "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
      "var colors = (1:'red', 2:'green', 3:'blue')",
      "var colors = ['red', 'green', 'blue']",
    ],
    answer: "var colors = ['red', 'green', 'blue']",
  },

  {
    question: "How do you round the number 7.25, to the nearest integer?",
    options: ["Math.round(7.25)", "Math.rnd(7.25)", "rnd(7.25)", "round(7.25)"],
    answer: "Math.round(7.25)",
  },

  {
    question: "How do you find the number with the highest value of x and y?",
    options: ["ceil(x, y)", "Math.max(x, y)", "top(x, y)", "Math.ceil(x, y)"],
    answer: "Math.max(x, y)",
  },

  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: ["onclick", "onchange", "onmouseover", "onmouseclick"],
    answer: "onclick",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  answerButtons.forEach((button, index) => {
    button.textContent = currentQuestion.options[index];
    button.onclick = () => checkAnswer(button.textContent);
  });
}

function checkAnswer(selectedOption) {
  const correctAnswer = questions[currentQuestionIndex].answer;
  if (selectedOption === correctAnswer) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  nextButton.classList.add("hidden");
  resultElement.classList.remove("hidden");
  resultElement.textContent = `You scored ${score} out of ${questions.length}`;
}

showQuestion();
