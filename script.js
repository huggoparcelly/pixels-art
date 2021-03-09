window.onload = function () {
  let pixelBox = document.querySelector('#pixel-board'); //captura o quadro completo

  function createPixel() {
    let pix = document.createElement('div');
    pix.className = 'pixel';
    return pix;
  }

  function createLine() {
    let lines = document.createElement('div');
    lines.className = 'line';
    return lines;
  }

  for (l = 0; l < 5; l += 1) {
    pixelBox.appendChild(createLine());
    for (pixel = 0; pixel < 5; pixel += 1) {
      let getLine = document.querySelectorAll('.line');
      getLine[l].appendChild(createPixel());
    }
  }

  
}
  