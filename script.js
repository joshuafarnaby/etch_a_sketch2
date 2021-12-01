const mainContainer = document.getElementById('main-container');
const resetBtn = document.getElementById('reset-button');


// declared here so the values can be accessed below
mainContainer.style.height = '500px';
mainContainer.style.width = '500px';

createGrid();
addEventListenersToGrid();

function createGrid() {
  for (let i = 1; i <= 16; i++) {
  let newDiv = document.createElement('div');
  
  newDiv.style.width = `${500 / 4}px`;
  newDiv.style.height = `${500 / 4}px`;

  mainContainer.appendChild(newDiv);
  }
}

function addEventListenersToGrid() {
  mainContainer.childNodes.forEach(node => {
    node.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = '#333';
    })
  })
}

function removeChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

resetBtn.addEventListener('click', () => {
  removeChildren(mainContainer)
  createGrid()
  addEventListenersToGrid()
})










