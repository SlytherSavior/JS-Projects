const pause = document.getElementById('pause');
const play = document.getElementById('play');
const reset = document.getElementById('reset');

const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

let hourVal = 0, minVal = 0, secVal = 0;
let running = false;
let interval = null; // Declare interval in the global scope

const initialVal = "00";

// Function to update the watch
function updateWatch() {
  hours.innerHTML = String(hourVal).padStart(2, '0');
  minutes.innerHTML = String(minVal).padStart(2, '0');
  seconds.innerHTML = String(secVal).padStart(2, '0');
}

// Function to change the value of hours, minutes, and seconds
function startStopWatch() {
  if (!running) {
    interval = setInterval(() => {
      secVal++;
      if (secVal === 60) {
        secVal = 0;
        minVal++;
        if (minVal === 60) {
          minVal = 0;
          hourVal++;
        }
      }
      updateWatch();
    }, 1000);
    running = true;
  } else {
    clearInterval(interval);
    running = false;
  }
}

// Function to reset the watch
function resetWatch() {
  clearInterval(interval);
  running = false;
  hourVal = 0;
  minVal = 0;
  secVal = 0;
  updateWatch();
}

// Event listeners
play.addEventListener('click', () => {
  if(!running){
  startStopWatch();
  }else { 
    alert("The stopwatch is already running");
  }
});

pause.addEventListener('click', () => {
  if (running) {
    startStopWatch();
  } else {
    alert('The stopwatch is not running!');
  }
});

reset.addEventListener('click', resetWatch);

// Initialize display
updateWatch();
