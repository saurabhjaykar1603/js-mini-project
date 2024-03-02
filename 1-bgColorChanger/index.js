// Select all elements with class "button" and the body element
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

// Iterate over each button
buttons.forEach(function (button) {
  // Log the current button
  console.log(button);

  // Add a click event listener to each button
  button.addEventListener("click", function (e) {
    // Log the event and target element
    console.log(e);
    console.log(e.target);

    // Use a switch statement to check the button's id
    switch (e.target.id) {
      // Cases for different button ids
      case "grey":
      case "white":
      case "blue":
      case "yellow":
      case "purple":
        // Set the body background color based on the button clicked
        body.style.backgroundColor = e.target.id;
        break;

      // Add more cases if needed

      // Default case if the button id doesn't match any of the cases
      default:
        // Handle default case if needed
        break;
    }
  });
});
