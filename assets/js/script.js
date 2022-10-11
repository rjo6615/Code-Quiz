// Variable assignments
var startBtn  = document.querySelector("#start");
var textField  = document.querySelector(".card-body");
var highScoreField  = document.querySelector(".cardTest");
var highScoreBtn = document.querySelector(".highScoreBtn");
var showHighScoresBtn = document.querySelector(".showHighScoresBtn");
var clearHighScoresBtn = document.querySelector(".clearHighScoresBtn");
var choiceBtn  = document.querySelector(".card-footer");
var choiceBtn1  = document.querySelector("#choice1");
var choiceBtn2  = document.querySelector("#choice2");
var choiceBtn3  = document.querySelector("#choice3");
var choiceBtn4  = document.querySelector("#choice4");
var questionText = document.getElementById("question");
var solution = document.getElementById("solution");
var scoreList = document.querySelector("#score-list");


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
var scores = [];    

startBtn.addEventListener("click", startTimer);
showHighScoresBtn.addEventListener("click", showHighScores);
clearHighScoresBtn.addEventListener("click", clearHighScores);

function startTimer() {
    startCountdown(seconds);
    writeQuestion();
    solution.textContent = "Select Answer"; 
};

function wrongAnswer() {
    choiceBtn1.addEventListener("click", wrong);
    choiceBtn2.addEventListener("click", wrong);
    choiceBtn3.addEventListener("click", wrong);
    choiceBtn4.addEventListener("click", wrong);
};

wrongAnswer();

function writeQuestion() {
    if (questionsPos > 9) {
      return;
      };
questionText.textContent = questions[questionsPos];
startBtn.style.display = 'none';
choiceBtn.style.display = 'inline-block';
showHighScoresBtn.style.display = 'none'; 
clearHighScoresBtn.style.display = 'none'; 
highScoreField.style.display = 'none';
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
solution.textContent = "Correct!";
correctChosen.removeEventListener("click", correct);
wrongAnswer();
questionsPos++;
currAnswers++;
correctAnswer++;
writeQuestion();
};

function wrong() {
solution.textContent = "Wrong!";
correctChosen.removeEventListener("click", correct);
wrongAnswer();
questionsPos++;
currAnswers++;
correctAnswer++;
writeQuestion();
counter = counter - 10;
};

//Timer
var counter;
var seconds = 59;
function startCountdown(seconds) {
    counter = seconds;
    const interval = setInterval(() => {
      var value = document.getElementById("timer");
      value.textContent = "Timer: " + counter;      
      counter--;
      
      if (counter < 0) {
        clearInterval(interval);
      value.textContent = "Times up!";
      gameOver();
      } if (questionsPos > 9) {
        //stop timer and collect current time
        clearInterval(interval);
        value.textContent = "Timer: " + counter;        
        gameOver();
      }
    }, 1000);  
 }; 

 // gameOver function
 function gameOver() {
    if (counter < 0) {
        counter = 0;
    };
    questionText.textContent = "Game Over!";
    choiceBtn.style.display = 'none';   
    highScoreBtn.style.display = 'inline-block';
    textField.style.display = 'inline-block'; 
    document.getElementById("initials").value = "";
    highScoreBtn.addEventListener("click", saveHighScore); //submit button
 };
 
  function saveHighScore() {    
    var initials = document.querySelector("#initials").value; //retreive value of text field
    scores.push(initials + "-" + counter);
    scores.sort(); // attempting to sort array
    console.log(scores); // sort log
    localStorage.setItem("highscore", JSON.stringify(scores)); // add score value to local storage
    startBtn.style.display = 'inline-block';
    showHighScoresBtn.style.display = 'inline-block'; 
    clearHighScoresBtn.style.display = 'inline-block';
    highScoreBtn.style.display = 'none';
    textField.style.display = 'none';
    questionsPos = 0;
    currAnswers = 0;
    correctAnswer = 0;
    var value = document.getElementById("timer");
    value.textContent = "Timer: 60";  
    solution.textContent = "";
    questionText.textContent = "Click Start to begin";
    
 };
 
 function showHighScores() {
  highScoreField.style.display = 'inline-block';
  var storedScores = JSON.parse(localStorage.getItem("highscore"));
  if (storedScores !== null) {
    scores = storedScores;
    scoreList.innerHTML = "";
    for (var i = 0; i < scores.length; i++) {
      var scoreSet= scores[i];  
      var li = document.createElement("li");
      li.textContent = scoreSet;
      scoreList.appendChild(li);
    }
  } else {
    highScoreField.style.display = 'none';
  }
 };

 function clearHighScores() {
  highScoreField.style.display = 'none';
  while( scoreList.firstChild ){
    scoreList.removeChild( scoreList.firstChild );
  }
  localStorage.clear();
  scores = [];
 };