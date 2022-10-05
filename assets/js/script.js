// Variable assignments
var startBtn  = document.querySelector("#start");
var choiceBtn  = document.querySelector(".card-footer");
var choiceBtn1  = document.querySelector("#choice1");
var choiceBtn2  = document.querySelector("#choice2");
var choiceBtn3  = document.querySelector("#choice3");
var choiceBtn4  = document.querySelector("#choice4");
var questionText = document.getElementById("question");

// Question and Answer Variables
var questionsPos = 0;
var currAnswers = 0;
var questions = ["First Question", "Second Question", "Third Question", "Fourth Question"];

var q1answers = ["Yes", "No", "No", "No"];
var q2answers = ["No", "Yes", "No", "No"];
var q3answers = ["No", "No", "Yes", "No"];
var q4answers = ["No", "No", "No", "Yes"];
var answersArray = [q1answers, q2answers, q3answers, q4answers];

// will have to run a function that starts the timer and call the writeQuestion from that
startBtn.addEventListener("click", writeQuestion);


function writeQuestion() {
questionText.textContent = questions[questionsPos];
startBtn.style.display = 'none';
choiceBtn.style.display = 'inline-block';
choiceBtn1.textContent = (answersArray[currAnswers])[0];
choiceBtn2.textContent = (answersArray[currAnswers])[1];
choiceBtn3.textContent = (answersArray[currAnswers])[2];
choiceBtn4.textContent = (answersArray[currAnswers])[3];
// Need to find way to decide if answer is correct or not
choiceBtn1.addEventListener("click", correct);


};

function correct() {
alert("Correct!");
questionsPos++;
currAnswers++;
writeQuestion();
};