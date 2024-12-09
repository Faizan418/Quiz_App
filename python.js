const questions = [
  {
    question: "What is a correct syntax to output 'Hello World' in Python?",
    options: [
      "p('Hello World')",
      "echo('Hello World');",
      "echo 'Hello World'",
      "print('Hello World')",
    ],
    answer: "print('Hello World')",
  },

  {
    question: "How do you insert COMMENTS in Python code?",
    options: [
      "#This is a comment",
      "/*This is a comment*/",
      "//This is a comment",
      "///This is a comment///",
    ],
    answer: "#This is a comment",
  },

  {
    question: "Which one is NOT a legal variable name?",
    options: ["Myvar", "my_var", "_myvar", "my-var"],
    answer: "my-var",
  },

  {
    question: "Which of these collections defines a LIST?",
    options: [
      "'name': 'apple', 'color': 'green'}",
      "['apple', 'banana', 'cherry']",
      "{'apple', 'banana', 'cherry'}",
      "('apple', 'banana', 'cherry')",
    ],
    answer: "['apple', 'banana', 'cherry']",
  },

  {
    question:
      "What is the correct syntax to output the type of a variable or object in Python?",
    options: [
      "print(typeOf(x))",
      "print(typeof x)",
      "print(type(x))",
      "print(typeof(x))",
    ],
    answer: "print(type(x))",
  },

  {
    question: "What is the correct way to create a function in Python?",
    options: [
      "create myFunction():",
      "function myfunction():",
      "def myFunction():",
      "other",
    ],
    answer: "def myFunction():",
  },

  {
    question:
      "What is a correct syntax to return the first character in a string?",
    options: [
      "x = sub('Hello', 0, 1)",
      "x = 'Hello'[0]",
      "x = 'Hello'.sub(0, 1)",
      "other",
    ],
    answer: "x = 'Hello'[0]",
  },

  {
    question:
      "Which method can be used to return a string in upper case letters?",
    options: ["toUpperCase()", "upper()", "uppercase()", "upperCase()"],
    answer: "upper()",
  },

  {
    question: "hich operator is used to multiply numbers?",
    options: ["#", "%", "*", "x"],
    answer: "*",
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
