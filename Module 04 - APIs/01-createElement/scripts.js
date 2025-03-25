const sectionEl = document.querySelector('section')

for (let i = 0; i < 10; i++) {
   // create the element
   const box = document.createElement('div')
   // provide any attributes or styling
   box.className = 'box'
   // append to the page
   sectionEl.appendChild(box)    
}
