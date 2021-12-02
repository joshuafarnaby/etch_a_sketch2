const mainContainer = document.getElementById('main-container');
const resetBtn = document.getElementById('reset-btn');
const rainbowBtn = document.getElementById('rainbow-btn');
const gridSlider = document.getElementById('grid-size')

let setColor = '#333';
let rainbow = false;

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

gridSlider.addEventListener('mousedown', () => {
  console.log('mousedown');
})

function displayChange(newValue) {
  document.getElementById('output').textContent = `grid size: ${newValue} x ${newValue}`;
}











