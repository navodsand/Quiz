let currquestion = 0;
let score = 0;

const qcontainer = document.getElementById("q-container");
const qelement = document.getElementById("question");
const anelement = document.getElementById("answers");
const resElement = document.getElementById("res");
const scoreElement = document.getElementById("score");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", SubAnswer);

const questions = [
  {
    question:
      "Which of the following is an example of a hybrid vehicle?",
    answers: [" Ford Mustang", "Toyota Prius", "Chevrolet Silverado", "Jeep Wrangler"],
    correctAnswer: "Toyota Prius",
  },
  {
    question: "What does ABS stand for in terms of vehicle safety?",
    answers: [
      "Advanced Braking System",
      "Anti-Lock Braking System",
      "Automatic Brake System",
      "Active Braking Solution",
    ],
    correctAnswer: "Anti-Lock Braking System",
  },
  {
    question:
      "Which of the following is the primary component responsible for igniting the fuel-air mixture in a gasoline engine?",
    answers: ["Spark Plug", "Carburetor", "Piston", "Crankshaft"],
    correctAnswer: "Spark Plug",
  },
  {
    question: "What is the function of a catalytic converter in a vehicle?",
    answers: [
      "To control the vehicle's speed",
      "To convert harmful gases into less harmful emissions",
      "To regulate the engine's temperature",
      "To improve fuel efficiency",
    ],
    correctAnswer: "To convert harmful gases into less harmful emissions",
  },
  {
    question: "What does RPM stand for in relation to a vehicle's engine?",
    answers: ["Revolutions Per Mile", "Rotations Per Minute", "Revolutions Per Minute", "Rotations Per Mile"],
    correctAnswer: "Revolutions Per Minute",
  }
];

function DispQuestion() {
  const current = questions[currquestion];
  qelement.textContent = current.question;
  anelement.innerHTML = "";

  current.answers.forEach((choice, index) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.onclick = (event) => selectAnswer(event);
    anelement.appendChild(button);
  });
}

function selectAnswer(event) {
  const selectButton = document.querySelector(".selected");
  if (selectButton) {
    selectButton.classList.remove("selected");
  }
  event.target.classList.add("selected");

  
  const choiceButtons = document.querySelectorAll("#answers button");
  choiceButtons.forEach((button) => {
    button.style.backgroundColor = "";
    button.style.color = "";
  });

  
  event.target.style.backgroundColor = "#fff";
  event.target.style.color = "#110303";
}

function SubAnswer() {
  const selectedAnswer = document.querySelector("button.selected");

  if (!selectedAnswer) {
    resElement.textContent = "Please select an answer.";
    return;
  }

  const userAnswer = selectedAnswer.textContent;
  const correctAnswer = questions[currquestion].correctAnswer;

  if (userAnswer == correctAnswer) {
    score++;
    resElement.textContent = "Correct!";
    resElement.style.color = "green";
  } else {
    resElement.textContent = "Incorrect!";
    resElement.style.color = "red";
  }

  currquestion++;

  if (currquestion < questions.length) {
    DispQuestion();
  } else {
    DispScore();
  }
}

function DispScore() {
  scoreElement.textContent = `Your score: ${score}/${questions.length}`;
  scoreElement.style.color = "green";
  
}

DispQuestion();
