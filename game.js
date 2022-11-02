const Okay_button = document.getElementById("button-click")
const hint = document.getElementById("game-hint")

Okay_button.onclick = hint_given;
var Correct_count = 0;
var Words = ["Sabre","Weigh","Seven","Spiny"]
function hint_given(){
    let randomInt = Math.floor(Math.random()*Words.length);
    hint.innerText = Words[randomInt][1];
}

