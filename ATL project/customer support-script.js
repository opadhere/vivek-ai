document.getElementById('supportForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission (you can replace this with actual AJAX call)
    const responseDiv = document.getElementById('formResponse');
    responseDiv.innerHTML = `<p>Thank you, ${name}. Your message has been received!</p>`;

    // Clear the form
    document.getElementById('supportForm').reset();
});