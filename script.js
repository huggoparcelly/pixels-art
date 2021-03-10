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

function selectedColor() {
  const getClassColor = document.querySelectorAll('.color');
  for (let i = 0; i < getClassColor.length; i += 1) { // interação para clicar em todos os elementos da palleta
    getClassColor[i].addEventListener('click', function () {
      this.classList.add('selected');
    });
  }
}

window.onload = function () {
  createAllPixel();
  selectedBlack();
  selectedColor();
};
