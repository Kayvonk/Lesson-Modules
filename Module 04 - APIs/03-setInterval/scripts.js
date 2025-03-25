const startBtn = document.getElementById("startBtn");
const cardEl = document.querySelector(".card");

startBtn.addEventListener("click", startCountdown);

function startCountdown() {
  let count = cardEl.textContent;
  if (count === "") {
    count = 3;
    cardEl.textContent = count;
  }
  let timer = setInterval(() => {
    count--;
    cardEl.textContent = count;
  }, 1000);
}
