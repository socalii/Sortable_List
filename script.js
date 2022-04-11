const draggable_list = document.getElementById('draggable-list')
const check = document.getElementById('check')

const richestPeople = [
  'Elon Musk',
  'Jeff Bezos',
  'Bernard Arnault and Family',
  'Bill Gates',
  'Warren Buffet',
  'Larry Page',
  'Larry Ellison',
  'Sergey Brin',
  'Gautam Adani and family',
  'Mukesh Ambani',
]

// Store list items
const listItems = []

let dragStartIndex

createList()

// Create list items to into DOM
function createList() {
  ;[...richestPeople].forEach((person, index) => {
    const listItem = document.createElement('li')

    listItem.setAttribute('data-index', index)

    listItem.innerHTML = `
      <span class="number">${index + 1}</span>
      <div class="draggable" draggable="true">
        <p class="person-name">${person}</p>
        <i class="fas fa-grip-lines"></i>
      </div>
    `

    listItems.push(listItem)

    draggable_list.appendChild(listItem)
  })
}
