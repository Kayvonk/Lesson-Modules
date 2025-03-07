const sectionEl = document.querySelector('section')

for (let i = 0; i < 9; i++) {
   const box = document.createElement('div')
   box.className = 'box'
   sectionEl.appendChild(box)    
}