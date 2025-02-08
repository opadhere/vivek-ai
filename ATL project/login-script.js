// login-script.js



// Wait for the DOM to fully load

document.addEventListener(
 'DOMContentLoaded',
 function() {

  // Add event listener for form submission

  const form = document.querySelector(
   'form');

  if (
   form) { // Check if the form exists

   form.addEventListener('submit',
    function(event) {

     const username = document
      .getElementById('username')
      .value;

     const email = document
      .getElementById('email').value;

     const gender = document
      .getElementById('gender')
      .value;

     const dob = document
      .getElementById('dob').value;



     // Simple validation

     if (!username || !email || !
      gender || !dob) {

      alert(
       'Please fill out all fields.'
       );

      event
     .preventDefault(); // Prevent form submission

     }

    });

  } else {

   console.error('Form not found!');

  }

 });