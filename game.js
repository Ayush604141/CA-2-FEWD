// Required HTML DOM Elements from the Game
const hint = document.getElementById("hint-container");
const tries = document.getElementById("tries")
const Button = document.getElementById("buttons")
var space1 = document.getElementById("number1");
var space2 = document.getElementById("number2");
var space3 = document.getElementById("number3");
var space4 = document.getElementById("number4");
var space5 = document.getElementById("number5");
Button.onclick = SpaceCheck;

var audio = new Audio("./assets/music/Game Page.mp3")
window.onload = audio.play();



// Required variables
var Word_now;
var TriesLeft = 5;
var WinPosition;
var Score = 0;
var sp1=0;
var sp2=0;
var sp3=0;
var sp4=0;
var sp5=0;




// Random Array for Words.
var arr = 
[
    {Word:"KNIFE"
    ,Hint:"Used to Cut things"},
    {Word:"STORE"
    ,Hint:"A way to safeguard things"},
    {Word:"GRAND"
    ,Hint:"Something not simple"},
    {Word:"CANDY"
    ,Hint:"First word of a famous tile-matching game"},
    {Word:"TABLE"
    ,Hint:"You can't sit on it nut you can still eat on it"},
    {Word:"MOUSE"
    ,Hint:"Well I am confused between a rodent and a machine"},
    {Word:"APPLE"
    ,Hint:"Doctors generally stay away"},
    {Word:"PLATE"
    ,Hint:"You can eat on this and wear this"},
    {Word:"XEROX"
    ,Hint:"Printing is Costly but maybe this is not"},
    {Word:"SLATE"
    ,Hint:"Blackboards are way too big for a kid"},
    {Word:"DIARY"
    ,Hint:"A kind of book but swap it's 2 letters and It will give you Milk"},
    {Word:"STAND"
    ,Hint:"Well Every Bus have it"},
    {Word:"CHAIR"
    ,Hint:"Has four legs but no feet and two arms but no hand"},
    {Word:"BLACK"
    ,Hint:"One of the most liked colors"},
    {Word:"WORDS"
    ,Hint:"You may use it but never know it's impact"},
    {Word:"BLOCK"
    ,Hint:"Never irritate a girl online"}
]



// generating random word for the game.
function randomWord(){
    WinPosition = 0;
    var index = Math.floor(Math.random() * arr.length)
    Word_index = arr[index]
    hint_now = Word_index.Hint;
    Word_now = Word_index.Word;
    hint.innerHTML = hint_now;
    arr.splice(index,1)
}
document.onload = randomWord();



// Checking for the word
function SpaceCheck(){
    if(sp1==0)
    {
        if(space1.value == Word_now[0])
        {
            space1.style.backgroundColor = "#1bb295"
            WinPosition++;
            sp1++;
        }
        else
        {
            // Space for timer.
            space1.value = "";
        }
    }
    if(sp2==0)
    {
        if(space2.value == Word_now[1])
        {
            space2.style.backgroundColor = "#1bb295";
            WinPosition++;
            sp2++;
        }
        else
        {
            // Space for timer.
            space2.value = "";
        }
    }
    if(sp3==0)
    {
        if(space3.value == Word_now[2])
        {
            space3.style.backgroundColor = "#1bb295";
            WinPosition++;
            sp3++;
        }
        else
        {
            // Space for timer.
            space3.value = "";
        }
    }
    if(sp4==0)
    {
        if(space4.value == Word_now[3])
        {
            space4.style.backgroundColor = "#1bb295";
            WinPosition++;
            sp4++;
        }
        else
        {
            // Space for timer.
            space4.value = "";
        }
    }
    if(sp5==0)
    {
        if(space5.value == Word_now[4])
        {
            space5.style.backgroundColor = "#1bb295";
            WinPosition++;
            sp5++;
        }
        else
        {
            // Space for timer.
            space5.value = "";
        }
    }
    check();
}

// Checking for the Correct Answer.
function check(){
    if(WinPosition==5)
    {
        console.log(WinPosition)
        Score+=10;
        console.log(Score)
        reset();
        randomWord();
    }
    else
    {
        TriesLeft--;
        tries.innerText = TriesLeft;
        if(TriesLeft==0)
        {
            localStorage.setItem("Word",Word_now);
            localStorage.setItem("Score",Score);
            window.location.assign("gameover.html");
        }
    }
}


// Reseting the game after every play.
function reset(){
    space1.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
    space2.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
    space3.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
    space4.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
    space5.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
    space1.value = "";
    space2.value = "";
    space3.value = "";
    space4.value = "";
    space5.value = "";
    sp1 = 0;
    sp2 = 0;
    sp3 = 0;
    sp4 = 0;
    sp5 = 0;    
}


// Building a timer
var time;
var timerId;

function startTimer() {
    time = 2;
    timerId = setInterval(() => {
    time--;
    if (time == 0)
        {
            color_here = "green"
        }
    }, 1000);
}

// var time;
// var timerId;

// function startTimer2() {
//     time = 2;
//     timerId = setInterval(() => {
//     time--;
//     if (time == 0)
//         {
//             color_here = "green"
//         }
//     }, 1000);
// }



