// Variable assignments
var startBtn  = document.querySelector("#start");
var choiceBtn  = document.querySelector(".card-footer");
var choiceBtn1  = document.querySelector("#choice1");
var choiceBtn2  = document.querySelector("#choice2");
var choiceBtn3  = document.querySelector("#choice3");
var choiceBtn4  = document.querySelector("#choice4");
var questionText = document.getElementById("question");
var value = document.getElementById("solution");

// Question and Answer Variables
var questionsPos = 0;
var currAnswers = 0;
var correctAnswer = 0;
// All questions
var questions = ["First Question", "Second Question", "Third Question", "Fourth Question", 
"Fifth Question", "Sixth Question", "Seventh Question", "Eighth Question", "Ninth Question", "Tenth Question"];

// All question answers
var q1answers = ["Yes", "No", "No", "No"];
var q2answers = ["No", "Yes", "No", "No"];
var q3answers = ["Yes", "No", "No", "No"];
var q4answers = ["No", "No", "No", "Yes"];
var q5answers = ["No", "Yes", "No", "No"];
var q6answers = ["No", "No", "No", "Yes"];
var q7answers = ["Yes", "No", "No", "No"];
var q8answers = ["No", "No", "Yes", "No"];
var q9answers = ["No", "No", "No", "Yes"];
var q10answers = ["No", "No", "Yes", "No"];
var answersArray = [q1answers, q2answers, q3answers, q4answers, q5answers, q6answers, q7answers, q8answers,
     q9answers, q10answers];
// Position of answers according to arrays above
var correctArray = [0, 1, 0, 3, 1, 3, 0, 2, 3, 2];
var btnArray = [choiceBtn1, choiceBtn2, choiceBtn3, choiceBtn4];
var correctChosen;


// will have to run a function that starts the timer and call the writeQuestion from that
startBtn.addEventListener("click", startTimer);

function startTimer() {
    startCountdown(seconds);
    writeQuestion();
    value.textContent = "Select Answer";
};

function wrongAnswer() {
    choiceBtn1.addEventListener("click", wrong);
    choiceBtn2.addEventListener("click", wrong);
    choiceBtn3.addEventListener("click", wrong);
    choiceBtn4.addEventListener("click", wrong);
};

wrongAnswer();

function writeQuestion() {
questionText.textContent = questions[questionsPos];
startBtn.style.display = 'none';
choiceBtn.style.display = 'inline-block';
choiceBtn1.textContent = (answersArray[currAnswers])[0];
choiceBtn2.textContent = (answersArray[currAnswers])[1];
choiceBtn3.textContent = (answersArray[currAnswers])[2];
choiceBtn4.textContent = (answersArray[currAnswers])[3];
// Sets correct answer to button
var correctChoice = (correctArray[correctAnswer]);
correctChosen = (btnArray[correctChoice]);
correctChosen.removeEventListener("click", wrong);
correctChosen.addEventListener("click", correct);
};

function correct() {
value.textContent = "Correct!";
correctChosen.removeEventListener("click", correct);
wrongAnswer();
questionsPos++;
currAnswers++;
correctAnswer++;
writeQuestion();
};

function wrong() {
value.textContent = "Wrong!";
correctChosen.removeEventListener("click", correct);
wrongAnswer();
questionsPos++;
currAnswers++;
correctAnswer++;
writeQuestion();
};

//Timer
var seconds = 59;
function startCountdown(seconds) {
    let counter = seconds;
      
    const interval = setInterval(() => {
      var value = document.getElementById("timer");
      value.textContent = counter;
      console.log(counter);
      counter--;
        
      if (counter < 0 ) {
        clearInterval(interval);
      value.textContent = "Times up!";
      }
    }, 1000);
  };  