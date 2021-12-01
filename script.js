const mainContainer = document.getElementById('main-container');
const resetBtn = document.getElementById('reset-btn');
const rainbowBtn = document.getElementById('rainbow-btn');

let color = '#333';

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
    node.addEventListener('mouseover', changeBackgroundColor)
  })
}

function changeBackgroundColor(e) {
  e.target.style.backgroundColor = color;
}

function resetGrid() {
  mainContainer.childNodes.forEach(node => {
    node.style.backgroundColor = '#fefefe'
  })
}

resetBtn.addEventListener('click', resetGrid)

rainbowBtn.addEventListener('click', () => {});










