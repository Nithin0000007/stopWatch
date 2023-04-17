// Get DOM elements
const timerDisplay = document.getElementById('timer');
const startStopBtn = document.getElementById('start-stop-btn');
const resetBtn = document.getElementById('reset-btn');

// Initialize variables
let startTime, intervalId;

// Function to start or stop the timer
function watchStart() {
  if (startStopBtn.textContent === 'Start') {
    // Start the timer
    startTime = Date.now();
    intervalId = setInterval(updateTimer, 10);
    startStopBtn.textContent = 'Stop';
  } else {
    // Stop the timer
    clearInterval(intervalId);
    startStopBtn.textContent = 'Start';
  }
}

// Function to update the timer display
function updateTimer() {
  const elapsedTime = Date.now() - startTime;
  const minutes = Math.floor(elapsedTime / (1000 * 60));
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  timerDisplay.textContent = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
}

// Function to pad single digit time with zero
function padTime(time) {
  return time.toString().padStart(2, '0');
}

// Function to reset the timer
function resetTimer() {
  clearInterval(intervalId);
  startStopBtn.textContent = 'Start';
  timerDisplay.textContent = '00:00:00';
}

// Attach event listeners
startStopBtn.addEventListener('click', watchStart);
resetBtn.addEventListener('click', resetTimer);
