const startBtn = document.getElementById("startBtn");
const cardEl = document.querySelector(".card");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");

startBtn.addEventListener("click", showMessage);

function showMessage() {
  cardEl.classList.add("animate");
  setTimeout(() => {
    questionEl.style.display = "none";
    answerEl.style.display = "flex";
  }, 500);
}