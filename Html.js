const questions = [
  {
    question: "What does HTML  stand for?",
    options: [
      "Hyper Text Martup Language",
      "Home Tool Markup Language",
      " Hyperlinks Text Markup Language",
      " Hyperlinks Markup Language Text",
    ],
    answer: "Hyper Text Martup Language",
  },
  {
    question: "Who is making the Web Standards",
    options: ["The World Wide Web Consortium", "Microsoft", "Moilla", "Google"],
    answer: "The World Wide Web Consortium",
  },
  {
    question: "Choose the correct HTMl element for the largest heading",
    options: ["<h6>", "<h1>", "<head>", "<heading>"],
    answer: "<h1>",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<br>", "<break>", "<IB>", "<hr>"],
    answer: "<br>",
  },
  {
    question: "Choose the correct HTML element to define important text ?",
    options: ["<i>", "<strong>", "<b>", "<important!>"],
    answer: "<strong>",
  },
  {
    question: "Choose the correct HTML element to define emphasized text ?",
    options: ["<em>", "<i>", "<me>", "<italic>"],
    answer: "<em>",
  },
  {
    question: "What is the correct HTML for creating a hyperlink ?",
    options: [
      "<a url='https//abc'></a>",
      "<a href='https//abc'></a>",
      "<a link='https//abc'></a><a></a>",
      "<a name='https//abc'></a>",
    ],
    answer: "<a href='https//abc'></a>",
  },
  {
    question: "Which character is used to indicate an end tag ?",
    options: ["*", "/", "^", ":"],
    answer: "/",
  },
  {
    question: "How can you open a link in a new tab/browser window ?",
    options: [
      "<a href='https//abc' target='_blank'>",
      "<a href='https//abc' target='_new'>",
      "<a href='https//abc' blank>",
      "<a href='https//abc' new>",
    ],
    answer: "<a href='https//abc' target='_blank'>",
  },
  {
    question: "Which of these elements are all <table> elements?",
    options: [
      "<thead> <body> <tr>",
      "<table> <tr> <tt>",
      "<table> <head> <tfoot>",
      "<table> <tr> <td>",
    ],
    answer: "<table> <tr> <td>",
  },
  {
    question: "How can you make a numbered list ?",
    options: ["<dl>", "<list>", "<ul>", "<ol>"],
    answer: "<ol>",
  },
  {
    question: "How can you make a bulleted list ?",
    options: ["<dl>", "<ol>", "<list>", "<ul>"],
    answer: "<ol>",
  },
  {
    question: "What is the correct HTML for making a checkbox ?",
    options: [
      "<check>",
      "<input type='check'>",
      "<inpt type='checkbox'>",
      "<checkbox>",
    ],
    answer: "<inpt type='checkbox'>",
  },
  {
    question: "What is the correct HTML for making a drop-down list",
    options: [
      "<list>",
      "<input type='dropdown'>",
      "<input type='seletor'>",
      "<select>",
    ],
    answer: "<select>",
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
