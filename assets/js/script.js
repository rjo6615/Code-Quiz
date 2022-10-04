var startBtn  = document.querySelector("#start");
var question1 = "First Question?";

function writeQuestion() {
var questionText = document.getElementById("question");
questionText.textContent = question1;
startBtn.style.display = 'none';

};
startBtn.addEventListener("click", writeQuestion);