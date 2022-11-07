// Making Play-button Functional
const playButton = document.getElementById("play-button");
playButton.onclick = PlayNow;
var Name;
var NickName;
var audio = new Audio("./assets/music/FrontPage.mp3")
audio.play();
function PlayNow(){
    Name = document.getElementById("name").value;
    NickName = document.getElementById("nickname").value;
    if(Name != "" && NickName != ""){
        localStorage.setItem("Name",Name);
        localStorage.setItem("NickName",NickName);
        window.location.assign("GamePlay.html");
    }
    else{
        alert("Please input all field")
    }
}
