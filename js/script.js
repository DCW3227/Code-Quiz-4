var quizQuestions = [
  {
    question: "Which is the smallest planet in our solar system?",
    options: ["Mercury", "Venus", "Earth", "Saturn"],
    correctAnswerIndex: 0
  },
  {
    question: "Which planet is the oldest in our solar system?",
    options: ["Venus", "Uranus", "Mars", "Jupiter"],
    correctAnswerIndex: 1
  },
  {
    question: "Which planet is closest in size to Earth?",
    options: ["Mars", "Saturn", "Venus", "Uranus"],
    correctAnswerIndex: 2 
  },
  {
    question: "How many planets in our solar system are larger than Earth?",
    options: ["3", "4", "1", "2"],
    correctAnswerIndex: 1
  },
  {
    question: "What are stars made of?", 
    options: ["Darkmatter", "Hot Gas", "Light", "Gravity"], 
    correctAnswerIndex: 1
  },
];

var currentQuestion = 0;
var questionElements = document.getElementsByClassName("question-text")
var answerOptions = document.getElementsByClassName("option")
var errorMessage = document.getElementById("error-message")

// Function to start the game
document.getElementById("start-button").addEventListener("click", startGame)
function startGame(event) { 
  var startButton = document.getElementById("start-button")
  var timerValue = document.getElementById("timer-value")
  var timeLeft = 60;
  timerValue.textContent = timeLeft;
  
  var countdown = setInterval(function() {
    timerValue.textContent = timeLeft
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(countdown)
      endQuiz() 
    }
  }, 1000)
  
  var quizTitle = document.getElementById("title")
  quizTitle.style.display = "none" 
  startButton.style.display = "none" 
  // Display the first question
  showQuestion(currentQuestion);
}

// Function to display a question
function showQuestion(index) {
  for (var i = 0; i < questionElements.length; i++) {
    var questionElement = questionElements[i].parentElement
    if (i === index) {
      questionElement.classList.remove("hidden")
    } else {
      questionElement.classList.add("hidden")
    }
  }
}


// Function to check the answer
function checkAnswer(selectedAnswerIndex) {
  var currentQuestionData = quizQuestions[currentQuestion];
  return selectedAnswerIndex === currentQuestionData.correctAnswerIndex
}

// Function to handle incorrect answer
function handleIncorrectAnswer() {
  errorMessage.textContent = "Oops! That's incorrect. Try again!"
  setTimeout(function() {
    errorMessage.textContent = "" 
  }, 2000)
}

// Function to handle answer selection
function handleAnswerSelection(event) {
  var selectedOption = event.target
  var selectedAnswerIndex = Array.prototype.indexOf.call(selectedOption.parentElement.children, selectedOption)

  if (checkAnswer(selectedAnswerIndex)) {
    currentQuestion++

    if (currentQuestion < quizQuestions.length) {
      showQuestion(currentQuestion)
    } else {
      endQuiz()
      return
    }
  } else {
    handleIncorrectAnswer();
  }

  // Hide the last question after answering//
  if (currentQuestion === quizQuestions.length - 1) {
    var lastQuestionElement = document.getElementById("question-" + currentQuestion);
    lastQuestionElement.style.display = "none";
  }
}

// Add click event listeners to answer options//
for (var i = 0; i < answerOptions.length; i++) {
  answerOptions[i].addEventListener("click", handleAnswerSelection)
}
//Function that determines what happens after all questions are asnwered//
function endQuiz() {
  var scoreForm = document.getElementById("score-form")
  var quizContainer = document.getElementById("quiz-container")
  var endquizMessage = document.getElementById("end-quiz-message")

  scoreForm.style.display = "block" // Show the score form
  quizContainer.style.display = "none"
  endquizMessage.textContent = "Thank you for playing! Please submit your high score."
}






























  
   
  
  
  
  
  
 
  
  
  
  
  
  
  




