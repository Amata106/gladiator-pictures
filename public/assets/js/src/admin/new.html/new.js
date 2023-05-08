const form = document.querySelector('form');

// Handle form submission
form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  
  // Get the form data
  const formData = new FormData(form);
  
  // Create an object to hold the form data
  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }
  
  // Create a Firestore document with the form data
  try {
    await db.collection('items').add(data);
    console.log('Form submitted successfully!');
  } catch (error) {
    console.error('Error submitting form:', error);
  }
});