const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

function init() {
  resizeCanvas();
}

function resizeCanvas() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}

window.onload = init;
