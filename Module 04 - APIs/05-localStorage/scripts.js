const formEl = document.querySelector("form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); 

  const formValues = {
    name: document.getElementById("name").value,
    color: document.getElementById("color").value,
    hobbies: [
      ...document.querySelectorAll("input[name='hobbies']:checked"),
    ].map((input) => input.value),
    newsletter: document.querySelector("input[name='newsletter']:checked")
      ?.value,
  };

  console.log(formValues);
  saveToLocalStorage(formValues);
}

function readFromLocalStorage() {
  const localStorageData = localStorage.getItem("users");
  if (localStorageData) {
    return JSON.parse(localStorageData);
  } else {
    return [];
  }
}

function saveToLocalStorage(formData) {
  let storagedUsers = readFromLocalStorage();
  storagedUsers.push(formData);
  localStorage.setItem("users", JSON.stringify(storagedUsers));
}

function toggleSlider() {
  const sliderContainer = document.querySelector(".slider-container");
  sliderContainer.classList.toggle("active");
  const newState = sliderContainer.classList.contains("active") ? "dark" : "light";
  localStorage.setItem("theme", newState);
  // TODO: Complete the following if-else statement so that the page styling changes depending on the current theme
  // if(newState === "dark") {

  // }
  // else{

  // }
}
