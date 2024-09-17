
const timerElement = document.querySelector('.timer');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');


let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let intervalId;


function updateTimer() {
  timerElement.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds, 3)}`;
}

function startTimer() {
  intervalId = setInterval(() => {
    milliseconds += 10;

    if (milliseconds >= 1000) {
      seconds += Math.floor(milliseconds / 1000);
      milliseconds %= 1000;
    }

    if (seconds >= 60) {
      minutes += Math.floor(seconds / 60);
      seconds %= 60;
    }

    if (minutes >= 60) {
      hours += Math.floor(minutes / 60);
      minutes %= 60;
    }

    updateTimer();
  }, 10);
}


function pauseTimer() {
  clearInterval(intervalId);
}


function resetTimer() {
  clearInterval(intervalId);
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateTimer();
}


function pad(number, length = 2) {
  return String(number).padStart(length, '0');
}


startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);


updateTimer();
