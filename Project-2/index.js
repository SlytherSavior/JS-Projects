// Get references to control buttons
const pause = document.getElementById('pause');
const play = document.getElementById('play');
const reset = document.getElementById('reset');

// Get references to time display elements
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

// Initialize time values and control variables
let hourVal = 0, minVal = 0, secVal = 0;
let running = false;
let interval = null; // Interval ID for setInterval

// Function to update the time display
function updateWatch() {
  hours.innerHTML = String(hourVal).padStart(2, '0');
  minutes.innerHTML = String(minVal).padStart(2, '0');
  seconds.innerHTML = String(secVal).padStart(2, '0');
}

// Function to start or stop the stopwatch
function startStopWatch() {
  if (!running) {
    // Start the stopwatch
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
    // Stop the stopwatch
    clearInterval(interval);
    running = false;
  }
}

// Function to reset the stopwatch
function resetWatch() {
  clearInterval(interval);
  running = false;
  hourVal = 0;
  minVal = 0;
  secVal = 0;
  updateWatch();
}

// Event listener for the play button
play.addEventListener('click', () => {
  if (!running) {
    startStopWatch();
  } else {
    alert("The stopwatch is already running");
  }
});

// Event listener for the pause button
pause.addEventListener('click', () => {
  if (running) {
    startStopWatch();
  } else {
    alert('The stopwatch is not running!');
  }
});

// Event listener for the reset button
reset.addEventListener('click', resetWatch);

// Initialize the time display
updateWatch();
