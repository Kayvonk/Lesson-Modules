const formEl = document.querySelector("form");
const allHobbies = document.querySelectorAll("input[name='hobbies']");

console.log(allHobbies);

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault(); // Prevents form from refreshing the page

  //   Method 1: Gets the form data using the FormData object
  // const formData = new FormData(formEl);
  // const formValues = {};
  // formValues.name = formData.get("name");
  // formValues.color = formData.get("color");
  // formValues.hobbies = formData.getAll("hobbies");
  // formValues.newsletter = formData.get("newsletter");

  // Method 2: Gets the form data using getElementById, querySelector, and querySelectorAll
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
}
