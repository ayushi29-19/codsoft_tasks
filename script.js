const userName = document.getElementById("userName");
const question = document.getElementById("question");
const options = document.querySelectorAll(".option");
const nextBtn = document.getElementById("nextBtn");
const timer = document.getElementById("timer");
const progressBar = document.getElementById("progressBar");
const themeBtn = document.getElementById("themeBtn");

userName.innerText = localStorage.getItem("username") || "Guest";

let currentQuestion = 0;
let score = 0;
let selected = false;
let time = 30;
let interval;

// Load first question
showQuestion();

function showQuestion() {

    clearInterval(interval);

    selected = false;

    time = 30;

    timer.innerText = time;

    progressBar.style.width =
        ((currentQuestion + 1) / questions.length) * 100 + "%";

    const q = questions[currentQuestion];

    question.innerText = q.question;

    options.forEach((btn, i) => {

        btn.innerText = q.options[i];

        btn.disabled = false;

        btn.classList.remove("correct", "wrong");

        btn.onclick = () => selectAnswer(i);

    });

    startTimer();

}

function startTimer(){

    interval = setInterval(()=>{

        time--;

        timer.innerText=time;

        if(time<=0){

            clearInterval(interval);

            revealAnswer();

        }

    },1000);

}

function selectAnswer(index){

    if(selected) return;

    selected=true;

    clearInterval(interval);

    let correct=questions[currentQuestion].answer;

    options.forEach(btn=>btn.disabled=true);

    if(index===correct){

        score++;

        options[index].classList.add("correct");

    }

    else{

        options[index].classList.add("wrong");

        options[correct].classList.add("correct");

    }

}

function revealAnswer(){

    let correct=questions[currentQuestion].answer;

    options.forEach(btn=>btn.disabled=true);

    options[correct].classList.add("correct");

}

nextBtn.onclick=()=>{

    currentQuestion++;

    if(currentQuestion<questions.length){

        showQuestion();

    }

    else{

        localStorage.setItem("score",score);

        window.location="result.html";

    }

};

// Theme

themeBtn.onclick=()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        themeBtn.innerHTML="☀️";

        localStorage.setItem("theme","light");

    }

    else{

        themeBtn.innerHTML="🌙";

        localStorage.setItem("theme","dark");

    }

};

if(localStorage.getItem("theme")=="light"){

    document.body.classList.add("light");

    themeBtn.innerHTML="☀️";

}