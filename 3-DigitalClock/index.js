// Get the element with the ID "clock"
const clockId = document.getElementById("clock");

// Set up an interval to update the clock every second
setInterval(() => {
  // Create a new Date object to get the current date and time
  let date = new Date();

  // Update the content of the element with the current formatted time
  clockId.innerHTML = date.toLocaleTimeString();
}, 1000);
