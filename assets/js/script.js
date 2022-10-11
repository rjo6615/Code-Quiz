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
var questions = ["What is HTML an abbreviation for?", "What does CSS stand for?", "What does FIFO stand for?", "In javascript how do you access an element using an id?", 
"What would be used to change the look of a page?", "What is used to structure the webpage?", "What can be used as a container for HTML elements?", "How do you convert a data set into a string using JSON?", "What function allows buttons to be clicked?", "What does HTTPS stand for?"];
// All question answers
var q1answers = ["Hyper Text Markup Language", "Hyperlinks Text Markup Language", "Home Tool Markup Language", "Hyper Tool Markup Language"];
var q2answers = ["Cats Still Stylin", "Cascading Style Sheets", "Constant Screaming Sounds", "Calibration Sensor Screening"];
var q3answers = ["First in first out", "First in fast out", "Fast in Furious out", "Fogot it Flipped out"];
var q4answers = ["document.grabElementById", "doc.getEleById", ".getElementById", "document.getElementById"];
var q5answers = ["Painting your monitor", "CSS", "Breaking you Monitor", "Buy a new computer"];
var q6answers = ["Plaster and superglue", "Hopes and Dreams", "The Spine", "HTML"];
var q7answers = ["Div", "Tuperware", "A Bowl", "My Fridge?"];
var q8answers = ["Woah JSON", "Stupify", "Stringify", "Convert string"];
var q9answers = ["Click", "Listen for Click", "addEventListener(mouse-click)", 'addEventListener("click")'];
var q10answers = ["Hype Time To Play Sims", "How To Teach People Swimming", "HyperText Transfer Protocol Secure", "How To Type Protocols Securely"];
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
    if (initials === "") {
      alert("Please enter your initials");
      gameOver();
    } else {
    scores.push([initials,counter]);
    scores.sort((a, b) => { 
      if(a[1] > b[1]) return -1;
      else if(a[1] < b[1]) return 1;
      else return 0
     } );
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
 };
 
 function showHighScores() {
  highScoreField.style.display = 'flex';
  var storedScores = JSON.parse(localStorage.getItem("highscore"));
  if (storedScores !== null) {
    scores = storedScores;
    scoreList.innerHTML = "";
    for (var i = 0; i < scores.length; i++) {
      var scoreSet= scores[i][0] + "-" + scores[i][1];  
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