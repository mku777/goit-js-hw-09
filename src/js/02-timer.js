import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'flatpickr/dist/flatpickr.min.css';

let selectedTime = null;
const inputDate = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button[data-start]');
const daysOut = document.querySelector('span[data-days]');
const hoursOut = document.querySelector('span[data-hours]');
const minutesOut = document.querySelector('span[data-minutes]');
const secondsOut = document.querySelector('span[data-seconds]');

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addZero(value) {
  return String(value).padStart(2, '0');
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notify.failure('Please choose a date in the future');
      selectedDates[0] = new Date();
    } else {
      startButton.disabled = false;
      selectedTime = selectedDates[0];
    }
  },
};

class Timer {
  constructor() {
    startButton.disabled = true;
    this.timerID = null;
    this.isActive = false;
  }

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.timerID = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = selectedTime - currentTime;
      const componentsTimer = convertMs(deltaTime);
      this.updateComponents(componentsTimer);
      if (deltaTime <= 0) {
        this.stopTimer();
      }
    }, 1000);
  }
  updateComponents({ days, hours, minutes, seconds }) {
    daysOut.textContent = days;
    hoursOut.textContent = hours;
    minutesOut.textContent = minutes;
    secondsOut.textContent = seconds;
  }

  stop() {
    clearInterval(this.timerID);
  }
}

const timer = new Timer();
flatpickr(inputDate, options);
startButton.addEventListener('click', () => timer.start());
