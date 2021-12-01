const mainContainer = document.getElementById('main-container');


// declared here so the values can be accessed below
mainContainer.style.height = '500px';
mainContainer.style.width = '500px';

for (let i = 1; i <= 16; i++) {
  let newDiv = document.createElement('div');

  newDiv.style.width = `${500 / 4}px`;
  newDiv.style.height = `${500 / 4}px`;

  mainContainer.appendChild(newDiv);
}

mainContainer.childNodes.forEach(node => {
  node.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = '#333';
  })
})










