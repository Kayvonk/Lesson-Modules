var buttonElement = document.getElementById("btn")
var inputElement = document.getElementById("userInput")

console.log(document.body);

// event listener attached to the buttonElement variable
// listens for a click and then runs the handleButtonClick function

buttonElement.addEventListener("click", myFunction)

function myFunction () {
    console.log("button clicked");

    console.log(inputElement.value);
    
}
