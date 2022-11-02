// Making Play-button Functional
const playButton = document.getElementById("button-play")
playButton.onclick = PlayNow;

function PlayNow(){
    window.location.assign("GamePlay.html")
}