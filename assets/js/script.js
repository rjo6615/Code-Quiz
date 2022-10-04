// Variable assignments
var startBtn  = document.querySelector("#start");
var choiceBtn  = document.querySelector(".card-footer");
var choiceBtn1  = document.querySelector("#choice1");
var choiceBtn2  = document.querySelector("#choice2");
var choiceBtn3  = document.querySelector("#choice3");
var choiceBtn4  = document.querySelector("#choice4");
var questionText = document.getElementById("question");
var answer1Text = document.getElementById("choice1");
var answer2Text = document.getElementById("choice2");
var answer3Text = document.getElementById("choice3");
var answer4Text = document.getElementById("choice4");

// Question and Answer Variables
var questionsPos = 0;
var currAnswers = 0;
var questions = ["First Question", "Second Question", "Third Question", "Fourth Question"];

var q1answers = ["Yes", "No", "No", "No"];
var q2answers = ["No", "Yes", "No", "No"];
var q3answers = ["No", "No", "Yes", "No"];
var q4answers = ["No", "No", "No", "Yes"];
var answersArray = [q1answers, q2answers, q3answers, q4answers];

startBtn.addEventListener("click", writeQuestion);


function writeQuestion() {
questionText.textContent = questions[questionsPos];
startBtn.style.display = 'none';
choiceBtn.style.display = 'inline-block';
answer1Text.textContent = (answersArray[currAnswers])[0];
answer2Text.textContent = (answersArray[currAnswers])[1];
answer3Text.textContent = (answersArray[currAnswers])[2];
answer4Text.textContent = (answersArray[currAnswers])[3];
// Need to find way to decide if answer is correct or not
choiceBtn1.addEventListener("click", correct);


};

function correct() {
alert("Correct!");
questionsPos++;
currAnswers++;
writeQuestion();
};