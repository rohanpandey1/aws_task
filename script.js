// Get the form element and submit button
const form = document.querySelector('form');
const submitButton = document.querySelector('button[type="submit"]');

// Disable the submit button initially
submitButton.disabled = true;

// Add event listeners to the form inputs
form.addEventListener('input', function(event) {
  // Check if all required fields are filled in
  const requiredFields = document.querySelectorAll('input[required], textarea[required]');
  let allFilledIn = true;
  for (let i = 0; i < requiredFields.length; i++) {
    if (!requiredFields[i].value) {
      allFilledIn = false;
      break;
    }
  }

  // If all required fields are filled in, enable the submit button
  if (allFilledIn) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

// Add event listener to the form submission
form.addEventListener('submit', function(event) {
  // Prevent the form from actually submitting
  event.preventDefault();

  // Get the form data and log it to the console
  const formData = new FormData(form);
  console.log('Form submitted with data:', formData);
  
  // TODO: Add code to send the form data to a server
});
