const username = localStorage.getItem("username");
const score = parseInt(localStorage.getItem("score")) || 0;
const totalQuestions = 10;

const welcomeUser = document.getElementById("welcomeUser");
const finalScore = document.getElementById("finalScore");
const percentage = document.getElementById("percentage");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restartBtn");
const homeBtn = document.getElementById("homeBtn");
const themeBtn = document.getElementById("themeBtn");

// Display Username
welcomeUser.textContent = `Congratulations, ${username}!`;

// Display Score
finalScore.textContent = `${score} / ${totalQuestions}`;

// Calculate Percentage
const percent = ((score / totalQuestions) * 100).toFixed(0);
percentage.textContent = percent + "%";

// Performance Message
if (percent >= 90) {
    message.textContent = "🏆 Outstanding! Excellent Performance!";
} else if (percent >= 70) {
    message.textContent = "🎉 Great Job! Keep Learning.";
} else if (percent >= 50) {
    message.textContent = "👍 Good Attempt! Practice More.";
} else {
    message.textContent = "📚 Keep Practicing! You Can Do Better.";
}

// Restart Quiz
restartBtn.addEventListener("click", () => {
    localStorage.removeItem("score");
    window.location.href = "quiz.html";
});

// Home Button
homeBtn.addEventListener("click", () => {
    localStorage.removeItem("score");
    window.location.href = "index.html";
});

// Theme Toggle
themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeBtn.innerHTML = "☀️";
        localStorage.setItem("theme", "light");

    } else {

        themeBtn.innerHTML = "🌙";
        localStorage.setItem("theme", "dark");

    }

});

// Load Saved Theme
window.onload = () => {

    if (localStorage.getItem("theme") === "light") {

        document.body.classList.add("light");
        themeBtn.innerHTML = "☀️";

    }

};