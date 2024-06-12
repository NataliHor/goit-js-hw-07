function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
// createButton.addEventListener('click', createBoxes);
// destroyButton.addEventListener('click', destroyBoxes);

// function createBoxes() {
//   const amount = parseInt(input.value);
//   if (amount < 1 || amount > 100) {
//     return; 
//   }
//   destroyBoxes()
//   let size = 30;
//   for (let i = 0; i < amount; i++) {
//     const box = document.createElement('div');
//     const color = getRandomHexColor();
//     box.style.width = `${size}px`;
//     box.style.height = `${size}px`;
//     box.style.backgroundColor = color;
//     box.style.marginBottom = '10px';
//     boxes.appendChild(box);
//     size += 10;
//     }
//   input.value = '';
// }
function createBoxes(amount) { 
  boxes.innerHTML = '';
  const boxesArr = [];
    let size = 30;
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesArr.push(box);
      size += 10;
    }
  boxes.append(...boxesArr);
  }

createButton.addEventListener('click', () => {
    const amount = parseInt(input.value);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = '';
    } else {
      return;
    }
  });


// function destroyBoxes() {
//   while (boxes.firstChild) {
//     boxes.removeChild(boxes.firstChild);
//   }
// }

 destroyButton.addEventListener('click', () => {
    boxes.innerHTML = '';
  });

