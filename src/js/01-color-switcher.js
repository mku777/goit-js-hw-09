const startButton = document.querySelector("button[data-start]");
const stopButton = document.querySelector("button[data-stop]");

startButton.addEventListener('click', )

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  class ColorSwitcher {
    constructor (swithchBgColor) {
        this.isActive = false;
        this.intervalID = null;
        this.swithchBgColor = swithchBgColor;
    }

   

    onStartChangeBgColor() {
        if (this.isActive) {
            return;
        }
    }
  }