// Function to generate a random hex color
const randomColor = function () {
    const HEX = "0123456789ABCDEF";
    let color = "#";
  
    for (let i = 0; i < 6; i++) {
      color += HEX[Math.floor(Math.random() * 16)];
    }
  
    return color;
  };
  
  // Log an initial random color
  console.log(randomColor());
  
  // Variable to store the interval ID for color changing
  let intervalId;
  
  // Function to start changing the background color at intervals
  const startChangingColor = function () {
    // Check if the interval is not already running
    if (!intervalId) {
      // Set interval to change background color every 1000 milliseconds (1 second)
      intervalId = setInterval(() => {
        // Set the background color of the body to a random color
        document.body.style.backgroundColor = randomColor();
      }, 1000);
    }
  };
  
  // Function to stop changing the background color
  const stopChangingColor = function () {
    // Clear the interval and set the intervalId to null
    clearInterval(intervalId);
    intervalId = null;
  };
  
  // Event listener for the "Start" button to begin color changing
  document.querySelector("#start").addEventListener("click", startChangingColor);
  
  // Event listener for the "Stop" button to halt color changing
  document.querySelector("#stop").addEventListener("click", stopChangingColor);
  