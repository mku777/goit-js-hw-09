const refs = {
startButton: document.querySelector("button[data-start]"),
stopButton: document.querySelector("button[data-stop]"),}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

startButton.addEventListener('click', )


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