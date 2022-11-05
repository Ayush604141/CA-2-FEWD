const message = document.getElementById("message")
var score = document.getElementById("score")
const replayButton = document.getElementById("replay")
var audio = new Audio("./assets/music/EndPage.mp3")
window.onload = audio.play();
if(score >= 100)
{
    message.innerText = "You Played Well"
}
else{
    message.innerText = "Sorry Pal, Better Luck Next Time"
}

var Score_update = localStorage.getItem("Score")
var Word_lost = localStorage.getItem("Word")
var Player_name = localStorage.getItem("Name")
score.innerText = Score_update;

replayButton.onclick = replay;

function replay(){
    window.location.assign("index.html");
}