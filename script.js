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

function createAllPixel() {
  const pixelBox = document.querySelector('#pixel-board'); // captura o quadro completo
  for (let l = 0; l < 5; l += 1) {
    pixelBox.appendChild(createLine());
    for (let pixel = 0; pixel < 5; pixel += 1) {
      const getLine = document.querySelectorAll('.line');
      getLine[l].appendChild(createPixel());
    }
  }
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

window.onload = function () {
  createAllPixel();
  selectedBlack();
  selectedColor();
};
