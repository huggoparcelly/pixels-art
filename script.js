function createPixel() {
  const pix = document.createElement('div');
  pix.className = 'pixel';
  return pix;
}

function createLine() {
  const lines = document.createElement('div');
  lines.className = 'line';
  return lines;
}

let size = 5;

function createAllPixel(newSize) {
  const pixelBox = document.querySelector('#pixel-board'); // captura o quadro completo
  for (let l = 0; l < newSize; l += 1) {
    pixelBox.appendChild(createLine());
    for (let pixel = 0; pixel < newSize; pixel += 1) {
      const getLine = document.querySelectorAll('.line');
      getLine[l].appendChild(createPixel());
    }
  }
}

function changeColorPixel(event) {
  const getColorSelected = document.querySelector('.selected'); // o elemento que contem selected
  event.target.style.backgroundColor = getColorSelected.id; // muda a cor para o pixel clicado
}

function clickPixel() {
  const getPixel = document.querySelectorAll('.pixel'); // captura todos os pixels
  for (let i = 0; i < getPixel.length; i += 1) {
    getPixel[i].addEventListener('click', changeColorPixel);
  }
}

function boardSize() {
  // capturar a inforção do input e transformar em int
  const getInput = document.querySelector('#board-size');
  const sizeInput = parseInt(getInput.value, 10);
  // verificação de numero positivo e entre 5 e 50;
  document.getElementById('pixel-board').innerHTML = ''; // apaga todos os pixels criados
  if (sizeInput < 0) {
    alert('Digitar um valor positivo');
  } else if (sizeInput < 5) { // se o valor for menor que 5, permanecem 5 pixels
    createAllPixel(5);
  } else if (sizeInput > 50) { // se o valor for maior que 50, permanecem 50 pixels
    createAllPixel(50);
  } else if (getInput.value === '') { 
    alert('Board inválido!');
    createAllPixel(5);
  } else {
    createAllPixel(sizeInput); // cria os pixels pelo tamanho do input
  }
  clickPixel();
}

function btnSize() {
  // captura o botão
  const getBnt = document.querySelector('#generate-board');
  getBnt.addEventListener('click', boardSize);
}

function selectedBlack() {
  const getBlack = document.getElementById('black');
  getBlack.classList.add('selected'); // adiciona o selected na classe da cor preta
}

function changeClass(event) {
  const getClassSelected = document.querySelector('.selected'); // captura o elemento que tem a class selected
  getClassSelected.classList.remove('selected'); // remove a class
  event.target.classList.add('selected'); // adiciona a class no elemento que eu clicar, referenciado na função selctedColor (getColor[color])
}

function selectedColor() {
  const getColor = document.querySelectorAll('.color'); // seleciona todos os elementos com a class color
  for (let color = 0; color < getColor.length; color += 1) { // interação para buscar cada elemento com a class color
    getColor[color].addEventListener('click', changeClass); // evento de click, que altera as classes, chamando a função changeClass.
  }
}

function removeStyle() {
  // capturar o bg dos pixels
  const getPixel = document.querySelectorAll('.pixel');
  // Interação para selecionar cada pixel
  for (let i = 0; i < getPixel.length; i += 1) {
    getPixel[i].removeAttribute('style');
  }
}

function clearBtn() {
  // capturar o botão
  const btnClear = document.querySelector('#clear-board');
  // evento de clique para remover o estilo de bg
  btnClear.addEventListener('click', removeStyle);
}

window.onload = function () {
  createAllPixel(size);
  selectedBlack();
  selectedColor();
  clickPixel();
  clearBtn();
  btnSize();
};
