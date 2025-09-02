/* 1scissoe
2rock
3paper*/


let paper = document.querySelector("#icon1");
let scissor = document.querySelector("#icon2");
let rock = document.querySelector("#icon3");
let start = document.querySelector("#startbut");
let player;
let draw = Number(localStorage.getItem("DRAW")) || 0;
let win = Number(localStorage.getItem("WIN")) || 0;
let lost = Number(localStorage.getItem("LOST")) || 0;
let draw2 = Number(localStorage.getItem("DRAW2")) || 0;
let win2 = Number(localStorage.getItem("WIN2")) || 0;
let lost2 = Number(localStorage.getItem("LOST2")) || 0;


document.getElementById("draws").innerText = draw;
document.getElementById("wins").innerText = win;
document.getElementById("losts").innerText = lost;
document.getElementById("draws2").innerText = draw2;
document.getElementById("wins2").innerText = win2;
document.getElementById("losts2").innerText = lost2;


function RPS(player) {
    let choices = ['scissor', 'paper', 'rock'];
    let randomiser = Math.floor(Math.random() * 3);
    let computer1 = choices[randomiser];
    if (computer1 === player) {
        draw++;
        localStorage.setItem("DRAW", draw);
        document.getElementById("draws").innerText = draw
    } else if (computer1 === "scissor" && player === 'rock' || computer1 === 'rock' && player === 'paper' || computer1 === 'paper' && player === 'scissor') {
        win++;
        localStorage.setItem("WIN", win);
        document.getElementById("wins").innerText = win

    } else {
        lost++
        localStorage.setItem("LOST", lost);
        document.getElementById("losts").innerText = lost
    }
}

paper.addEventListener("click", function () {
    player = "paper";
    RPS(player);
})
scissor.addEventListener("click", function () {
    player = "scissor";
    RPS(player);
})
rock.addEventListener("click", function () {
    player = "rock";
    RPS(player);
})

function reseting() {
    localStorage.clear();
    draw = 0;
    win = 0;
    lost = 0;
    draw2 = 0;
    win2 = 0;
    lost2 = 0;
    document.getElementById("draws").innerText = draw;
    document.getElementById("wins").innerText = win;
    document.getElementById("losts").innerText = lost;
    document.getElementById("draws2").innerText = draw2;
    document.getElementById("wins2").innerText = win2;
    document.getElementById("losts2").innerText = lost2;
}
let reset = document.getElementById("reset");
reset.addEventListener("click", reseting);

let auto = document.getElementById("autoplay");
function autoplayRPS() {
    let choices = ['scissor', 'paper', 'rock'];
    let computer1 = choices[Math.floor(Math.random() * 3)];
    let computer2 = choices[Math.floor(Math.random() * 3)];
    if (computer1 === computer2) {
        draw++;
        draw2++;
        localStorage.setItem("DRAW", draw);
        localStorage.setItem("DRAW2", draw2);

    }
    else if (
        (computer1 === 'scissor' && computer2 === 'paper') ||
        (computer1 === 'rock' && computer2 === 'scissor') ||
        (computer1 === 'paper' && computer2 === 'rock')
    ) {
        win++;
        lost2++;
        localStorage.setItem("WIN", win);
        localStorage.setItem("LOSE2", lost2);

    }
    else {
        lost++;
        win2++;
        localStorage.setItem("LOSE", lost);
        localStorage.setItem("WIN", win2);

    }
    document.getElementById("draws").innerText = draw;
    document.getElementById("wins").innerText = win;
    document.getElementById("losts").innerText = lost;

    document.getElementById("draws2").innerText = draw2;
    document.getElementById("wins2").innerText = win2;
    document.getElementById("losts2").innerText = lost2;

}
let autoInterval;

auto.addEventListener("click", function () {
    if (auto.innerText === "AUTOPLAY") {

        table2.style.opacity = "1";
        auto.innerText = "REMOVE AUTOPLAY";

        autoInterval = setInterval(() => {
            autoplayRPS();
        }, 1500);

    } else if (auto.innerText === "REMOVE AUTOPLAY") {
        table2.style.opacity = "0";
        auto.innerText = "AUTOPLAY";

        clearInterval(autoInterval);
    }
});
