const x = document.getElementById("button1");
const y = document.getElementById("button2");
const resulte = document.getElementById("resulte");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
let saved = localStorage.getItem("value");
let reset = document.getElementById("reset");
let fixer;
// Load scores from localStorage, or start at 0
let gamewon = parseInt(localStorage.getItem("you")) || 0;
let gamelost = parseInt(localStorage.getItem("comp")) || 0;
let gamedraw = parseInt(localStorage.getItem("draw")) || 0;

// Display initial scores
document.getElementById("youscore").innerText = gamewon;
document.getElementById("compscore").innerText = gamelost;
document.getElementById("drawscore").innerText = gamedraw;

let choice = {
    m9es: document.getElementById("m9es"),
    bir: document.getElementById("bir"),
    wr9a: document.getElementById("wr9a"),
};

// Helper function to update storage + display
function updateScores() {
    localStorage.setItem("you", gamewon);
    localStorage.setItem("comp", gamelost);
    localStorage.setItem("draw", gamedraw);

    document.getElementById("youscore").innerText = gamewon;
    document.getElementById("compscore").innerText = gamelost;
    document.getElementById("drawscore").innerText = gamedraw;
}

// Example for m9es
m9es.addEventListener("click", function () {
    let computer = Math.floor(Math.random() * 3) + 1;

    if (computer === 1) {
        document.getElementById("youchoice").innerText = "M9ES";
        document.getElementById("compchoice").innerText = "M9ES";
        document.getElementById("natija").innerText = "DRAW";
        gamedraw++;
    } else if (computer === 2) {
        document.getElementById("youchoice").innerText = "M9ES";
        document.getElementById("compchoice").innerText = "BIR";
        document.getElementById("natija").innerText = "LOST";
        gamelost++;
    } else {
        document.getElementById("youchoice").innerText = "M9ES";
        document.getElementById("compchoice").innerText = "WR9A";
        document.getElementById("natija").innerText = "WIN";
        gamewon++;
    }

    updateScores(); // save + display new values
});

const user1 = {
    name: "mohamed",
    lastname: "bahammou",
    packs: 3,
    totalbought: 135,
    membership: true,

};
let v = JSON.stringify(user1);
document.getElementById("conversion").innerHTML = v;
JSON.parse(v);
function reseting(variable, me) {
    let a = variable;
    let b = me;

    a.addEventListener("click", function () {
        b.innerHTML = "0";
        fixer = 0
        localStorage.setItem("value", 0);


    })
}

if (saved === null) {
    fixer = 0; // default if nothing is saved
} else {
    fixer = parseInt(saved); // convert string to number
}
const A = "congrats champ";
x.addEventListener("click", function () {
    alert("that's a trap nigga");
})
y.addEventListener("click", function () {
    document.body.innerHTML = "heh youll'never learn";
})
console.log("this line will only apear in the console");
minus.addEventListener("click", function () {
    document.getElementById("resulte").textContent = fixer - 1;
    fixer = fixer - 1;
    localStorage.setItem("value", fixer);
    if (resulte.innerHTML == 5) {
        console.log(user1.name, user1.lastname);
    } else if (resulte.innerHTML == 35) {
        user1.totalbought = 1000;
        console.log(user1);
    }
})
plus.addEventListener("click", function () {
    document.getElementById("resulte").innerHTML = fixer + 1;
    fixer = fixer + 1;
    //alert(A);
    localStorage.setItem("value", fixer);
    if (resulte.innerHTML === "5") {
        console.log(user1.name);

    }

})
document.getElementById("resulte").innerHTML = saved;
reseting(reset, resulte);
document.title = "yuriiiboyka";
/*console.log(document.body);*/
/*console.log(document.body.innerHTML);*/
document.querySelector('button')
    .innerHTML = 'button1';
console.log(document.querySelector('button'));
document.querySelector('.div1');
let querry1 = document.querySelector('.div1');
console.log(querry1);
let sub = document.getElementById('subbutton');
sub.addEventListener("click", function () {
    if (sub.innerHTML === "SUBSCRIBE") {

        sub.innerHTML = "SUBSCRIBED";
    }
    else if (sub.innerHTML === "SUBSCRIBED") {

        sub.innerHTML = "SUBSCRIBE";
    }
})
let style = document.getElementById("style");
style.addEventListener("click", function () {
    subbutton.style.borderStyle = "solid";
    subbutton.style.borderRadius = "10px";
    subbutton.style.backgroundColor = "red";
    subbutton.style.color = "white";
    subbutton.style.fontSize = "20px";
})

/*let add = document.getElementById("add") ;*/
/*
let add = document.querySelector(".add");

function adding(but) {
    let myarray = [];
    but.addEventListener("click", function () {
        let a = document.getElementById("todo").value;
        myarray.push(a);
        let c = '';
        for (let element of myarray) {
            c += '<br>' + element;
        }
        document.querySelector("#display").innerHTML = c;
        document.querySelector('#todo').value = '';
    })
}
adding(add);
*/
let addbut = document.querySelector("#addbut") ;
let tab1 = [] , tab2 = [] ;
addbut.addEventListener("click" , function(){
    let a = document.querySelector("#textzone1").value;
    let b = document.querySelector("#date").value;
    tab1.push(a) ;
    tab2.push(b) ;
    let c = '' ;
    let d = "" ;
    for (let element1 of tab1) {
        c += element1 + "<br>";

    }  
    for (let element2 of tab2) {
        d += element2 + "<br>";
    }
    document.getElementById("div2").innerHTML = "<p>" + c + "</p><p>" + d + "</p>" 
    document.querySelector("#textzone1").value = '' ;
    document.querySelector("#date").value = '';
    
})
