let button = document.getElementById('btn')
let userInput = document.getElementById('name-input')
let result = document.querySelector('.result')


button.addEventListener("click", handleClick)

function handleClick() {
    console.log(userInput.value);
    // the textContent property can be used to change the text within an element on the page
    result.textContent = userInput.value    
}

