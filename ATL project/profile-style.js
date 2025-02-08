// Display a greeting message when the app is opened
window.onload = function() {
    const greetingMessage = document.getElementById('greeting-message');
    greetingMessage.textContent = "Welcome to the Profile Edit App!"; // Change the message as needed
    greetingMessage.style.fontSize = "18px"; // Optional: Change font size
    greetingMessage.style.marginBottom = "20px"; // Optional: Add some space below the greeting
    greetingMessage.style.color = "#007bff"; // Optional: Change text color
};

// Function to preview the profile picture
document.getElementById('profile-picture').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('profile-picture-preview');

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block'; // Show the preview
        };
        reader.readAsDataURL(file);
    } else {
        preview.src = '';
        preview.style.display = 'none'; // Hide the preview if no file is selected
    }
});

// Function to handle form submission
document.getElementById('profile-edit-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const username = document.getElementById('username').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const age = document.getElementById('age').value;

    // Display a status message (you can customize this)
    const statusMessage = document.getElementById('status-message');
    statusMessage.textContent = `Profile updated! Username: ${username}, Gender: ${gender}, Age: ${age}`;
});

// Function to go back to the main page (you can customize this)
function goBack() {
    // For demonstration, we'll just log a message
    console.log("Going back to the main page...");
    // You can implement actual navigation logic here, e.g., window.location.href = 'vivek.html';
    window.location.href = 'vivek.html'; // Redirect to the home page
}