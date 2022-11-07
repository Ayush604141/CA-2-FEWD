const message = document.getElementById("message")
var score = document.getElementById("score")
const replayButton = document.getElementById("replay")
var audio = new Audio("./assets/music/EndPage.mp3")
End_game = localStorage.getItem("Name");
audio.play();
var Score_update = localStorage.getItem("Score")
var Word_lost = localStorage.getItem("Word")
if(Score_update >= 100)
{
    message.innerText = "You Played Well";
}
else{
    message.innerText = "Sorry Pal, You didn't guess", Word_lost
}

score.innerText = End_game ,", You Scored", Score_update;

replayButton.onclick = replay;

function replay(){
    window.location.assign("index.html");
}
