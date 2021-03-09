window.onload = function () {
  const pixelBox = document.querySelector('#pixel-board'); // captura o quadro completo
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
  for (let l = 0; l < 5; l += 1) {
    pixelBox.appendChild(createLine());
    for (let pixel = 0; pixel < 5; pixel += 1) {
      const getLine = document.querySelectorAll('.line');
      getLine[l].appendChild(createPixel());
    }
  }
};
