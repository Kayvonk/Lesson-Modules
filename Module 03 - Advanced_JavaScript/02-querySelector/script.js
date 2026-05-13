let btnOne = document.getElementById('btn-one')
let btnAll = document.getElementById('btn-all')
let result = document.querySelector('.result')

btnOne.addEventListener('click', handleOne)
btnAll.addEventListener('click', handleAll)

function handleOne() {
    // querySelector returns the first matching element
    let item = document.querySelector('.list-item')
    result.textContent = item.textContent
}

function handleAll() {
    // querySelectorAll returns all matching elements as a NodeList
    let items = document.querySelectorAll('.list-item')
    result.textContent = items.length + ' items found'
}
