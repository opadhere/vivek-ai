// Toggle dark theme
document.querySelector('.theme-switch').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Placeholder for chat interaction
document.querySelector('#send-button').addEventListener('click', () => {
    const userInput = document.querySelector('#user-input').value;
    if (userInput.trim()) { // Check for non-empty input
        // Display user input in chat history
        const userMessage = document.createElement('div');
        userMessage.textContent = `You: ${userInput}`; // Corrected syntax
        document.querySelector('#chat-history').appendChild(userMessage);

        // Placeholder bot response
        const botResponse = document.createElement('div');
        botResponse.textContent = `Vivek.ai: I'll look into that for you!`; // Corrected syntax
        document.querySelector('#chat-history').appendChild(botResponse);

        // Clear the input field
        document.querySelector('#user-input').value = '';
        // Scroll to the bottom
        document.querySelector('#chat-history').scrollTop = document.querySelector('#chat-history').scrollHeight;
    }
});