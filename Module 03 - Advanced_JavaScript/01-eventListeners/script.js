var buttonElement = document.getElementById("btn")
var inputElement = document.getElementById("userInput")

console.log(document.body);

// event listener attached to the buttonElement variable
// listens for a click and then runs the handleButtonClick function

var myButton = document.getElementById("mybutton")

myButton.addEventListener("click", myFunction)

function myFunction () {
    console.log("button clicked");
    
}

buttonElement.addEventListener("click", handleButtonClick)

// the syntax for a function
// 1. use keyword function
// 2. give the function a name
// 3. give the function open and closed paranthesis 
    // -these are called parameters
// 4. give the function open and closed curly brackets
    // -we write code to be executed inside the curly brackets

function handleButtonClick () {
// .value property to get the value of the input
console.log(inputElement.value);

// access the style of the body and change the background color
document.body.style.backgroundColor = inputElement.value
}
