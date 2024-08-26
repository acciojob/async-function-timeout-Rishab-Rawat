//your JS code here. If required.
// Function to create a delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Async function to handle the form submission
async function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the input values
  const text = document.getElementById('text').value;
  const delayMs = parseInt(document.getElementById('delay').value);

  // Clear the output div
  document.getElementById('output').textContent = '';

  try {
    // Wait for the specified delay
    await delay(delayMs);

    // Display the message
    document.getElementById('output').textContent = text;
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Add event listener to the button
document.getElementById('btn').addEventListener('click', handleSubmit);