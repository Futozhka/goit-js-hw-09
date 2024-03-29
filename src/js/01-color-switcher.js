
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  let intervalId = null;

  document.getElementById('startButton').addEventListener('click', function() {
    
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');

    
    startButton.disabled = true;
    stopButton.disabled = false;


    intervalId = setInterval(function() {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  });

  document.getElementById('stopButton').addEventListener('click', function() {

    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');

    
    startButton.disabled = false;
    stopButton.disabled = true;

  
    clearInterval(intervalId);
  });