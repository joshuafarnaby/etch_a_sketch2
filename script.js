const mainContainer = document.getElementById('main-container');
const resetBtn = document.getElementById('reset-btn');
const rainbowBtn = document.getElementById('rainbow-btn');
const gridSlider = document.getElementById('grid-size')

let setColor = '#333';
let rainbow = false;

// declared here so the values can be accessed below
mainContainer.style.height = '500px';
mainContainer.style.width = '500px';

createGrid(4);
addEventListenersToGrid();

function createGrid(value) {
  // if (mainContainer.childNodes) return;

  for (let i = 1; i <= (value ** 2); i++) {
  let newDiv = document.createElement('div');
  
  newDiv.style.width = `${500 / value}px`;
  newDiv.style.height = `${500 / value}px`;

  mainContainer.appendChild(newDiv);
  }
}

function addEventListenersToGrid() {
  mainContainer.childNodes.forEach(node => {
    node.addEventListener('mouseover', (e) => {
      if (rainbow) {
        let randomRGB = generateRandomRGB()
        changeBackgroundColor(e.target, randomRGB)
      } else {
        changeBackgroundColor(e.target, setColor)
      }
    })
  })
}

function changeBackgroundColor(target, color) {
  target.style.backgroundColor = color;
}

function resetGrid() {
  mainContainer.childNodes.forEach(node => {
    node.style.backgroundColor = '#fefefe'
  })
}

function generateRandomRGB() {
  let o = Math.round, r = Math.random, s = 255;
  
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function toggleRainbow() {
  rainbow = !rainbow
}

resetBtn.addEventListener('click', resetGrid)
rainbowBtn.addEventListener('click', toggleRainbow);

let currentValue = 0;

gridSlider.addEventListener('mousedown', (e) => {
  currentValue = e.target.value
})

gridSlider.addEventListener('mouseup', (e) => {
  if (currentValue == e.target.value) return;
  
  createGrid(e.target.value);
  addEventListenersToGrid();
})

function updateGrid(newValue) {
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild)
  }

  document.getElementById('output').textContent = `grid size: ${newValue} x ${newValue}`;
}