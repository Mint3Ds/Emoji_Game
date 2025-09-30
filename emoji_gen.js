const list = ['📜🐍', ' ☕💻📜', ' 🌐🐛',' 🧠🤖', ' ☁️💾', ' 🐞🔍', '🌐🎨🖌️', ' 📬🌐', '🔒🌐', '🐧💻', '🍎💻', '🪟💻', '🔴💎📜', '🧲💿', '🖨️📄', '📦⛓️', 'E🌐🛒', '🌐🚫', '✈️📵', '💻🦠', '🧑‍💻🍕☕', '🔵🖥️💀', '🔥🧱', '🎣✉️💻', '⚛️📜', '🕵️‍♂️💻', '🔙🚪', '🐛📝', '🤏🌿🌱', '🎮💻', '🎙️🔇', '🛜🏠', '0️⃣1️⃣0️⃣1️⃣', '🅱️🪙'] 
const listword = ['python', 'java', 'web crawler', 'Ai', 'cloud storage', 'debugging', 'web design or CSS', 'email', 'HTTPS',  'Linux', 'Mac', 'Windows', 'ruby', 'HDD', 'blockchain', "ecommerence", 'offline/ no internet', 'airplane mode', 'computer virus', 'hackathon', 'blue screen of death', 'firewall', 'Phishing', 'react', 'hacker', 'backdoor', 'bugreport', 'gaming computer', 'muted', 'wifi', 'binary','BitCoin']
let Score1 = 0;
let Score1E1 = document.getElementById("Score1");
let startingMinutes = 3;


let timer = startingMinutes * 60;


let timerE1 = document.getElementById("timer");


let winner = document.getElementById("winner");
let popup = document.getElementById("gameOverScreen");
let Player1 = "Player1";
let Player1text = document.getElementById("Player1text");
let Player2 = "Player2";
let Player2text = document.getElementById("Player2text");
let counter = list.length; //used for the cloned list
let tempList = list.slice(); //clone the original list to stop repeating emojis without removing items from original list

function popupfunction() {
    popup.classList.add("show"); //adds the class "show" into gameOverScreen class (to create transition effect)
}
function showConfetti() {
  confetti({
    particleCount: 250,
    spread: 100,
    origin: { y: 0.6 } // where it starts from (60% down the screen)
  });
}
function flashGreen() {
    let flash = document.getElementById("screen-flash");
    flash.style.opacity = 1;
    setTimeout(() => {
        flash.style.opacity = 0;
    }, 200); // fades back after 0.2s
}

function timerFunction(){
    countdown = setInterval(() => { //setInterval function performs the code inside every 1 second.
    const minutes = Math.floor(timer/60);
    let seconds = timer % 60;
    
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timerE1.textContent = `${minutes}:${seconds}`;
    timer--
    
    if (timer<0){
        clearInterval(countdown)
        if (Score1 > Score2) {
            winner.innerHTML = `Congratulations ${Player1}, you won!`
            popupfunction()
            showConfetti();
        } else if (Score2 > Score1) {
            winner.innerHTML = `Congratulations ${Player2}, you won!`
            popupfunction()
            showConfetti()
        } else {
             winner.innerHTML = "Great job! You guys tied"
            popupfunction()
        }
    }

    }, 1000);


}



function player1Score() { //playerscore is added with every click
    Score1++;
    Score1E1.textContent = Score1;
    flashGreen();
    
}
function player1Minus() { //playerscore is minus with every click
    Score1--;
    Score1E1.textContent = Score1;
}

let Score2 = 0;
let Score2E1 = document.getElementById("Score2");

function player2Score() {
    Score2++;
    Score2E1.textContent = Score2;
    flashGreen();
}
function player2Minus() { //playerscore is minus with every click
    Score2--;
    Score2E1.textContent = Score2;
}

function jumpIcon(element) {
    element.classList.remove("jump"); // reset if it's still on
    void element.offsetWidth; // force reflow to restart animation
    element.classList.add("jump");
}


let emoji = document.getElementById("emoji");
newEmoji();

document.addEventListener("keydown", function(event){

    if (event.key === "t") {
        timerFunction();
    }
})
// let abc = document.getElementById("abc")



function newEmoji() {
    if (tempList.length === 0) {
        // Reset or stop when all emojis are used
        for (let i = 0, len = list.length; i < len; i++) {
            tempList[i] =list[i];
            counter = list.length
        }  // ---------------------------------------FIX THIS NOT WORKING ------------------------------------

    }
    emoji.classList.add("hide"); //animation stuff
    
    setTimeout(() => {
        let random = Math.floor(Math.random() * counter);
        emoji.textContent = tempList[random]; //it uses the cloned list to give out an emoji
        tempList.splice(random, 1) //removed the shown emoji from the clone list
        counter-- //removed the numbers of indexs in the cloned array so no index error when repeated
        emoji.classList.remove("hide"); 

    }, 450);
}

// function noRepeat(random) {
//     let tempList = list
//     tempList.splice(index, 1) //removing the item that was randomly chosen from the templist
//     return tempList
// }





// function (){
//     tempList()
//     emoji.classList.add("hide");
//     setTimeout(() => {
//         let random = Math.floor(Math.random() * list.length);
//         emoji.textContent = list[random];
//         emoji.classList.remove("hide");
//     }, 450);
    

// }


document.addEventListener("keydown", function(event){

    if (event.key === "1") {
        player1Score();
        newEmoji();
        jumpIcon(document.getElementById("fa-gamepad"))
    } else if (event.key === "=") {
        player2Score();
        newEmoji();
        jumpIcon(document.getElementById("fa-gamepad2"))
    } else if (event.key === "-") {
        player2Minus();
    } else if (event.key === "2") {
        player1Minus();
    } else if (event.key === "s" || event.key === "S") {
        newEmoji();
    }
    
})

document.addEventListener("keydown", function(event){
    if (event.key === "b") {
        let prompt1 = prompt("Enter your timer");
        timer = prompt1 * 60;
    }
})




document.addEventListener("keydown",function(event){
    if (event.key=== "m" || event.key=== "M") {
        let username1 = prompt("Enter your name: ");
        if (username1) {
            Player1 = username1
            Player1text.textContent = username1

        }
    } else if(event.key === "n" || event.key === "N"){
        let username2 = prompt("Enter your name: ")
        if (username2) {
            Player2 = username2
            Player2text.textContent = username2
        }
    }
})




