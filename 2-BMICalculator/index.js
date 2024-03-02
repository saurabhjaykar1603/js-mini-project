// Select the form element
const form = document.querySelector("form");

// Event listener for form submission
form.addEventListener("submit", function (e) {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the user input for height and weight
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const guide = document.querySelector("#guide");

  // Select the element where the results will be displayed
  const results = document.querySelector("#results");

  // Check if the height input is valid
  if (height === "" || height < 0 || isNaN(height)) {
    // Display an error message if the height is not valid
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    // Display an error message if the weight is not valid
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    // Calculate BMI and display the result if both height and weight are valid
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // Show the result in the results element
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi > 18.6) {
        guide.innerHTML = "Under Weight";
      }
      if (bmi > 18.6 && bmi < 24.9) {
        guide.innerHTML = "Normal Range";
      }
      if (bmi < 24.9) {
        guide.innerHTML = "Overweight ";
      }
  }
  
});
