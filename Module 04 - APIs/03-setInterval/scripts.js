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
    if (count > 0) {
      count--;
      cardEl.textContent = count;
    } else {
      clearInterval(timer);
    }
  }, 1000);
}
