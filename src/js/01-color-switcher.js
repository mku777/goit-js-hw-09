const refs = {
  startButton: document.querySelector('button[data-start]'),
  stopButton: document.querySelector('button[data-stop]'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startButton.addEventListener('click');
