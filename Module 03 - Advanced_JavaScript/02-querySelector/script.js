// We use document.getElementById to target an element with the specified id
let button = document.getElementById('btn')
let userInput = document.getElementById('name-input')
// To target an element with a specific class, we can use document.querySelector
// Notice that we use the period before the class name when using querySelector
let result = document.querySelector('.result')


button.addEventListener("click", handleClick)

function handleClick() {
    // The value property can be used to get the current value of an input element
    console.log(userInput.value); 
}

