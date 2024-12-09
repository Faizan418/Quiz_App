const questions = [
  {
    question: "What does CSS stand for?",
    options: [
      "Colorful Style Sheets",
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Casceding Styles Sheet",
    ],
    answer: "Casceding Styles Sheet",
  },

  {
    question:
      "What is the correct HTML for referring to an external style sheet?",
    options: [
      "<stylesheet>mystyle.css</stylesheet>",
      "<style src='mystyle.css'></style>",
      "nothing",
      "<link rel='stylesheet' type='text/css' href='mystyle.css'>",
    ],
    answer: "<link rel='stylesheet' type='text/css' href='mystyle.css'>",
  },

  {
    question:
      "Where in an HTML document is the correct place to refer to an external style sheet?",
    options: [
      "In the <head> section",
      "In the <body> section",
      "nothing",
      "At the end of the document",
    ],
    answer: "In the <head> section",
  },

  {
    question: " Which HTML tag is used to define an internal style sheet?",
    options: ["<style>", "<css>", "<script>", "1st and 3rd Both"],
    answer: "<style>",
  },

  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["style", "font", "class", "styles"],
    answer: "style",
  },

  {
    question: "Which is the correct CSS syntax?",
    options: [
      "{body:color=black;}",
      "body:color=black;",
      "body {color: black;}",
      "{body;color:black;}",
    ],
    answer: "body {color: black;}",
  },

  {
    question: "How do you insert a comment in a CSS file?",
    options: [
      "// this is a comment //",
      "/* this is a comment */",
      "// this is a comment",
      " 'this is a comment' ",
    ],
    answer: "/* this is a comment */",
  },

  {
    question: "Which property is used to change the background color?",
    options: ["background-color", "bgcolor", "color", "other"],
    answer: "background-color",
  },

  {
    question: "Which CSS property controls the text size?",
    options: ["text-size", "font-style", "text-style", "font-size"],
    answer: "font-size",
  },

  {
    question: "How do you display hyperlinks without an underline?",
    options: [
      "a {decoration:no-underline;}",
      "a {underline:none;}",
      "a {text-decoration:none;}",
      "a {text-decoration:no-underline;}",
    ],
    answer: "a {text-decoration:none;}",
  },

  {
    question:
      "How do you make each word in a text start with a capital letter?",
    options: [
      "text-style:capitalize",
      "transform:capitalize",
      "text-transform:capitalize",
      "You can't do that with CSS",
    ],
    answer: "text-transform:capitalize",
  },

  {
    question: "How do you select an element with id 'demo'?",
    options: ["demo", "*demo", ".demo", "#demo"],
    answer: "#demo",
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
